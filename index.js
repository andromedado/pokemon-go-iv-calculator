
const _ = require('underscore');
const pokedex = require('./support/pokedex');
const levelUpData = require('./support/levelUpData');
const grader = require('./support/grader');

function testHP(hp, iv, levelData, pokemon) {
	return hp == parseInt(Math.floor((pokemon.stamina + iv) * levelData.cpScalar), 10);
}

function testCP(cp, attackIV, defenseIV, staminaIV, levelData, pokemon) {
	const attackFactor = pokemon.attack + attackIV;
	const defenseFactor = Math.pow(pokemon.defense + defenseIV, 0.5)
	const staminaFactor = Math.pow((pokemon.stamina + staminaIV), 0.5);
	const scalarFactor = Math.pow(levelData.cpScalar, 2);
	return cp == parseInt(attackFactor * defenseFactor * staminaFactor * scalarFactor / 10, 10);
}

function determinePerfection(ivs) {
	const perfection = (ivs.attackIV + ivs.defenseIV + ivs.staminaIV) / 45
	return Math.floor(perfection * 100) / 100;
}

/**
 * Evaluate a given pokemon
 * @param {string|number} Pokemon Query (e.g. "2" or "Ivysaur")
 * @param {number} CP
 * @param {number} HP
 * @param {number} dustCost Dust cost of upgrading pokemon
 * @param {bool} neverUpgraded If you've never powered it up, fewer potential levels
 */
function evaluate (pokemonQuery, cp, hp, dustCost, neverUpgraded) {
	const pokemon = pokedex.pokemonByName(pokemonQuery) || pokedex.pokemonById(pokemonQuery);
	if (!pokemon) {
		return {error : `Could not find pokemon: ${pokemonQuery}`};
	}
	var potentialIVs = determinePossibleIVs(pokemon, cp, hp, dustCost, neverUpgraded);

	_.each(potentialIVs, function (possibility) {
		possibility.perfection = determinePerfection(possibility);
	});

	potentialIVs.sort(function (a, b) {
		if (a.perfection == b.perfection) {
			return 0;
		}
		return a.perfection > b.perfection ? 1 : -1;
	})

	var pokeSnapshot = {
		grade : grader.grade(_.map(potentialIVs, determinePerfection)),
		ivs : potentialIVs
	};

	return pokeSnapshot;
}

function determinePossibleIVs (pokemon, cp, hp, dust, neverUpgraded) {
	var potentialLevels = levelUpData.levelsByDust(dust);
	potentialLevels.sort(function (a, b) {
		return a.level > b.level ? 1 : -1;//no dupes
	});
	if (neverUpgraded) {
		potentialLevels = _.filter(potentialLevels, function (data) {
			return data.level % 2 === 0;
		});
	}

	var staminaIV, attackIV, defenseIV;
	var potentialHPIVs = [];

	var levelIndex;
	var levelData;
	for (levelIndex = 0; levelIndex < potentialLevels.length; levelIndex++) {
		levelData = potentialLevels[levelIndex];

		for (staminaIV = 0; staminaIV <= 15; staminaIV++) {
			if (testHP(hp, staminaIV, levelData, pokemon)) {
				potentialHPIVs.push({
					levelData,
					iv : staminaIV
				});
			}
		}

	}

	var hpIVIndex;
	var potentialIVs = [];
	for (hpIVIndex = 0; hpIVIndex < potentialHPIVs.length; hpIVIndex++) {
		staminaIV = potentialHPIVs[hpIVIndex].iv;
		levelData = potentialHPIVs[hpIVIndex].levelData;
		for (attackIV = 0; attackIV <= 15; attackIV++) {
			for (defenseIV = 0; defenseIV <= 15; defenseIV++) {
				if (testCP(cp, attackIV, defenseIV, staminaIV, levelData, pokemon)) {
					potentialIVs.push({
						attackIV, defenseIV, staminaIV,
						level : levelData.level
					})
				}
			}
		}
	}

	return potentialIVs;
}

/**
 * Determine possible IVs for a given pokemon
 * @param {string|number} Pokemon Query (e.g. "2" or "Ivysaur")
 * @param {number} CP
 * @param {number} HP
 * @param {number} dustCost Dust cost of upgrading pokemon
 * @param {bool} neverUpgraded If you've never powered it up, fewer potential levels
 */
function possibleIVs (pokemonQuery, cp, hp, dust, neverUpgraded) {
	const pokemon = pokedex.pokemonByName(pokemonQuery) || pokedex.pokemonById(pokemonQuery);
	if (!pokemon) {
		return {error:`Could not find pokemon: ${pokemonQuery}`};
	}
	const ivs = determinePossibleIVs(pokemon, cp, hp, dustCost, neverUpgraded);
	if (!ivs.length) {
		return {error: `Could not find any IVs matching given information`};
	}
	return {ivs};
}

module.exports = {
	evaluate,
	possibleIVs
};


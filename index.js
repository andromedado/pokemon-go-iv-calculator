
const _ = require('underscore');
const pokedex = require('./support/pokedex');
const levelUpData = require('./support/levelUpData');

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

const letterGrades = [
	{ letter : 'A', min : 0.9, mid : 0.93, plus : 0.95 },
	{ letter : 'B', min : 0.8, mid : 0.83, plus : 0.87 },
	{ letter : 'C', min : 0.7, mid : 0.73, plus : 0.77 },
	{ letter : 'D', min : 0.6, mid : 0.62, plus : 0.67 },
	{ letter : 'F', min : 0 },
];

function grade(value) {
	var letter;
	var modifier;

	var idx;
	var grade;
	for (idx = 0; idx < letterGrades.length; idx++) {
		grade = letterGrades[idx];
		if (value >= grade.min) {
			letter = grade.letter;
			if (value < grade.mid) {
				modifier = '-';
			} else if (value >= grade.plus) {
				modifier = '+';
			}
			break;
		}
	}

	const finalGrade = {
		letter: letter,
		preciseLetter : letter + (modifier || '')
	};

	return finalGrade;
}

function determineGrade(possibleIVs) {
	if (!possibleIVs.length) {
		return 'Unknown';
	}
	var perfections = _.map(possibleIVs, determinePerfection);

	perfections.sort();
	const minGrade = grade(perfections[0]);
	const maxGrade = grade(perfections[perfections.length - 1]);
	const averagePerfection = _.reduce(perfections, function (memo, val) {return memo + val;}, 0) / perfections.length;
	const averageGrade = grade(averagePerfection);

	if (perfections.length === 1 || minGrade.preciseLetter === maxGrade.preciseLetter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `${minGrade.preciseLetter} (${Math.floor(averagePerfection * 1000) / 10}%)`
		};
	}

	if (averageGrade.letter === minGrade.letter && averageGrade.letter === maxGrade.letter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `Solid ${averageGrade.preciseLetter} (${Math.floor(averagePerfection * 1000) / 10}%)`
		};
	}

	return {
		minGrade, maxGrade, averageGrade,
		explanation : `Between ${maxGrade.preciseLetter} - ${minGrade.preciseLetter}`
	}
}

function evaluate (pokemonQuery, cp, hp, dustCost) {
	const pokemon = pokedex.pokemonByName(pokemonQuery) || pokedex.pokemonById(pokemonQuery);
	if (!pokemon) {
		return [void 0, `Could not find pokemon: ${pokemonQuery}`];
	}
	var potentialIVs = determinePossibleIVs(pokemon, cp, hp, dustCost);

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
		grade : determineGrade(potentialIVs),
		potentialIVs
	};

	return pokeSnapshot;
}

function determinePossibleIVs (pokemon, cp, hp, dust) {
	var potentialLevels = levelUpData.levelsByDust(dust);
	potentialLevels.sort(function (a, b) {
		return a.level > b.level ? 1 : -1;//no dupes
	});

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


module.exports = {
	evaluate : evaluate,
	determinePossibleIVs : determinePossibleIVs
};


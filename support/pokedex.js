'use strict';

var _ = require('underscore');

var pokemon = [
 {
  "id": 1,
  "name": "Bulbasaur",
  "stamina": 90,
  "attack": 126,
  "defense": 126
 },
 {
  "id": 2,
  "name": "Ivysaur",
  "stamina": 120,
  "attack": 156,
  "defense": 158
 },
 {
  "id": 3,
  "name": "Venusaur",
  "stamina": 160,
  "attack": 198,
  "defense": 200
 },
 {
  "id": 4,
  "name": "Charmander",
  "stamina": 78,
  "attack": 128,
  "defense": 108
 },
 {
  "id": 5,
  "name": "Charmeleon",
  "stamina": 116,
  "attack": 160,
  "defense": 140
 },
 {
  "id": 6,
  "name": "Charizard",
  "stamina": 156,
  "attack": 212,
  "defense": 182
 },
 {
  "id": 7,
  "name": "Squirtle",
  "stamina": 88,
  "attack": 112,
  "defense": 142
 },
 {
  "id": 8,
  "name": "Wartortle",
  "stamina": 118,
  "attack": 144,
  "defense": 176
 },
 {
  "id": 9,
  "name": "Blastoise",
  "stamina": 158,
  "attack": 186,
  "defense": 222
 },
 {
  "id": 10,
  "name": "Caterpie",
  "stamina": 90,
  "attack": 62,
  "defense": 66
 },
 {
  "id": 11,
  "name": "Metapod",
  "stamina": 100,
  "attack": 56,
  "defense": 86
 },
 {
  "id": 12,
  "name": "Butterfree",
  "stamina": 120,
  "attack": 144,
  "defense": 144
 },
 {
  "id": 13,
  "name": "Weedle",
  "stamina": 80,
  "attack": 68,
  "defense": 64
 },
 {
  "id": 14,
  "name": "Kakuna",
  "stamina": 90,
  "attack": 62,
  "defense": 82
 },
 {
  "id": 15,
  "name": "Beedrill",
  "stamina": 130,
  "attack": 144,
  "defense": 130
 },
 {
  "id": 16,
  "name": "Pidgey",
  "stamina": 80,
  "attack": 94,
  "defense": 90
 },
 {
  "id": 17,
  "name": "Pidgeotto",
  "stamina": 126,
  "attack": 126,
  "defense": 122
 },
 {
  "id": 18,
  "name": "Pidgeot",
  "stamina": 166,
  "attack": 170,
  "defense": 166
 },
 {
  "id": 19,
  "name": "Rattata",
  "stamina": 60,
  "attack": 92,
  "defense": 86
 },
 {
  "id": 20,
  "name": "Raticate",
  "stamina": 110,
  "attack": 146,
  "defense": 150
 },
 {
  "id": 21,
  "name": "Spearow",
  "stamina": 80,
  "attack": 102,
  "defense": 78
 },
 {
  "id": 22,
  "name": "Fearow",
  "stamina": 130,
  "attack": 168,
  "defense": 146
 },
 {
  "id": 23,
  "name": "Ekans",
  "stamina": 70,
  "attack": 112,
  "defense": 112
 },
 {
  "id": 24,
  "name": "Arbok",
  "stamina": 120,
  "attack": 166,
  "defense": 166
 },
 {
  "id": 25,
  "name": "Pikachu",
  "stamina": 70,
  "attack": 124,
  "defense": 108
 },
 {
  "id": 26,
  "name": "Raichu",
  "stamina": 120,
  "attack": 200,
  "defense": 154
 },
 {
  "id": 27,
  "name": "Sandshrew",
  "stamina": 100,
  "attack": 90,
  "defense": 114
 },
 {
  "id": 28,
  "name": "Sandslash",
  "stamina": 150,
  "attack": 150,
  "defense": 172
 },
 {
  "id": 29,
  "name": "Nidoran_female",
  "stamina": 110,
  "attack": 100,
  "defense": 104
 },
 {
  "id": 30,
  "name": "Nidorina",
  "stamina": 140,
  "attack": 132,
  "defense": 136
 },
 {
  "id": 31,
  "name": "Nidoqueen",
  "stamina": 180,
  "attack": 184,
  "defense": 190
 },
 {
  "id": 32,
  "name": "Nidoran_male",
  "stamina": 92,
  "attack": 110,
  "defense": 94
 },
 {
  "id": 33,
  "name": "Nidorino",
  "stamina": 122,
  "attack": 142,
  "defense": 128
 },
 {
  "id": 34,
  "name": "Nidoking",
  "stamina": 162,
  "attack": 204,
  "defense": 170
 },
 {
  "id": 35,
  "name": "Clefairy",
  "stamina": 140,
  "attack": 116,
  "defense": 124
 },
 {
  "id": 36,
  "name": "Clefable",
  "stamina": 190,
  "attack": 178,
  "defense": 178
 },
 {
  "id": 37,
  "name": "Vulpix",
  "stamina": 76,
  "attack": 106,
  "defense": 118
 },
 {
  "id": 38,
  "name": "Ninetales",
  "stamina": 146,
  "attack": 176,
  "defense": 194
 },
 {
  "id": 39,
  "name": "Jigglypuff",
  "stamina": 230,
  "attack": 98,
  "defense": 54
 },
 {
  "id": 40,
  "name": "Wigglytuff",
  "stamina": 280,
  "attack": 168,
  "defense": 108
 },
 {
  "id": 41,
  "name": "Zubat",
  "stamina": 80,
  "attack": 88,
  "defense": 90
 },
 {
  "id": 42,
  "name": "Golbat",
  "stamina": 150,
  "attack": 164,
  "defense": 164
 },
 {
  "id": 43,
  "name": "Oddish",
  "stamina": 90,
  "attack": 134,
  "defense": 130
 },
 {
  "id": 44,
  "name": "Gloom",
  "stamina": 120,
  "attack": 162,
  "defense": 158
 },
 {
  "id": 45,
  "name": "Vileplume",
  "stamina": 150,
  "attack": 202,
  "defense": 190
 },
 {
  "id": 46,
  "name": "Paras",
  "stamina": 70,
  "attack": 122,
  "defense": 120
 },
 {
  "id": 47,
  "name": "Parasect",
  "stamina": 120,
  "attack": 162,
  "defense": 170
 },
 {
  "id": 48,
  "name": "Venonat",
  "stamina": 120,
  "attack": 108,
  "defense": 118
 },
 {
  "id": 49,
  "name": "Venomoth",
  "stamina": 140,
  "attack": 172,
  "defense": 154
 },
 {
  "id": 50,
  "name": "Diglett",
  "stamina": 20,
  "attack": 108,
  "defense": 86
 },
 {
  "id": 51,
  "name": "Dugtrio",
  "stamina": 70,
  "attack": 148,
  "defense": 140
 },
 {
  "id": 52,
  "name": "Meowth",
  "stamina": 80,
  "attack": 104,
  "defense": 94
 },
 {
  "id": 53,
  "name": "Persian",
  "stamina": 130,
  "attack": 156,
  "defense": 146
 },
 {
  "id": 54,
  "name": "Psyduck",
  "stamina": 100,
  "attack": 132,
  "defense": 112
 },
 {
  "id": 55,
  "name": "Golduck",
  "stamina": 160,
  "attack": 194,
  "defense": 176
 },
 {
  "id": 56,
  "name": "Mankey",
  "stamina": 80,
  "attack": 122,
  "defense": 96
 },
 {
  "id": 57,
  "name": "Primeape",
  "stamina": 130,
  "attack": 178,
  "defense": 150
 },
 {
  "id": 58,
  "name": "Growlithe",
  "stamina": 110,
  "attack": 156,
  "defense": 110
 },
 {
  "id": 59,
  "name": "Arcanine",
  "stamina": 180,
  "attack": 230,
  "defense": 180
 },
 {
  "id": 60,
  "name": "Poliwag",
  "stamina": 80,
  "attack": 108,
  "defense": 98
 },
 {
  "id": 61,
  "name": "Poliwhirl",
  "stamina": 130,
  "attack": 132,
  "defense": 132
 },
 {
  "id": 62,
  "name": "Poliwrath",
  "stamina": 180,
  "attack": 180,
  "defense": 202
 },
 {
  "id": 63,
  "name": "Abra",
  "stamina": 50,
  "attack": 110,
  "defense": 76
 },
 {
  "id": 64,
  "name": "Kadabra",
  "stamina": 80,
  "attack": 150,
  "defense": 112
 },
 {
  "id": 65,
  "name": "Alakazam",
  "stamina": 110,
  "attack": 186,
  "defense": 152
 },
 {
  "id": 66,
  "name": "Machop",
  "stamina": 140,
  "attack": 118,
  "defense": 96
 },
 {
  "id": 67,
  "name": "Machoke",
  "stamina": 160,
  "attack": 154,
  "defense": 144
 },
 {
  "id": 68,
  "name": "Machamp",
  "stamina": 180,
  "attack": 198,
  "defense": 180
 },
 {
  "id": 69,
  "name": "Bellsprout",
  "stamina": 100,
  "attack": 158,
  "defense": 78
 },
 {
  "id": 70,
  "name": "Weepinbell",
  "stamina": 130,
  "attack": 190,
  "defense": 110
 },
 {
  "id": 71,
  "name": "Victreebel",
  "stamina": 160,
  "attack": 222,
  "defense": 152
 },
 {
  "id": 72,
  "name": "Tentacool",
  "stamina": 80,
  "attack": 106,
  "defense": 136
 },
 {
  "id": 73,
  "name": "Tentacruel",
  "stamina": 160,
  "attack": 170,
  "defense": 196
 },
 {
  "id": 74,
  "name": "Geodude",
  "stamina": 80,
  "attack": 106,
  "defense": 118
 },
 {
  "id": 75,
  "name": "Graveler",
  "stamina": 110,
  "attack": 142,
  "defense": 156
 },
 {
  "id": 76,
  "name": "Golem",
  "stamina": 160,
  "attack": 176,
  "defense": 198
 },
 {
  "id": 77,
  "name": "Ponyta",
  "stamina": 100,
  "attack": 168,
  "defense": 138
 },
 {
  "id": 78,
  "name": "Rapidash",
  "stamina": 130,
  "attack": 200,
  "defense": 170
 },
 {
  "id": 79,
  "name": "Slowpoke",
  "stamina": 180,
  "attack": 110,
  "defense": 110
 },
 {
  "id": 80,
  "name": "Slowbro",
  "stamina": 190,
  "attack": 184,
  "defense": 198
 },
 {
  "id": 81,
  "name": "Magnemite",
  "stamina": 50,
  "attack": 128,
  "defense": 138
 },
 {
  "id": 82,
  "name": "Magneton",
  "stamina": 100,
  "attack": 186,
  "defense": 180
 },
 {
  "id": 83,
  "name": "Farfetchd",
  "stamina": 104,
  "attack": 138,
  "defense": 132
 },
 {
  "id": 84,
  "name": "Doduo",
  "stamina": 70,
  "attack": 126,
  "defense": 96
 },
 {
  "id": 85,
  "name": "Dodrio",
  "stamina": 120,
  "attack": 182,
  "defense": 150
 },
 {
  "id": 86,
  "name": "Seel",
  "stamina": 130,
  "attack": 104,
  "defense": 138
 },
 {
  "id": 87,
  "name": "Dewgong",
  "stamina": 180,
  "attack": 156,
  "defense": 192
 },
 {
  "id": 88,
  "name": "Grimer",
  "stamina": 160,
  "attack": 124,
  "defense": 110
 },
 {
  "id": 89,
  "name": "Muk",
  "stamina": 210,
  "attack": 180,
  "defense": 188
 },
 {
  "id": 90,
  "name": "Shellder",
  "stamina": 60,
  "attack": 120,
  "defense": 112
 },
 {
  "id": 91,
  "name": "Cloyster",
  "stamina": 100,
  "attack": 196,
  "defense": 196
 },
 {
  "id": 92,
  "name": "Gastly",
  "stamina": 60,
  "attack": 136,
  "defense": 82
 },
 {
  "id": 93,
  "name": "Haunter",
  "stamina": 90,
  "attack": 172,
  "defense": 118
 },
 {
  "id": 94,
  "name": "Gengar",
  "stamina": 120,
  "attack": 204,
  "defense": 156
 },
 {
  "id": 95,
  "name": "Onix",
  "stamina": 70,
  "attack": 90,
  "defense": 186
 },
 {
  "id": 96,
  "name": "Drowzee",
  "stamina": 120,
  "attack": 104,
  "defense": 140
 },
 {
  "id": 97,
  "name": "Hypno",
  "stamina": 170,
  "attack": 162,
  "defense": 196
 },
 {
  "id": 98,
  "name": "Krabby",
  "stamina": 60,
  "attack": 116,
  "defense": 110
 },
 {
  "id": 99,
  "name": "Kingler",
  "stamina": 110,
  "attack": 178,
  "defense": 168
 },
 {
  "id": 100,
  "name": "Voltorb",
  "stamina": 80,
  "attack": 102,
  "defense": 124
 },
 {
  "id": 101,
  "name": "Electrode",
  "stamina": 120,
  "attack": 150,
  "defense": 174
 },
 {
  "id": 102,
  "name": "Exeggcute",
  "stamina": 120,
  "attack": 110,
  "defense": 132
 },
 {
  "id": 103,
  "name": "Exeggutor",
  "stamina": 190,
  "attack": 232,
  "defense": 164
 },
 {
  "id": 104,
  "name": "Cubone",
  "stamina": 100,
  "attack": 102,
  "defense": 150
 },
 {
  "id": 105,
  "name": "Marowak",
  "stamina": 120,
  "attack": 140,
  "defense": 202
 },
 {
  "id": 106,
  "name": "Hitmonlee",
  "stamina": 100,
  "attack": 148,
  "defense": 172
 },
 {
  "id": 107,
  "name": "Hitmonchan",
  "stamina": 100,
  "attack": 138,
  "defense": 204
 },
 {
  "id": 108,
  "name": "Lickitung",
  "stamina": 180,
  "attack": 126,
  "defense": 160
 },
 {
  "id": 109,
  "name": "Koffing",
  "stamina": 80,
  "attack": 136,
  "defense": 142
 },
 {
  "id": 110,
  "name": "Weezing",
  "stamina": 130,
  "attack": 190,
  "defense": 198
 },
 {
  "id": 111,
  "name": "Rhyhorn",
  "stamina": 160,
  "attack": 110,
  "defense": 116
 },
 {
  "id": 112,
  "name": "Rhydon",
  "stamina": 210,
  "attack": 166,
  "defense": 160
 },
 {
  "id": 113,
  "name": "Chansey",
  "stamina": 500,
  "attack": 40,
  "defense": 60
 },
 {
  "id": 114,
  "name": "Tangela",
  "stamina": 130,
  "attack": 164,
  "defense": 152
 },
 {
  "id": 115,
  "name": "Kangaskhan",
  "stamina": 210,
  "attack": 142,
  "defense": 178
 },
 {
  "id": 116,
  "name": "Horsea",
  "stamina": 60,
  "attack": 122,
  "defense": 100
 },
 {
  "id": 117,
  "name": "Seadra",
  "stamina": 110,
  "attack": 176,
  "defense": 150
 },
 {
  "id": 118,
  "name": "Goldeen",
  "stamina": 90,
  "attack": 112,
  "defense": 126
 },
 {
  "id": 119,
  "name": "Seaking",
  "stamina": 160,
  "attack": 172,
  "defense": 160
 },
 {
  "id": 120,
  "name": "Staryu",
  "stamina": 60,
  "attack": 130,
  "defense": 128
 },
 {
  "id": 121,
  "name": "Starmie",
  "stamina": 120,
  "attack": 194,
  "defense": 192
 },
 {
  "id": 122,
  "name": "Mr_mime",
  "stamina": 80,
  "attack": 154,
  "defense": 196
 },
 {
  "id": 123,
  "name": "Scyther",
  "stamina": 140,
  "attack": 176,
  "defense": 180
 },
 {
  "id": 124,
  "name": "Jynx",
  "stamina": 130,
  "attack": 172,
  "defense": 134
 },
 {
  "id": 125,
  "name": "Electabuzz",
  "stamina": 130,
  "attack": 198,
  "defense": 160
 },
 {
  "id": 126,
  "name": "Magmar",
  "stamina": 130,
  "attack": 214,
  "defense": 158
 },
 {
  "id": 127,
  "name": "Pinsir",
  "stamina": 130,
  "attack": 184,
  "defense": 186
 },
 {
  "id": 128,
  "name": "Tauros",
  "stamina": 150,
  "attack": 148,
  "defense": 184
 },
 {
  "id": 129,
  "name": "Magikarp",
  "stamina": 40,
  "attack": 42,
  "defense": 84
 },
 {
  "id": 130,
  "name": "Gyarados",
  "stamina": 190,
  "attack": 192,
  "defense": 196
 },
 {
  "id": 131,
  "name": "Lapras",
  "stamina": 260,
  "attack": 186,
  "defense": 190
 },
 {
  "id": 132,
  "name": "Ditto",
  "stamina": 96,
  "attack": 110,
  "defense": 110
 },
 {
  "id": 133,
  "name": "Eevee",
  "stamina": 110,
  "attack": 114,
  "defense": 128
 },
 {
  "id": 134,
  "name": "Vaporeon",
  "stamina": 260,
  "attack": 186,
  "defense": 168
 },
 {
  "id": 135,
  "name": "Jolteon",
  "stamina": 130,
  "attack": 192,
  "defense": 174
 },
 {
  "id": 136,
  "name": "Flareon",
  "stamina": 130,
  "attack": 238,
  "defense": 178
 },
 {
  "id": 137,
  "name": "Porygon",
  "stamina": 130,
  "attack": 156,
  "defense": 158
 },
 {
  "id": 138,
  "name": "Omanyte",
  "stamina": 70,
  "attack": 132,
  "defense": 160
 },
 {
  "id": 139,
  "name": "Omastar",
  "stamina": 140,
  "attack": 180,
  "defense": 202
 },
 {
  "id": 140,
  "name": "Kabuto",
  "stamina": 60,
  "attack": 148,
  "defense": 142
 },
 {
  "id": 141,
  "name": "Kabutops",
  "stamina": 120,
  "attack": 190,
  "defense": 190
 },
 {
  "id": 142,
  "name": "Aerodactyl",
  "stamina": 160,
  "attack": 182,
  "defense": 162
 },
 {
  "id": 143,
  "name": "Snorlax",
  "stamina": 320,
  "attack": 180,
  "defense": 180
 },
 {
  "id": 144,
  "name": "Articuno",
  "stamina": 180,
  "attack": 198,
  "defense": 242
 },
 {
  "id": 145,
  "name": "Zapdos",
  "stamina": 180,
  "attack": 232,
  "defense": 194
 },
 {
  "id": 146,
  "name": "Moltres",
  "stamina": 180,
  "attack": 242,
  "defense": 194
 },
 {
  "id": 147,
  "name": "Dratini",
  "stamina": 82,
  "attack": 128,
  "defense": 110
 },
 {
  "id": 148,
  "name": "Dragonair",
  "stamina": 122,
  "attack": 170,
  "defense": 152
 },
 {
  "id": 149,
  "name": "Dragonite",
  "stamina": 182,
  "attack": 250,
  "defense": 212
 },
 {
  "id": 150,
  "name": "Mewtwo",
  "stamina": 212,
  "attack": 284,
  "defense": 202
 },
 {
  "id": 151,
  "name": "Mew",
  "stamina": 200,
  "attack": 220,
  "defense": 220
 }
];

const boundsOfInterest = [0, 100, 200];
function boundKeyForValue(value) {
	var key;
	var idx;
	var boundValue;
	var upperValue;
	for (idx = 0; idx < boundsOfInterest.length; idx++) {
		boundValue = boundsOfInterest[idx];
		upperValue = boundsOfInterest[idx + 1];
		if (!upperValue) {
			//We've reached the end
			return boundValue + '+';
		}
		if (value >= boundValue && value < upperValue) {
			return boundValue + '-' + upperValue;
		}
	}
	return key;
}
const boundKeys = _.map(boundsOfInterest, boundKeyForValue);

var lookup = {
	byId : {},
	byName : {},
	byStamina : {},
	byAttack : {},
	byDefense : {},
};

[
	'byStamina',
	'byAttack',
	'byDefense'
].forEach(function (name) {
	var dict = {
		all : {}
	};
	boundKeys.forEach(function (key) {
		dict[key] = [];
	});
	lookup[name] = dict;
});

_.each(pokemon, function (pokeData) {
	lookup.byId[pokeData.id] = pokeData;
	lookup.byName[pokeData.name.toLowerCase()] = pokeData;
	
	lookup.byStamina.all[pokeData.stamina] = lookup.byStamina.all[pokeData.stamina] || [];
	lookup.byStamina.all[pokeData.stamina].push(pokeData);
	lookup.byStamina[boundKeyForValue(pokeData.stamina)].push(pokeData);
	
	lookup.byAttack.all[pokeData.attack] = lookup.byAttack.all[pokeData.attack] || [];
	lookup.byAttack.all[pokeData.attack].push(pokeData);
	lookup.byAttack[boundKeyForValue(pokeData.attack)].push(pokeData);
	
	lookup.byDefense.all[pokeData.defense] = lookup.byDefense.all[pokeData.defense] || [];
	lookup.byDefense.all[pokeData.defense].push(pokeData);
	lookup.byDefense[boundKeyForValue(pokeData.defense)].push(pokeData);
});

module.exports = {
	pokemonByName : function (name) {
		return lookup.byName[(name + '').toLowerCase()];
	},
	pokemonById : function (id) {
		var pokeId = parseInt(id, 10);
		return lookup.byId[pokeId];
	}
};




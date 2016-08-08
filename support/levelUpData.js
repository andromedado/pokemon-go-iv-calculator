
var _ = require('underscore');

var levels =
[ { level: 2, dust: 200, candy: 1, cpScalar: 0.094 },
  { level: 3, dust: 200, candy: 1, cpScalar: 0.1351374 },
  { level: 4, dust: 200, candy: 1, cpScalar: 0.1663979 },
  { level: 5, dust: 200, candy: 1, cpScalar: 0.1926509 },
  { level: 6, dust: 400, candy: 1, cpScalar: 0.2157325 },
  { level: 7, dust: 400, candy: 1, cpScalar: 0.2365727 },
  { level: 8, dust: 400, candy: 1, cpScalar: 0.2557201 },
  { level: 9, dust: 400, candy: 1, cpScalar: 0.2735304 },
  { level: 10, dust: 600, candy: 1, cpScalar: 0.2902499 },
  { level: 11, dust: 600, candy: 1, cpScalar: 0.3060574 },
  { level: 12, dust: 600, candy: 1, cpScalar: 0.3210876 },
  { level: 13, dust: 600, candy: 1, cpScalar: 0.335445 },
  { level: 14, dust: 800, candy: 1, cpScalar: 0.3492127 },
  { level: 15, dust: 800, candy: 1, cpScalar: 0.3624578 },
  { level: 16, dust: 800, candy: 1, cpScalar: 0.3752356 },
  { level: 17, dust: 800, candy: 1, cpScalar: 0.3875924 },
  { level: 18, dust: 1000, candy: 1, cpScalar: 0.3995673 },
  { level: 19, dust: 1000, candy: 1, cpScalar: 0.4111936 },
  { level: 20, dust: 1000, candy: 1, cpScalar: 0.4225 },
  { level: 21, dust: 1000, candy: 1, cpScalar: 0.4335117 },
  { level: 22, dust: 1300, candy: 2, cpScalar: 0.4431076 },
  { level: 23, dust: 1300, candy: 2, cpScalar: 0.45306 },
  { level: 24, dust: 1300, candy: 2, cpScalar: 0.4627984 },
  { level: 25, dust: 1300, candy: 2, cpScalar: 0.4723361 },
  { level: 26, dust: 1600, candy: 2, cpScalar: 0.481685 },
  { level: 27, dust: 1600, candy: 2, cpScalar: 0.4908558 },
  { level: 28, dust: 1600, candy: 2, cpScalar: 0.4998584 },
  { level: 29, dust: 1600, candy: 2, cpScalar: 0.5087018 },
  { level: 30, dust: 1900, candy: 2, cpScalar: 0.517394 },
  { level: 31, dust: 1900, candy: 2, cpScalar: 0.5259425 },
  { level: 32, dust: 1900, candy: 2, cpScalar: 0.5343543 },
  { level: 33, dust: 1900, candy: 2, cpScalar: 0.5426358 },
  { level: 34, dust: 2200, candy: 2, cpScalar: 0.5507927 },
  { level: 35, dust: 2200, candy: 2, cpScalar: 0.5588306 },
  { level: 36, dust: 2200, candy: 2, cpScalar: 0.5667545 },
  { level: 37, dust: 2200, candy: 2, cpScalar: 0.5745692 },
  { level: 38, dust: 2500, candy: 2, cpScalar: 0.5822789 },
  { level: 39, dust: 2500, candy: 2, cpScalar: 0.5898879 },
  { level: 40, dust: 2500, candy: 2, cpScalar: 0.5974 },
  { level: 41, dust: 2500, candy: 2, cpScalar: 0.6048188 },
  { level: 42, dust: 3000, candy: 3, cpScalar: 0.6121573 },
  { level: 43, dust: 3000, candy: 3, cpScalar: 0.6194041 },
  { level: 44, dust: 3000, candy: 3, cpScalar: 0.6265671 },
  { level: 45, dust: 3000, candy: 3, cpScalar: 0.6336492 },
  { level: 46, dust: 3500, candy: 3, cpScalar: 0.640653 },
  { level: 47, dust: 3500, candy: 3, cpScalar: 0.647581 },
  { level: 48, dust: 3500, candy: 3, cpScalar: 0.6544356 },
  { level: 49, dust: 3500, candy: 3, cpScalar: 0.6612193 },
  { level: 50, dust: 4000, candy: 3, cpScalar: 0.667934 },
  { level: 51, dust: 4000, candy: 3, cpScalar: 0.6745819 },
  { level: 52, dust: 4000, candy: 4, cpScalar: 0.6811649 },
  { level: 53, dust: 4000, candy: 4, cpScalar: 0.6876849 },
  { level: 54, dust: 4500, candy: 4, cpScalar: 0.6941437 },
  { level: 55, dust: 4500, candy: 4, cpScalar: 0.7005429 },
  { level: 56, dust: 4500, candy: 4, cpScalar: 0.7068842 },
  { level: 57, dust: 4500, candy: 4, cpScalar: 0.7131691 },
  { level: 58, dust: 5000, candy: 4, cpScalar: 0.7193991 },
  { level: 59, dust: 5000, candy: 4, cpScalar: 0.7255756 },
  { level: 60, dust: 5000, candy: 4, cpScalar: 0.7317 },
  { level: 61, dust: 5000, candy: 4, cpScalar: 0.734741 },
  { level: 62, dust: 6000, candy: 6, cpScalar: 0.7377695 },
  { level: 63, dust: 6000, candy: 6, cpScalar: 0.7407856 },
  { level: 64, dust: 6000, candy: 6, cpScalar: 0.7437894 },
  { level: 65, dust: 6000, candy: 6, cpScalar: 0.7467812 },
  { level: 66, dust: 7000, candy: 8, cpScalar: 0.749761 },
  { level: 67, dust: 7000, candy: 8, cpScalar: 0.7527291 },
  { level: 68, dust: 7000, candy: 8, cpScalar: 0.7556855 },
  { level: 69, dust: 7000, candy: 8, cpScalar: 0.7586304 },
  { level: 70, dust: 8000, candy: 10, cpScalar: 0.7615638 },
  { level: 71, dust: 8000, candy: 10, cpScalar: 0.7644861 },
  { level: 72, dust: 8000, candy: 10, cpScalar: 0.7673972 },
  { level: 73, dust: 8000, candy: 10, cpScalar: 0.7702973 },
  { level: 74, dust: 9000, candy: 12, cpScalar: 0.7731865 },
  { level: 75, dust: 9000, candy: 12, cpScalar: 0.776065 },
  { level: 76, dust: 9000, candy: 12, cpScalar: 0.7789328 },
  { level: 77, dust: 9000, candy: 12, cpScalar: 0.7817901 },
  { level: 78, dust: 10000, candy: 15, cpScalar: 0.784637 },
  { level: 79, dust: 10000, candy: 15, cpScalar: 0.7874736 },
  { level: 80, dust: 10000, candy: 15, cpScalar: 0.7903 },
  { level: 81, dust: 10000, candy: 15, cpScalar: 0.7931164 } ];

var lookup = {
	byLevel : {},
	byDust : {},
	byCandy : {}
};

_.each(levels, function (data) {
	lookup.byLevel[data.level] = data;
	
	lookup.byDust[data.dust] = lookup.byDust[data.dust] || [];
	lookup.byDust[data.dust].push(data);
	
	lookup.byCandy[data.candy] = lookup.byCandy[data.candy] || [];
	lookup.byCandy[data.candy].push(data);
});


module.exports = {
	allLevels : function () {
		return levels.slice();
	},
	levelsByDust : function (dust) {
		dust = parseInt(dust, 10);
		return lookup.byDust[dust].slice();
	},
	levelsByCandy : function (candy) {
		candy = parseInt(candy, 10);
		return lookup.byCandy[candy].slice();
	}
};







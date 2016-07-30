
const _ = require('underscore');

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

function determineGrade(values) {
	if (values && !_.isArray(values)) {
		values = [values];
	}
	if (!values || !values.length) {
		return 'Unknown';
	}
	values.sort();
	const minGrade = grade(values[0]);
	const maxGrade = grade(values[values.length - 1]);
	const averageValue = _.reduce(values, function (memo, val) {return memo + val;}, 0) / values.length;
	const averageGrade = grade(averageValue);

	if (values.length === 1 || minGrade.preciseLetter === maxGrade.preciseLetter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `${minGrade.preciseLetter} (${Math.floor(averageValue * 1000) / 10}%)`
		};
	}

	if (averageGrade.letter === minGrade.letter && averageGrade.letter === maxGrade.letter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `Solid ${averageGrade.preciseLetter} (${Math.floor(averageValue * 1000) / 10}%)`
		};
	}

	return {
		minGrade, maxGrade, averageGrade,
		explanation : `Between ${maxGrade.preciseLetter} - ${minGrade.preciseLetter}`
	}
}

module.exports = {
	grade : determineGrade
};


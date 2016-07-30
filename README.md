# Pokemon GO IV Calculator

Usage:

```javascript
const ivCalculator = require('pokemon-go-iv-calculator');

//Ivysaur with CP 608, HP of 69, and dust-upgrade-cost of 1600
const result = ivCalculator.evaluate('Ivysaur', 608, 59, 1600);

/**
 Gives:
{ grade: 
   { minGrade: { letter: 'F', preciseLetter: 'F' },
     maxGrade: { letter: 'D', preciseLetter: 'D' },
     averageGrade: { letter: 'F', preciseLetter: 'F' },
     explanation: 'Between D - F' },
  ivs: 
   [ { attackIV: 15,
       defenseIV: 11,
       staminaIV: 0,
       level: 27,
       perfection: 0.57 },
     { attackIV: 14,
       defenseIV: 13,
       staminaIV: 0,
       level: 27,
       perfection: 0.6 },
     { attackIV: 13,
       defenseIV: 15,
       staminaIV: 0,
       level: 27,
       perfection: 0.62 } ] }

*/

const niceTry = ivCalculator.evaluate('ivysaurus', 608, 59, 1600)

/**
 Gives
{ error: 'Could not find pokemon: ivysaurus' }
*/
```

## Notes

Pokemon can be any case (upper/lower/mixed), OR you can use pokedex id (e.g. Ivysaur == 2)

## Credit

Inspired by : 

https://pokeassistant.com/main/ivcalculator

Who gave original credit to :

https://www.reddit.com/r/pokemongodev/comments/4t7xb4/exact_cp_formula_from_stats_and_cpm_and_an_update
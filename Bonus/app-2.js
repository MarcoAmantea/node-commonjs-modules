import funcNames from './names-2.js';
import funcHobbies from './hobbies-2.js';
const resultUser = funcNames("Marco", "Amantea");
const allLiked = funcHobbies("Calcio", "Tennis", "Lettura");
function final(){
    return {
        fullName: resultUser,
        hobbies: allLiked
    }
}
console.log(final());
import chalk from 'chalk';

console.log(chalk.bgYellow("LORIS PERDE TEMPO E GIUSEPPE OFFRE LE PIZZE"));
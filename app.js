const functionUser = require('./names');
const functionLiked = require('./hobbies');
const resultUser = functionUser("Marco", "Amantea");
const allLiked = functionLiked("Calcio", "Tennis", "Lettura");
function final(){
    return {
        fullName: resultUser,
        hobbies: allLiked
    }
    
}
console.log(final());


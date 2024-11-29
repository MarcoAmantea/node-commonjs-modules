function liked(hobbyOne, hobbyTwo, hobbyThree){
    return {
        hobbies:[hobbyOne, hobbyTwo, hobbyThree]
    }
}
console.log(liked("calcio","tennis","lettura"));
module.exports = liked;

module.exports = function(word, joinSeperator="") {
    return word.split('').reverse().join(joinSeperator);
};
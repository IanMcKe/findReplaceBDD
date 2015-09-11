var findReplace = function(string, word, newWord) {
    var regex = new RegExp(word, "gi");
    var result = string.replace(regex, newWord);

    return result;
};

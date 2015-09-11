var findReplace = function(string, word, newWord) {
    word = word.replace(/([.?*+^$[\]\\()|-])/g, "\\$1");
    // debugger;
    var regex = new RegExp(word, "gi");
    var result = string.replace(regex, newWord);

    return result;
};

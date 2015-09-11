var findReplace = function(string, word, newWord) {
    //add \ to any characters that have a special function in regex to escape them
    word = word.replace(/([.?*+^$[\]\\()|-])/g, "\\$1");
    // debugger;
    var regex = new RegExp(word, "gi");
    var result = string.replace(regex, newWord);

    return result;
};

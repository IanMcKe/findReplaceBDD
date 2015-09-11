var findReplace = function(string, word, newWord) {
    //add \ directly before any characters that have a special function in regex to escape them
    word = word.replace(/([.?*+^$[\]\\()|-])/g, "\\$1");
    // debugger;
    var regex = new RegExp(word, "gi");
    var result = string.replace(regex, newWord);

    return result;
};

$(document).ready(function() {
    $("form#findReplace").submit(function(event) {
        var result = findReplace($("input#string").val(), $("input#word").val(), $("input#newWord").val());

        $(".findReplace").text(result);

        $("#result").show();
        event.preventDefault();
    });
});

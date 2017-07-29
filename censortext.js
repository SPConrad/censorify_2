var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = ["Kingsman", "Star Wars", "Marvel", "Thor", "Jedi"];
function censor(inStr){
    for (idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx], "***");
    }

    for(idx in customCensoredWords){
        inStr = instr.replace(customCensoredWords[idx], "******");
    }
    return instr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
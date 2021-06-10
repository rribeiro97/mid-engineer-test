// Applies the necessary rules to translate Pig Latin Language
// Sentence: (string), recived string that should be translated
// Return: (string),  translated string.
function first_vowel(input) {
    var pattern = /(A|E|I|O|U)/;
    // Returns index of the first match between the regex and string
    var pos = input.toUpperCase().search(pattern);
    var _hindex = pos + 1;

    if (pos > -1) {
        return _hindex.toString();
    } else {
        return -1;
    }
}

// Checks if the recived strings has Punctuation
// string: (string), recived string that should be checked
// Return: (bool).
function hasPunctuation(string) {
    return /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g.test(string);
}

// Applies the necessary rules to translate Pig Latin Language
// Sentence: (string), recived string that should be translated
// Return: (string),  translated string.
const translate = (sentence) => {
    // gets the index of the first vowel
    const vowelPosition = first_vowel(sentence);

    let prefix = sentence.substring(0, vowelPosition - 1);
    let stem = sentence.substring(vowelPosition - 1);

    //  Calls the regex function to handle scenarios with punctuation
    if (hasPunctuation(sentence)) {
        var pont = sentence.slice(sentence.length - 1);
        stem = stem.substring(0, stem.length - 1);
    }

    // Handles the rule 3
    if (sentence[0] === sentence[0].toUpperCase()) {
        stem = stem.charAt(0).toUpperCase() + stem.slice(1);
        prefix = prefix.charAt(0).toLowerCase() + prefix.slice(1);
    }

    var translatedSentence;

    // Handles the rule 2
    if (hasPunctuation(sentence)) {
        translatedSentence = `${stem}${prefix}ay${pont}`;
    } else {
        translatedSentence = `${stem}${prefix}ay`;
    }

    console.log(translatedSentence);

    return translatedSentence;
};

// Main function, translate the whole input phrase
// Applies the necessary rules to translate Pig Latin Language
// Return: (string),  translated phrase.
const translation = () => {
    let sentence = "";

    while (sentence !== "exit") {
        sentence = window.prompt("Insert the input");
        if (sentence === "exit") {
            return;
        }
        var splittedSentenceArr = sentence.split(" ");
        const wordArray = [];
        splittedSentenceArr.map((word) => {
            let res = translate(word);
            wordArray.push(res);
        });
    }
};

translation();

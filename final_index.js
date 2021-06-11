const prompt = require('prompt-sync')();

// Applies the necessary rules to translate Pig Latin Language
// Sentence: (string), recived string that should be translated
// Return: (string),  translated string.
function first_vowel(input) {
    var pattern = /(A|E|I|O|U|Y)/;
    // Returns index of the first match between the regex and string
    var pos = input.toUpperCase().search(pattern);
    var _hindex = pos + 1;

    if (pos > -1) {
        return _hindex.toString();
    } else {
        return -1;
    }
}

const testRegex = (regex, string) => {
    return regex.test(string);
};

// Applies the necessary rules to translate Pig Latin Language
// Sentence: (string), recived string that should be translated
// Return: (string),  translated string.
const translate = (sentence) => {
    // gets the index of the first vowel
    const vowelPosition = first_vowel(sentence);
    var translatedSentence;
    let complement = 'ay';
    let prefix = sentence.substring(0, vowelPosition - 1);
    let stem = sentence.substring(vowelPosition - 1);

    //  Calls the regex function to handle scenarios with punctuation
    if (testRegex(/[!"&'(),-./:;=?[\]^_`{}~]/g, sentence)) {
        var pont = sentence.slice(sentence.length - 1);
        stem = stem.substring(0, stem.length - 1);
    }
    // Handles the rule 6
    if (!testRegex(/[bcdfghjklmnpqrstvwxs]/gi, sentence)) {
        prefix = "";
        sentence = stem;
        complement = 'yay'
    }
    // Handles the rule 3
    if (sentence[0] === sentence[0].toUpperCase()) {
        stem = stem.charAt(0).toUpperCase() + stem.slice(1);
        prefix = prefix.charAt(0).toLowerCase() + prefix.slice(1);
    }

    // Handles the rule 2
    if (testRegex(/[!"&'(),-./:;=?[\]^_`{}~]/g, sentence)) {
        translatedSentence = `${stem}${prefix}${complement}${pont}`;
    } else {
        translatedSentence = `${stem}${prefix}${complement}`;
    }

    return translatedSentence;
};

// Main function, translate the whole input phrase
// Applies the necessary rules to translate Pig Latin Language
// Return: (string), translated phrase.
const translation = () => {
    let sentence = "";

    while (sentence !== "exit") {
        sentence = prompt("Insert the input: ");
        if (sentence === "exit") {
            return;
        }
        var splittedSentenceArray = sentence.split(" ");
        const wordArray = [];

        splittedSentenceArray.forEach((word) => {
            if (testRegex(/[a-zA-Z]/g, word)) {
                wordArray.push(translate(word));
            } else {
                wordArray.push(word);
            }
        });
        var joinedSentenceArray = wordArray.join(" ");
        console.log(joinedSentenceArray);
    }
};

translation();

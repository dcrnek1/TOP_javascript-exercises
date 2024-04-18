const punctuation = ',.! ?:;';

const palindromes = function (input) {
    let notReversed = input.split('').filter((current) => !punctuation.includes(current)).reduce((w, c) => w += c).toLowerCase();
    let reversed = input.split('').filter((current) => !punctuation.includes(current)).reduce((whole, current) => current += whole).toLowerCase();
    
    return notReversed == reversed;
};

// Do not edit below this line
module.exports = palindromes;

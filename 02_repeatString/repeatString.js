const repeatString = function(str, numOfTimes) {
    let repeatedStr = '';

    for (let i = 0; i < numOfTimes; i++) {
        repeatedStr += str.toString();
    }

    return numOfTimes >= 0 ? repeatedStr : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;

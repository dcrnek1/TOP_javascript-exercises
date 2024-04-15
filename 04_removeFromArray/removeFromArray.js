const removeFromArray = function(array, ...args) {
    return array.filter((arrayElement) => {return !args.includes(arrayElement)});
};

// Do not edit below this line
module.exports = removeFromArray;

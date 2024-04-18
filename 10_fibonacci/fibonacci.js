const fibonacci = function(num) {

    if (typeof num !== 'number') {
        num = +num;
    } 
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    }

    numStore = {
        prev: 0,
        current: 1,
        currentTemp: 1,
    }

    let fibbonaciArray = [];

    for (let i = 0; i < num; i++) {
        numStore.currentTemp = numStore.current;
        numStore.current = numStore.current + numStore.prev;
        numStore.prev = numStore.currentTemp;
        fibbonaciArray.push(numStore.prev);
    }

    return fibbonaciArray[fibbonaciArray.length-1];
    
};

// Do not edit below this line
module.exports = fibonacci;

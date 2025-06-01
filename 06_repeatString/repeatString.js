const repeatString = function (str, repeatNumber) {
    if(repeatNumber<0)
        return 'ERROR';

    let result = "";
    while (repeatNumber != 0) {
        result += str;
        repeatNumber--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

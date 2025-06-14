const sumAll = function (num1, num2) {
    let result = num1 + num2;

    if (num1 < 0 || num2 < 0)
        return 'ERROR';
    else if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return 'ERROR';

    if (num2 < num1) {
        let num3 = num1;
        num1 = num2;
        num2 = num3;
    }

    ++num1;
    while (num1 != num2) {
        result += num1;
        num1++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function (arr, ...removedElements) {
    for (let index = 0; index < removedElements.length; index++) {
        while (arr.indexOf(removedElements[index]) != -1)
            arr.splice(arr.indexOf(removedElements[index]), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

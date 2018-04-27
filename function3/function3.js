///////////////////////////////////////////////////task 1
function isInputOk(string, stringToInsert, index) {
    return (
        typeof string === "string"
        && typeof stringToInsert === "string"
        && typeof index === "number"
        && index >= 0
        && string.length >= index
    );
}


function insertString(string, stringToInsert, index) {
    index = index || 1;

    if (!isInputOk(string, stringToInsert, index)) {
        return "Input is not ok";
    }

    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (i === index - 1) {
            newString += stringToInsert;
        }
        newString += string[i];

    }
    return newString;
}
console.log(insertString("programing is fun", "sometimes "))

///////////////////////////////////task 2

function isFalsy(input) {
    return isNaN(input) || input === undefined || input === null || input === Infinity;
}


function arrayToString(array) {
    var string = "";
    for (i = 0; i < array.length; i++) {
        if (!isFalsy(array[i])) {
            var itemToString = array[i] + "";
            string += array[i]
        }
    }
    return string;
}
console.log(arrayToString([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/////////////////////////////////////////////////////task3

function getOutFalsy(array) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(getOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/////////////////////////////////////////////////////task4

function reverse(number) {
    var numToString = "" + number;
    var result = "";
    for (i = numToString.length - 1; i >= 0; i--) {
        result += numToString[i];
    }
    return parseInt(result);
}
console.log(reverse(123456));

/////////////////////////////////////////////////////task5

function lastNElements(array, n) {
    n = n || 1;
    var newArray = [];
    if (n === 1) {
        return array[array.length - 1];
    }
    for (i = array.length - n; i < array.length; i++) {
        newArray[newArray.length] = array[i];
    }
    return newArray;
}
console.log(lastNElements([7, 9, 0, -2], 2))


function newArrWithNElements (input, n){
   var array = [];
   input = input ||null;
   for (i = 0; i < n; i++){
       array+=input;
   }
   return array;
}
console.log(newArrWithNElements(3))




//----POP--------------
Array.prototype.myPop = function () {
    var last = this[this.length - 1];
    delete this[this.length - 1];
    this.length = this.length - 1;
    return last;
}
var arr = [5, 6, 7]
arr.myPop();
console.log(arr);

//----------PUSH---------------
Array.prototype.myPush = function (item) {
    this[this.length] = item;
    return this.length;
}

arr.myPush(8);
console.log(arr);

//-----------Join-------------------
Array.prototype.myJoin = function () {
    var string = "";
    for (var i = 0; i < this.length; i++) {
        string += this[i];
    }
    return string;
}

var arrToString = ["jovica", "milos"];

console.log(arrToString.myJoin());
//---------------FILTER-----------------
Array.prototype.myFilter = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr[newArr.length] = this[i];
        }
    }
    return newArr;
}
var arr2 = [2, 4, 5, 6, 4];
console.log(arr2.myFilter(function (item) {
    return item % 2 === 0;
}));
//-----------------------MAP---------------------
Array.prototype.myMap = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr[newArr.length] = callback(this[i]);
    }
    return newArr;
}
console.log(arr2.myMap(function (item) { return item * 2 }))
//------------------SLICE-------------------------------
Array.prototype.copy = function (indexStart, indexFinish) {
    indexStart = indexStart || 0;
    indexFinish = indexFinish || this.length;
    var newArr = [];
    for (var i = indexStart; i < indexFinish; i++) {
        newArr[newArr.length] = this[i]
    }
    return newArr;
}
console.log(arr2.copy(2));
//-------------myIndexOf---------------------
Array.prototype.myIndexOf = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}
//--------------------myLastIndexOf-------------------------
Array.prototype.myLastIndexOf = function (item) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(arr2.myIndexOf(4));
console.log(arr2.myLastIndexOf(4))

//---------------SOME----------------------
Array.prototype.mySome = function (callback) {
    for (i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}


console.log(arr2.mySome(function (item) {
    return item === 6;
}));

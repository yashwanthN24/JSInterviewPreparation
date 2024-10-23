let a = [1, 2, 3, 4, 5];

a.forEach(function (val) {
    console.log(val+2);
})


// print hello after each element using ForEach Method

a.forEach((val) => {
    console.log("hello", val);
})


// Print number if above 2

a.forEach((val) => {
    if (val > 2) {
        console.log(val);
    }
})


let sum = 0; 

a.forEach((val) => {
    sum += val;
});

console.log(sum);



let arr = [1, 2, '3', 4];

let sumofNo = 0;
arr.forEach((val) => {
    if ((typeof val === 'number')) {
        sumofNo += val;
    }
});

console.log(sumofNo);


//synchronous code executes line by line and if first line is not resolved
// The code execution will not move to next line


// Aynchronous code waits till the synchronous code is not finished and
// when the synchronous code finished executing then the async code starts
// Its execution , as the async code means it probably can have some delay
// It also takes something called callback

// Callback is the function that runs the async code


setTimeout(function () {
    console.log("Async code")
}, 1000);


// Async code runs after sometime because that code runs after sometime which we
// would not know when exactly its gets completed when it completes it will run that functions that we give
// The function which we give on successfully completed of async is CallBack function


// function checkArray(inp) {
//     return Array.isArray(inp);
// }

// or

function checkArray(inp) {
    return inp instanceof Array;
}

console.log(checkArray([]));
console.log(checkArray({}));
console.log(checkArray(12));


function firstnElements(arr, n=1) {
    let resarr = [];
    for (let i = 0; i < n; i++){
        resarr.push(arr[i]);
    }

    return resarr;
}


console.log(firstnElements([2, 3, 4, 5, 6], 6));


// Given a sentence reverse each word in the sentence

let sentence = "Harsh Bhai Kaise Ho"
let words = sentence.split(" ");
console.log(words);

// for (let j = 0; j < words.length; j++) {
//     let reversedword = "";
//     for (let i = words[j].length-1; i >= 0; i--) {
//         reversedword += words[j][i];
//     }
//     console.log(reversedword);
//     words[j] = reversedword;

// }


let newArr = words.map(function (word) {
    return word.split("").reverse().join("");
})
console.log(newArr.join(" "));
console.log(words.join(" "));


// How to empty an array in JS

// do not reset it to new array and do it loop through the array to pop each element


var array = [1, 2, 3, 4, 5];
array.length = 0; 
console.log(array);


// how would you check if a number is integer
// Number.isInteger(valuwanttocheckfor);

var a3 = 12; 

if (a3 % 1 == 0) {
    console.log("integer");
} else {
    console.log("Not integer");
}


function duplicate(arr) {
    return arr.concat(arr);
}


console.log(duplicate([1, 2, 3]));

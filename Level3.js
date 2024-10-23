// Loop an Array and add all members of it

let arr = [1, 2, 3, 4];


let sum = 0;
arr.forEach(function (ele) {
    sum += ele;
});

console.log(sum);


// In an Array of numbers and strings only add those which are not strings

let arr1 = [1, 2, '3', 'and', 5];

function addNum(arr) {
    let sum = 0;
    arr.forEach(function (ele) {
        if (typeof ele === 'number') {
            sum += ele;
        }
    });
    return sum;
}

console.log(addNum(arr1));


// Loop an array of objects and remove all objects which dont have gender's value male

let arrofobj = [
    { name: "rocky", gender: 'male' },
    { name: "roxie", gender: 'female' },
    { name: "Kavya", gender: 'female' },
    { name: "harsh", gender: 'male' }
];

function removeGenderNotMale(objArr) {
    return  objArr.filter(function (ele) {
        return ele.gender === "male";
    });
};

console.log(removeGenderNotMale(arrofobj));



function cloneArr(arr) {
    return [...arr];
}

console.log([1, 2, 4]);


function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [2, 3, 5, 6]));
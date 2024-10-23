// Write a Javascript function that reverse a number

// function reverseNum(n) {
//     // console.log(n.toString().split("").reverse().join(""));
//     return Number(n.toString().split("").reverse().join(""));
// }


function reverseNum(n) {
    
    let revno = 0;

    while (n > 0) {
        let digit = n % 10; 
        revno = revno * 10 + digit;
        n = Math.floor(n / 10);
    }

    // console.log(revno);
    return revno;
}

console.log(reverseNum(21));

// Write a JS function that checks whether a passed string is palindrome or not

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    return rev === str;
}

console.log(isPalindrome("121"));

// Write JS function that returns a passed string with letters in alphabetical order

function stralpa(str) {
    return str.split("").sort().join("");
}

console.log(stralpa("apple"));
console.log(stralpa("harsh"));

// Write a JS function that accepts a string as a parameter and converts the first letter
// of each word of the string to uppercase

function firstLetterUppercase(str) {
    
    let newArr = str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })

    return newArr.join(" ");
}

console.log(firstLetterUppercase("harsh is bad"));


// Write a JS function to get the number of occurences of each letter in specified string

function occurences(str) {
    let occurs = {};

    str.split("").forEach(function (ele) {
        if (occurs.hasOwnProperty(ele) === false) {
            occurs[ele] = 1;
        } else {
            occurs[ele]++;
        }
    });

    return occurs;
}

console.log(occurences("Apple"));
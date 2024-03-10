//1.Given a number. Write a recursive function that reverse the number. Return the new number.
    function numReverse(n) {
        let reversed = ""
        if (n === 0) {
            return reversed
        } else {
            reversed += n % 10
            return reversed + numReverse(Math.trunc(n / 10))
        }
    }
//2.Given a number and an array. Find the second occurrence of the number in the array. Consider that the occurrence of each element in the array is at least two. (recursive)
    function secondOccurrenceInArray(n, array, i = 0) {
        if (array[i] === n) {
            if (array.indexOf(n, i + 1) !== -1) {
                return array.indexOf(n, i + 1);
            }
        }
        return secondOccurrenceInArray(n, array, i + 1); 
    }
//3.Given a substring and a string. Find how many times the substring occurred in the string. (For getting substring of the string use str.substring(startIndex, endIndex),str.substr(startIndex, length) ) (recursive)
    function countOfSubstring(substring, str, i = 0) {
        if (str.indexOf(substring) === -1) {
            return 0
        } else {
            return 1 + countOfSubstring(substring, str.substring(str.indexOf(substring) + 1), i = 0)
        } 
    }
//4.Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot; have been replaced by '3.14'.
    function replacePi(str) {
        if (str.toLowerCase().indexOf('pi') === -1) {
            return str
        } else {
            str = str.toLowerCase().replace('pi', '3.14')
            return replacePi(str)
        }
    }
//5.Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
    function arrayFlatten(arr) {
        let result = []
        for (let item of arr) {
            if (!Array.isArray(item)) {
                result.push(item)
            } else {
                result = [...result, ...arrayFlatten(item)]
            }
        }
        return result
    }
//6.Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result. (recursive)
    function sumOfDigits(n) {
        if (Math.trunc(n / 10) === 0) {
            return n
        } else {
            n = Array.from(n.toString()).reduce((acc,el) => acc + +el,0)
            return sumOfDigits(n)
        }
    }

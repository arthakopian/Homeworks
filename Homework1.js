//1.Given a number. Print “odd” if the number is odd and “even” if it’s even.
let x=prompt("Give me any number")
if (x%2===0) {
    console.log("even")
}else {
    console.log("odd")
}

//2.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let a=prompt("Give me your first number")
let b=prompt("Give me your second number")
if (a%b===0 || b%a===0) {
    console.log("1")
} else {
    console.log("0")
}

//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

let m=+prompt()
if (m%10===0 || Math.trunc(m/10)===0) {
    console.log(alert(m))
}else {
    alert(String(+m%10)+String(+Math.trunc(m/10)))
}



//4.Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
alert("Give me five numbers and i tell you their average :)")
let c=+prompt("Give me your fisrt number")
let d=+prompt("Give me your second number")
let e=+prompt("Give me your third number")
let f=+prompt("Give me your fourth number")
let g=+prompt("Give me your fifth number")
let average=+(c+d+e+f+g)/5
alert(average)

//5.Given the following code rewrite it using only two if operators. (Hint: use logical operators).
var n=+prompt()
var i=0
var j=0
if (n%2===0 && !Math.floor(n/10)) {
        i+=1
}
if (n%3===0 && n%10===1) {
        j+=1
}



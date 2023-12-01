//1.Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that its digits product is equal to n. 
    function smallNumWithDigProdEqualn(n) {
        let result=Infinity  
        let resultStr
        for (let i = 1; i <= n; i++) {
            if (n%i===0) {
                resultStr=i+""+n/i
                result=Math.min(+resultStr,result)
            }
        }
        console.log(result)
    }     
//2.Find the biggest common divisor of two inserted numbers.
    function biggestCommonDivisor(num1,num2) {
        let result
        for (let i = 1; i <= num1; i++){
            if (num1%i===0) {
                for (let j = 1; j <= num2; j++) {
                    if (num2%j===0 && i===j) {
                        result=j
                    }
                }
            }
        }
        return result
}
//3.Given a number. Print all prime factors of the number.
    function isNumberPrime(num) {
        if (num<2) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num%i === 0) {
                return false
            }
        }
        return true
    } 


    function primeFactorsOfTheNum(num) {
        for (let i = 2; i <= num/2; i++) {
            if (num%i===0 && isNumberPrime(i)) {
                console.log(i)
            }
        }
    }
//4.Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2 * 1 , 0! = 1 ).
    function factorialOfNum(num) {
        let numFactorial=1
        for (let i = 0; i !== num; i++) {
            numFactorial*=(num-i)
        }
        return numFactorial
    }
//5.Given a number n ( n >= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2).
    function fibonaccisNumber(n) {
        let num1=0
        let num2=1
        let num
        if (n===0) {
            return num1
        } else if (n===1){
            return num2
        } else { 
            for (let i = 2; i <= n; i++) {
                num=num1+num2
                num1=num2
                num2=num
            }
            return num
        }
    }   
      

//6.Given a number n ( n > 0 ). Print Fibonacci series up to n.
    function fibonacciSeriesUntil(n) {
        for (let i = 0; fibonaccisNumber(i) < n; i++) {
            console.log(fibonaccisNumber(i))
        }
    }
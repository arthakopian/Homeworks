//1.Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.
    //for    
        function isHereThreeSuccessiveZeros(num) {
            let numStr=""+num
            for (let i = 1; i < numStr.length-1; i++) {
                if (numStr[i-1]==0 && numStr[i]==0 && numStr[i+1]==0) {
                    return "Yes"
                }
            }
            return "No"
        }
    //while        
        function isHereThreeSuccessiveZeros(num) {
            let numStr=""+num
            let i = 1
            while (i < numStr.length-1) {
                if (numStr[i-1]==0 && numStr[i]==0 && numStr[i+1]==0) {
                    return "Yes"
                }
                i++
            }
            return "No"
        }
//2.Insert a number. Remove all zeros from the number, except the last one and print the number. If there are at most one zero, print “Nothing to remove”. 
    //for 
        function removeAllZeros(num) {
            let numStr=""+num
            let numWithoutZero=""
            let countOfZeros=0
            for (let j = 0; j <numStr.length ; j++) {
                if (numStr[j]==0) {
                    countOfZeros++
                }
            }
            for (let i = 0; i < numStr.length-1; i++) {
                if (countOfZeros<=1) {
                    return “Nothing to remove”
                }else if (numStr[i]!=0) {
                    numWithoutZero+=numStr[i] 
                }
            }
                    console.log(`${numWithoutZero+=numStr[numStr.length-1]}`)
        }   
    //while 
        function removeAllZeros(num) {
            let numStr=""+num
            let numWithoutZero=""
            let countOfZeros=0
            let j = 0
            while (j <numStr.length) {
                if (numStr[j]==0) {
                    countOfZeros++
                }
                j++
            }
            let i = 0
            while ( i < numStr.length-1) {
                if (countOfZeros<=1) {
                    return “Nothing to remove”
                }else if (numStr[i]!=0) {
                    numWithoutZero+=numStr[i] 
                }
                i++
            }
                    console.log(`${numWithoutZero+=numStr[numStr.length-1]}`)
        }
//3.Insert a n positive number. Check number is prime or not. Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.
    //for
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
    //while 
        function isNumberPrime(num) {
            if (num<2) {
                return false
            }
            let i = 2
            while (i <= Math.sqrt(num)) {
                if (num%i === 0) {
                    return false
                }
                i++
            }
            return true
        }
//4.Insert a n positive number. Print the n-st prime number. 
    //for   
        function n_stPrimeNumber(n) {
            let countOfPrimeNumber=0
            let i
            for (i=2 ; countOfPrimeNumber !== n; i++) {
                if (isNumberPrime(i)) {
                    countOfPrimeNumber++
                }  
            }
            console.log(i-1) 
        }
    //while  
        function n_stPrimeNumber(n) {
            let countOfPrimeNumber=0
            let i=2
            while (countOfPrimeNumber !== n) {
                if (isNumberPrime(i)) {
                    countOfPrimeNumber++
                }
                i++
            }
            console.log(i-1) 
        }
//5.Insert two positive integers n and m between 1 and 10. Compute and print n^m.
    //if
        function nToThePowerOfm(n,m) {
            if (n>=1 && n<=10 && m>=1 && m<=10) {
                return n**m
            }
        }  
    //switch
        function nToThePowerOfm(n,m) {
            switch (true){
                case n>=1 && n<=10 && m>=1 && m<=10:
                        return n**m
            }
        }
      


//1.Given a number print its digits count. Use both loops (for, while)
    //for    
        let num=prompt('Give me a number')
        let numStr=Math.abs(num) + ""
        let sum=0
        for (let i=0; i<numStr.length ; i++) {
            sum+=1
            }
        alert(sum)
    //while        
        let num=prompt('Give me a number')
        let numStr=Math.abs(num) + ""
        let sum=0
        let i=0
        while (i<numStr.length) {
            i++
            sum+=1
        }
        alert(sum)
    //if
        let num=prompt('Give me a number')
        if (num<0) {
            alert(`${Math.abs(num)}`.length)
        } else {
        alert(num.length)
        }

//2.Count numbers of digit 9 in a number. Use both loops (for, while)
    //for 
        let sum=0
        for (let num=+prompt('Give me a number'); num !==0 ; num=Math.trunc(num/10)){ 
        if (num%10===9) {
            sum+=1
        } 
            }
        alert(sum)
    //while 
        let num=+prompt('Give me a number')
        let sum=0
        while (num !==0) {
            if (num%10===9) {
                sum+=1
            }
            num=Math.trunc(num/10)
        }
        alert(sum)
//3.Given two numbers. Print ony odd numbers between that numbers.
    //for
        let x=+prompt()
        let y=+prompt()
        if (x>y) {
            for (; y <= x; y++) {
            if (y%2===0) continue      
            console.log(y)
            }
        } else {
            for (; x <= y; x++) {
            if (x%2===0) continue      
            console.log(x)
            }
        }
    //while 
        let x=+prompt()
        let y=+prompt()
        if (x>y) {
            while (y <= x) {
                if (y%2 !==0) {
                    console.log(y)
                }
                y++
            } 
        } else {
            while (x <= y) {
                if (x%2 !==0) {
                    console.log(x)  
                }
                x++
            }
        }
//4.Given a number as input, insert dashes (-) between each two even numbers.
    //for   
        let number=prompt()
        let numberDashed=""
        for (let i =0; i < number.length ; i++) {
            numberDashed += number[i]
            if (i===number.length-1 && number[number.length-1]%2===0) break 
                if (number[i]%2===0) {
                    numberDashed +="-"             
                }  
            }
        alert(numberDashed)
    //while  
        let number=prompt()
        let numberDashed=""
        let i =0
        while (i < number.length) {
            numberDashed += number[i]
            if (i===number.length-1 && number[number.length-1]%2===0) break 
                if (number[i]%2===0) {
                        numberDashed +="-"             
                    }  
            i++
                }
        alert(numberDashed)
//5.Given a positive number. Print it in reverse order.
    //for
        let number=prompt()
        let numberReverse=""
        for (let i = number.length-1; i >= 0; i--) {
            numberReverse += number[i]
        }
        alert(numberReverse)
    //while
        let number=prompt()
        let numberReverse=""
        let i = number.length-1
        while (i >= 0) {
            numberReverse += number[i]
            i--
        }
        alert(numberReverse)




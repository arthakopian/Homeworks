//1.Given a string. Check whether the string is palindrome or not.
    function isPalindrome(text) {
        let textPalindrome=""
        for (let i = text.length-1 ; i>=0; i--) {
            textPalindrome+=text[i]
        }
        if (textPalindrome!==text || text==="" ) {
            return "No"
        } else {
            return "Yes"
        }
    }
//2.Given a string and symbols. Change first symbol by the second one in the string. 
    function changeSymbols(text,sym1,sym2) {
        let result=""
        for (let i = 0; i < text.length; i++) {
            if (text[i]===sym1) {
                result+=sym2
            } else {
                result+=text[i]
            }
        }
        return result
    }
//3.Insert a string. Create new string which is the mirror reverse of the inserted one around its center.
    function stringMirror(str) {
        let strMirror=""
        if (str.length%2===0) {
            for (let i = Math.trunc(str.length/2); i < str.length; i++) {
                strMirror+=str[i]
            }
            for (let i = 0; i < Math.trunc(str.length/2) ; i++) {
                strMirror+=str[i]
            }
        } else {
            for (let i = Math.ceil(str.length/2); i < str.length; i++) {
                strMirror+=str[i]
            }
            strMirror+=str[Math.trunc(str.length/2)]
            for (let i = 0; i < Math.trunc(str.length/2) ; i++) {
                strMirror+=str[i]
            }
        } 
        return strMirror
    }
//4.Print the following number pattern: function will take argument (in this case it is 5).
    function printNumberPattern(num) {
        let result=""
        for (let i = 1; i <=num ; i++) {
            result+=i
            console.log(+result)
            if (i===num) {
                for (let j = i; j >1; j--) {
                    result=Math.trunc(result/10)
                    console.log(result)
                }
            }
        }
    }
//5.Given an object. Invert it (keys become values and values become keys).       
    function invertObject(object) {
        let objectInverted={}
        for (let key in object){
            objectInverted[object[key]]=key
        }
        return objectInverted   
    }
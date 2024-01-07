//1.Method 'find'.
    function callBack(el, i, array) {
        return el === true
    }
    function myFind(callback, array) {
        for (let i = 0; i < array.length; i++) {
            const el = array[i]
            if (callback(el, i, array)) {
                return el
            }
        }
        return undefined
    }
//2.Method 'filter'.
    function callBack(el, i, array) {
        return el === true
    }
    function myFilter(callback, array) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            const el = array[i]
            if (callback(el, i, array)) {
                newArr.push(el) 
            }
        }
        return newArr
    }
//3.Method 'some'.
    function callBack(el, i, array) {
        return el === true
    }
    function mySome(callback, array) {
        for (let i = 0; i < array.length; i++) {
            const el = array[i]
            if (callback(el, i, array)) {
                return true
            }
        }
        return false
    } 
//4.Method 'every'.
    function callBack(el, i, array) {
        return el === true
    }
    function myEvery(callback, array) {
        for (let i = 0; i < array.length; i++) {
            const el = array[i]
            if (!callback(el, i, array)) {
                return false
            }
        }
        return true
    } 
//5.Method 'forEach'.
    function callBack(el, i, array) {
        return el === true
    }
    function myForEach(callback, array) {
        for (let i = 0; i < array.length; i++) {
            const el = array[i] 
        }
    }
//6.Method 'map'.
    function callBack(el, i, array) {
        return el === true
    }
    function myMap(callback, array) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            const el = array[i]
            newArr.push(callback(el, i, array)) 
        }    
        return newArr
    }
//7.Method 'reduce'.
    function myReduce(callback, initial,array) {
        let i
        let acc
        if (initial !== undefined) {
            acc = initial
            i = 0
        } else {
            acc = array[0]
            i = 1
        }
        for ( i; i < array.length; i++) {
            let el = array[i]
            acc = callback(acc, el, i, array)
        }
        return acc
    }
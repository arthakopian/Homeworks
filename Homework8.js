//1.Implement bubble sort with different loops (for, while).
    function bubbleSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                }
            }
        }
        return array
    }

    function bubbleSort(array) {
        let i = 0
        while (i < array.length - 1) {
            let j = 0
            while (j < array.length - i - 1) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                }
                j++ 
            }
            i++ 
        }
        return array
    }

    function bubbleSort(array) {
        let i = 0
        while (i < array.length - 1) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                }    
            }
            i++ 
        }
        return array
    }

    function bubbleSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let j = 0
            while (j < array.length - i - 1) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                }
                j++ 
            }
        }
        return array
    }
//2.Implement build in array sort method with bubble sort algorithm.

//I couldn't understand the condition

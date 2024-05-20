
function MyPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        
        promises.forEach((p, i) => {
            p.then(res => {
                count++
                result[i] = res
                if (promises.length === count) {
                    resolve(result)
                }
            }).catch(err => {throw err})
        })
    })
}

function MyPromiseSettled(promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        promises.forEach((p, i) => {
            p.then(res => {
                let resObj = {
                    status: "fulfilled",
                    value: res,
                }
                result[i] = resObj
                count++
                if (promises.length === count) {
                    resolve(result)
                }
            }).catch(err => {
                let rejObj = {
                    status: "rejected",
                    reason: err,
                }
                result[i] = rejObj
                count++
                if (promises.length === count) {
                    resolve(result)
                }
            })
        })
    })
}

function MyPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((p, i) => {
            p.then(res => {
                return resolve(res)
            }).catch(err => {
                return reject(err)
            })
        })
    })
}

function MyPromiseAny(promises) {
    return new Promise((resolve, reject) => {
        let count = 0
        let errorsArr = []
        
        promises.forEach((p, i) => {
            p.then(res => {
                return resolve(res)
            }).catch(err => {
                count++
                errorsArr.push(err)
                if (count === promises.length) {
                    reject(new AggregateError(errorsArr))            
                }
            })
        })
    })
}
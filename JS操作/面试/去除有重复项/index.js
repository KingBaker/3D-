let arr = [1,1,1,2,3,4,3,2,7,5,6,5]
function moveRepeat1(arr) {
    let obj
    let obj1
    let arr1 = []
    obj = arr.reduce((a, b) => (a[b] ? a[b]++ : a[b] = 1, a), {})
    obj1 = arr.reduce((a, b) => (a[b]=1, a), {})
    console.log(obj)
    console.log(obj1)
    for (let i in obj) {
        if (obj[i] === 1) {
            arr1.push(i)
        }
    }
    console.log(arr1)
}
moveRepeat1(arr)

function moveRepeat2(b) {
    let arr1 = []
    let obj = {}
     for (let i of b) {
        obj[i] ? obj[i]++ : obj[i] = 1
     }
     for (let i in obj) {
        if (obj[i] === 1) {
            arr1.push(i)
        }
    }
    console.log(arr1)
}
moveRepeat2(arr)

let uniqueArr = [...new Set(arr)].filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
console.log(uniqueArr)
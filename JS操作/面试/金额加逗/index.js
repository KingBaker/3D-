let a = 9999876678.875654
// let str = Number(a.toFixed(2)).toLocaleString()
let str = a.toLocaleString()


function formatPrice(price) {
    // let result = price.toString().match(/^\d+/)[0];
    // console.log(result)
    // let reg = /\B(?=(\d{3})+(?!\d))/g
    let s =  String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // s = s + price.toString().match(/\.\d+/)[0]
    console.log(s)
}
formatPrice(a)
console.log(str)
  
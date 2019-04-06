
// import {axios} from 'axios'

// new Promise((resolve,reject)=>{
//     resolve(0) 
// }).then(
//     num => {
//         console.log(num, 0);
//         for(let i = 0;i<5; i++) {
//             num += 1;
//         }
//         // return num
//         return Promise.reject((`sorry, contentType is not supported, \n 无法解析该数据格式，请查看列表支持项`))
//     }
// ).then(
//     err=> console.log(err,11111111)
// ).catch(
//     err => console.log(err,22222222222)
// )


// const parseDate = (num) => {

//     let str = num.toString();
//     let strArr = str.split('');
//     let res = '';
//     strArr.forEach((elem, index) => {
//         console.log(elem,res);
//         switch (index) {
//             case 3:
//                 res += elem + '年'
//                 break;
//             case 5:
//                 res += elem + '月'
//                 break;
//             case 7:
//                 res += elem + '日 '
//                 break;
//             case 9:
//                 res += elem + ':'
//                 break;
            
//             default:
//                 res += elem
//                 break;
//         }
//     })
//     return res;
//     // return str.substring(0,4) + '年' + str.substring(4,6) + '月' + str.substring(6,8) + '日 ' + str.substring(8, 10) + 
     
// }
// console.log(parseDate(201910090911));




// function getSize(num) {
//    let numStr = num.toString();
//    let floatSize = numStr.split('.')[1];
   
//    const oSize = (str) => {
//        const [a, b] = floatSize.split('e');
//        return b !== undefined 
//          ? (b.slice(0, 1) === '-'
//            ? a.length + Math.abs(parseInt(b))
//            : parseInt(b) - a.length > 0 
//              ? 0
//              : (a.length - parseInt(b))
//          )
//          : a.length
//    }
//    return floatSize !== undefined
//      ? oSize(floatSize)
//      : 0;
// }


// console.log(getSize('4.0'));




// var a = 1;
// var b = {
//   number: 1
// }
// function ca(a) {
//   num = 3
// }
// function cb(b) {
//   b.number = 3
// }
// ca(a);
// cb(b);
// console.log(a, b.number);
// a= {}
// a._proto_ = null
// console.log(typeof {}.toString);
// console.log(typeof Object.create(null).toString);
// console.log(typeof Object.create({}).toString);
// console.log(typeof a.toString);

// const obj = {
//     a: 1,
//     fn:()=>{
//         console.log(this);
//         console.log(this.a);
//     }
// }
// obj.fn()

axios.post('yourdomain/login', login_form).then(resource => {
    console.log(resource);
})
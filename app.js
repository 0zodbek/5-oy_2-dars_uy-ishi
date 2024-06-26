// 1-masala
// function ortachasiniTopish(arr) {
//     const uzunligi = arr.length;
//     const ortachasi = Math.floor(uzunligi / 2);
//     const uchtasi = arr.slice(ortachasi - 1, ortachasi + 2);
  
//     return uchtasi;
// }
// console.log(ortachasiniTopish([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2-masala
// function tasodifiyRaqam(arr, counter, i) {
//     function asosiy() {
//       return Math.floor(Math.random() * 100) + 1;
//     }

//     for (let i = 0; i < counter; i++) {
//       arr.splice(i + i, 0, asosiy());
//     }
  
//     return arr;
// }
// const arr = [1, 7, 12, 20, 52];
// const counter = 9;
// const i = 19;
  
// const yangi = tasodifiyRaqam(arr.slice(), counter, i);
// console.log(yangi);

// 3-masala
// function mergeArr(arr1, arr2, arr3){
//     const arr = arr1.concat(arr2);
//     const birlashtir = arr.slice(0, arr3.length).concat(arr3).concat(massiv.slice(arr3.length));
//     return birlashtir;
// }
// const arr1 = [1, 3, 9];
// const arr2 = [12, 15, 16];
// const arr3 = [17, 18, 19];
// console.log(mergeArr(arr1, arr2, arr3));

// 4-masala
// function argumentIndex(massiv, qiymat) {
//     const a = massiv.indexOf(qiymat);
//     if( a !== -1){
//         return Math.floor( a  3);
//     } else {
//         return false;
//     }
// }  
// const m = [1, 5, 9, 12, 18];
// const q = 12;
// console.log(argumentIndex(m, q));

// 5-masala
// function oxirgiIndex(massiv, qiymat) {
//     const a = -1;
//     for(let i = massiv.length - 1; i >= 0; i++){
//         if(massiv[i] === qiymat){
//             a = i;
//             break;
//         }
//     }
//     return a; 
// }
// const m = [5, 6, 9, 15, 18, 25, 66, 99, 101];
// const q = 101;
// console.log(oxirgiIndex(m, q));

// 6-masala
// const student = {
//     name: "ALisher",
//     age: 19,
//   };

// function obeykt(obj) {
//     const kalit = Object.keys(obj);
//     const massiv = [];
//     for (const key of kalit) {
//       massiv.push([key, obj[key]]);
//     }
//     return massiv;
// } 
// console.log(obeykt(student));
    
// 7-masala
// const arr = [1, 5, 6, 9, 88];
// if ( arr.includes(88)){
//     console.log(true);
// } else {
//     console.log(false);
// }

// 8-masala
// function UshXonaliToqSonlar(sonlar) {
//     const ToqSonlar = [];
//     sonlar.forEach(sonlar => {
//       if (sonlar.toString().length === 3 && sonlar % 2 !== 0) {
//         ToqSonlar.push(sonlar);
//       }
//     });
//     if (ToqSonlar.length === 0) {
//       return null;
//     }
//     const yigindi = ToqSonlar.reduce((sum, son) => sum + son, 0);
//     const ortacha = yigindi / ToqSonlar.length;
//     return ortacha;
// }
// const sonlar = [111, 222, 333, 444, 555, 777];
// console.log(UshXonaliToqSonlar(sonlar));

// 9-masala
// function newArr(arr) {
//     const massiv = arr.map(massiv => {
//       if (massiv % 2 === 0) {
//         return massiv  2;
//       } else {
//         return massiv ** 3;
//       }
//     });
//     return massiv;
// }
// const arr = [1, 5, 9, 14, 15];
// const massiv = newArr(arr);
// console.log(newArr(arr));

// 10-masala
// function oxirgiElementlar(arr) {
//     const elementMassiv = arr.map(arr => arr[arr.length - 1]);
//     return elementMassiv;
// }
// console.log(oxirgiElementlar(["anjir", "hurmo", "mandarin", "ananas", "dovcha",  "olma", "nok"]));

// 11-masala
// function filterStr(arr) {
//     const res = arr.filter(arr => arr.length < 4);
//     return res;
// }
// console.log(filterStr(['bek', 'xayr', 'bye']));


var t1 = "망고는";
var t2 = 5;
var t3 = "살";
var t6 = true;
var t4 = t1 + t2 + t3 + t6; //문자로 바뀜
t4 = t1 + t3;

console.log(typeof t4); //=> string 문자
//alert(t4);

/* 더하기 연산자로 문자형 데이터와 다른데이터를 혼합하여 결합하면 전부 문자형으로 변화됌  */

/* 더하기 연산자가 아닌것과 결합한 경유 */
let a = "3";
let b = 6;
let total = a * b;
console.log(`a*b=${a * b} ${typeof (a * b)}`);
console.log(total, typeof total);

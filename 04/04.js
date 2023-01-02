/* 익명함수, 이름이 없는 함수 =>식별자에 함수를 할당하는 방식 */
const mango = function () {
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
};
console.log(typeof mango);
console.log(mango, alert);
console.log(document.write);
mango();

//매개변수 있는 함수
const sum = function (a, b) {
  let c = a + b;
  document.write(`<h1>${c}</h1>`);
};

sum(1, 5);

/* 즉시실행함수 => 한번실행하고 종료할 때 사용 */
(function () {
  document.write(`<h1>매개변수가 없는 즉시실행함수</h1>`);
})();

(function (x, y) {
  document.write(`<h1>매개변수 ${x}+${y}</h1>`);
})(10, 20);

/* 화살표함수, 람다식 */
/* 익명함수를 줄여서 씀 */
//const hi=function(){
//    return "안녕하세요"
//}

const hi = () => {
  return "안녕하세요";
};
alert(hi());

//실행문이 한줄 일 경우 아래와 같이 괄호와 리턴을 생략할 수 있다.
const hi2 = () => "하위";
alert(hi2());

/* 인자가 있는 화살표 함수 */
let sum1=function(a,b){
    return a+b
}
document.write("두수의 합 "+sum1(10,20))

let sum2=(a,b)=>a+b;
document.write("두수의 합 "+sum2(10,20))
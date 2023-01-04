//var x; => 변수의 선언
var x = 10; //=> 변수 x를 초기화 한다. 키원드넣고 식별자쓰고 값까지 넣은 것
function display() {
  console.log("x is " + x);
  console.log("y is " + y);
  var y = 10;
}
var y = 20;
display();
console.log(y);

Exam1(); //오류발생
Exam(); //B
var Exam1 = function () {
  alert("A");
}; //악명함수 => 명명함수가 먼저 실행후 익명함수가 실행

function Exam() {
    //여러번 사용하는 방식에 좋음 (이곳저곳에)
  alert("B");
} //선억적 함수는 먼저 실행됌 위로 올라감(호이스팅)
Exam();


/* var 과 선언적함수는 호이스팅 발생(당근마켓 끌올) 
    => 그래서 ES6 에서 나온게 let,const 
    익명함수는 호이스팅 발생
*/
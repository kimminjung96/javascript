/* 대화상자 만들어보기 */
/* 
1. alert
2. confirm
3. prompt
*/
var num1 = 30 - 20;
var num2 = 20;
num1 = 50;
/* num1 >= num2 ? alert("참일경우") : alert("거짓일경우"); */

/* var result=confirm("자바스크립트를 좋아하세요?")
console.log(result);
var theText=result?"네":"아니요"
document.write(theText) */

/* var input=prompt("생년월일을 입력하세요.","")
document.write(input) */

//prompt로 반환되는 값은 문자로 인식

let gender = prompt("성별을 알려주세요", "");
let age = prompt("나이를 알려주세요", "");

//Number(a) a를 숫자로 바꾸고 그것을 다시 a에 할당 =>a=Number(a)
age = Number(age);
console.log(typeof age);

let result1 = age >= 20 && age <= 29 && gender == "여" ? "20대여성" : "아님";
document.write(result1);

//prompt 함수로 반환되는 값은 string 이므로 계산식을 사용해야 할 경우 자료형을 변환해야 한다.

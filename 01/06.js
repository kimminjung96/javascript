//데이터형 활용
//문자자료형 string

//let x;
//let y;
//두개를 한번에 쓸 수 있음
let x, y;
x = 7 + 5;
y = "7" + 5;
/* document.write(x+y) */
document.write(x); //12
document.write("<br>"); //태그도 문자열
document.write(y); //글자7+글자5 (""안에는 글자로 인식하고 +로 묶으면 옆에 숫자도 글자로 인식함!)
document.write("y"); //글자 Y 출력

/* 자바스크립트에서 표현식을 작성할때 문자는 따옴표로 묶고 변수나 숫자는 안묶는다. */
/* 자바스크립트에서는 태그도 문자열 */

//메서드 => 임자(주인)가 있는 함수(=객체에 저장되어 있는 함수)
//document.write()
const wakeup = "선문아 밥먹고 학교가야지";
document.write("<h1 style='color:green'>", wakeup, "</h1>"); // 쉼표는 + 연산자와 같은 역할

//es6 에 추가된 템플릿 리터럴 => 익스에서 사용 안됌
document.write(`<h1 style='color:green'>${wakeup}</h1>`);

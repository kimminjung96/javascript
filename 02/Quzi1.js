/* var a = prompt("국어점수는?");
var b = prompt("영어점수는?");
var c = prompt("수학점수는?");

var add = a + b + c;

var result = a > 60 && b > 60 && c > 60 && add / 3 > 70 ? "true" : "false";
document.write(result); */

/* 
let kor = Number(prompt("국어점수는?", "0"));
let eng = Number(prompt("영어점수는?", "0"));
let math = Number(prompt("수학점수는?", "0"));

let avg = (kor + eng + math) / 3; //평균
let result = avg >= 70 && kor >= 60 && eng >= 60 && math >= 60;

document.write(`<h1>${result}</h1>`)
*/

/* var a = prompt("신장", "");
var b = prompt("체중", "");

var c = (a - 100) * 0.9;

var result = b > c ? "적정 몸무게 이상" : "적정 몸무게 미달";

document.write(result)
 */

/* let height = prompt("당신의 신장은?", "0");
let weight = prompt("당신의 체중은?", "0");

let bmi = (height - 100) * 0.9;

let result = weight > bmi ? "적정 몸무게 이상" : "적정 몸무게 미달";

document.write(result);
 */

/* var cm = Number(prompt("inch로 변환할 cm를 적으셈", ""));
var inch = cm * 0.393701;

alert(inch); */

const rawInput=prompt('cm단위의 숫자를 입력하세요.')
const inch=Number(rawInput)*0.393701;
alert(`${inch}inch 입니다.`)

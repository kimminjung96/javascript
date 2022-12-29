/* 두수의 크기비교 */

/* var a = Number(prompt("첫번째 숫자", ""));
var b = Number(prompt("두번째 숫자", ""));

if (a > b) {
  alert("첫번째 숫자가 더 큽니다.");
} else if (a < b) {
  alert("두번째 숫자가 더 큽니다.");
} else if (a == b) {
  alert("숫자가 같습니다.");
} else {
  alert("숫자가 아닙니다.");
} */

/* 위에 조건문과 달라서 안됌 
switch(a  b){
    case  :alert("첫번째 숫자가 더 큽니다.");
    break;
    case  :alert("두번째 숫자가 더 큽니다.");
    break;
    case  :alert("숫자가 같습니다.");
    break;
} */

/* 3의 배수 */
let userNum = prompt("숫자를 입력하세요.");
//3의 배수인지를 확인하여 결과를 alert로 출력

//먼저 사용자가 입력을 햇나 안햇나 부터 확인을 해주어야 함!
/* if (userNum !== null) {
  if (userNum % 3 == 0) {
    alert("3의 배수입니다.");
  } else {
    alert("3의 배수가 아닙니다.");
  }
} else {
  alert("입력이 취소 되었습니다.");
} */

/* 위의 문장을 if else 삼항연산자를 사용하여 작성하기 */
if (userNum !== null) {
  alert(userNum % 3 === 0 ? "3의 배수입니다." : "3의 배수가 아닙니다.");
} else {
  alert("입력이 취소 되었습니다.");
}

console.log(userNum);

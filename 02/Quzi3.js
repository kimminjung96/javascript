/* let a = Number(prompt("숫자를 입력하세요",""))

document.write(a)
switch(a){
    case a*2 || 0 : document.write("짝수");
    break; 
    case a*2 -1 : document.write("홀수");
    break; 
    default : document.write("숫자를 입력하세요");
    break; 
} */

const input = Number(prompt("숫자를 입력하세요", "숫자"));
/* input % 2 => w2로 나눈 나머지가 0 false 나머지가 1 true */

/* switch (input % 2) {
  case 0:
    alert("짝수입니다.");
    break;
  case 1:
    alert("홀수입니다.");
    break;
  default:
    alert("숫자가 아닙니다.");
} */

if (input % 2 == 0) {
  alert("짝수입니다.");
} else if (input % 2 == 1) {
  alert("홀수입니다.");
} else {
  alert("숫자가 아닙니다.");
}

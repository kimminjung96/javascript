/* switch */
/* 조건 case :  */

let day="월";
day="목"
document.write(day+"요일에는")
switch(day ){
    case "월" : document.write("오전 10시 수업시작")
    break; //조건에따라 사용 여부 체크
    case "화" : document.write("<br> 오후 02시 수업시작")
    break;
    case "수" : document.write("<br> 오후 04시 수업시작")
    break;
    case "목" : document.write("<br> 오전 10시 수업시작")
    break;
    case "금" : document.write("<br> 오전 11시 수업시작")
    break;
    default : document.write("월요일부터 금요일까지만 입력하세요!!!")
}
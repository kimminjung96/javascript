/* 자리배치도 */
/* 총입장객과 한줄에 앉을 인원을  입력받아 좌석배치도를 출력하는 프로그램을 만드시오 */

//전체 입장객
var memNum = prompt("입장객은 몇 명인가요?");
//한줄에 앉을 사람
var colNum = prompt("한 줄에 몇 명씩 앉습니까?"); //td


if (memNum % colNum === 0) {
  //rowNum => tr
  rowNum = parseInt(memNum / colNum); 
  //parseInt() => 숫자만 추출 , 소숫점 버림(정수만 추출)
  //Number() => 한글이 포함되면 숫자로 변환 안됌
} //td의 갯수가 딱 맞아 떨어지는 경우
else {
  rowNum = parseInt(memNum / colNum + 1); //홀수인경우밖에 없음
} //td의 갯수가 딱 맞아 안떨어지는 경우

document.write("모두"+rowNum+"개의 줄이 필요합니다.")

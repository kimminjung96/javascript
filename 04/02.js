/***
힘수는 기능 , 할일
* 선언문
  function 함수이름 (매개변수 : parameter){실행문}  

*실행문
  힘수이름(인자 : argument)
*/

//함수의 선언
function h2() {
    //안녕하세요를 4번 출력
    for(i=1;i<=4;i++){
        document.write(`<h2>Hello${i}</h2>`)
    }
}
//실행
h2();

function h3(a ,b,c,d) {
    //안녕하세요를 4번 출력
    for(i=1;i<=4;i++){
        document.write(`<h3>${a} ${b} ${c} ${d}</h3>`)
    }
}
//실행
h3("망고야", "밥먹고","산책가고","샤워하자");

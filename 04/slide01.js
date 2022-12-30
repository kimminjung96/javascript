$(function () {
  //자료가 여러개일 경우 원래 for문으로 작성해주어야하지만 제이쿼리에는 자동으로 배열로 만들어줌
  //console.log(visual,button);
  const visual = $("#brandVisual>ul>li");
  const button = $("#buttonList>li");
  let current = 0; //현재보고있는 놈
  let id; //setIntervalId =>자동
  const speed = 3000;

  //버튼클릭함수
  button.click(function () {
    //$(this) => 제이쿼리 객체화
    //index() 인덱스번호 받아오기
    let btnIdx = $(this).index();
    //console.log(btnIdx);

    //선택된 것만 적용하기
    //1. 다 지우고 걔만 적용
    button.removeClass("on");
    $(this).addClass("on");
    move(btnIdx);
  });

  //시간마다 실행할 함수
  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      //next =1
      //console.log(visual.length-1);
      if (next == visual.length) {
        next = 0;
      }
      console.log(next);
      button.eq(next).trigger("click");

      //console.log(current++);
    }, speed);
  }

  //슬라이드 이동시키는 함수
  function move(btnIdx) {
    if (current == btnIdx) {
      return;
      //밑에꺼 실행시키지 않는다.
    }
    //console.log("무브:" + current);
    //console.log("next"+next);
    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    //cu =>현재보고잇는 비주얼
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });

    current = btnIdx;
  }

  /* 자동재생 멈춤 */
  $("#brandVisual,#buttonList").mouseenter(function () {
    clearInterval(id);
  });
  $("#brandVisual ,#buttonList").mouseleave(function () {
    timer();
  });

}); //jQuery

/* //자바스크립트 문법
document.addEventListener("DOMContentLoaded",function(){
    //하나만 바뀜 => querySelectorAll 사용
    const visual=document.querySelector("#brandVisual>ul>li");
    visual.style.backgroundColor="white"

}) */

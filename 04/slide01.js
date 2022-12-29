$(function () {
  //자료가 여러개일 경우 원래 for문으로 작성해주어야하지만 제이쿼리에는 자동으로 배열로 만들어줌
  //console.log(visual,button);
  const visual = $("#brandVisual>ul>li");
  const button = $("#brandVisual>ul>li");
  let current = 0; //현재보고있는 놈
  let id; //setIntervalId =>자동
  const speed = 3000;

  //버튼클릭함수
  button.click(function () {});

  //시간마다 실행할 함수
  timer();
  function timer() {
    setInterval(function () {
      let next = current + 1;
      console.log(visual.length-1);
      if (next == visual.length-1) {
        next = 0;
      }
      move(next);
      //console.log(current++);
    }, speed);
  }

  //슬라이드 이동시키는 함수
  function move(next) {
    console.log("next"+next);
    let cu = visual.eq(current);
    let ne=visual.eq(next)
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.stop().animate({left:"0%"})
  }
}); //jQuery

/* //자바스크립트 문법
document.addEventListener("DOMContentLoaded",function(){
    //하나만 바뀜 => querySelectorAll 사용
    const visual=document.querySelector("#brandVisual>ul>li");
    visual.style.backgroundColor="white"

}) */

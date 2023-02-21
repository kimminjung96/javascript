$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speed: 500,
    captions: true,
    controls: true,
    nextText: '😍<i class="fa-solid fa-arrow-right"></i>',
    prevText: '<i class="fa-solid fa-arrow-left"></i>😍',
    autoControls: true,
    auto: true,
    startText: "⏸",
    stopText: "▶",
  });

  $(".videoSlider").bxSlider({
    video: true,
    onSliderLoad: function (currentIndex) {
      console.log(currentIndex); //div //클론(복제)인애가 0임
      $(".videoSlider div")
        .eq(currentIndex + 1) //+1을 해서 현재 내가 보고있는 애랑 맞춤
        .find("video")
        .get(0)
        .play();
    },
    /* 비디오슬라이드가 넘어가도 소리가 들리는걸 막음 */
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      //slideElement 현재 보고있는 화면
      console.log($slideElement, oldIndex, newIndex);
      $slideElement.siblings().find("video").get(0).pause();
      $slideElement.find("video").get(0).play();
    },
  });

  $(".active").bxSlider({
    auto: true,
    infiniteLoop: true,
    //열자마자최초
    onSliderLoad: function (currentIndex) {
      $(".active li")
        .eq(currentIndex + 1)
        .addClass("active");
    },
    //한번 돌고나서 실행
    onSlideAfter: function ($slideElement) {
      $slideElement.addClass("active").siblings().removeClass("active");
    },
  });

  /* 슬라이드가 넘어가도 동영상 재생시간만틈 재생을 하므로 오프된 슬라이드는 재생중지한다.
      1. 동영상 제어 메서드
      2. bx 슬라이드에서 on된 요소 찾기(반환받기)
      
      모든플로그인에는 활성화 되는 이름이 있음
    */
});

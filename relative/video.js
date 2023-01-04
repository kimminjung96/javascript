$(function () {
  /* 
        1.변수에 저장할 것들
        -화면 사이즈 window widht,height
        -비디오 사이즈 video width,height

        2.함수로 만들것들
        -비디오풀사이즈 videoResizeFn
    */
   
   //브라우저를 열었을때 초기값을 받아옴
  var winW = $(window).innerWidth(),
    winH = $(window).innerHeight(),
    vidW = $("#main-video").innerWidth(),
    vidH = $("#main-video").innerHeight();
  //console.log(winW, winH, vidW, vidH);

  //setInterval(videoResizeFn,100)

  $(window).resize(function () {
    //resize()=>사이즈,크기가 바뀔때 실행
    videoResizeFn();
  });

  function videoResizeFn() {
    //값을 다시 재할당
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();
    vidW = $("#main-video").innerWidth();
    vidH = $("#main-video").innerHeight();
    console.log(`winW=${winW}winH=${winH}vidW=${vidW}vidH=${vidH}`);

    //창이 넓어서 비디오의 너비가 모자란 경우
    //창이 길어서 비디오의 길이가 모자란 경우

    // 1. 비디오박스 높이 = 창높이
    $(".main-video").css({ width: "100%", height: winH });
    // 2. 창높이가 비디오보다 길때 (밑여백 생기는 경우) => 비디오를 화면높이에 맟춰 늘리고 비디오의 넘치는 너비를 overflow:hidden준다
    if (winH > vidH) {
      $("#main-video").css({ height: winH, width: "auto" });
    }
    //3. 창너비가 비디오보다 넓을때
    if (winW > vidW) {
      $("#main-video").css({ width: winW, height: "auto" });
    }
    //4. 정렬
    /* "margin-left"  => 따움표를 쓰면 사용가능*/
    $("#main-video").css({ marginLeft: (winW - vidW) / 2, marginTop: (winH - vidH) / 2 });
  }
});

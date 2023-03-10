$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speed: 500,
    captions: true,
    controls: true,
    nextText: 'π<i class="fa-solid fa-arrow-right"></i>',
    prevText: '<i class="fa-solid fa-arrow-left"></i>π',
    autoControls: true,
    auto: true,
    startText: "βΈ",
    stopText: "βΆ",
  });

  $(".videoSlider").bxSlider({
    video: true,
    onSliderLoad: function (currentIndex) {
      console.log(currentIndex); //div //ν΄λ‘ (λ³΅μ )μΈμ κ° 0μ
      $(".videoSlider div")
        .eq(currentIndex + 1) //+1μ ν΄μ νμ¬ λ΄κ° λ³΄κ³ μλ μ λ λ§μΆ€
        .find("video")
        .get(0)
        .play();
    },
    /* λΉλμ€μ¬λΌμ΄λκ° λμ΄κ°λ μλ¦¬κ° λ€λ¦¬λκ±Έ λ§μ */
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      //slideElement νμ¬ λ³΄κ³ μλ νλ©΄
      console.log($slideElement, oldIndex, newIndex);
      $slideElement.siblings().find("video").get(0).pause();
      $slideElement.find("video").get(0).play();
    },
  });

  $(".active").bxSlider({
    auto: true,
    infiniteLoop: true,
    //μ΄μλ§μμ΅μ΄
    onSliderLoad: function (currentIndex) {
      $(".active li")
        .eq(currentIndex + 1)
        .addClass("active");
    },
    //νλ² λκ³ λμ μ€ν
    onSlideAfter: function ($slideElement) {
      $slideElement.addClass("active").siblings().removeClass("active");
    },
  });

  /* μ¬λΌμ΄λκ° λμ΄κ°λ λμμ μ¬μμκ°λ§ν μ¬μμ νλ―λ‘ μ€νλ μ¬λΌμ΄λλ μ¬μμ€μ§νλ€.
      1. λμμ μ μ΄ λ©μλ
      2. bx μ¬λΌμ΄λμμ onλ μμ μ°ΎκΈ°(λ°νλ°κΈ°)
      
      λͺ¨λ νλ‘κ·ΈμΈμλ νμ±ν λλ μ΄λ¦μ΄ μμ
    */
});

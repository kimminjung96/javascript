let gnbLiA = $(".gnb>li>a");
let aH = $(".sub>li>a").outerHeight() - 3; //outerHeight 보더랑패딩을 더한 높이값
let aHL = aH.length;
console.log(aHL);

gnbLiA.click(function () {
  //아코디언 만들기 =>접히면 안됌
  /* 
     $(".sub").removeClass("on");
     $(this).next().addClass("on");
    */
   
 /* .sub a 높이를 받아와서 하기 */
  $(".sub").css("height", "0px");
  $(this)
    .next()
    .css("height", aH * 4 + "px");

    

    
  //토글로 만들기
  function toggle() {
    if (!$(this).next().hasClass("on")) {
      $(this).next().addClass("on");
    } else {
      $(this).next().removeClass("on");
    }

    /* 같은것들
    console.log($(this).next().hasClass('on')!==true);
    console.log($(this).next().hasClass('on')===false); 
    console.log(!$(this).next().hasClass('on')); 
    */
  }
});

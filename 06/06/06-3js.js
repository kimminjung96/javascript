let gnbLiA = $(".gnb>li>a");
let aH = $(".sub>li>a").outerHeight()-3;
gnbLiA.click(function () {
  let tg = $(this);
  //tg옆의 하위 a의 총 길이
  let subA = tg.next().find("a").length;
  $(".sub").css("height", "0px");
  tg.next().css("height", aH * subA + "px");

});

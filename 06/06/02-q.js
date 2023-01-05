$(function () {
  //id선택
  $("#one").css("background", "yellow");
  var el1 = $("#one"); //id를 변수에 저장하고 변수에 css매서드를 적용할 수 있음
  el1.css("color", "red");

  //태그선택
  //$("li").css("background","pink")

  var el2 = $("li");
  el2.css("background", "pink");
  console.log(el2[1]); //[] 이건 자바스크립트 문법
  //제이쿼리로 사용하고싶으면 제이쿼리객체화를 시켜줘야함
  $(el2[1]).css("color", "white");
  //제이쿼리 메서드를 사용해서 선택
  el2.eq(1).css("color", "blue");

  //forEach와 같음
                    //인덱스,값
  el2.each(function (idx, element, c) {
    console.log(idx, element, c);
    el2.eq(idx).css("background", "yellow"); //숫자로 반환되는 애
    $(element).css("color", "pink"); //값으로 반환되는 애
  });
  /*  $.each(function(el2,idx,element){
    console.log(idx,element,c);
    el2.eq(idx).css("background",'yellow') //숫자로 반환되는 애
    $(element).css("color",'pink') //값으로 반환되는 애

  }) */

  var el3 = $('.highlight')
  el3.eq(1).css({color:"blue", width:500, margin:'auto', background:"pink"})//키:값 =>속성

  //배열중 특정번째만 적용
});

/**
 * .tab-menu 버튼그룹 >a 요소
 * .tab-content 패널그룹 >div 요소
 ***/

var menus = $(".tab-menu a");
var panels = $(".tab-content > div");

//console.log(menus);
//console.log(panels);

menus.eq(0).addClass("active")
panels.eq(0).show()


//콜백함수
menus.click(function (e) {
  //이벤트 핸들러 EventHandler (브라우저 이벤트) => event object(이벤트가 발생한 대상의 정보를 가진 객체)
  //console.log(e); //e 이벤트 객체
  e.preventDefault(); //a 태그의 기본 이벤트 속성을 막음

  let tg = $(this); //this => 나를 호칭한 객체(menus)
  let currentLink=tg.attr("href");
  console.log(currentLink);

  panels.hide();
  $(currentLink).show();

  menus.removeClass("active");
  tg.addClass("active");
});


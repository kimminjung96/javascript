/**
 * .tab-wrapper 버튼과 패널의 부모
     .tab-menu 버튼그룹 >a 요소
     .tab-content 패널그룹 >div 요소
 ***/

var tabWrapper = $(".tab-wrapper");

tabWrapper.each(function () {
  var currentElement = $(this);
  var menus = currentElement.find(".tab-menu a");
  var panels = currentElement.find(".tab-content > div");

  menus.eq(0).addClass("active");
  panels.eq(0).show();

  menus.click(function (e) {
    e.preventDefault();

    let tg = $(this);
    let currentLink = tg.attr("href");
    console.log(currentLink);

    panels.hide();
    $(currentLink).show();

    menus.removeClass("active");
    tg.addClass("active");
  });
});

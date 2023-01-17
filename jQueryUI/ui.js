$(function () {
  $("#departure").datepicker({
    dateFormat: "yy-mm-dd", //input 의 value 표시방법
    showOtherMonths: true,
    //showMonthAfterYear: true,
    //showWeek: true,
    changeYear: true,
    changeMonth: true,
    showOn: "both",
    buttonImage: "https://cdn-icons-png.flaticon.com/512/9224/9224299.png",
    buttonImageOnly: true,
    yearSuffix: "년",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    showAnim: "bounce",
  });
  $("#airport").autocomplete({
    source: airports,
  });
  $("#meal").selectmenu({
    width: 400,
  });
  $("#bags").css("display", "block").buttonset();
  $("#seatTypes").buttonset();
  $("#next").button({
    icons: { secondary: "ui-icon-circle-arrow-e" },
  });
  $("#telme").dialog({
    autoOpen: false,
    width: 500,
  });
  $("#telmeLink").click(function(e){
    e.preventDefault();
    $('#telme').dialog("open",$("p[title")).tooltip()
  })
});

$(function () {
  $("#departure").datepicker({
    dateFormat: "yy-mm-dd", //input의 value표시방법
    showOtherMonths: true, //빈공간의 전,후 날짜를 표시할지 말지
    //showMonthAfterYear: true, 
    //showWeek:true,
    changeYear: true,
    showOn:'button',
    buttonImage:"https://png.pngtree.com/png-vector/20190228/ourlarge/pngtree-calendar-icon-design-template-vector-illustration-png-image_710441.jpg",
    buttonImageOnly:true,
    yearSuffix:'년',
    monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    dayNamesMin:["일","월","화","수","목","금","토",],
    showAnim:"bounce"
  });
});

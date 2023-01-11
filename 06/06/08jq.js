const section = $("section");
const progressBar = $(".progress .bar");
const text = $(".progress .txt");
const windowHeight = $(window).height();
let scrollTop;

$(window).scroll(function () {
  scrollTop = $(this).scrollTop();
  let scrollHeight = section.height();
  let scrollRealHeight = scrollHeight - windowHeight;

  let scrollPercent = (scrollTop / scrollRealHeight) * 100;

  text.text(Math.floor(scrollPercent) + "%");
  progressBar.css("width",scrollPercent + "%")
  
});

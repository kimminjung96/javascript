var sub=document.querySelector(".sub")
sub.style.transition="height 0.5s";
sub.style.overflow="hidden";
sub.style.height="0px";

document.querySelector(".gnb>li>a").addEventListener('click',function(){
    var k = this.nextElementSibling.style.height;
    if (k === "0px") {
      this.nextElementSibling.style.height="100px" //단위가 다르면 오류남
    } else {
        this.nextElementSibling.style.height="0px"
    }
  
})


/* 
var sub = $(".sub");

sub.css("display", "none");
$(".gnb>li>a").click(function () {
  //this => $(".gnb>li>a")
  var k = $(this).next(".sub").css("display");
  //디스다음에 .서브의 css디스플레이속성을 k에 담음
  if (k === "none") {
    $(this).next().slideDown();
  } else {
    $(this).next().slideUp();
  }
});
 */
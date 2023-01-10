/* addEventListener("load",function(){
    var bt=this.document.querySelector("h1").nextElementSibling;

    bt.onclick=function(){
        //document.querySelector("h1").className="red" //하나만
        //document.querySelector("h1").classList.remove('orange','class')
        document.querySelector("h1").classList.toggle('toggle')
        document.querySelector("h1").classList.replace('orange','red')
        
    }


    document.querySelector('h1').classList.add("red")
    //nextElementSibling 다음에 오는 형제요소
    document.querySelector('h1').nextElementSibling.classList.add("red")
    document.querySelector('h1').nextElementSibling.nextElementSibling.classList.add("orange")
    document.querySelector('h1').nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red")

}) */

$(function () {
  $("h1").addClass("bg-gra");
  $("h1").next().addClass("bg-gra");
  $("h1").next().next().addClass("bg-red");
  $("h1").next().next().next().addClass("bg-red white");
});
$(function () {
  var bt = $("h1").next().next().next();
  bt.click(function () {
    //hasClass 는 안에 값을 가지고 있으면 ture 혹은 false를 반환해줌 =>조건문에 씌인다.
    if ($(this).hasClass("bg-red")) {
      $(this).removeClass("bg-red").addClass("gray");
    }
    $("h1").toggleClass("bg-orange");
    /*해봣는데안되네 ㅎ
     if ($('h1').hasClass("bg-red")===true) {
        $(this).removeClass("bg-red").addClass("gray");
      } */
    
  });
  $("h1").addClass("bg-gra").removeClass("bg-gra");
  $("h1").next().addClass("bg-gra");
  $("h1").next().next().addClass("bg-red");
  $("h1").next().next().next().addClass("bg-red white");
});

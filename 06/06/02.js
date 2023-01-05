//id선택
var el1 = document.getElementById("one");
el1.style.background = "yellow";
//var el1 = document.getElementById("one").style.background = "yellow"; 로 쓸수도 있지만 쓰지않움....

//태그선택
var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul");

for (var i = 0; i < el2.length / 2; i++) {
  el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
  el2[i].style.backgroundSize = "20px";
}

/* 익스에서 안됌 */
/* for(var e of el3 ) {
  e.style.background="skyblue"
} */

//클래스선택
var el4 = document.getElementsByClassName("highlight");
el4[1].style.cssText = "width:500px; margin:auto; background:pink"; //css 속성 여러개 => css에 추가X, 덮어씌워짐(초기화후 수정되는것)

//querySelector
var el5 = document.querySelector(".highlight");
console.log(el5); //=>단일 요소만 반환함
el5.style.color = "red";

var el6 = document.querySelectorAll(".highlight");
console.log(el6); //=>배열을 반환함
/* 
for (i = 0; i < el6.length; i++) {
  el6[i].style.color = "yellow";
}

for(i of el6){
	i.style.color = "yellow";
} 

el6.forEach(function(i){
	i.style.color="yellow"
}) 
*/

for (i = 0; i < el6.length; i++) {
  el6[i].style.color = "yellow";
}

for (a of el6) {
  a.style.background = "red";
}

el6.forEach(function (b) {
  b.style.fontSize = "2em";
});

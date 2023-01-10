const textZone = document.querySelector("#textZone");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

/* 함수의 실행(호출)시점과 수행 동작(실행문)을 확인 */

/* btn1.addEventListener('click',function(){
    textZone.style.color="blue"
}) */
btn1.onclick = function () {
  textZone.style.color = "blue";
  textZone.classList.add("blue");
};
btn2.onmouseover = function () {
  textZone.style.backgroundColor = "yellow";
};
btn2.onmouseout = function () {
  textZone.style.backgroundColor = "white";
};
/* 포커스발생시 onfocus */
btn2.onfocus = function () {
  textZone.style.backgroundColor = "yellow";
};

function textZone4() {
  textZone.style.color = "green";
  textZone.style.fontWeight = "bold";
  textZone.style.fontSize = "1.5em";
}
btn3.onmouseover = textZone4;
btn3.onfocus = textZone4;
//property listener//
/* 하나의대상에 같은 이벤트를 주면 밑에꺼만 실행됌 (덮어씌여짐) */
btn3.onclick = function(){alert("clicked")};
btn3.onclick = function(){
    textZone.style.marginLeft = "80px";
};
btn3.addEventListener("click",function(){
    alert("clicked");
    textZone.style.marginLeft = "80px";
});
const listWrap=document.querySelector("#listWrap");
const list1=document.querySelector(".list1");
listWrap.addEventListener('mouseenter',function(){list1.style.display="block"})
listWrap.addEventListener('mouseleave',function(){list1.style.display="none"})


let hover=document.querySelector(".hover");
//hover.addEventListener('mouseenter',function(){this.style.color="aqua"})
//hover.addEventListener('mouseleave',function(){this.style.color="red"})
/* this는 (function(함수)을 부른대상) 이벤트를 발생시킨 대상을 가르킴 */

/* hover.addEventListener('mouseenter',function(){
    console.log(this);
    this.style.color="aqua"
}) 
*/
hover.addEventListener('mouseenter',()=>{
    //이벤트를 화살표 함수로 작성시 this 는 객체 자신이 아닌 윈도우를 가르킴
    console.log(this);
    //this.style.color="aqua"
})



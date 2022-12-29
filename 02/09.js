/* $("선택자") = document.querySelector('선택자') */
/* var heading = document.querySelector('h1');
heading.style.color="red"; */

/* 
document.querySelector("h1").style.color="yellow"
document.querySelector("h1").style.backgroundColor="pink"
document.querySelector("h1").onclick=function(){
document.querySelector("h1").style.backgroundColor="red"
} */

//반복적인 것을 변수(상수)에 담아 간략하게 줄임
/* 
const h1=document.querySelector("h1");

h1.style.color="yellow"
h1.style.backgroundColor="pink"
h1.onclick=function(){
    h1.style.backgroundColor="red"
}
 */
//$("h1").css({"color":"red", "background-color":"yellow"})

/* 조건문 */
var your_sex="남자"
document.write("당신은"+ your_sex + "이르모")
/* if(조건){조건이 참일 때 실행} */
if( your_sex == "남자"){
    document.write("반바지를 입으세요.")
}
if(your_sex == "여자"){
    document.write("긴바지를 입으세요")
}
/* 현재 시간이 18시 이전이면 해를 출력하고 18시 이후면 달을 출력 */
let current=new Date();
console.log(current);

let day_time=current.getHours();
//let day_time=current.getHours()+8;
console.log(day_time);

if(day_time<18){
    document.write(`<img src="./day.gif" style="display:block; margin:0 auto;">`);
    document.querySelector('body').style.backgroundColor="skyblue"
}
if(day_time>=18){
    document.write(`<img src="./night.gif" style="display:block; margin:0 auto;">`);
    document.querySelector('body').style.backgroundColor="black"
}


const container = document.querySelector(".container");
const child = document.querySelector(".child");
const containerWidth = container.clientWidth;
//console.log(containerWidth);

//get ~~ 읽기전용이다. 값을 받아오는것만 가능 바꾸지 못함
let childStyle = Number(window.getComputedStyle(child).getPropertyValue("padding-left").split("px", 1)[0]);
//split => px문자 기준으로 1개를 잘라냄 0번째 요소 취득;//getPropertyValue => 속성값을 가져오는 애

const calc = containerWidth - childStyle;

//console.log(calc);
child.style.width = calc + "px";

let pseudo = window.getComputedStyle(child, ":before").content;
//console.log(pseudo);

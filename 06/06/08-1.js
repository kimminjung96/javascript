const section = document.querySelector("section");
let  progressBar= document.querySelector(".bar");
let text = document.querySelector(".txt");
const windowHeight=window.innerHeight;
let scrollTop;
 //문서의 높이
const scrollHeight = section.clientHeight;

window.addEventListener('scroll',function(){
    scrollTop = window.scrollY; //스크롤버튼이 top에서 움직인 값
    let scrollRealHeight = scrollHeight - windowHeight;
    let scrollPercent = (scrollTop/scrollRealHeight)*100
    //Math.floor() =>자리수 버림
    let scrollAmount = Math.floor(scrollPercent)
    console.log(scrollAmount);

    text.innerHTML = scrollAmount+"%"
    progressBar.style.width = scrollAmount+"%"
})
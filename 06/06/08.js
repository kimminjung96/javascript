//section 변수에 담기
const section = document.querySelector("section");
//변수에 담아야 할 것들=변하는 것들
const progressBar = document.querySelector(".progress .bar");
const text = document.querySelector(".progress .txt");
//창높이
const windowHeight = window.innerHeight;
//스크롤양을 담을 변수
let scrollTop;

window.addEventListener("scroll", function () {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  //console.log(scrollTop);
  /* 퍼센트 구하기 
        1.화면 높이 windowHeight
        2.문서 총높이 scrollHeight 변수로 선언 후 .clientHeight 
        3.scrollRealHeight스크롤 양 (2번과1번을 뺀 높이)
    */
  let scrollHeight = section.clientHeight;
  let scrollRealHeight = scrollHeight - windowHeight;

  /* 퍼센트로 바꾸기 (부분 / 전체 - 화면스크롤의 움직이는 너비 )*100 */
  let scrollPercent = (scrollTop / scrollRealHeight) * 100;
  console.log(Math.floor(scrollPercent));
  text.textContent = Math.floor(scrollPercent)+"%";
});

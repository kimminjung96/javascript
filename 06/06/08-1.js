const section = document.querySelector("section");
let progressBar = document.querySelector(".bar");
let text = document.querySelector(".txt");
const windowHeight = window.innerHeight;
let scrollTop;
const scrollHeight = section.clientHeight; //문서의 높이

/* 진행율 계산 */
function getPercent(scrollTop) {
  let scrollRealHeight = scrollHeight - windowHeight;
  let scrollPercent = (scrollTop / scrollRealHeight) * 100;
  let scrollAmount = Math.floor(scrollPercent); //Math.floor() =>자리수 버림
  if (scrollAmount >= 100) {
    scrollAmount = 100;
  }
  console.log(scrollAmount);
  render(scrollAmount);
}

/* 화면출력 함수 */
function render(scrollAmount) {
  text.innerHTML = scrollAmount + "%";
  progressBar.style.width = scrollAmount + "%";
}

/* 스크롤이벤트 함수 */
window.addEventListener("scroll", function () {
  scrollTop = window.scrollY; //스크롤버튼이 top에서 움직인 값
  getPercent(scrollTop);
});

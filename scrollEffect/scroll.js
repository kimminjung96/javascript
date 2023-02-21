/* 1단계: 스크롤양 확인하기 */
/* 3단계: 스크롤양이 gap보다 크면 nav에 .sticky 추가 */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = nav.querySelectorAll(".gnb>li");
  const sideN = document.querySelectorAll(".sideNav>li");

  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    animate(scrollTop);
  });

  const animate = (sct) => {
    //sections
    sections.forEach((el, idx) => {
      let sectionTop = el.offsetTop;
      if (sct > sectionTop - gap) {
        //배경색을 부드럽게 바꾸기(gasp 사용)
        gsap.to(el, { backgroundColor: "#8d3dae" });
		
		gnb.forEach((obj) => {
			obj.classList.remove("on");
		  });
		  gnb[idx].classList.add("on");
        //el.classList.add("sectionIn");
      }
    });
    //sticky-nav
    //(조건)?(참일때실행):(거짓일때실행)

    //조건변경 => nav의 높이만큼 스크롤이 내려오면 sticky
    //알아야할것 => 요소의 높이 얻기.clientHeight =>element의 높이를 얻는옴
    /***
     * innerHeight,height등은 window/ document객체의 속성이기 때문에 위에서 부터 찾아서 높이를 취득해야함
     * element.clientHeight =>element의 높이를 얻는옴
     */
    console.log(nav.clientHeight);
    //sct >= gap ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    sct >= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    /*     if(sct>=gap){
      nav.classList.add("sticky");
      if(sct>=gap*2){
        nav.style.background='blue';
      }
    }else{
      nav.classList.remove("sticky");
      nav.style.background='rgba(255,0,255,0.5)';
    }
 */
  };
  /* 그럼 이번에는 클릭안된 li의 on을 삭제합니다 */
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      gnb.forEach((obj) => {
        obj.classList.remove("on");
      });
      el.classList.add("on");
    });
  });
  sideN.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      sideN.forEach((obj) => {
        obj.classList.remove("on");
      });
      el.classList.add("on");
    });
  });
}
js();

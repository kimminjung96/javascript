const gnb = document.querySelectorAll(".gnb>li");
const gnbAnc = document.querySelectorAll(".gnb>li>a");
const sideNav = document.querySelectorAll(".sideNav>li");
const sideNavAnc = document.querySelectorAll(".sideNav>li>a");
const sections = document.querySelectorAll(".section");
let winH = window.innerHeight;
let gap = 90;
let winScrollTop;
//console.log(parseInt(winH * 0.9));//0.9가 제일 나아서

//스크롤이벤트를 감지하는 함수
window.addEventListener("scroll", function () {
  //winScrollTop = (익스호환 || document.documentElement.scrollTop || 현재표준(안맞추면 이것만 써두 됌)) => 호환성
  //winScrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + parseInt(winH * 0.9);
  winScrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  sectionAni(winScrollTop);
  //console.log(winScrollTop);
  sideNavAni();
});

//gnbAnc 클릭이벤트 바인딩(바인딩=요소를연결)
gnbAnc.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

//sideNavAnc 클릭이벤트 바인딩
sideNavAnc.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

//sideNav에 애니메이트효과
function sideNavAni() {
  document.querySelector(".sideNav").style.top = "-20%";
  setTimeout(() => {
    document.querySelector(".sideNav").style.top = parseInt((winH - document.querySelector(".sideNav").clientHeight) / 2) + "px";
  }, 400); //0.4s
}

//sections에 대한 스크롤양 전달받는 함수
const sectionAni = (winSct) => {
  /* if (winScrollTop > sections[0].offsetTop) {
    document.querySelector('nav').classList.add("sticky");
  }  */
  winScrollTop > sections[0].offsetTop ? document.querySelector("nav").classList.add("sticky") : document.querySelector("nav").classList.remove("sticky");
  //console.log(winScrollTop, sections[0].offsetTop);
  sections.forEach((o, idx) => {
    let scrollTop = o.offsetTop;

    //console.log(o.dataset.delay);//delay값을 받아옴
    const delay = o.dataset.delay;
    //dataset => 사용자정의속성 (data-마음대로 작명)

    if (winScrollTop > scrollTop - gap) {
      //section에 delay속성이 없는 경우
      if (delay == undefined) {
        //hasChildNodes 자식요소로 있으면 트루 없으면 펄스
        if (o.hasChildNodes(".parallax")) {
          console.log(o.hasChildNodes(".parallax"));
          parallaxAni();
        } else {
          o.classList.add("sectionIn");
        }
      } else {
        setTimeout(() => {
          o.classList.add("sectionIn");
        }, delay);
      }

      //gnb 활성화
      gnb.forEach((el) => {
        el.classList.remove("on");
      });
      gnb[idx].classList.add("on");
      sideNav.forEach((el) => {
        el.classList.remove("on");
      });
      sideNav[idx].classList.add("on");
    }
  });
};

function parallaxAni() {
  const parallax = document.querySelectorAll(".parallax>.pbox");
  parallax.forEach((o) => {
    const delay = o.dataset.delay;
    o.classList.remove("sectionIn");
    setTimeout(() => {
      o.classList.add("sectionIn");
    }, delay);
  });
}

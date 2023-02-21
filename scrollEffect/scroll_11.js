const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = nav.querySelectorAll(".gnb>li");
  const sideN = document.querySelectorAll(".sideNav>li");

  function removeOn(obj) {
    obj.forEach((o) => {
      o.classList.remove("on");
    });
  }

  function smooth(el) {
    document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  }

  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    animate(scrollTop);
  });

  const animate = (sct) => {
    sections.forEach((el, idx) => {
      let sectionTop = el.offsetTop;
      if (sct > sectionTop - gap) {
        gsap.to(el, { backgroundColor: "#8d3dae" });
        removeOn(gnb);
        removeOn(sideN);

        gnb[idx].classList.add("on");
        sideN[idx].classList.add("on");
      }
    });
    console.log(nav.clientHeight);
    sct >= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
  };

  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      smooth(el);

      removeOn(gnb);
      el.classList.add("on");
    });
  });

  sideN.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      smooth(el);

      removeOn(sideN);
      el.classList.add("on");
    });
  });
}
js();

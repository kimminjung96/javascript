(function () {
  let g_containerInViewport;
  init();
  //초기화함수(함수의 호출)
  function init() {
    setStickyContainersSize();
    bindEvents();
  }
  //휠이벤트 바인드
  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  //스티키요소가 화면에 보이고 있는지를 확인할 함수
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return console.log(document.documentElement.clientHeight);
  }

  //스티키박스의 크기확인
  function setStickyContainersSize() {
    document.querySelectorAll(".sticky-container").forEach((container) => {
      // scrollWidth => 숨겨진 영역까지 포함한 크기를 리턴 (숨겨진 가로스크롤 너비)
      const setStickyContainerHeight = container.querySelector("main").scrollWidth;
      //console.log(setStickyContainerHeight);
      container.setAttribute("style", "height:" + setStickyContainerHeight + "px");
    });
  }

  //휠 이벤트 제어
  function wheelHandler(e) {
    //console.log(e)
    //스티키요소의 화면 진입여부를 확인
    //반환값을 순환이 가능한 객체로 만들어 새배열로 저장
    const containerInViewport = Array.from(document.querySelectorAll(".sticky-container")).filter(
      function(container){
        return isElementInViewport(container)
      }
    )[0];
    if(!containerInViewport){
      return;
    }
    let isPlaceHoderBelowTop = containerInViewport.offsetTop<document.documentElement.scrollTop;
    //.sticky-container의 상단좌표를 스크롤보다 작은지 비교

    /**
     * querySelector,querySelectorAll => nodeList로 반환
     * getElementById,getElementsByClassName => HTMLCollections 로 반환
     * 
     * iterable => Array.from //.filter()를 사용하기 위함
     * **/
   
  }
})();

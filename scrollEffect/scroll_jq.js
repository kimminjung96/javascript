/* 1단계: 스크롤양 확인하기 */
/* 3단계: 스크롤양이 gap보다 크면 nav에 .sticky 추가 */
const gap = 500;
/* 2단계: 제이쿼리 */
function jq() {
  const sections = $("section");
  let scrollTop;

  $(window).scroll(function () {
    scrollTop = $(this).scrollTop();
    animate(scrollTop);
  });

  const animate = (sct) => {
    /* 내장함수 정해진 자리 */
    /* array.forEach(element,index) 
      $(array).each(index,element)
    */
    sections.each((idx, el) => {
      /* el이 제이쿼리 객체로 반환되지 않고 일반태그로 반환되서 매번 반환값을 객체로 변환해야함
      idx를 .eq 메서드에 넣어서 작성함
      */
      let tg = sections.eq(idx);
      if (sct > tg.offset().top - gap) {
        tg.addClass("sectionIn");
      }
    });
  };
}
//jq();

//console.log(window);
//window.open("popup.html","배너","width=300,height=300,left=50,top=10");

function expandingWindow(website) {
  let winWidth = window.screen.availWidth;
  let winHeight = window.screen.availHeight;
  let sizer = window.open("", "", "left=0,top=0,scrollbar=yes");

  for (let sizeWidth = 1; sizeWidth < winWidth; sizeWidth += 5) {
    //sizer.resizeTo(사이즈바꾸는)
    sizer.resizeTo(sizeWidth, 500);
    /* for (let sizeHeight = 1; sizeHeight < winHeight; sizeHeight += 5) {
      sizer.resizeTo(sizeHeight, 500);
    } */
  }
  sizer.location = website;

  //console.log(winWidth, winHeight);
  /* availHeight 작업표시줄 뺀 화면크기 */
  /* console.log(`화면크기 알아내기  width: 창크기(주소창 포함여부)
    window.outerWidth: ${window.outerWidth}/
    window.innerWidth: ${window.innerWidth}/
    screen: 모니터크기(작업표시줄)
    screen.width: ${screen.width}/
    screen.availWidth: ${screen.availWidth}/`); */
}

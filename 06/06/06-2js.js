let gnbLiA = document.querySelectorAll(".gnb>li>a");
//clientHeight 패딩을 포함한 높이
const aHeight = document.querySelector(".sub a").clientHeight -3;
for (let i = 0; i < gnbLiA.length; i++) {
  let item1 = gnbLiA[i];
  item1.addEventListener("click", function () {
    let tg = this;
    let allSub = document.querySelectorAll(".sub");
    let tbSub = tg.nextElementSibling;
    let tgAHeight=tbSub.querySelectorAll("li")
    for (j = 0; j < allSub.length; j++) {
      let item2 = allSub[j];
      item2.style.height = "0px";
      for(k=0;k<tgAHeight.length;k++){
          tbSub.style.height = aHeight * tgAHeight.length  + "px";
      }
    }
  });
}

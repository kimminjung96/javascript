const cursor = document.querySelector("#cursor");
const cursorStyle = window.getComputedStyle(cursor);

const Kitty1 = document.querySelector("#mouse1");
const KittyStyle1 = window.getComputedStyle(cursor);
const Kitty2 = document.querySelector("#mouse2");
const KittyStyle2 = window.getComputedStyle(cursor);
const Kitty3 = document.querySelector("#mouse3");
const KittyStyle3 = window.getComputedStyle(cursor);

//console.log(cursorStyle[0],cursorStyle.width);
//console.log(cursorStyle.width.split("px","1"));

addEventListener("mousemove", function (event) {
  let cSize = [cursorStyle.width.split("px", "1"), cursorStyle.height.split("px", "1")];
  /* let kSize1 = [KittyStyle1.width.split("px", "1"), KittyStyle1.height.split("px", "1")];
  let kSize2 = [KittyStyle2.width.split("px", "1"), KittyStyle2.height.split("px", "1")];
  let kSize3 = [KittyStyle3.width.split("px", "1"), KittyStyle3.height.split("px", "1")]; */
  //console.log(cSize);

  //마우스가 움직일때 포인터의 좌표값 얻기
  //얻어낸 좌표를 dom 요소에 할당
  let pointer = event;
  let pointerPosition = [pointer.clientX, pointer.clientY];
  let pObj = {
    pintX: pointer.clientX,
    pintY: pointer.clientY,
  };

  //console.log(pp);
  //console.log("x" + pointer.clientY);
  //console.log("y" + pointer.clientX);
  cursor.style.marginLeft = -(cSize[0] / 2) + "px";
  cursor.style.marginTop = -(cSize[1] / 2) + "px";
  //cursor.style.left = pointerPosition[0] + "px";
  //cursor.style.top = pointerPosition[1] + "px";
  cursor.style.left = pObj.pintX + "px";
  cursor.style.top = pObj.pintY + "px";
  Kitty1.style.left = pObj.pintX + "px";
  Kitty2.style.top = pObj.pintY + "px";
  Kitty3.style.top = pObj.pintY + "px";
});

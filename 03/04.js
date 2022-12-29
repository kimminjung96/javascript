//for(초기값; 조건식; 증감식){}
/* for (let i = 0; i < 5; i++) {
  document.write(`<div> ${i}번째 반복입니다.</div>`);
} */

/* for (var i = 6; i >= 1; i--) {
  //document.write(`<h${i}> h${i} 재미있는 자바스크립트 </h${i}>`)
  document.write("<h" + i + ">h" + i + "재미있는 자바스크립트</h" + i + ">");
} */

//구구단
/* for(let i=1; i<=9; i++){
    document.write(`<div> 5X${i}=${5*i} </div>`)
} */

let i = 5;
for (let j = 1; j <= 9; j++) {
  let result = "<div>"+i + "x" + j + "=" + j * i +"</div>";

  document.write(result)
}

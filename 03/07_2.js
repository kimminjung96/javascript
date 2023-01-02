document.write("<br>");

var memNum = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉습니까?");

var row = Math.ceil(memNum / colNum); //소숫점 올림 // 줄 갯수

console.log(`인원 수 : ${memNum}`);
console.log(`자리에 앉는 인원 수 : ${colNum}`);
console.log(`줄 수 : ${row}`);

let set = 0;

// if (memNum % colNum === 0) {
//   rowNum = parseInt(memNum / colNum);
// } else {
//   rowNum = parseInt(memNum / colNum + 1);
// }

document.write("<table>");
for (i = 1; i <= row; i++) {
  document.write("<tr>");

  for (j = 1; j <= colNum; j++) {
    set = set + 1;
    document.write("<td>" + set + "명</td>");
  }
}

// document.write("모두" + rowNum + "개의 줄이 필요합니다.");

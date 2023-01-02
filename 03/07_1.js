const menNum = prompt("몇명이 앉을 지 정해주세요");
const colNum = prompt("한줄에 몇개의 좌석을 배치하시겠습니까?");
let count = 0;
let rowNum;

if(menNum%colNum===0){
  rowNum = parseInt(menNum / colNum);
}
else{
  rowNum = parseInt((menNum/ colNum)+1);
}
document.write('<table>');
for(let i = 1; i<=rowNum;i++){
  document.write("<tr>");
  for(let j = 1; j<=colNum; j++){
    count += 1;
    if(count <=menNum){
      document.write(`<td>좌석${count}</td>`);
    }
    else{
      document.write(`<td></td>`);
    }
  }
}
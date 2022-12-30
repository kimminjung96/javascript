//1~10 짝수끼리더하기
var i;
var n = 10;
var sum = 0;
for (i = 1; i <= n; i++) {
  if (i % 2 === 1) {
    continue; //통과
  }
  console.log(i);
  sum += i;
  //sum = sum + i;
  console.log("sum :" + sum);
  document.write("<br>"+sum)
}

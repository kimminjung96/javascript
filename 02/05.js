let x = 10,
  y = 20,
  z = "10";
document.write(`x >= y : ${x >= y} <br>`); //10 >= 20 false
document.write(`x &gt; y : ${x > y} <br>`); //10 > 20 false
document.write(`x &lt; y : ${x < y} <br>`); //10 < 20 true
document.write(`x != y : ${x != y} <br>`); //10 != 20 true =>10은 20이 아니다 true

document.write(`<br>`);

document.write(`x != z : ${x != z} <br>`); //10 != "10" false =>10은 "10"이 아니다 (같다고 나옴)
document.write(`x !== z : ${x !== z} <br>`); //자료형까지 비교

document.write(`<br>`);

document.write(`x == z : ${x == z} <br>`); //얕은비교
document.write(`x === z : ${x === z} <br>`); //깊은비교 자료형까지 비교

document.write(`x = z : ${x = z} <br>`); //z를 x에할당
console.log(typeof(x)); //string


const color = ["yellow", "red", "green", "pink", "blue"];
let i = 0;

function colorBg() {
  //.getElementsByTagName => 복수로 태그를 가져오는 애 [몇번째인지 적어줘야함]
  let bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.style.backgroundColor = color[i];
  i++;
  if (i >= color.length) {
    i = 0;
  }
  console.log(i);
}

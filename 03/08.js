var i = 1;
while (i <= 10) {
  document.write(i + "<br>");
  i++;
}
//조건, 할일 , 증감식 이 분리

/***
 * while 로 구구단 5단 만들기
  */

var j=1
while(j<=9){
    document.write("5X"+j+"="+j*5+"<br>")
    j++
}

/***
 * do while
 * => 최초 실행은 무조건 실행
 * 
 * 1부터 10까지의 합
 * * */

let x=0;
let total=0;
do{
    x++;
    total = total+x;
    document.write(x)

    if(x!=10)document.write("+")
    //if(x==10)document.write("=")
}while(x<10)
document.write("="+total)

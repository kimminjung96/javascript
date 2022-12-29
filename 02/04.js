let x = 1;
document.write(x++); //x=x+1 //1(2)=1+1; =>후위 연산자 `다음에 출력할때 값이 찍힘`
document.write("<br>");
document.write(x); //2
document.write("<br>");
document.write(x++); //2(3)
document.write("<br>");
document.write(x++); //3(4)
document.write("<br>");
document.write(x++); //4(5)
document.write("<br>");
document.write(x); //5

//전위연산
x = 1;
document.write("<hr>", ++x); //2
document.write("<br>", ++x); //3
document.write("<br>", ++x); //4
document.write("<br>", ++x); //5
document.write("<hr>", x++); //5(6)

let y=1;
document.write(`<h1>${y--} <br> ${y}<br> ${--y}</h1>`) //y(1)= y(1)-1

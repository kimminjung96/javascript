//전역변수
let output = "";
for (i = 1; i < 10; i++) {
    //지역변수
  for (let j = 0; j < i; j++) {
    output=output+ "*";
  }
  output=output+"<br>"
}
document.write("<br>"+output );


/* let output = "";
for (i = 1; i < 10; i++) {
    output=output+ "*";  
    document.write("<br>"+output );
}
 */

/* let output = "";
for (i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    output += "*";
  }
  document.write(output + "<br>");
} */
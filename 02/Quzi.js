/* var a = 3000;
var b = 7000;
var c = 2000;

var add = (a+b+c >=10000)? `${10000-(a+b+c)} 초과`:"돈관리 잘햇어영"

document.write(add) */


const price1=3000
const price2=7000
const price3=2000

const total =price1+price2+price3
//console.log(price1,price2,price3,total);
const result=total>1000? total-10000 +'원 초과' :"돈관리 잘햇어영"


document.write(result)
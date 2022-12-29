/***
 * 배열의 선언1
 * 빈배열 선언후 값 할당
 ****/

let str = [];
//자바스크립트가 문자형은 배열로 다룸 (문자열)
str = "선문아그만자";
document.write(str);
document.write("<br>");
document.write(str[0] + str[1] + str[3 - 1] + str[str.length - 1] + "<hr>");

//배열의 총길이
document.write(str.length); //6

/***
 * 배열의 생성2
 **/
const arr = [];
arr[0] = "우";
arr[1] = "영";

//console.log(arr);
document.write("<br>" + arr[0] + arr[1] + str[2] + str[3] + str[4] + str[5]);

const arr1 = [273, "String", true, function () {}, {}, [273, 106]];
//console.log(arr1[5][0]);

const arr2=[,,,]
arr2[1]="망"
//console.log(arr2);

/***
 * 배열의 생성3
 **/
//new Array 새로운배열을 생성하겠따.
const arr3=new Array(1,2,3)
console.log(arr3[arr3.length-2+1]);

const arr4=new Array(3);
console.log(arr4);

const fruits=['배','사과','키위','바나나']
fruits[4]="소세지"
document.write('<br>'+fruits.length)
document.write('<br> 준호가 먹은 과일은'+fruits[1] +"입니다.")
document.write('<br> 준호는 오늘'+fruits+"를 먹었습니다."+fruits[3]+"가 제일 맛있었습니다.")



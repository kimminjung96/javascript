/* 변수의 유효범위 : scope */

let total = ""; //전역변수
let sum = (a, b) => {
  //let total=a+b; //새 그릇 (전역변수 let total 과 다른 변수)
  total = a + b; //원래그릇에 재할당
};

sum(1, 2);
document.write("두수의 합 : " + total);

/* return 문의 역할 1 => 값을 함수 밖으로 전달 */
let sum1 = (a, b) => {
  return a + b;
};
document.write("<hr>두수의 합 : " + sum1(10, 20));

/* return 은 안써도 들어있음 
    => return 에 값을 작성하지 않아도 undefined를 반환함
*/
(function () {
  console.log("helllo");
})();

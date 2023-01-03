/* forEach : 배열의 요소를 콜백함수를 활용하여 반복순환 */
const arr = [213, 543, 7564, 234, 2356, 65, 234];
//arr.forEach(인자로 함수가 들어가야함)

/* for in (index) // for of (value) */
arr.forEach(function (value, index, array) {
  console.log("value :" + value, "index :" + index, "array :" + array);
});

/* filter : 원하는 값만 골라보기 */
let words = ["스폰지밥", "뚱이", "다람이"];
const result = words.filter(function (value, index, array) {
  return value.length >= 3;
});

document.write(result);

/* map : 배열의 값을 새 값과 연결해서 새 배열로 저장 */

//words = words.map(function (value, index, array) {
//  return "<br>" + value + "🧡💛💚";
//});
words = words.map((value, index, array) => {
  return "<br>" + value + "🧡💛💚";
});
document.write(words);
document.write(words[0]);

/* .filter 를 사용하여 arr배열에서 짝수만 출력하기 */
const even = arr.filter( (value)=> {
  return value % 2 == 0;
});
document.write("<br>"+even);

const item = ["사과", "배", "한라봉", "바나나"];

document.write(`원래 배열 : ${item} <br>`);

/* 인덱스번호로 제거 */
//array(배열).splice(시작할[index번호],삭제할 요소의 갯수)
item.splice(2, 1);
document.write(` 배열 : ${item} <br>`);

const animals = ["강아지", "고양이", "보노보노", "곰"];
document.write(`<p>동물은 ${animals} 입니다.</p>`);

/* indexOf() => 인덱스 번호로 반환 / 없으면 -1로 반환하는 함수 */
const index = animals.indexOf("보노보노");
//console.log(index);
animals.splice(index, 1);
document.write(`<p>동물은 ${animals} 입니다.</p>`);

//animals[animals.length] = "스폰지밥";
       //함수(인자,인자) =>함수호출
animals.splice(animals.length, 0, "스폰지밥"); //추가
document.write(`<p>동물은 ${animals} 입니다.</p>`);

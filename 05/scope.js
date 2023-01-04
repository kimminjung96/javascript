//전역변수에 값을 담는다.
//콘솔을 옮긴다.
//리턴문에 sum을 담는다.
//다른 함수에 인자로 전달

let sum="전역"; //전역변수
function addNumber() {
	let sum = "지역"; //지역변수이므로 함수블록안에 갖혀서 실행안됨
}
addNumber();
console.log(sum);
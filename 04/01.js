/* 1. 객체 생성 */
var dog = new Object();
dog = {
  /* key값이 함수가 아니면 속성 property(프로퍼티)라고 함  */
  /* 값의 이름(key) : 값(value)*/
  name: "공주",
  age: 7,
  features: "요크셔",
};
//arr.length
document.write(`${dog.name}는 ${dog.age}살`);

/* 2. 객체 생성 */
const baby = { name: "망고", features: "말티즈" };
document.write(`<br> ${baby.name}는 ${baby.features}입니다.`);

/* 3. method */
const pet = {
    //객체안에서의 this는 객체를 가르킴
  name: "망고",
  /*            (값을 받음 = 매개변수) =>인자가 변할 때 마다 값이 바뀜 */
  eat: function (food) {
    //this.name은 eat이 아니라 pet을 가르킴
    document.write(`<br> ${this.name}는 ${food}를 좋아해요`);
  },
};

/* eat 함수에 값(인자 = 아규먼트)을 전달 */
pet.eat("연어")
pet.eat("닭가슴살")
pet.eat("고구마")
// pet.eat(function(){
   // 함수전달 가능
// })

/* 
 함수문(명명함수)
 함수식(익명.즉시실행.화살표 함수)
*/

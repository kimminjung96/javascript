let x = 75;
let y = 87;
let z = x + y;

//x = x + y; => 중복되는 x를 없애고 x+를 앞으로 빼옴
//x+=y; //값의 재할당

//console.log(z);
//console.log(x); //162

//      x 에 재할당 되서 값으 바뀜 
//합계: ${(x += y)} 평균:${x/2}
document.write(`영어점수:${x} <br> 수학점수:${y} <br> 합계: ${(x += y)} 평균:${x/2}`);

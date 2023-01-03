const 테스트=function(배열,콜백함수){
    for(const 값 of 배열){
        콜백함수(값)
    }
}

const 함수=function (콜백매개변수){
    document.write(`${콜백매개변수}번째 와씨  <br>`)
}
테스트([18,47,13,22,63,],함수)
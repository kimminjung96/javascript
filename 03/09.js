for(let i=0;true;i++){
    //무한반복
    alert(i+"번째 반복입니다.")
    const isContinue=confirm("계속하시겠습니까?")
    if(!isContinue){
        //isContinue 가 false면 종료
        //break; //중지
        continue;//통과
    }
}

document.write("<br>반복문 종료")
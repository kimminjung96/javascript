/* if else if */
const date = new Date();
const hour = date.getHours(); //0 ~24

if(hour < 11){ //0~10
    alert("아침먹고 학교가야지!")
}else if(hour < 15){ //11~24 =>11~14 
    alert("점심먹어야해!")
}else{ //15~24  
    alert("저녁먹고 자야지!")
}
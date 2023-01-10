const textZone=$('textZone')
const btn1=$('#btn1')
const btn2=$('#btn2')
btn1.click(function(){const btn2=$("#btn2")

    textZone.classList("color","blue")
})
btn2.mouseover(function(){
    textZone.css("color","yellow")
})
/* btn3.on("",function(){

}) */
//두개 이상의 이벤트 연결(이벤트 바운딩)
const btn3=$("#btn3");
/* btn3.mouseover(function(){
    textZone.css("color","green")
    textZone.css("back","red")
}) */

/* btn3.addEventListener("mouseover focus",function(){
    textZone.css("color","green")
    textZone.css("background-color","red")
}) */

//이벤트도 다르고 실행문도 다름
btn3.on({
    "mouseover focus" : function(){
        textZone.css("color","green")
        textZone.css("background-color","red")
    },
    "click" : function(){
        textZone.css("color","red")
        
    },
})


//hover(함수2개 필수 들어왓을때,나갔을때)
$("#listWrap").hover(function(){
    $(".list1").css("display","block")
    $(this).css("background","red")
},function(){
    $(".list1").css("display","none")
    $(this).css("background","yellow")
})
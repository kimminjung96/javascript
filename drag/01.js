      //이미지를 움직이는 함수
      function movingImg(e, objToMove){
        console.log('e :',e);
        //console.log('objToMove :',objToMove);
        //objToMove.width/2 죄표가 왼쪽위에 잇으니
        objToMove.style.left = e.clientX - objToMove.width/2+"px";
        objToMove.style.top = e.clientY - objToMove.height/2+"px";
        
      }

      //윈도우로드 실행 함수
      window.onload = function () {
        //alert("윈도우가 로드되고 - 이건 함수와 연결")
        const sample = document.getElementById("sample");
        sample.onmousedown = function () {
          //onmousedown 마우스 클릭시 발생
          let self = this; /* 이것 이라는 의미도 있지만 => 이벤트핸들러(onmousedown)와 대상객체(sample)를 연결해줌 */
          /* 화살표함수 => 이벤틀핸들러 안에서 this는 window를 가르킴  */
          console.log(self);
          document.onmousemove = function (e) {
            //마우스를 누른상태로 움직이는 상황
            movingImg(e, self);
          };
        };
        sample.onmouseup = function(){
            document.onmousemove = null;
        }

        sample.ondragstart = function (e) {
          //console.log("drag"); 드래그를 하면 콘솔찍힘
          e.preventDefault();
        };
      };
      /* window.addEventListener('load',function(){
            alert("윈도우 로드되고2 - 이건 이벤트와 연결")
        }) */

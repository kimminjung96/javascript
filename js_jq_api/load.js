addEventListener("DOMContentLoaded", () => {
    var news1 = document.querySelector("#newsWrap_1");
    var news2 = document.querySelector("#newsWrap_2");

    //기본 url설정 (전호번호)
    const url = "./01news.html";
    //ajax 작업을 위한 XMLHttpRequest() 객체를 생성해서 request 변수에 할당
    let request = new XMLHttpRequest();
    //서버에 요청하기 (전화걸기)
    //open(방법.rul,동가비동기여부)
    request.open("GET", url);
    //응답할 데이터 형식 (document => html,xml 일때)
    request.responseType = "document"; //esponseType = "document"; => HTML의 구조를 그대로 가져옴

    //onload request가 실행중일때로드됌 
    request.onload = () => {
      //responseXML: 전달받을 데이터를 XML DOM 객체로 반환
      let doc = request.responseXML; //let response=request.response
      
      //반환받은 요소중 id 속성을 모두 변수 ids에 저장
      let ids = doc.querySelectorAll("[id]");
      news1.innerHTML = ids[0].innerHTML;
      news2.innerHTML = ids[1].innerHTML;
      console.log(doc);
    };

    //전화걸기버튼누름
    request.send();
  });

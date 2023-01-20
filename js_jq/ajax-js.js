//ajax 총신을 가능하게하는 객체
let request = new XMLHttpRequest();
const url = "../MOCK_DATA.json";
//데이터형식 설정
//비동기방식이기 떄문에 상태 값에 따라 수행됨
console.log(request.readyState); //여기서는 0
//onreadystatechange => request의 형태가 바뀌면 실행
/* 
readyState 
0 (uninitialized) - (request가 초기화되지 않음)
1 (loading) - (서버와의 연결이 성사됨)
2 (loaded) - (서버가 request를 받음)
3 (interactive) - (request(요청)을 처리하는 중)
4 (complete) - (request에 대한 처리가 끝났으며 응답할 준비가 완료됨)
*/

//바뀐 요청 값을 얻을때는  onreadystatechange 속성의 readyState메서드를 활용한다.
//200 (성공) 서버응답코드
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    console.log(request.readyState); //여기서는 4
    //console.log(this.responseText);
    jsonfunc(this.responseText);
  }
};
request.open("GET", url);
request.send();
//네트워크 통신으로 db 받기

//받은 db를 가공해서 화면에 바인딩
function jsonfunc(responseText) {
  let id = new Array();
  let first_name = new Array();
  let last_name = new Array();
  let email = new Array();
  let gender = new Array();
  let ip_address = new Array();
  console.log(responseText);

  //JSON.parse() => json 데이터를 text로 변환
  let jsonTxt = JSON.parse(responseText);

  //dom 요소 준비
  const wrap = document.querySelector(".wrap");

  //table 태그생성
  let table = document.createElement("table");

  //반복문사용해서 데이터 바인딩

  for (i = 0; i < jsonTxt.length; i++) {
    id[i] = jsonTxt[i].id;
    first_name[i] = jsonTxt[i].first_name;
    last_name[i] = jsonTxt[i].last_name;
    email[i] = jsonTxt[i].email;
    gender[i] = jsonTxt[i].gender;
    ip_address[i] = jsonTxt[i].ip_address;
    //console.log(id[i]);
    //tr,td 생성후 데이터 넣기
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    //append (뒤에 추가 됌)
    td1.appendChild(document.createTextNode(id[i]+""));
    td2.appendChild(document.createTextNode( first_name[i]+""));
    td3.appendChild(document.createTextNode( last_name[i]+""));
    td4.appendChild(document.createTextNode( email[i]+""));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  }
  wrap.appendChild(table)

}

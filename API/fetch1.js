//getUltraSrtNcst 초단기 실황
//getVilageFcst 단기예보
const castBox = document.querySelector("#container");
let statusText, rainIcon, locText;
rainIcon = ['<i class="bi bi-brightness-high-fill"></i>', '<i class="bi bi-cloud-drizzle-fill"></i>', '<i class="bi bi-cloud-lightning-fill"></i>', '<i class="bi bi-cloud-lightning-fill"></i>', '<i class="bi bi-snow"></i>'];

var url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/`; /*URL*/
let parms = {
  type: ["getUltraSrtNcst", "getVilageFcst"],
  key: "7zVski0uGwL3gL5jEpfao0RXQMHwnbAKUt7Lmu9bHtXeIAbHWwCDQkv1Cv9Fw5ND1eEzacjpS4%2B%2FxWBAy70NHg%3D%3D",
  pageNo: "1",
  numOfRows: "1000",
  dataType: "JSON",
  base_date: now,
  base_time: "0600",
  nx: "66",
  ny: "100",
};

url = `${url}${parms.type[0]}?serviceKey=${parms.key}&pageNo=${parms.pageNo}&numOfRows=${parms.numOfRows}&dataType=${parms.dataType}&base_date=${parms.base_date}&base_time=${parms.base_time}&nx=${parms.nx}&ny=${parms.ny}`;
console.log(url);

async function getPosts() {
  const res = await fetch(`${url}`);
  //res에 값이 담겨있으니까 res 에 json()
  const data = await res.json(); //json , text
  //console.log(data);
  return data;
}

async function setPosts() {
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  //동적요소 생성
  const castEl = document.createElement("table");
  castEl.classList.add("table");
  const tr = document.createElement("tr");

  let cast = {
    baseDate: datas[0].baseDate,
    rain: datas[0].obsrValue,
    rainInfo: function () {
      let info = this.rain;
      console.log(info);
      if (info == 0) {
        statusText = "맑음";
        rainIcon = rainIcon[0];
      } else {
        if (info == 1) {
          statusText = "비";
          rainIcon = rainIcon[1];
        } else if (info == 7) {
          statusText = "눈";
          rainIcon = rainIcon[4];
        }
      }
    },
    temperature: datas[3].obsrValue,
    wind: datas[7].obsrValue,
    //location
    nx:datas[0].nx,
    ny:datas[0].ny,
    loc:function(){
        let point =[this.nx,this.ny];
        console.log(point);
        if(point[0] == 66 && point[1] == 100 ){
            locText = "유성구"
        }
    }
  };
  console.log(datas);
  cast.rainInfo();
  cast.loc();
  tr.innerHTML = `
    <td>오늘날짜 : ${cast.baseDate}</td>
    <td>지역 : ${locText}</td>
    <td>강수형태 : ${statusText}${rainIcon}</td>
    <td>기온 : ${cast.temperature}도</td>
    <td>바람 : ${cast.wind}/ms</td>
  `;
  castEl.appendChild(tr);
  castBox.appendChild(castEl);
}
setPosts();

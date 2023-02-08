//스크립트를 적용할 요소를 상수에 저장
const postContainer = document.querySelector("#posts-container"),
  loading = document.querySelector(".loader"),
  filter = document.querySelector("#filter");

let limit = 5,
  page = 1;

//API 에서 게시글을 fetch로 취득
/* async function 맨앞에 씌임 */
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  /* ?_limit=${limit} => 조건 5개씩 가져오는? //&_page=${page} 뒤에 또 조건쓰려면 => & */
  const data = await res.json();
  //console.log(data);
  return data;
}

showPosts();
//DOM에 보여주는 함수
async function showPosts() {
  //console.log("data",getPosts());
  const posts = await getPosts();
  posts.forEach((post) => {
    console.log(post);

    const postEl = document.createElement("div");
    //console.log(postEl);
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
    </div>
    `;
    postContainer.appendChild(postEl);
  });
}

//loader 애니메이션 함수
function showLoading() {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

//검색키워드 필터링 함수
function filterPosts(e) {
  const term = e.target.value.toUpperCase(); /* toUpperCase 대문자로 바꿔 */
  //console.log(term);
  posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();

    //indexOf 같은 문자열 index 번호, 없으면 -1
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    }else{
      post.style.display = "none";

    }
  });
}

//window-scroll 발생하면 실행되는 함수
window.addEventListener("scroll", () => {
  /***
   * scrollTop : 요소의 수직스크롤
   * scrollHeight : 스크롤높이
   *
   **/
  /* const obj = document.documentElement; */
  /* const a={
    scrollTop:obj.scrollTop,
    scrollHeight:obj.scrollHeight,
    clientHeight:obj.clientHeight,
  } */
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  /* 위와같음
    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.clientHeight)
  */
  //console.log("디스트럭쳐링" + scrollTop, scrollHeight, clientHeight);
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

//filter 값을 넣으면 받아오기
filter.addEventListener("input", filterPosts);

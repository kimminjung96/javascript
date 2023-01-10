/* JS*/
/* 
let list1 = document.querySelectorAll("#list1>li");
list1.forEach(function (el, idx) {
  console.log(el, idx);
  el.classList.add("a" + idx);
  el.textContent = "aaa" + idx;
});
let list2 = document.querySelector(".theObj");
list2.innerHTML = "<span>" + Math.random() + "</span>";
list2.setAttribute("data-set", "accessbillity");
let list22 = list2.getAttribute("class");
list2.nextElementSibling.textContent = list22;
//list2.innerHTML=`<span>${list22}</span>`

//console.log(list22);

let list3 = document.querySelector("#list3");
//list3.innerHTML=`<li>추가한 list6</li>` => 값의 재할당
//추가하는 것 a=a+1; (a+=1;)
list3.innerHTML += `<li>추가한 list6</li>`;

//insertAdjacentHTML("넣고싶은 위치","인자") =>html의 조정 삽입
//afterbegin => list3이 포함하고있는(내부) 것중의 첫번째
list3.insertAdjacentHTML("afterbegin", "<li>🤍추가한 list6</li>");
list3.insertAdjacentHTML("beforeend", "<li>💛추가한 list6</li>"); //beforeend 제일 막내(마지막)
//beforebegin  바로앞에
list3.insertAdjacentHTML("beforebegin", "<div>💕추가한 div</div>"); //beforeend 제일 막내(마지막)
//afterend  바로뒤에
list3.insertAdjacentHTML("afterend", "<div>💥추가한 div</div>"); //beforeend 제일 막내(마지막)

let list3Li = document.querySelectorAll("#list3 li");
list3Li[4].insertAdjacentHTML("beforebegin", "<li>🔅추가한 div</li>")
 */

$(() => {
  let list1 = $("#list1>li");
  console.log(list1);
  list1.each(function (idx, el) {
    $(el)
      .addClass("a" + idx)
      .text("aaa" + idx);
  });

  //속성 =>객체나 어떤 가지고있는 값을 꺼내서 쓰기 때문에 '='
  //메서드 =>함수를 호출을해야하 것 '()'
  let list2 = $(".theObj");
  //list2.innerHTML (자바스크립트의 속성) = "<span>" + Math.random() + "</span>";
  list2.html("<span>" + Math.random() + "</span>");
  list2.attr("data-set", "accessbillity");
  //attr 인자가 하나면(빈값이면 "") 가져오고, 한개안에 속성을 쓰면 그 속성을 가져옴, 두개를 쓰면 그 클래스를 교체
  list2.attr("class", "abcd");
  let list22 = list2.attr("class");
  console.log(list22);
  list2.next().text(list22);
  list2.html(`<span>${list22}</span>`);

  let list3 = $("#list3");
  list3.append(`<li>추가한 list6</li>`); //뒤추가
  list3.prepend(`<li>추가한 list6</li>`); //앞
  let list33 =$('#list3 li')
  //before 선택한 요소 앞
  list33.eq(4).before( "<li>🤍추가한 list6</li>");
  list33.eq(4).after( "<li>🤍추가한 list6</li>");

});

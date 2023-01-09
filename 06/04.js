//let list1 = document.querySelectorAll("#list1>li");
//console.log(list1);
//list는 for문//node_list는 forEach로 들어있다.

//list1.forEach(function (el, idx) {
//  //console.log(el, idx);
//  //el.textContent = "aaaa";
//  el.textContent = idx;
//  el.classList.add("a2")
//});
//console.log(el,idx);

$(function () {
  let list1 = $("#list1>li");
  console.log(list1);

  list1.each(function (idx, el) {
    $(el)
      .addClass("a" + idx)
      .text("a" + idx);
  });
});

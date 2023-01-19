addEventListener("DOMContentLoaded",()=>{
    const book1=document.querySelector("#book1")
    const book2=document.querySelector("#book2")
    const url = "./book.html";

    let book = new XMLHttpRequest();
    book.open("GET",url);
    book.responseType = 'document'

    book.onload =()=>{
        let response = book.response;

        let ids = response.querySelectorAll("[id]")
        news1.innerHTML = ids[0].innerHTML;
        news2.innerHTML = ids[1].innerHTML;
  
    }
})
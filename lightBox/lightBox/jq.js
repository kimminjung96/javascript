$(function(){
  var $button=$('.gallery a'),
  $target=$('#lightbox-overlay'),$targetImg=$target.find('img');

  $button.click(function(){
    //큰 이미지주소
    var newImg=$(this).find('img').attr('data-lightbox');
    //변수 oldImg 를 선언후 this 하위 img요소의 src 속성을 할당하시오
    //var oldImg=$(this).find('img').attr('src');
    $target.addClass('visible');
    $targetImg.attr('src',newImg);
  })
  $target.click(function(){
    $target.removeClass('visible')
  })
})
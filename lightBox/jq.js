/* 
$(function(){
    var $button=$('.gallery li a'),
    $target = $('#lightbox-overlay'),
    $targetImg = $target.find('img');

    $button.click(function(){
        //큰 이미지 주소
        var newImg = $(this).find('img').attr('data-lightbox')
        //var oldImg = $(this).find('img').attr('src')
        //console.log(oldImg);
        $target.addClass('visible')
        $targetImg.attr('src',newImg)
    })
    $target.click(function(){
        $target.removeClass('visible')
    })
    
})
 */

/* var btn = $(".gallery a");

btn.click(function () {
  var imgsrc = $(this).find("img").attr("data-lightbox");
  var bigImg = $('#lightbox-overlay').find("img").attr("src");
  $('#lightbox-image').attr('src',imgsrc)
  
  
});
 */
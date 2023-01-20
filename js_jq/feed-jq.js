$(function () {
  $.ajax({
    url: "./new.php",

    dataType: "xml",
    success: function (data) {
      //console.log(data);
      //아이템에 데이터를 객체화
      var $items = $(data).find("item");
      console.log($items);
      if ($items.length > 0) {
        $items = $items.slice(0, 10); //[0]부터 10개
        var $ul = $("<ul />");

        //$items.each(function(i,o){})
        $.each($items, function (idx, obj) {
          console.log(idx, obj);
          var $title = $(obj).find("title").text(); //.text() 글씨만
          var $link = $(obj).find("link").text(); //.text() 글씨만
          var $aTag = $("<a />");
          $aTag.attr({ href: $link, target: "_blank" });
          $aTag.text($title);
          var $li = $("<li />");
          $li.append($aTag);
          $ul.append($li)
        });
        $('.wrap').append($ul)
      }
    },
  });
});

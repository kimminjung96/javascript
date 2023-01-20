<?php
/* $ => php의 변수기호 = var과 같은 */
$ch = curl_init(); //curl 초기화, 세션생성
//curl_setopt(세션,옵션,값) cURL 세션의 옵션 설정
curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false);
curl_setopt($ch , CURLOPT_RETURNTRANSFER , true);
curl_setopt($ch , CURLOPT_HEADER , 0); //0 false
curl_setopt($ch , CURLOPT_URL , 'https://www.chosun.com/arc/outboundfeeds/rss/category/entertainments/?outputType=xml'); //0 false

$url_source=curl_exec($ch); //curl_exec : cURL 세션실행,실행해라
echo $url_source;
?>
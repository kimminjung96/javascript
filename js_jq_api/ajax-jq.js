$(function(){
    $.ajax({
        url:'../MOCK_DATA.json',
        dataType:'json', //파일형식
        success:function(data){
            if(data.length>0){ //데이터가 있을경우
                var tb=$('<table />')
                for(var i in data){
                    //var _id= 자바스크립트 변수인 표시 _
                    var $id=data[i].id //제이쿼리 표시 $
                    var $first_name=data[i].first_name
                    var $last_name=data[i].last_name
                    var $email=data[i].email
                    var $gender=data[i].gender
                    var $ip_address=data[i].ip_address
                    var row = $('<tr />').append(
                        $('<td />').text($id),
                        $('<td />').text($first_name),
                        $('<td />').text($last_name),
                        $('<td />').text($email),
                        $('<td />').text($gender),
                    )
                    tb.append(row)
                    //console.log($id);
                }
                $('.wrap').append(tb)
            }
            console.log(data);
        },
    })
})
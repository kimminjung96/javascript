/* 배열추가 1 => push */
const todos = ["우유구매", "업무메일확인", "필라테스수업"];

todos.push("망고목욕",'공주산책')
todos.push("밥먹기")

document.write(`<h1>오늘 스케줄 : ${todos}</h1>`)

/* 배열추가 2  => index번호 */
const basket=["소세지","소주","햇반"]
basket[basket.length]="삼겹살"
basket[basket.length]="불고기"
basket[basket.length]="한우부채살"
basket[basket.length]="갈비"
basket[basket.length]="냉면"
basket[basket.length]="서브웨이"
basket[basket.length]="쫄면"
basket[10]="귤"

/* 배열추가 3  => length */
basket[basket.length]="배고파"

document.write(`<hr><h1>저녁식단 : ${basket}</h1>`)

const children = ["철수", "영희", "훈이"]
undefined
for(let i = 0; i < 3; i++) {
    console.log(children[i] + "입니다")
}
// ; VM330:2 철수입니다
// ; VM330:2 영희입니다
// ; VM330:2 훈이입니다

for(let i = 0; i < 4; i++) {
    console.log(children[i] + "입니다")
}
// ; VM337:2 철수입니다
// ; VM337:2 영희입니다
// ; VM337:2 훈이입니다
// ; VM337:2 undefined입니다

for(let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다")
}
// ; VM367:2 철수입니다
// ; VM367:2 영희입니다
// ; VM367:2 훈이입니다

for(let count = 0; count < persons.length; count ++) {

    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// ; VM838:6 미성년자입니다
// ; VM838:4 성인입니다
// ; VM838:6 미성년자입니다
// ; VM838:4 성인입니다
// ; VM838:6 미성년자입니다

for(let count = 0; count < persons.length; count ++) {

    if(persons[count].age >= 19) {
        console.log(persons[count].name + "님은 성인입니다")
    } else {
        console.log(persons[count].name + "님은 미성년자입니다")
    }
}
// ; VM976:6 철수님은 미성년자입니다
// ; VM976:4 영희님은 성인입니다
// ; VM976:6 도우너님은 미성년자입니다
// ; VM976:4 그루트님은 성인입니다
// ; VM976:6 도비님은 미성년자입니다



{/* <과일 이름 연습문제> */}

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]

for(let count = 0; count < fruits.length; count ++) {
    console.log(fruits[count].number + " " + fruits[count].title)
}
// VM1556:2 1 레드향
// VM1556:2 2 샤인머스켓
// VM1556:2 3 산청딸기
// VM1556:2 4 한라봉
// VM1556:2 5 사과
// VM1556:2 6 애플망고
// VM1556:2 7 딸기
// VM1556:2 8 천혜향
// VM1556:2 9 과일선물세트
// VM1556:2 10 귤

for(let count = 0; count < fruits.length; count ++) {
    console.log(`${fruits[count].number} ${fruits[count].title}`)
}
// VM1589:2 1 레드향
// VM1589:2 2 샤인머스켓
// VM1589:2 3 산청딸기
// VM1589:2 4 한라봉
// VM1589:2 5 사과
// VM1589:2 6 애플망고
// VM1589:2 7 딸기
// VM1589:2 8 천혜향
// VM1589:2 9 과일선물세트
// VM1589:2 10 귤

for(let count = 0; count < fruits.length; count ++) {
    console.log(`과일차트 ${fruits[count].number}위는 ${fruits[count].title}입니다`)
}
// VM1618:2 과일차트 1위는 레드향입니다
// VM1618:2 과일차트 2위는 샤인머스켓입니다
// VM1618:2 과일차트 3위는 산청딸기입니다
// VM1618:2 과일차트 4위는 한라봉입니다
// VM1618:2 과일차트 5위는 사과입니다
// VM1618:2 과일차트 6위는 애플망고입니다
// VM1618:2 과일차트 7위는 딸기입니다
// VM1618:2 과일차트 8위는 천혜향입니다
// VM1618:2 과일차트 9위는 과일선물세트입니다
// VM1618:2 과일차트 10위는 귤입니다

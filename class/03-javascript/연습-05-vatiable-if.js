// 데이터 타입, 연산자 실습

1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

// 조건문 실습 1

if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM311:2 정답입니다
// undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM519:2 정답입니다
// undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM525:4 틀렸습니다
// undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM535:4 틀렸습니다
// undefined
// 자바에서 0은 '거짓같은 값'이다' -> 그래서 '틀렸습니다' 출력
if(1) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM545:2 정답입니다
// undefined


// 조건문 실습2

const profile = {
    name : "철수",
    age : 12,
    school: "다람쥐초등학교"
}
// undefined


{/* <내가 써본 코드> */}
const age = profile.age

if (20<=age) {
    console.log("성인입니다")
} else if (8<=age && age<=19) {
    console.log("학생입니다")
} else {
    console.log("어린이입니다")
}

// VM1205:6 학생입니다
// undefined


{/* <강의에서 알려준 코드> */}

if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8) {
    console.log("학생입니다")
} else if (profile.age > 0) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}
// VM1439:4 학생입니다
// undefined

{/* <설명> */}
// 두번째 else if에서 age <=19를 안쓰고 age>=8 만 쓰는 이유:
// 어차피 20살 이상인 애들은 첫번째 if에서 다 사라졌기 때문에 age<=19는 무의미함
// 그래서 코드의 효율성을 높이기 위해서 age>=8만 쓰는 것임
// 또한 사용자들이 0살이나 -1살과 같은 이상한 값을 넣을 때를 대비해서
// 세번째 else if를 통해서 age가 양수임을 설정해줌
// 그리고 마지막에 else를 씀으로써 age에 음수나 0이 들어왔을 경우 '잘못 입력했다'고 알려주는 것임.'
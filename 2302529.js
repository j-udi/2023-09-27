//객체 자료형
let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(true);

// 자료형을 출력합니다.
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

let number2 = 273.5210332;

console.log(number.toFixed(1));
console.log(number.toFixed(4));

let string2 = 'abcdefg';

string = string.toUpperCase();
console.log(string);

//현재 시간을 구합니다.
let date = new Date();

//출력1
console.log(date);

//시간을 더합니다.
date.setFullYear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.setDate()+3);

//출력
console.log(date);


//출력
console.log(date);

//변수를 선언
let now = new Date();
let before = new Date('December 9, 1991');

//시간 간격을 구합니다.
let interval = now.getTime()-before.getTime();
interval = Math.floor (interval / (1000*60*60*24));

//출력합니다.
console.log('태어나고 ${interval}일 지났습니다.');

//배열을 선언합니다.
let array = [{
    name: '고구마'
    price: 1000
}, {
    name: '바나나',
    price: 500
}, {
    name: '바나나',
    price:1500

}];

//배열의 요소를 꺼냅니다.
let popped = array.pop();
console.log('배열에서 꺼낸 요소');
console.log(popped);
console.log('-pop()메소드를 호출한 이후의 배열');
console.log(array);

//배열에 요소를 넣습니다.
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('-push() 메소드를 호출한 이후의 배열');
console.log(array);

let Hello = 'Hello world';
let message;
message = Hello;
message = 'hello';

let admin, name;

name = 'John';
admin = name;
alert(`Hello, ${name}!`);
alert(`the result is ${1 + 2}!`);
alert('자바스크립트!');
alert(message);
alert(Hello);
alert(admin);

//불린 체크 함수
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
alert(isGreater);

//prompt 함수(alert 입력 가능)
let result = prompt('나이를 입력해 주세요', 100);
alert(`당신의 나이는 ${result}살입니다.`);

//컨펌 대화상자
let isBoss = confirm('당신이 주인인가요?');
alert(isBoss);

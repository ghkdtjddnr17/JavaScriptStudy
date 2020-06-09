window.onload = () => {
  //prompt 함수(alert 입력 가능)
  document.getElementById('prompt').onclick = function () {
    let result = prompt('당신의 이름은 무엇입니까?', '');
    alert(`당신의 이름은 ${result}입니다.`);
  };
  //불린 체크 함수
  document.getElementById('booleanBtn').onclick = function () {
    let nameFieldChecked = true;
    let ageFieldChecked = false;
    let isGreater = 4 > 1;
    alert(isGreater);
  };
  //컨펌 대화상자
  document.getElementById('confirmBtn').onclick = function () {
    let isBoss = confirm('당신이 주인인가요?');
    alert(isBoss);
  };
  document.getElementById('textBtn').onclick = function () {
    let Hello = 'Hello world';
    let message, admin, name;
    message = Hello;
    name = 'John';
    admin = name;
    alert(`Hello, ${name}!`);
    alert(`the result is ${1 + 2}!`);
    alert('자바스크립트!');
    alert(message);
    alert(Hello);
    alert(admin);
  };
  //형 변환
  document.getElementById('textChangeBtn').onclick = function () {
    //문자형 변환
    let value = true;
    alert(`1.value 형태 : ${typeof value}`);
    value = String(value);
    alert(`2.value 형태 : ${typeof value}`);
    //숫자형 변환
    let str = '123';
    alert(`1.str 형태 : ${typeof str}`);
    let num = Number(str);
    alert(`2.str 형태 : ${typeof num}`);
    //숫자형 변환 여러 상태 확인
    alert(Number('   123   '));
    alert(Number('123z'));
    alert(Number(true));
    alert(Number(false));
  };
  document.getElementById('operatorBtn').onclick = function () {
    alert(5 % 2);
    alert(8 % 3);
    alert(2 ** 2);
    alert(2 ** 3);
    alert(2 ** 4);
    alert(4 ** (1 / 2));
    alert(8 ** (1 / 3));
  };
};

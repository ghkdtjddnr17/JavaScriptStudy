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
    //계산 표현 방법
    alert(5 % 2);
    alert(8 % 3);
    //2 *2
    alert(2 ** 2);
    //2 * (2*2)
    alert(2 ** 3);
    //2*2*2*2
    alert(2 ** 4);
    alert(4 ** (1 / 2));
    alert(8 ** (1 / 3));

    let apples = '2';
    let oranges = '3';
    //문자열 합치기
    alert(apples + oranges);
    //숫자 형태로 바꿔서 덧셈
    alert(+apples + +oranges);
    let counter = 2;
    counter++;
    alert(counter);
    let counter1 = 2;
    counter1--;
    alert(counter1);

    //전위형,후위형 과제 1
    let a = 1,
      b = 1;
    let c = ++a;
    let d = b++;
  };
  document.getElementById('conditionalBtn').onclick = function () {
   let year = prompt('이 책은 몇년도에 출판되었을까요???','');
   if(year == 2015)alert('정답입니다.');
   else alert('틀렸습니다. 다시 해보세요!')
   console.log('뭐지');
   
  };
};

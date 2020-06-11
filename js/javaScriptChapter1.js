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
  //비교 연산자
  document.getElementById('compareBtn').onclick = function () {
    //숫자 비교
    alert(5 > 4);
    //문자열 비교
    alert('apple' > 'pineapple');
    //숫자 문자 비교
    alert('2' > '12');
    //underfined 와 null비교
    alert(undefined == null);
    alert(undefined === null);

    alert(null == '\n0\n');
    alert(null === +'\n0\n');
  };
  //조건부 연산자와 if
  document.getElementById('ifBtn').onclick = function () {
    //자바스크립트 공식 이름
    let question = prompt('자바스크립트 공식 이름은 무엇일까요?', '');
    if (question === 'ECMAScript') {
      alert('정답입니다.');
    } else {
      alert('모르셨나요? 정답은 ECMAScript입니다.');
    }
    //입력받은 숫자의 부호 표시하기
    let question1 = prompt('숫자를 입력하세요', '');
    let result = question1 > 0 ? alert('1') : question1 < 0 ? alert('-1') : question1 == 0 ? alert('0') : alert('없음');

    //if 를 ?로 교체
    let result1 = a + b < 4 ? '미만' : '이상';
  };
  //간단 로그인
  document.getElementById('loginBtn').onclick = function () {
    let adminId = prompt('아이디를 입력하세요.', '');
    if (adminId === 'Admin') {
      let adminPw = prompt('비밀번호를 입력해 주세요.', '');
      if (adminPw === 'TheMaster') {
        alert('환영합니다!');
      } else {
        let result = adminPw === '' ? '취소하였습니다.' : '인증에 실패하였습니다.';
        alert(result);
      }
    }
  };
  //반복문 연습
  document.getElementById('forBtn').onclick = function () {
    //짝수 출력
    for (let i = 2; i < 11; i++) {
      if (i % 2 === 0) {
        alert(i);
      }
    }
    //사용자가 유효한 값 입력 유도
    let num;

    do {
      num = prompt('100을 초과하는 숫자를 입력해주세요.', 0);
    } while (num <= 100 && num);
  };
};

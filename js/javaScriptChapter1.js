let Hello = 'Hello world';
let message;
message = Hello;
message = 'hello';

let admin, name;

name = 'John';
admin = name;
alert(`Hello, ${name}!`);
alert(`the result is ${1 + 2}!`);
alert('�ڹٽ�ũ��Ʈ!');
alert(message);
alert(Hello);
alert(admin);

//�Ҹ� üũ �Լ�
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
alert(isGreater);

//prompt �Լ�(alert �Է� ����)
window.onload = () => {
  document.getElementById('prompt').onclick = function () {
    let result = prompt('���̸� �Է��� �ּ���', 100);
    alert(`����� ���̴� ${result}���Դϴ�.`);
  };
};

//���� ��ȭ����
let isBoss = confirm('����� �����ΰ���?');
alert(isBoss);

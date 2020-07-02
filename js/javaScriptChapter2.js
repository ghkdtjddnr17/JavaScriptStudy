window.onload = () => {
  //prompt 함수(alert 입력 가능)
  document.getElementById('objectBtn').onclick = function () {
    let user = {};
    user['likes birds'] = true;
    console.log(user);

    alert(user['likes birds']);

    delete user['likes birds'];

    let user1 = {
      name: 'Join',
      age: 30,
    };
    let key = prompt('사용자의 어떤 정보를 얻고 싶은가요?', 'name');

    alert(user1['name']);

    let user2 = {
      name: 'Join',
      age: 30,
      isAdmin: true,
    };
    for (let key1 in user2) {
      alert(key1);
      alert(user2[key1]);
    }

    let user3 = {};
    user3.name = 'John';
    user3.surname = 'Smith';
    user3.name = 'Pete';
    delete user.name;

    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
    };
    let sum = 0;
    for (let nameKey in salaries) {
      sum += salaries[nameKey];
    }
    alert(sum);

    let menu = {
      width: 200,
      height: 300,
      title: 'My menu',
    };

    function multiplyNumeric(params) {
      for (let changeMenu in params) {
        if (typeof params[changeMenu] === 'number') {
          params[changeMenu] *= 2;
        }
        alert(params[changeMenu]);
      }
    }
    multiplyNumeric(menu);
  };
  document.getElementById('referenceBtn').onclick = function () {
    let message = {
      name: 'John',
      age: 30,
    };
    let phrase = {};
    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };
    for (let key in message) {
      phrase[key] = message[key];
    }
    phrase.name = 'Pete';
    alert(message.name);
    Object.assign(message, permissions1, permissions2);
    console.log(message);

    let clone = Object.assign({}, message);
    console.log(clone);

    let user = {
      name: 'Join',
      age: 30,
    };
    user.sayHi = () => {
      alert('안녕하세요!');
    };
    user.sayHi();

    //계산기 만들기
    let calculator = {
      read() {
        this.text = +prompt('원하는 값을 입력 하세여.', 0);
        this.text1 = +prompt('원하는 값을 입력 하세여.', 0);
      },
      sum() {
        return this.text + this.text1;
      },
      mul() {
        return this.text * this.text1;
      },
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
  };
};

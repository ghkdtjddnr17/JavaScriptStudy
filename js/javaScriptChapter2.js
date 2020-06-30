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
    return alert(sum);
  };
};

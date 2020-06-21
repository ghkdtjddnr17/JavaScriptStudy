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
  };
};

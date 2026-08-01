const message = document.querySelector('#message');
const lock = document.querySelector('#lock');
const code = document.querySelector('#code');
let hasKey = false;

document.querySelector('.game').addEventListener('click', event => {
  const action = event.target.dataset.action;
  if (action === 'picture') message.textContent = "액자 뒤에 적혀 있다: '원주율의 시작'";
  if (action === 'drawer') {
    if (hasKey) return void (message.textContent = '서랍은 비어 있다.');
    code.value = '';
    lock.showModal();
    code.focus();
  }
  if (action === 'door') {
    message.textContent = hasKey ? '열쇠가 돌아가고 문이 열렸다. 탈출 성공!' : '문은 열쇠로 잠겨 있다.';
  }
});

document.querySelector('#unlock').addEventListener('click', event => {
  if (code.value === '314') {
    hasKey = true;
    message.textContent = '서랍이 열렸다. 낡은 열쇠를 얻었다!';
  } else {
    event.preventDefault();
    message.textContent = '암호가 틀렸다.';
    code.select();
  }
});

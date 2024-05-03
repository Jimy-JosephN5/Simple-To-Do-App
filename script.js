let inputs = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
  // console.log('hello');
  if (inputs.value == '') {
    alert('Please write something');
  }
  else {
    let newEle = document.createElement('ul');
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = '';
    newEle.querySelector('i').addEventListener('click', remove);
    function remove() {
      // console.log('remove');
      newEle.remove();
    }
  }
}


// git init
// git add README.md
// git commit - m "first commit"
// git branch - M main
// git remote add origin https://github.com/Jimy-JosephN5/Simple-To-Do-App.git
// git push - u origin main

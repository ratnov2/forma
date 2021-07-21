let inputBox = document.querySelectorAll('.input-box');
let span = document.querySelectorAll('span');
let input = document.querySelectorAll('input');
let submit = document.querySelectorAll('.submit');


let a = document.querySelector('.g');
for (let i = 0; i < 4; i++) {
  input[i].addEventListener('focus', funcInput);
  input[i].addEventListener('blur', func);
  input[i].addEventListener('change', func2);
  span[i].addEventListener('click', func1);
}

function funcInput() {
  this.nextElementSibling.classList.add('activeF');
}
function func() {
  this.nextElementSibling.classList.remove('activeF');
}
function func1() {
  this.previousElementSibling.focus();
}
function func2() {
  if (!(this.value == "")) {
    this.removeEventListener('blur', func);
  } else {
    this.addEventListener('blur', func);
  }
}
input[0].addEventListener('blur', funcRep);
function funcRep() {
  //console.log();
  if (/^[a-zA-z-]+[a-zA-z-_.]\@[a-zA-z]+\.[a-z]{2,3}$/.test(this.value)) {
    console.log('true');
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.nextElementSibling.style.display = 'block';
  }
}

input[1].addEventListener('blur', funcNumber);
function funcNumber() {
  if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(this.value)) {
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.nextElementSibling.style.display = 'block';
  }
}
input[2].addEventListener('blur', funcDate);
function funcDate() {
  if (/^\d{4}(-|\/)\d{2}\1\d{2}$/.test(this.value)) {
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.nextElementSibling.style.display = 'block';
  }
}
input[3].addEventListener('blur', funcDomen);
function funcDomen() {
  if (/^[a-z]+\.([a-z]{2,3})$/.test(this.value)) {
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.nextElementSibling.style.display = 'block';
  }
}

let prov = true;

// submit[1].addEventListener('click', () => {
//   submit[1].location.href = 'https://img3.goodfon.ru/wallpaper/nbig/7/1e/gorilla-obezyana-primat-morda.jpg';
// })
// input[0].addEventListener('focus', () => {

// })
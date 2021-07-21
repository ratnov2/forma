let inputBox = document.querySelectorAll('.input-box');
let span = document.querySelectorAll('.active');
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
  if (/^[a-zA-z-]+[a-zA-z-_.]+\@[a-zA-z]+\.[a-z]{2,3}$/.test(this.value)) {
    console.log('true');
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayBlock');
  }
}

input[1].addEventListener('blur', funcNumber);
function funcNumber() {
  if (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(this.value)) {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayBlock');
  }
}
input[2].addEventListener('blur', funcDate);
function funcDate() {
  if (/^\d{4}(-|\/)\d{2}\1\d{2}$/.test(this.value)) {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');;
  } else {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayBlock');
  }
}
input[3].addEventListener('blur', funcDomen);
function funcDomen() {
  if (/^[a-z]+\.([a-z]{2,3})$/.test(this.value)) {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else if (this.value == '') {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayNone');
  } else {
    this.nextElementSibling.nextElementSibling.classList.add('listDisplayBlock');
  }
}



let pr = document.querySelectorAll('.pr1');
pr[0].addEventListener('click', funcPlay1);

let prov = false;

function funcPlay1() {
  for (let i = 0; i < 4; i++) {
    //console.log(span[i].classList.contains('listDisplayBlock'));
    if (input[i].value == '' || !(input[i].nextElementSibling.nextElementSibling.classList.contains('listDisplayNone'))) {
      prov = true;
      break;
    }
  }
  if (prov) {
    alert('Вы что-то не ввели или ввели неправильно');
    prov = false;
  } else {
    play();
  }
}

pr[1].addEventListener('click', play);

function play() {
  let audio = new Audio();
  audio.src = 'Dimon.mp3';
  audio.autoplay = true;
  pr[1].removeEventListener('click', play);
}

// input[0].addEventListener('focus', () => {

// })
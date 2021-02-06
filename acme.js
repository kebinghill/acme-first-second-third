const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

//List Names

const nameList = document.querySelectorAll('.names');

const highlightName = [...nameList].forEach((name) => {
  name.addEventListener('click', function () {
    name.classList.toggle('bkg-color');
  });
});

//Button Direction Event Listeners

const buttonL1Forward = document.getElementById('forward-l-1');
const buttonL2Back = document.getElementById('back-l-2');
const buttonL2Forward = document.getElementById('forward-l-2');
const buttonL3Back = document.getElementById('back-l-3');

buttonL1Forward.addEventListener('click', function () {
  console.log('functioning');
});

buttonL2Back.addEventListener('click', function () {
  console.log('Im working');
});

buttonL2Forward.addEventListener('click', function () {
  console.log('Im working');
});

buttonL3Back.addEventListener('click', function () {
  console.log('Im working');
});

[...document.getElementsByClassName('names')].forEach((name) => {
  console.log(name.classList.value);
});

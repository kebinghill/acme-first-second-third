const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

const names = [...document.getElementsByClassName('names')];

console.log(names);

//Button Direction Event Listeners

const buttonL1Forward = document.getElementById('forward-l-1');
const buttonL2Back = document.getElementById('back-l-2');
const buttonL2Forward = document.getElementById('forward-l-2');
const buttonL3Back = document.getElementById('back-l-3');

buttonL1Forward.addEventListener('click', function (ev) {
  console.log('Im working');
});

buttonL2Back.addEventListener('click', function (ev) {
  console.log('Im working');
});

buttonL2Forward.addEventListener('click', function (ev) {
  console.log('Im working');
});

buttonL3Back.addEventListener('click', function (ev) {
  console.log('Im working');
});

// names.addEventListener('click', function (ev) {
//   console.log('this was messing it up');
// });

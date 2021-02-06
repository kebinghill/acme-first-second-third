//List Names

const nameList = document.querySelectorAll('.names');

const highlightName = [...nameList].forEach((name) => {
  name.addEventListener('click', function () {
    name.classList.toggle('bkg-color');
  });
});

//Each List

const listOne = document.getElementById('first');
const listTwo = document.getElementById('second');
const listThree = document.getElementById('third');

//Button Directions

const buttonL1Forward = document.getElementById('forward-l-1');
const buttonL2Back = document.getElementById('back-l-2');
const buttonL2Forward = document.getElementById('forward-l-2');
const buttonL3Back = document.getElementById('back-l-3');

//Event Listeners

buttonL1Forward.addEventListener('click', function () {
  [...nameList].forEach((name) => {
    if (
      name.classList.value === 'names bkg-color' &&
      name.parentElement === listOne
    ) {
      listTwo.appendChild(name);
    }
  });
});

buttonL2Back.addEventListener('click', function () {
  [...nameList].forEach((name) => {
    if (
      name.classList.value === 'names bkg-color' &&
      name.parentElement === listTwo
    ) {
      listOne.appendChild(name);
    }
  });
});

buttonL2Forward.addEventListener('click', function () {
  [...nameList].forEach((name) => {
    if (
      name.classList.value === 'names bkg-color' &&
      name.parentElement === listTwo
    ) {
      listThree.appendChild(name);
    }
  });
});

buttonL3Back.addEventListener('click', function () {
  [...nameList].forEach((name) => {
    if (
      name.classList.value === 'names bkg-color' &&
      name.parentElement === listThree
    ) {
      listTwo.appendChild(name);
    }
  });
});

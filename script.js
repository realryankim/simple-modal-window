'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// 'querySelctor' only select the first element
// const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// Error!
// Uncaught TypeError: btnsOpenModal.addEventListener is not a function
// btnsOpenModal.addEventListener('click', function () {
//   console.log('Button licked!');
// });

// Better!
const openModal = function () {
  // console.log('Button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Better!
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// DRY CODE!!!
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked!');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// DRY CODE!!!
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  // 1.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();

  // 2.
  // e.key === 'Escape' && !modal.classList.contains('hidden')
  //   ? closeModal()
  //   : false;

  // Refactoring !!!
  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
});

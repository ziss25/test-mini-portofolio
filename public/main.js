const PROJECT_BTN = document.querySelector('.projects-btn');
const SKILL_BTN = document.querySelector('.skils-btn');
const SKILL_OUTPUT = document.querySelector('.skill');
const PROJECT_OUTPUT = document.querySelector('.project');
const CONTENT = document.querySelector('.content');

// changed class btn filters & render sesuai dengan contain nya
function changedColorsButton(project) {}

PROJECT_BTN.addEventListener('click', () => {
  PROJECT_BTN.style.backgroundColor = 'white';
  PROJECT_BTN.style.transition = 'all 300ms';
  SKILL_BTN.style.backgroundColor = '#e5e7eb';
  console.log('project on');
  console.log('skill of');

  // menghilangkan content skill if click btn project
  // tambahin class none nya
  SKILL_OUTPUT.classList.add('none');
  PROJECT_OUTPUT.classList.remove('none');

  // animation aos
  // CONTENT.setAttribute('data-aos', 'fade-up');
  // CONTENT.setAttribute('data-aos-duration', '3000');
});

SKILL_BTN.addEventListener('click', () => {
  SKILL_BTN.style.backgroundColor = 'white';
  SKILL_BTN.style.transition = 'all 300ms';
  PROJECT_BTN.style.backgroundColor = '#e5e7eb';
  console.log('project off');
  console.log('skill on');

  // menampilkan content skill if click btn skil
  // hapus class none nya
  PROJECT_OUTPUT.classList.add('none');
  SKILL_OUTPUT.classList.remove('none');

  // CONTENT.removeAttribute('data-aos');
  // CONTENT.removeAttribute('data-aos-duration');
});

import {
  projectsData,
  skillsData,
  languageData,
  educationData,
  contactsData,
} from './data.js';
import { toUpperCase, toDash } from './utils.js';

const BURGER = document.querySelector('.burger');
const HEADERMENU = document.querySelector('.header__menu');

BURGER.addEventListener('click', function () {
  BURGER.classList.toggle('burger-active');
  HEADERMENU.classList.toggle('header__menu_open');
  document.body.classList.toggle('block');
});

HEADERMENU.addEventListener('click', function () {
  BURGER.classList.toggle('burger-active');
  HEADERMENU.classList.toggle('header__menu_open');
  document.body.classList.toggle('block');
});

const year = document.querySelector('.footer__year');
let now = new Date();
year.textContent = now.getFullYear();

const itemDescription = document.querySelectorAll('.projects__description');
const projectImg = document.querySelectorAll('.projects__link img');

for (let i = 0; i < itemDescription.length; i++) {
  itemDescription[i].textContent = projectImg[i].getAttribute('alt');
}

const projects = document.querySelector('.projects');
const projectsBtn = document.querySelector('.projects__btn');

projectsBtn.addEventListener('click', function () {
  projects.classList.toggle('projects_open');
  projectsBtn.textContent = projects.classList.contains('projects_open')
    ? 'Show Less'
    : 'Show More';
});

const projectsList = document.getElementById('projects-list');
projectsData.forEach((item) => {
  const projectItem = `
    <li class='projects__item'>
      <a
      aria-label='project link'
      class='projects__link'
      href='${item.link}'
      target='_blank'
      >
      <span class='projects__description'>${toUpperCase(item.name)}</span>
      <img
      class='projects__img'
      src='images/project-images/${toDash(item.name)}.png'
      alt='${toUpperCase(item.name)}'
      />
      </a>
    </li>
  `;
  projectsList.insertAdjacentHTML('beforeend', projectItem);
});

const skillsList = document.getElementById('skills-list');
skillsData.forEach((item) => {
  for (let key in item) {
    const skillItemList = item[key]
      .map((el) => `<li class='sidebar__list-item'>${el}</li>`)
      .join('');

    const skillItem = `
      <li class="sidebar__skils-item">
        <h3 class="sidebar__skills-title">${key}</h3>
        <ul class="sidebar__list">
          ${skillItemList}
        </ul>
      </li>
    `;

    skillsList.insertAdjacentHTML('beforeend', skillItem);
  }
});

const languagesList = document.getElementById('languages-list');
languageData.forEach((item) => {
  const languageItem = `
    <li class="sidebar__list-item">${item}</li>
  `;

  languagesList.insertAdjacentHTML('beforeend', languageItem);
});

const educationList = document.getElementById('education-list');
educationData.forEach((item) => {
  const educationItem = `
    <li>
      <a
        aria-label="certificate"
        href="${item.link ? item.link : ''}"
        target="_blank"
      >
        ${item.name}
      </a>
    </li>
  `;
  educationList.insertAdjacentHTML('beforeend', educationItem);
});

const headerContactsList = document.getElementById('header-contacts-list');
const footerContactsList = document.getElementById('footer-contacts-list');

contactsData.forEach((item) => {
  const itemClass = item.name.toLowerCase();
  const contactItem = `
    <li class="contacts__item">
      <a
        aria-label="phone link"
        href="${item.href}"
        class="contacts__link ${itemClass}"
      >
        <span class="visualy-hidden">${item.name}</span>
      </a>
    </li>
  `;

  headerContactsList.insertAdjacentHTML('beforeend', contactItem);
  footerContactsList.insertAdjacentHTML('beforeend', contactItem);
});

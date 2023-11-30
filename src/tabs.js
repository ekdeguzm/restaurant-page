// create tabs at the top of the page

import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
  const content = document.querySelector('#content');

  // create the three divs
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  // set ids for the divs
  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');

  // set classes for the divs
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');

  // set text content for the tabs
  div1.textContent = 'Home';
  div2.textContent = 'Menu';
  div3.textContent = 'Contact';

  // append the divs to the content div
  content.appendChild(div1)
  content.appendChild(div2)
  content.appendChild(div3)

  div1.addEventListener('click', () => {
    createRestaurantHomePage();
  })
  div2.addEventListener('click', () => {
    createMenuPage();
  })
  div3.addEventListener('click', () => {
    createContactPage();
  })
}

export default createTabs;
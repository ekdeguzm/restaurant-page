// create tabs at the top of the page

import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
  const content = document.querySelector('#content');

  // Create the container div for tabs
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container'); // Add the tab-container class

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

  // append the divs to the tabContainer div
  tabContainer.appendChild(div1);
  tabContainer.appendChild(div2);
  tabContainer.appendChild(div3);

  // append the tabContainer to the content div
  content.appendChild(tabContainer);

  div1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
  })
  div2.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  })
  div3.addEventListener('click', () => {
    clearContent();
    createContactPage();
  })
}


function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent)
  }

}
export default createTabs;
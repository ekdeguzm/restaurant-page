// module for creating the menu page

const createMenuPage = () => {
  // select for content id and create pageContent
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  // create menu heading
  const heading = document.createElement('h1');
  heading.textContent = ('Our Menu');

  // create menu and add to menuList
  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  menuItem1.textContent = 'Margarita'
  const menuItem2 = document.createElement('li');
  menuItem2.textContent = 'Pomodoro';
  const menuItem3 = document.createElement('li');
  menuItem3.textContent = 'Bolognesa'
  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  // append heading and menuList to pageContent
  // append pageContent to content
  pageContent.appendChild(heading);
  pageContent.appendChild(menuList);
  content.appendChild(pageContent);
}

export default createMenuPage;
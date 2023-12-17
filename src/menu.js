// module for creating the menu page

function createMenuPage() {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // create menu heading
  const heading = document.createElement('h1');
  heading.textContent = ('Our Menu');

  menu.appendChild(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );
  
  pageContent.appendChild(heading);
  pageContent.appendChild(menu)

  return pageContent;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const content = document.getElementById("content");
  // content.textContent = "";
  // content.appendChild(pageContent);
  content.appendChild(createMenuPage());
}

export default loadMenu;



// const createMenuPage = () => {
//   // select for content id and create pageContent
//   const content = document.querySelector('#content');
//   const pageContent = document.createElement('div');
//   pageContent.classList.add('page-content');

//   // create menu heading
//   const heading = document.createElement('h1');
//   heading.textContent = ('Our Menu');

//   // create menu and add to menuList
//   const menuList = document.createElement('ul');
//   const menuItem1 = document.createElement('li');
//   menuItem1.textContent = 'Margarita'
//   const menuItem2 = document.createElement('li');
//   menuItem2.textContent = 'Pomodoro';
//   const menuItem3 = document.createElement('li');
//   menuItem3.textContent = 'Bolognesa'
//   menuList.appendChild(menuItem1);
//   menuList.appendChild(menuItem2);
//   menuList.appendChild(menuItem3);

//   // append heading and menuList to pageContent
//   // append pageContent to content
//   pageContent.appendChild(heading);
//   pageContent.appendChild(menuList);
//   content.appendChild(pageContent);
// }

// export default createMenuPage;
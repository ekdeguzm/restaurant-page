// restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content')


  // Create and append headline element
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Pizza Town!';
  pageContent.appendChild(headline);

  // Create and append image element
  const image = document.createElement('img');
  image.src = '../dist/images/chef.jpg';
  image.height = '300'
  pageContent.appendChild(image);

  // Create and append copy element
  const copy = document.createElement('p');
  copy.textContent = 'We serve the best pizza in town. Come and take a bite!';
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
}

export default createRestaurantHomePage

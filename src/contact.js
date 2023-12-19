// module for creating the contact page

const createContactPage = () => {
  const content = document.querySelector('#content')
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789'
  form.appendChild(phoneNumber)

  const address = document.createElement('p')
  address.textContent = '🏠 Golden Gate Street. 42, San Francisco, USA'
  form.appendChild(address)

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = './images/restaurant-location.png'
  restaurantLocation.alt = 'Pizza Town\'s restaurant location'
  form.appendChild(restaurantLocation)


  pageContent.appendChild(form);
  content.appendChild(pageContent)
}

export default createContactPage;
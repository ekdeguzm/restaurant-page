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
  restaurantLocation.src = '../dist/images/restaurant-location.png'
  restaurantLocation.alt = 'Pizza Town\'s restaurant location'
  form.appendChild(restaurantLocation)

  const headingInput = document.createElement('input');
  headingInput.type = 'text';
  headingInput.placeholder = 'Enter heading';
  form.appendChild(headingInput);

  const addressInput = document.createElement('input');
  addressInput.type = 'text';
  addressInput.placeholder = 'Enter address';
  form.appendChild(addressInput);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.placeholder = 'Enter phone';
  form.appendChild(phoneInput);

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.placeholder = 'Submit'
  form.appendChild(submitButton);

  pageContent.appendChild(form);
  content.appendChild(pageContent)
}

export default createContactPage;
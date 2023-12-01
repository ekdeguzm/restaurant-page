// module for creating the contact page

const createContactPage = () => {
  const content = document.querySelector('#content')
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const headingInput = document.createElement('input');
  headingInput.type = 'text';
  headingInput.placeholder = 'Enter heading';
  form.appendChild(headingInput);



}

export default createContactPage;
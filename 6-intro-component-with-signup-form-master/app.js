const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


const inputError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'signup__form-control error';
  small.innerText = message;
}

const inputSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'signup__form-control';
  input.value = '';
  alert('Submitted')
}

const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateForm = () => {
  const fname_value = fname.value.trim();
  const lname_value = lname.value.trim();
  const email_value = email.value.trim();
  const password_value = password.value.trim();

  if (fname_value === '') {
    inputError(fname, 'First Name cannot be empty');
  } else {
    inputSuccess(fname);
  }

  if (lname_value === '') {
    inputError(lname, 'Last Name cannot be empty');
  } else {
    inputSuccess(lname);
  }

  if (email_value === '') {
    inputError(email, 'Email cannot be empty');
  } else if (!isEmail(email_value)) {
    inputError(email, 'Looks like this is not an email');
  } else {
    inputSuccess(email);
  }

  if (password_value === '') {
    inputError(password, 'Password cannot be empty');
  } else {
    inputSuccess(password);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm();
});
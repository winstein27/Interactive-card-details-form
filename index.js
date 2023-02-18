const cardForm = document.querySelector('#card-form');
const successScreen = document.querySelector('#success-screen');

const nameInput = document.querySelector('#name-input');
const numberInput = document.querySelector('#number-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');
const cvcInput = document.querySelector('#cvc-input');

const cardName = document.querySelector('#card-name');
const cardNumber = document.querySelector('#card-number');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCVC = document.querySelector('#card-cvc');

const onNameChange = (event) => {
  const name = event.target.value;
  cardName.textContent = name.length ? name : 'Jane Appleseed';
};

const onNumberChange = (event) => {
  const number = event.target.value;
  cardNumber.textContent = number.length ? number : '0000 0000 0000 0000';
};

const onMonthChange = (event) => {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 2);
  }
  const month = event.target.value;
  cardMonth.textContent = month.length ? month : '00';
};

const onYearChange = (event) => {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 2);
  }
  const year = event.target.value;
  cardYear.textContent = year.length ? year : '00';
};

const onCVCChange = (event) => {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 3);
  }
  const cvc = event.target.value;
  cardCVC.textContent = cvc.length ? cvc : '000';
};

nameInput.addEventListener('input', onNameChange);
numberInput.addEventListener('input', onNumberChange);
monthInput.addEventListener('input', onMonthChange);
yearInput.addEventListener('input', onYearChange);
cvcInput.addEventListener('input', onCVCChange);

const maskCardNumber = (event) => {
  // Key pressed is not backspace or delete
  if (event.keyCode != 46 && event.keyCode != 8) {
    const i = numberInput.value.length;
    if (i === 4 || i === 9 || i === 14) {
      numberInput.value += ' ';
    }
  }
};

document.addEventListener('keydown', maskCardNumber);

const onSubmit = (event) => {
  event.preventDefault();

  let formIsValid = true;

  const name = nameInput.value.trim();
  if (name.length < 4 || !name.includes(' ')) {
    formIsValid = false;
  }

  const number = numberInput.value.trim();
  if (number.length !== 19) {
    formIsValid = false;
  }

  const month = +monthInput.value.trim();
  if (month < 1 || month > 12) {
    formIsValid = false;
  }

  const year = +yearInput.value.trim();
  if (year < 23 || year > 30) {
    formIsValid = false;
  }

  const cvc = cvcInput.value.trim();
  if (+cvc < 1 || +cvc > 999 || cvc.length !== 3) {
    formIsValid = false;
  }

  if (formIsValid) {
    cardForm.style.display = 'none';
    successScreen.style.display = 'block';
  }
};

cardForm.addEventListener('submit', onSubmit);

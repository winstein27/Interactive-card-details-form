const cardForm = document.querySelector('#card-form');

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

const onSubmit = (event) => {
  event.preventDefault();
};

const onNameChange = (event) => {
  cardName.textContent = event.target.value;
};

const onNumberChange = (event) => {
  cardNumber.textContent = event.target.value;
};

const onMonthChange = (event) => {
  cardMonth.textContent = event.target.value;
};

const onYearChange = (event) => {
  cardYear.textContent = event.target.value;
};

const onCVCChange = (event) => {
  cardCVC.textContent = event.target.value;
};

cardForm.addEventListener('submit', onSubmit);

nameInput.addEventListener('input', onNameChange);
numberInput.addEventListener('input', onNumberChange);
monthInput.addEventListener('input', onMonthChange);
yearInput.addEventListener('input', onYearChange);
cvcInput.addEventListener('input', onCVCChange);

const formButtonElement = document.querySelector('.form__button');
const fieldElements = document.querySelectorAll('.form__field');
const telFieldElement = document.querySelector('.form__field--tel');
const emailFieldElement = document.querySelector('.form__field--email');

const TEL_REGEX = /(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}/;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Zа-яА-Я]{2,4}$/;

formButtonElement.addEventListener('click', (evt) => {
  if (!telFieldElement.value.match(TEL_REGEX)) {
    telFieldElement.classList.add('form__field--invalid');
  }

  if (!emailFieldElement.value.match(EMAIL_REGEX)) {
    emailFieldElement.classList.add('form__field--invalid');
  }

  if (!telFieldElement.value.match(TEL_REGEX) || !emailFieldElement.value.match(EMAIL_REGEX)) {
    evt.preventDefault();
  }
});

fieldElements.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.classList.remove('form__field--invalid');
  });
});

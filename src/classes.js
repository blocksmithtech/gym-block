import deployContract from './contract_deploy.js';

window.addEventListener('load', () => {
  const formElem = document.getElementById('new_class_form');
  if (formElem) {
    formElem.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const nameInputElem = formElem.querySelector('input[name="name"]');
      const dateInputElem = formElem.querySelector('input[name="date"]');
      const depositInputElem = formElem.querySelector('input[name="deposit"]');
      const noShowAddressInputElem = formElem.querySelector(
        'input[name="noShowAddress"]'
      );
      const limitOfParticipantsInputElem = formElem.querySelector(
        'input[name="limitOfParticipants"]'
      );

      deployContract(
        noShowAddressInputElem.value,
        nameInputElem.value,
        depositInputElem.value,
        limitOfParticipantsInputElem.value
      );
    });
  }
});

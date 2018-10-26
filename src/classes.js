import deployContract from './contract_deploy.js'

window.addEventListener('load', () => {
  let formElem = document.getElementById('new_class_form');
  if (formElem) {
    formElem.addEventListener('submit', (evt) => {
      evt.preventDefault();

      let nameInputElem = formElem.querySelector('input[name="name"]');
      let noShowAddressInputElem = formElem.querySelector(
        'input[name="noShowAddress"]'
      );
      let depositInputElem = formElem.querySelector(
        'input[name="deposit"]'
      );
      let limitOfParticipantsInputElem = formElem.querySelector(
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

window.addEventListener('load', () => {
  let formElem = document.getElementById('new_class_form');
  if (formElem) {
    formElem.addEventListener('submit', (evt) => {
      evt.preventDefault();

      console.log("WIP");
      // TODO: use web3 js to instanciate the smart contract for this new class

    });
  }
});

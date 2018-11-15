import {alertMessage} from './alerts.js';
import contract from './contract';

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const contractAddress = urlParams.get('contract');

  if (contractAddress) {
    alertMessage('notice', 'Found contract address: ' + contractAddress);

    // load contract from ABI
    const Contract = web3.eth.contract(contract.abi);
    // instantiate from address
    const instance = Contract.at(contractAddress);

    instance.name((err, name) => {
      document.getElementById('eventName').textContent = name;
    });
    instance.deposit((err, fee) => {
      document.getElementById('eventFee').textContent = fee;
    });

  } else {
    alertMessage('error', 'Contract address not found!');
  }
});

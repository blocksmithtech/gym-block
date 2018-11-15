import {alertMessage} from './alerts.js';

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const contractAddress = urlParams.get('contract');

  if (contractAddress) {
    alertMessage('notice', 'Found contract address: ' + contractAddress);

  } else {
    alertMessage('error', 'Contract address not found!');
  }
});

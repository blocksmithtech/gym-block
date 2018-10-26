import './style.css';

function errorMessageComponent(message) {
  let element = document.createElement('div');
  element.innerHTML = message;
  element.classList.add('error-msg');
  return element;
}

function noticeMessageComponent(message) {
  let element = document.createElement('div');
  element.innerHTML = message;
  element.classList.add('notice-msg');
  return element;
}

window.addEventListener('load', async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      document.body.appendChild(
        noticeMessageComponent(`Connected to network ${web3.version.network}`)
      );
      document.body.appendChild(
        noticeMessageComponent(
          `Detected accounts: ${web3.eth.accounts.join(', ')}`
        )
      );
      // Acccounts now exposed
      //web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
      console.log(error);
      document.body.appendChild(errorMessageComponent(error));
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    //web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
    document.body.appendChild(errorMessageComponent(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    ));
  }
});

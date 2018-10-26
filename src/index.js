import './style.css';

import './classes.js';

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

function initWeb3Ethereum() {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
    ethereum.enable().then(web3Ready);
  } catch (error) {
    // User denied account access...
    console.log(error);
    document.body.appendChild(errorMessageComponent(error));
  }
}

function initWeb3Legacy() {
  window.web3 = new Web3(web3.currentProvider);
  web3Ready();
}

function web3Ready() {
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
}

window.addEventListener('load', () => {
  // Modern dapp browsers...
  if (window.ethereum) { initWeb3Ethereum() }
  // Legacy dapp browsers...
  else if (window.web3) { initWeb3Legacy() }
  // Non-dapp browsers...
  else {
    document.body.appendChild(errorMessageComponent(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    ));
  }
});

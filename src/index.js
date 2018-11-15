import './style.css';

import {alertMessage} from './alerts.js';

import './classes.js';
import './attend.js';

function initWeb3Ethereum() {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
    ethereum.enable().then(web3Ready);
  } catch (error) {
    // User denied account access...
    console.log(error);
    alertMessage('error', error);
  }
}

function initWeb3Legacy() {
  window.web3 = new Web3(web3.currentProvider);
  web3Ready();
}

function web3Ready() {
  alertMessage(
    'notice',
    `Connected to network ${web3.version.network}.` +
    `Using API version ${web3.version.api}`
  );
  alertMessage(
    'notice',
    `Detected accounts: ${web3.eth.accounts.join(', ')}`
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
    alertMessage(
      'error',
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
});

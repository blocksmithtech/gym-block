function deployContract(name, noShowAddress) {
  // load contract from ABI
  const contractABI = [];
  var contract = web3.eth.contract(contractABI);

  console.log('Deploying contract named: ', name);
  // deploy new contract
  contract.new(
    name, noShowAddress,
    {
      from: web3.eth.coinbase,
      data: '0x12345...',
      gas: 1000000
    },
    (err, contractInstance) => {
      if (!err) {
        // NOTE: The callback will fire twice!
        // Once the contract has the transactionHash property set and
        // once its deployed on an address.
        if (!contractInstance.address) {
          // The hash of the transaction, which deploys the contract
          console.log(
            'Contract is being deployed in transaction: ',
            contractInstance.transactionHash
          );
        } else {
          // check address on the second call (contract deployed)
          console.log('Contract deployed at: ', contractInstance.address);
          window.location.href = `/attend?contract=${contractInstance.address}`;
        }
      } else {
        console.log(err);
      }
    }
  );
}

window.addEventListener('load', () => {
  let formElem = document.getElementById('new_class_form');
  if (formElem) {
    formElem.addEventListener('submit', (evt) => {
      evt.preventDefault();

      let nameInputElem = formElem.querySelector('input[name="name"]');
      let noShowAddressInputElem = formElem.querySelector(
        'input[name="noShowAddress"]'
      );

      deployContract(nameInputElem.value, noShowAddressInputElem.value);
    });
  }
});

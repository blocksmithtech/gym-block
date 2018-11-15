import contract from './contract';

function deployContract(noShowAddress, name, deposit, limitOfParticipants) {
  // load contract from ABI
  var contract = web3.eth.contract(contract.abi);

  console.log('Deploying contract named: ', name);
  // deploy new contract
  contract.new(
    noShowAddress, name, deposit, limitOfParticipants,
    {
      from: web3.eth.accounts[0],
      data: contract.data,
      gas: '4700000'
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

export default deployContract;

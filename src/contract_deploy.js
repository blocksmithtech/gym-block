function deployContract(noShowAddress, name, deposit, limitOfParticipants) {
  // load contract from ABI
  const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"participantName","type":"string"},{"name":"addr","type":"address"},{"name":"attended","type":"bool"},{"name":"paid","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endedAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"assetsDistributed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"changeName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"payout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"payoutAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"limitOfParticipants","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isPaid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"}],"name":"attend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_limitOfParticipants","type":"uint256"}],"name":"setLimitOfParticipants","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cancelled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participantsIndex","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isAttended","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"charityAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"attended","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_participant","type":"string"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"}],"name":"destroyAndSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_charityAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_deposit","type":"uint256"},{"name":"_limitOfParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"participantName","type":"string"}],"name":"RegisterEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"AttendEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_payout","type":"uint256"},{"indexed":false,"name":"charityAddress","type":"address"}],"name":"PaybackEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"_payout","type":"uint256"}],"name":"WithdrawEvent","type":"event"},{"anonymous":false,"inputs":[],"name":"CancelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
  var contract = web3.eth.contract(contractABI);

  console.log('Deploying contract named: ', name);
  // deploy new contract
  contract.new(
    noShowAddress, name, deposit, limitOfParticipants,
    {
      from: web3.eth.accounts[0],
      data: '0x60806040523480156200001157600080fd5b5060405162001e0f38038062001e0f83398101806040528101908080519060200190929190805182019291906020018051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415620001145783600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000156565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008351141515620001815782600290805190602001906200017a92919062000222565b50620001d0565b6040805190810160405280600481526020017f546573740000000000000000000000000000000000000000000000000000000081525060029080519060200190620001ce92919062000222565b505b600082141515620001e85781600381905550620001f7565b66470de4df8200006003819055505b6000811415156200020f578060048190555062000218565b60146004819055505b50505050620002d1565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026557805160ff191683800117855562000296565b8280016001018555821562000296579182015b828111156200029557825182559160200191906001019062000278565b5b509050620002a59190620002a9565b5090565b620002ce91905b80821115620002ca576000816000905550600101620002b0565b5090565b90565b611b2e80620002e16000396000f300608060405260043610610175576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461017a57806309e69ede1461020a57806312fa6feb1461030f5780632de40ce31461033e5780633ccfd60b146103695780633d6a71e41461038057806349cd6139146103ab5780635353a2d8146103da57806363bd1d4a146104155780636b46c8c3146104405780636d006ae81461046b5780636ded82f81461049657806383197ef0146104f1578063854bec87146105085780638da5cb5b1461051f578063982495c7146105765780639989a5ae146105b15780639a82a09a146105de5780639b25cacb1461060d578063a07f3a561461067a578063ad7a672f146106d5578063afcf2fc414610700578063b5e10e9a14610757578063c3c5a54714610782578063d0e30db0146107dd578063ea8a1af014610808578063f2c298be1461081f578063f2fde38b1461084d578063f5074f4114610890575b600080fd5b34801561018657600080fd5b5061018f6108d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cf5780820151818401526020810190506101b4565b50505050905090810190601f1680156101fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021657600080fd5b5061024b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610971565b60405180806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018415151515815260200183151515158152602001828103825286818151815260200191508051906020019080838360005b838110156102d15780820151818401526020810190506102b6565b50505050905090810190601f1680156102fe5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561031b57600080fd5b50610324610a73565b604051808215151515815260200191505060405180910390f35b34801561034a57600080fd5b50610353610a86565b6040518082815260200191505060405180910390f35b34801561037557600080fd5b5061037e610a8c565b005b34801561038c57600080fd5b50610395610c91565b6040518082815260200191505060405180910390f35b3480156103b757600080fd5b506103c0610c97565b604051808215151515815260200191505060405180910390f35b3480156103e657600080fd5b50610413600480360381019080803590602001908201803590602001919091929391929390505050610caa565b005b34801561042157600080fd5b5061042a610d2c565b6040518082815260200191505060405180910390f35b34801561044c57600080fd5b50610455610d5d565b6040518082815260200191505060405180910390f35b34801561047757600080fd5b50610480610d63565b6040518082815260200191505060405180910390f35b3480156104a257600080fd5b506104d7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d69565b604051808215151515815260200191505060405180910390f35b3480156104fd57600080fd5b50610506610dd3565b005b34801561051457600080fd5b5061051d610e68565b005b34801561052b57600080fd5b50610534611080565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561058257600080fd5b506105af6004803603810190808035906020019082018035906020019190919293919293905050506110a5565b005b3480156105bd57600080fd5b506105dc60048036038101908080359060200190929190505050611268565b005b3480156105ea57600080fd5b506105f36112e9565b604051808215151515815260200191505060405180910390f35b34801561061957600080fd5b50610638600480360381019080803590602001909291905050506112fc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561068657600080fd5b506106bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061132f565b604051808215151515815260200191505060405180910390f35b3480156106e157600080fd5b506106ea611399565b6040518082815260200191505060405180910390f35b34801561070c57600080fd5b506107156113b8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561076357600080fd5b5061076c6113de565b6040518082815260200191505060405180910390f35b34801561078e57600080fd5b506107c3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e4565b604051808215151515815260200191505060405180910390f35b3480156107e957600080fd5b506107f261147f565b6040518082815260200191505060405180910390f35b34801561081457600080fd5b5061081d611485565b005b61084b600480360381019080803590602001908201803590602001919091929391929390505050611570565b005b34801561085957600080fd5b5061088e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611650565b005b34801561089c57600080fd5b506108d1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117a5565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109695780601f1061093e57610100808354040283529160200191610969565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b505050505081565b600a602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a1d5780601f106109f257610100808354040283529160200191610a1d565b820191906000526020600020905b815481529060010190602001808311610a0057829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16908060010160159054906101000a900460ff16905084565b600760009054906101000a900460ff1681565b60055481565b600080600354111515610a9e57600080fd5b600760009054906101000a900460ff161515610ab957600080fd5b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b5857600080fd5b600760019054906101000a900460ff161515610b7357600080fd5b600015158160010160159054906101000a900460ff161515141515610b9757600080fd5b60018160010160156101000a81548160ff0219169083151502179055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610c20573d6000803e3d6000fd5b507f5dba113b49cfa7c90315e8e604e6b506f7abcb909b01dcb19ec39005086e68fc33600354604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b60085481565b600760029054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d0557600080fd5b6000600554141515610d1657600080fd5b818160029190610d279291906119dd565b505050565b6000806006541415610d4757610d40611399565b9050610d5a565b60035460065402610d56611399565b0390505b90565b60095481565b60045481565b6000610d74826113e4565b8015610dcc5750600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160159054906101000a900460ff165b9050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e2e57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ec557600080fd5b600760009054906101000a900460ff16151515610ee157600080fd5b610ee9610d2c565b6009819055506001600760006101000a81548160ff02191690831515021790555042600881905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f19350505050158015610f7b573d6000803e3d6000fd5b50610f84611399565b90506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610fed573d6000803e3d6000fd5b507f7d6d872be959ce4ac6c2a582df4033ce6818c3462608930ef844a760640b5466600954600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561110357600080fd5b600760009054906101000a900460ff1615151561111f57600080fd5b600091505b8383905082101561126257838383818110151561113d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff169050611165816113e4565b151561117057600080fd5b6111798161132f565b15151561118557600080fd5b7f1c5e7a37dd4095194684d8f835d2c81b686d64d685032055a7cd02edc7c49ed881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16001600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160146101000a81548160ff0219169083151502179055506006600081548092919060010191905055508180600101925050611124565b50505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112c357600080fd5b600760009054906101000a900460ff161515156112df57600080fd5b8060048190555050565b600760019054906101000a900460ff1681565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061133a826113e4565b80156113925750600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160149054906101000a900460ff165b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b60008073ffffffffffffffffffffffffffffffffffffffff16600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114e057600080fd5b600760009054906101000a900460ff161515156114fc57600080fd5b6003546009819055506001600760016101000a81548160ff0219169083151502179055506001600760006101000a81548160ff021916908315150217905550426008819055507faac5ae2dfd439bb6c2f88b2d8af5b285cfee7584ad0d13ae7c00c1226c7c4c7b60405160405180910390a1565b600760009054906101000a900460ff1615151561158c57600080fd5b6115c782828080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050611819565b7f2769f6028e34d1d2f6a7d82379707cc039c15c5f501e657476ad755f6b7fa0ed338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437820191505094505050505060405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116ab57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156116e757600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561180057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b6003543414151561182957600080fd5b60045460055410151561183b57600080fd5b611844336113e4565b15151561185057600080fd5b60056000815480929190600101919050555033600b6000600554815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080604051908101604052808281526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160001515815250600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908051906020019061194f929190611a5d565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160010160156101000a81548160ff02191690831515021790555090505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a1e57803560ff1916838001178555611a4c565b82800160010185558215611a4c579182015b82811115611a4b578235825591602001919060010190611a30565b5b509050611a599190611add565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a9e57805160ff1916838001178555611acc565b82800160010185558215611acc579182015b82811115611acb578251825591602001919060010190611ab0565b5b509050611ad99190611add565b5090565b611aff91905b80821115611afb576000816000905550600101611ae3565b5090565b905600a165627a7a723058200eabd39acb3fc77a2b8df61e5911f4c9742b8ef1c97ca6ff59826d6bdcc80a0b0029',
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

module.exports = deployContract;

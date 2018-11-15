# Gym block

Gym attendance incentives using the blockchain and smart-contracts.

## How it works

This dApp allow people to schedule an event or class.
Let's call this person the "teacher". 
When scheduling an event, should provide a no-show wallet addresss and a fee. 
Submitting the form will deploy a smart-contract on the ethereum blockchain.

Afterwards they'll have a link to share the event with other people (students).
Those signing up will have to deposit the fee.
That fee will be returned to them if they attend. If not, it goes into the no-show wallet address.

Teachers will be able to see how many people are attending the event and their wallet addresses. 
They will also be able to set whether some student attended or not. 
At the end of the event, the teacher can "close the contract", causing fees to be returned to those that attended and transfered to the no-show address for those that didn't attend.

### The no-show address

This can be any wallet address. We recommend teachers to specify a charity address, but it can also be their own address or the school/instituion, so function as a mean of covering the costs of deploying the smart-contracts.

### Estimated costs for contract deployment

Each event booking will deploy a smart-contract on the ethereum network.
Naturally, this has a cost. 
The current estimated cost is `2,052,673` Gwei or `~0.002` Ether.


## Quick start

Install npm dependencies:
    
    npm install

Build the project:

    npm run build

Start the server:

    npm start


## TODO

- try to automatically refund the smart-contract deployment cost to the owner, before transfering the funds to the no-show address. 

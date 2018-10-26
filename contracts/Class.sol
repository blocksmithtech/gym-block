pragma solidity 0.4.24;

import './zeppelin/lifecycle/Destructible.sol';
import './zeppelin/ownership/Ownable.sol';

contract Class is Destructible, Ownable {
    address public charityAddress;
    string public name;
    uint256 public deposit;
    uint public limitOfParticipants;
    uint public registered;
    uint public attended;
    bool public ended;
    bool public cancelled;
    bool public assetsDistributed;
    uint public endedAt;
    uint256 public payoutAmount;

    mapping (address => Participant) public participants;
    mapping (uint => address) public participantsIndex;

    struct Participant {
        string participantName;
        address addr;
        bool attended;
        bool paid;
    }

    event RegisterEvent(address addr, string participantName, address charityAddress);
    event AttendEvent(address addr);
    event PaybackEvent(uint256 _payout, address charityAddress);
    event WithdrawEvent(address addr, uint256 _payout);
    event CancelEvent();

    /* Modifiers */
    modifier hasDeposit {
        require(deposit > 0);
        _;
    }

    modifier onlyActive {
        require(!ended);
        _;
    }

    modifier onlyEnded {
        require(ended);
        _;
    }


    modifier noOneRegistered {
        require(registered == 0);
        _;
    }

    modifier notDistributed {
        require(!assetsDistributed);
        _;
    }




    /* Public functions */
    /**
     * @dev Construcotr.
     * @param _name The name of the event
     * @param _deposit The amount each participant deposits. The default is set to 0.02 Ether. The amount cannot be changed once deployed.
     * @param _limitOfParticipants The number of participant. The default is set to 20. The number can be changed by the owner of the event.
     * @param _charityAddress The charity address to where we will send the proceedings
     */
    constructor (
        address _charityAddress,
        string _name,
        uint256 _deposit,
        uint _limitOfParticipants
    ) public {
        if (bytes(_charityAddress).length != 0) {
            charityAddress = _charityAddress;
        } else {
            charityAddress = msg.sender;
        }
        if (bytes(_name).length != 0){
            name = _name;
        } else {
            name = 'Test';
        }

        if(_deposit != 0){
            deposit = _deposit;
        }else{
            deposit = 0.02 ether;
        }

        if (_limitOfParticipants != 0){
            limitOfParticipants = _limitOfParticipants;
        }else{
            limitOfParticipants = 20;
        }
    }

    /**
     * @dev Registers participant.
     * @param _participant The name of the participant
     */
    function register(string _participant) external payable onlyActive{
        registerInternal(_participant);
        emit RegisterEvent(msg.sender, _participant, charityAddress);
    }

    /**
     * @dev The internal function to register participant
     * @param _participant The name of the participant
     */
    function registerInternal(string _participant) internal {
        require(msg.value == deposit);
        require(registered < limitOfParticipants);
        require(!isRegistered(msg.sender));

        registered++;
        participantsIndex[registered] = msg.sender;
        participants[msg.sender] = Participant(_participant, msg.sender, false, false);
    }

    /**
     * @dev Withdraws deposit in case the event is canceled
     */
    function withdraw() external hasDeposit onlyEnded{
        Participant participant = participants[msg.sender];
        require(participant.addr == msg.sender);
        require(cancelled);
        require(participant.paid == false);

        participant.paid = true;
        participant.addr.transfer(deposit);
        emit WithdrawEvent(msg.sender, deposit);
    }

    /* Constants */
    /**
     * @dev Returns total balance of the contract. This function can be deprecated when refactroing front end code.
     * @return The total balance of the contract.
     */
    function totalBalance() view public returns (uint256){
        return address(this).balance;
    }

    /**
     * @dev Returns true if the given user is registered.
     * @param _addr The address of a participant.
     * @return True if the address exists in the pariticipant list.
     */
    function isRegistered(address _addr) view public returns (bool){
        return participants[_addr].addr != address(0);
    }

    /**
     * @dev Returns true if the given user is attended.
     * @param _addr The address of a participant.
     * @return True if the user is marked as attended by admin.
     */
    function isAttended(address _addr) view public returns (bool){
        return isRegistered(_addr) && participants[_addr].attended;
    }

    /**
     * @dev Returns true if the given user has withdrawn his/her deposit.
     * @param _addr The address of a participant.
     * @return True if the attendee has withdrawn his/her deposit.
     */
    function isPaid(address _addr) view public returns (bool){
        return isRegistered(_addr) && participants[_addr].paid;
    }

    /**
     * @dev Show the payout amount for the charity
     * @return The amount to send to the charity address.
     */
    function payout() view public returns(uint256){
        if (attended == 0) return totalBalance();
        return uint(totalBalance()) - (uint(attended) * uint(deposit));
    }

    /* Admin only functions */

    /**
     * @dev Ends the event by owner
     */
    function payback() external onlyOwner onlyActive{
        payoutAmount = payout();
        ended = true;
        endedAt = now;
        charityAddress.transfer(payoutAmount)
        uint leftOver = totalBalance();
        owner.transfer(leftOver);

        emit PaybackEvent(payoutAmount, charityAddress);
    }

    /**
     * @dev Cancels the event by owner. When the event is canceled payments will be made
     */
    function cancel() external onlyOwner onlyActive{
        payoutAmount = deposit;
        cancelled = true;
        ended = true;
        endedAt = now;
        emit CancelEvent();
    }

    /**
     * @dev Change the capacity of the event. The owner can change it until event is over.
     * @param _limitOfParticipants the number of the capacity of the event.
     */
    function setLimitOfParticipants(uint _limitOfParticipants) external onlyOwner onlyActive{
        limitOfParticipants = _limitOfParticipants;
    }

    /**
     * @dev Change the name of the event. The owner can change it as long as no one has registered yet.
     * @param _name the name of the event.
     */
    function changeName(string _name) external onlyOwner noOneRegistered{
        name = _name;
    }

    /**
     * @dev Mark participants as attended. The attendance cannot be undone.
     * @param _addresses The list of participant's address.
     */
    function attend(address[] _addresses) external onlyOwner onlyActive{
        for( uint i = 0; i < _addresses.length; i++){
            address _addr = _addresses[i];
            require(isRegistered(_addr));
            require(!isAttended(_addr));
            emit AttendEvent(_addr);
            participants[_addr].attended = true;
            attended++;
        }
    }
}

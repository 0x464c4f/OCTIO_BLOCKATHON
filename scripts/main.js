/**
 * Created by wolfgang on 25/11/2017.
 */
// Interfacec to communicate with smart contract


var Web3 = require('web3');

function sendToken() {
    console.log('send');
    web3.eth.sendTransaction({
        from: '0xea1fe34acab50d910785af697c6b221050622812',
        to: '0xd41be5485a7efa77a043532b2f1478714cfebbf5',
        value: web3.toWei(1) //document.getElementById("amount").value, 'ether'
    }, function(error, result) {
        if (!error) {
            document.getElementById('response').innerHTML = 'Success: <a href="https://testnet.etherscan.io/tx/' + result + '"> View Transaction </a>'
        } else {
            document.getElementById('response').innerHTML = '<pre>' + error + '</pre>'
        }
    })
}


$( document ).ready(function() {
    // var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var localWeb3 = new Web3(window.web3.currentProvider)
    getBalance("0xea1fe34acab50d910785af697c6b221050622812");


    /*
     // uncomment to enable MetaMask support:
     if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
     eth.setProvider(window.web3.currentProvider);
     } else {
     eth.setProvider(provider); // set to TestRPC if not available
     }
     */



// var web3 = new Web3();
// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//
//
//
// console.log(web3.eth.accounts);
// var balance= getBalance("0xea1fe34acab50d910785af697c6b221050622812");
// console.log(web3.fromWei(balance, 'ether'));
// console.log(web3.fromWei(getBalance("0xea1fe34acab50d910785af697c6b221050622812"),"ether"));
//
//     $('#amountTokens').html(balance);


});




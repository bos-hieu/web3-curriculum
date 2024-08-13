import sha256 from 'crypto-js/sha256.js';
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from "./blockchain-helpers.js";

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length-1];
const transactions = getTransactions();
const hash = sha256(previousBlock.hash + JSON.stringify(transactions)).toString();
console.log(hash);
const newBlock = {
    hash,
    previousHash: previousBlock.hash,
    transactions,
};
blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([])
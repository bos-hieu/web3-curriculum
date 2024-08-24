import EC from 'elliptic';

// p192 is the type of elliptic curve you will you to generate the keys for your wallets.
const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');

const publicKey2 = keyPair2.getPublic('hex');
console.log(`Public Key 2: ${publicKey2}`);

const privateKey2 = keyPair2.getPrivate('hex');
console.log(`Private Key 2: ${privateKey2}`);
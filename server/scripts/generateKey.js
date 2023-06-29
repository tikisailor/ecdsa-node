const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp256k1.utils.randomPrivateKey();
const publicKey = secp256k1.getPublicKey(privateKey);

console.log(`Private Key: ${toHex(privateKey)}`)
console.log(`Public Key: ${toHex(publicKey)}`)

// Some public private key pairs 
// Private Key: b22b12929a0a41cfe43fd3cf16f7cfedfecb4b7e2664886333f4dade89e3e74c
// Public Key: 02f1f5398a573ffb646c46f5c6e8eb12704c94de73a91ba85a31ee5f15be9e8456

// Private Key: d8652b85ebfc95a8ec25d2de551027ac38a43e23bec605bac06867620a1954c4
// Public Key: 03c7053ff01b0be4b80998f70b07a527c2a4db11b329025806fed20ac91663998e

// Private Key: 1273fc29ff2260f8ca0d0d341fb3c2ade337229acd1af0019002798700fd5c67
// Public Key: 026cb42482442e5f6612d301f049c406f0f305e76dfdacde6df38801fb0042a1dc

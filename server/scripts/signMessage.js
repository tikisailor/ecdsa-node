const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

// create the message (tx)
const message = JSON.stringify({
    sender: '02f1f5398a573ffb646c46f5c6e8eb12704c94de73a91ba85a31ee5f15be9e8456',
    amount: 20,
    recipient: '03c7053ff01b0be4b80998f70b07a527c2a4db11b329025806fed20ac91663998e',
})

// hash it
const hash = keccak256(utf8ToBytes(message))

// signing key
const privateKey = 'b22b12929a0a41cfe43fd3cf16f7cfedfecb4b7e2664886333f4dade89e3e74c';

// retrieve public key from private key
// const publicKey = secp256k1.getPublicKey(privateKey);
// console.log(publicKey)

// create signature
const sig = secp256k1.sign(hash, privateKey);
// console.log(sig)
// console.log(sig.recoverPublicKey(hash).toHex())

// check validity
// const isValid = secp256k1.verify(sig, hash, publicKey) === true;
// console.log(isValid)

// validity check also works with hex format
// const hexSig = sig.toCompactHex()
// const isValid2 = secp256k1.verify(hexSig, hash, publicKey) === true;
// console.log(isValid2)

console.log(`Here is your signed message: ${sig.toCompactHex()}`)

// A message with signature
// const message = JSON.stringify({
//   sender: '02f1f5398a573ffb646c46f5c6e8eb12704c94de73a91ba85a31ee5f15be9e8456',
//   amount: 20,
//   recipient: '03c7053ff01b0be4b80998f70b07a527c2a4db11b329025806fed20ac91663998e',
// })
// 83968a2d1ad36907a04a5ed0cec8b1c64d33629e484639302b62fa43084c7dad0bebf09740d60fead075e3b95bef7411b5fc6df02af8c630a2ded76b6a5f5a65

// Some public private key pairs 
// Private Key: b22b12929a0a41cfe43fd3cf16f7cfedfecb4b7e2664886333f4dade89e3e74c
// Public Key: 02f1f5398a573ffb646c46f5c6e8eb12704c94de73a91ba85a31ee5f15be9e8456

// Private Key: d8652b85ebfc95a8ec25d2de551027ac38a43e23bec605bac06867620a1954c4
// Public Key: 03c7053ff01b0be4b80998f70b07a527c2a4db11b329025806fed20ac91663998e

// Private Key: 1273fc29ff2260f8ca0d0d341fb3c2ade337229acd1af0019002798700fd5c67
// Public Key: 026cb42482442e5f6612d301f049c406f0f305e76dfdacde6df38801fb0042a1dc
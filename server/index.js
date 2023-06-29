const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "02f1f5398a573ffb646c46f5c6e8eb12704c94de73a91ba85a31ee5f15be9e8456": 100,
  "03c7053ff01b0be4b80998f70b07a527c2a4db11b329025806fed20ac91663998e": 50,
  "026cb42482442e5f6612d301f049c406f0f305e76dfdacde6df38801fb0042a1dc": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount, signature } = req.body;

  const signatureValid = validateSignature({sender, amount, recipient}, signature)

  if(!signatureValid) {
    return res.status(400).send({ message: "Invalid Signature!" });
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function validateSignature(msg, sig) {
  const message = JSON.stringify(msg)
  const hash = keccak256(utf8ToBytes(message))
  return secp256k1.verify(sig, hash, msg.sender) === true;
}

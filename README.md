# swisstronic-challenge-3

**Contract Address:** `0xf84Df872D385997aBc28E3f07A2E3cd707c9698a`

**Value retrieved from RPC call:**
```
Network: Swisstronik
Answer:  0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4


Network: Sepolia
Answer:  0x0000000000000000000000000000000000000000000000000000000000000000


Network: Mumbai
Answer:  0x0000000000000000000000000000000000000000000000000000000000000000
```

**Reason:**
The particular contract address is deployed on Swisstronik test network. The value stored at slot 0 for this contract address on Swisstronik testnet is `0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4`. Meanwhile on Sepolia and Mumbai testnets, this particular address may be a smart contract or an EOA. This address does not contain any smart contract code and thus the storage slot #0 is therefore empty, hence the value `0x0000000000000000000000000000000000000000000000000000000000000000` is returned.
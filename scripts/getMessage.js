const ethers = require("ethers");
const hre = require("hardhat");

const contract = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";

const networks = [
    {
        name: "Swisstronik",
        url: "https://json-rpc.testnet.swisstronik.com/",
    },
    {
        name: "Mumbai",
        url: "https://polygon-mumbai.infura.io/v3/f06e2835265c4e12bc2c613d6c037b8f"
    },
    {
        name: "Sepolia",
        url: "https://sepolia.infura.io/v3/f06e2835265c4e12bc2c613d6c037b8f"
    }
]

const fetchMessage = async (provider, name) => {
    const message = await provider.getStorageAt(contract, 0);
    console.log(`Network: ${name}`);
    console.log("Answer: ", message, "\n\n");
}

async function main() {
    networks.map(async (network) => {
        const provider = ethers.getDefaultProvider(network.url);
        await fetchMessage(provider, network.name);
    })
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
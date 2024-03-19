import Web3 from 'web3';

async function getMetaMaskProvider() {
    if (!window.ethereum) throw new Error(`No MetaMask found!`);

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed!');

    return web3;
}

export async function getEthBalance(address) {
    const web3 = await getMetaMaskProvider();

    if (!address || typeof address !== 'string') {
        throw new Error('Invalid address provided!');
    }

    const balance = await web3.eth.getBalance(address);

    if (balance === undefined || balance === null) {
        throw new Error('Failed to retrieve balance!');
    }

    return web3.utils.fromWei(balance, 'ether');
}
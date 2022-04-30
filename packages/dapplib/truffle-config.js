require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stove renew noble push hope enroll slot genre'; 
let testAccounts = [
"0xed62ede7ed50cc3944942e7fdc80751e6e89dd4ada3b7ee3e9129cef16a5d3c1",
"0x0749b8802ff6402ac9f57a4e2e77eea15917800e05019701d966c867256437d5",
"0x673c61e6edc0d1da70bb6a19e44ac46511d609fe7d8d5e418fdb659d1e92fe2b",
"0xc9a0a3dfa253f61f85161cd7263dd23c46f9543a65ca264bda8d98e652dfb5ea",
"0xf58595ac7df3630166369e48dbc22259e623415887fbf7c4ceda560023045810",
"0x6b1e36b9a8783789f39188ad91498d839ee79948de49f67a40257f9f602129df",
"0xdccfd5d2cbcceab8166d81fe21f852d41d4955f13a645af14496c1f499c83c25",
"0xa56c6128655cf186d2dc9b287c9e15e256323d5ae7df3042fac1a053fc5a3a4d",
"0xed468ea4f4c5e14e885f96127d4c4ff3e8d8681bf0da1239dac3b425d0a2c1d3",
"0x862dfbf0339564d6a7ea24acde4582d2cbdfc523526a255f3c63c3b9f2107212"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


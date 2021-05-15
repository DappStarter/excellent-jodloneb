require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pull hunt casino bridge tail'; 
let testAccounts = [
"0x75ed595211031e8f56a4c9a4731a02cc707df4c0c5080174d065dc5d2422e38b",
"0x0e7d15c2da027c395fd96753809467dd737de2535aef6edd08540144db2f174b",
"0x7b175f93469f45f70a1f99545c4342bea0c8337a4b97b6f022fd36798404c900",
"0x3d36c04692469cafd552b3834b47229084d90d59b1a5ff893334b874ff71ad37",
"0x0e7bcd36eac048ae969ce060d9ee93959e151f27c3ee298a4abe7e289bfb10ee",
"0x0e3b39ed0d5bc0daad6efeec0a04a2b8eafac57e6902b50e7ee96172761d0807",
"0xf93abc2548a33772724e1de061643521e07c78a842528f6a2e421cfbfd1b4750",
"0x24df075de12302f8ab211b4c7eb5f2a078514983698ef1d7e46da79e937dd7eb",
"0x05d249b6d6f8d8aff8b0afae531bd4a504d2c4f0dcf1e3349795ba74fe3c8a76",
"0xf51922d89199fcea92dac9b33fc1f2f0ec163eb26da13fdf82dadf91e54a3ec6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

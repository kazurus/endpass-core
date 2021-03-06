/// <reference path="constants.d.ts" />
/// <reference path="ethereum.d.ts" />
/// <reference path="keystores.d.ts" />

declare module '@endpass/utils/keystoreHDWallet' {
  export function createHDWalletBySeed(seedPhrase: string): EthereumHDKey;

  export function encryptHDWallet(
    password: string,
    wallet: EthereumHDKey,
    encryptOptions: KDFEncryptOptions
  ): V3Keystore;

  export function decryptHDWallet(
    password: string,
    v3Keystore: V3Keystore
  ): EthereumHDKey;
}

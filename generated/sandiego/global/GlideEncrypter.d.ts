declare class GlideEncrypter {
  constructor();
  constructor(key: string);
  /**
   * Decrypts a clear string using the Triple DES algorithm.
   * @param encryptedString String to be decrypted.
   */
  decrypt(encryptedString: string): any;
  /**
   * Encrypts a clear string using the Triple DES algorithm.
   * @param clearString String to be encrypted.
   */
  encrypt(clearString: string): any;
}
export { GlideEncrypter };

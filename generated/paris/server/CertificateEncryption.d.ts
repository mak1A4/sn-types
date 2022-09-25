declare class CertificateEncryption {
  constructor();
  /**
   * Generates the Message Authentication Code (MAC), which is used to authenticate a
   * message.
   * @param key Key to use to sign the message. Must be Base64 encoded.
   * @param algorithm Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so
   * on.
   * @param data Data to process.
   */
  generateMac(key: string, algorithm: string, data: string): any;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store
   * Cert.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param algorithm Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
   */
  getThumbPrint(certificateID: string, algorithm: string): any;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore
   * entry.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Alias name for the certificate.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  getThumbPrintFromKeystore(
    certificateID: string,
    alias: string,
    algorithm: string,
  ): any;
  /**
   * Signs the data using the private key and the specified algorithm.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Private key name.
   * @param aliaspassword Password for the private key.
   * @param algorithm Algorithm to use. Must be one of the following values:
   * NONEwithRSA
   *
   * MD2withRSA
   *
   * MD5withRSA
   *
   * SHA1withRSA
   *
   * SHA224withRSA
   *
   * SHA256withRSA
   *
   * SHA384withRSA
   *
   * SHA512withRSA
   *
   * NONEwithDSA
   *
   * SHA1withDSA
   *
   * SHA224withDSA
   *
   * SHA256withDSA
   *
   * NONEwithECDSA
   *
   * SHA1withECDSA
   *
   * SHA224withECDSA
   *
   * SHA256withECDSA
   *
   * SHA384withECDSA
   *
   * SHA512withECDSA
   *
   *
   * @param datatosign Data to sign.
   */
  sign(
    certificateID: string,
    alias: string,
    aliaspassword: string,
    algorithm: string,
    datatosign: string,
  ): any;
}
export { CertificateEncryption };

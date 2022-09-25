declare class KMFCryptoOperation {
  constructor(cryptoModuleName: string, operationName: string);
  /**
   * Performs the cryptographic operation defined by the current KMFCryptoOperation object
   * on the supplied data and returns the result.
   * @param data Required except if the withSysId() builder method has
   * previously been called on the associated KMFCryptoOperation object. Input data on
   * which to perform the cryptographic operation.
   */
  doOperation(data: any): any;
  /**
   * Sets the additional input needed to perform the cryptographic operation.
   * @param additionalInput Optional, except for Asymmetric Decryption operations when using EC-IES.
   * Additional input data needed to perform the cryptographic operation specified in the
   * KMFCryptoOperation object.Supported string formats:
   * FORMATTED: Formatted to the Key Management Framework (KMF)
   * specifications.
   *
   * KMFBASE64: Base64 encoded.
   *
   *
   *
   * KMFEncryptionPayload object
   * format:
   * {
   * "ciphertext": String,
   * "derivation_secret": String,
   * "ephemeral_key": String,
   * "ephemeral_key_format": String,
   * "signature": String
   * }
   */
  withAdditionalInput(additionalInput?: string): any;
  /**
   * Sets the algorithm associated with the key material to wrap.
   * @param algorithm Algorithm to use.Valid values:
   * AES: Symmetric key type
   *
   * EC: Asymmetric key type
   *
   * HMAC: Symmetric key type
   *
   * RSA: Asymmetric key type
   *
   *
   *
   */
  withAlgorithm(algorithm: string): any;
  /**
   * Sets the data format for the input data on which the cryptographic operation will be
   * performed. Uses the specified format when decoding the data.
   * @param inputFormat Format of the input data.Valid values:
   * FORMATTED: Formatted to the Key Management Framework (KMF)
   * specifications.
   *
   * KMFBASE64: Base64 encoded.
   *
   * KMFNONE: No encoding.
   *
   *
   *
   * Default: Value determined by the operation specified when the
   * KMFCryptoOperation object was instantiated. For more information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
   */
  withInputFormat(inputFormat: string): any;
  /**
   * Sets the data format of the output data that is returned by the cryptographic
   * operation. Uses the specified format when encoding the data.
   * @param outputFormat Format of the output data.Valid values:
   * FORMATTED: Formatted to the Key Management Framework (KMF)
   * specifications.
   *
   * KMFBASE64: Base64 encoded.
   *
   * KMFNONE: No decoding. Only supported for MAC_VERIFICATION and
   * SIGNATURE_VERIFICATION.
   *
   *
   *
   * Default if this method is not called: Value determined by the
   * operation specified when the KMFCryptoOperation object was instantiated. For more
   * information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
   */
  withOutputFormat(outputFormat: string): any;
  /**
   * Sets the data type for the output data returned after the cryptographic operation is
   * performed.
   * @param outputType Type of output data.Not all output types are applicable to all operations.
   * For an unsupported type, an exception is thrown.
   * Valid values (not case-sensitive):
   * String: Not valid for MAC_VERIFICATION or
   * SIGNATURE_VERIFICATION operations.
   *
   * Boolean: Only valid for MAC_VERIFICATION or
   * SIGNATURE_VERIFICATION operations.
   *
   * Payload: Only valid for the ASYMMETRIC_ENCRYPTION
   * operation. Use this output type for EC-IES.
   *
   *
   *
   *
   * Note: When specifying an output of Payload, the output of
   * the doOperation() method is a KMFEncryptionPayload object.
   * For more information on the structure of this object, see withAdditionalInput().
   *
   * Default: Value determined by the operation, specified when the
   * KMFCryptoOperation object was instantiated. For more information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
   */
  withOutputType(outputType: string): any;
  /**
   * Sets the sys_id of the key to wrap on the KMFCryptoOperation object. Applicable to
   * symmetric and asymmetric wrapping of keys.
   * @param sysId Sys_id of the key to wrap. Located in the Module Key [sys_kmf_module_key]
   * table.
   */
  withSysId(sysId: string): any;
}
export { KMFCryptoOperation };

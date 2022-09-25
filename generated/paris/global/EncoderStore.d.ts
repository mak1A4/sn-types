declare class EncoderStore {
  /**
   * Adds a new encoder object to the store and returns a unique name.
   * @param mlEncoder Encoder()
   * object to add to the store.
   */
  add(mlEncoder: any): any;
  /**
   * Removes a specified encoder object from the store.
   * @param name Name of the Encoder()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets an encoder object from a store.
   * @param name Name of an encoder in a store.
   */
  get(name: string): any;
  /**
   * Gets the names of all encoder definition records in the store.
   */
  getAllNames(): any;
  /**
   * Updates an encoder object in a store.
   * @param name Name of the encoder to update.
   * @param mlEncoder Encoder()
   * object properties to update.
   */
  update(name: string, mlEncoder: any): any;
}
export { EncoderStore };

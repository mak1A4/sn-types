declare class GlideTextReader {
  constructor(inputStream: any);
  /**
   * Returns the character encoding of the input stream.
   */
  getEncoding(): any;
  /**
   * Returns a single line from the input stream and returns a string. Since this is working
   * off of a stream, it is not subject to the 5MB size limit.
   */
  readLine(): any;
}
export { GlideTextReader };

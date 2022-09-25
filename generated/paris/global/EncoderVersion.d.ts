declare class EncoderVersion {
  /**
   * Gets encoder object properties and version number.
   */
  getProperties(): any;
  /**
   * Returns vectors for each input sentence.
   * @param input Array of strings as sentences from which to receive vectors.
   */
  getSentenceVectors(input: any[]): any;
  /**
   * Returns words similar to each input word in the descending rank order of
   * similarity.
   * @param input Array of words for which to find similar words.
   * @param options Map to refine results. { "topN":"String" }
   */
  getSimilarWords(input: any[], options: any): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): any;
  /**
   * Returns vectors for each input word.
   * @param input List of strings as words from which to receive vectors.
   */
  getWordVectors(input: any[]): any;
}
export { EncoderVersion };

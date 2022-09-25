declare class GeniusResultAnswer {
  /**
   * Adds a set of arbitrary key-value pair fields to a Genius Result
   * Script answer. You can utilize any public Now Platform API to
   * generate these fields.
   * @param map Defines an arbitrary set of key-value pair fields for addition to the Genius
   * Result Script answer. All field values must be Strings.
   *
   * {
   * "fieldName1": String,
   * "fieldName2": String
   * }
   */
  addDataMap(map: any): any;
  /**
   * Adds terms to the search query defined for a Genius Result Search
   * answer.
   * @param searchPhrases Array of arbitrary Strings to add as terms for the search query made by the
   * Genius Result Search answer. Search treats these terms as if
   * separated by the OR operator.
   *
   * Example:[
   * "Term": String,
   * "Quoted phrase": String
   * ]
   */
  addSearchPhrases(searchPhrases: any[]): any;
  /**
   * Sets and encodes the search query for a Genius Result Search
   * answer.
   * @param query Query to use for the search issued by the Genius Result
   * Search answer.
   */
  setEncodedQuery(query: string): any;
  /**
   * Limits the maximum number of search results returned for a Genius Result
   * Search answer. By default, the search query returns up to three
   * results.
   * @param searchLimit Positive integer value for the maximum number of search results to return for a
   * Genius Result Search answer. Values above 3 have no
   * effect.
   *
   * Default: 3
   */
  setSearchLimit(searchLimit: number): any;
  /**
   * Specifies terms for the search query defined for a Genius Result
   * Search answer.
   * @param searchPhrase Terms to use for the search query made by the Genius Result
   * Search answer.
   *
   * If you want to retain the original search query terms submitted by the user, set
   * this parameter to the String value returned by the
   * GeniusResultContext.getOriginalSearchPhrase() method.
   */
  setSearchPhrase(searchPhrase: string): any;
  /**
   * Limits the search query defined for a Genius Result Search answer
   * to a specific table. The query only returns search results from the specified table as Genius
   * Result answer cards.
   * @param table Now Platform table name. Only indexed records on this table are
   * included in results for the Genius Result Search
   * answer.
   */
  setTable(table: string): any;
  /**
   * Specifies whether to perform typo handling auto-correction (spell checking) for a
   * search query defined in a Genius Result Search answer.
   * @param spellCheck Flag that indicates whether to perform typo handling auto-correction for the search
   * query defined in a Genius Result Search answer.
   *
   * Valid values:
   * true: Perform typo handling auto-correction for the search query.
   *
   * false: Bypass typo handling auto-correction for the search query.
   *
   *
   *
   *
   * Default: true
   */
  spellCheck(spellCheck: boolean): any;
}
export { GeniusResultAnswer };

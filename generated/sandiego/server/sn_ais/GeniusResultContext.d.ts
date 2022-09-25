declare class GeniusResultContext {
  /**
   * Retrieves the user's original search query terms from the search query. You can use
   * these terms to populate Genius Result answers using GeniusResultAnswer API
   * methods.
   */
  getOriginalSearchPhrase(): any;
  /**
   * Retrieves NLU model prediction results for the search
   * query.
   */
  getPredictionResult(): any;
}
export { GeniusResultContext };

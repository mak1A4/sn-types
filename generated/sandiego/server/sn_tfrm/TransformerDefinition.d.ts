declare class TransformerDefinition {
  constructor(transformerRuleList: any, recordPath?: string);
  /**
   * If set when the TransformerDefinition object was instantiated, returns the record path
   * for the source data file associated with the TransformerDefinition object.
   */
  recordPath(): any;
  /**
   * Validates whether a valid TransformerRuleList is associated with the
   * TransformerDefintion object.
   */
  validate(): any;
}
export { TransformerDefinition };

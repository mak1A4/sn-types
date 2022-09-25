declare class Transformer {
  constructor(transformerDefinition: any, document: string);
  /**
   * Returns
   * the row resulting from the last transformation (or null if no row
   * exists).
   */
  getRow(): any;
  /**
   * Transforms the next available
   * row/node
   * in the source document.
   */
  transform(): any;
}
export { Transformer };

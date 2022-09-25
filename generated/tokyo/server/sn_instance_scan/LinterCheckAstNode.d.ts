declare class LinterCheckAstNode {
  /**
   * Retrieves the string value of a name node type. A name node represents a simple
   * identifier that is not a keyword, such as a function or variable name.
   */
  getNameIdentifier(): any;
  /**
   * Gets the parent node object of the accessed node.
   */
  getParent(): any;
  /**
   * Gets the type of the accessed node.
   */
  getTypeName(): any;
  /**
   * Accesses each node in the subtree starting from this node and executes a given callback
   * function on each node.
   * @param callbackFunction Callback function to be executed on each node in the subtree of this node. This
   * callback function takes a node as a parameter which is the node to be
   * visited.
   */
  visit(callbackFunction: any): any;
}
export { LinterCheckAstNode };

declare class XMLDocument2 {
  constructor(inputStream: any);
  constructor();
  /**
   * Creates and adds an element node to the current node. The element name is the string
   * passed in as a parameter. The new element has no text child nodes.
   * @param name The new element's name.
   */
  createElement(name: string): any;
  /**
   * Creates and adds an element node with a text child node to the current
   * node.
   * @param name Name of the element to add.
   * @param value Element's text value.
   */
  createElementWithTextValue(name: string, value: string): any;
  /**
   * Gets the document element node of the XMLdocument2 object. The document element node is
   * the root node.
   */
  getDocumentElement(): any;
  /**
   * Gets the first node in the specified xPath.
   * @param xPath The xPath to obtain the node from.
   */
  getFirstNode(xPath: string): any;
  /**
   * Gets the node after the specified node.
   * @param current The current node.
   */
  getNextNode(current: any): any;
  /**
   * Gets the node specified in the xPath.
   * @param xPath xPath of the node to obtain.
   */
  getNode(xPath: string): any;
  /**
   * Gets all the text child nodes from the node referenced in the specified
   * XPath.
   * @param xPath XPath of the text to obtain.
   */
  getNodeText(xPath: string): any;
  /**
   * Parses the XML string and loads it into the XMLDocument2 object.
   * @param xmlDoc The document to parse.
   */
  parseXML(xmlDoc: string): any;
  /**
   * Makes the node passed in as a parameter the current node.
   * @param element The element node to set as the current node.
   */
  setCurrentElement(element: any): any;
  /**
   * When set to true, the XMLDocument2 object processes the document with XML
   * namespaces.
   * @param aware When true, the XMLDocument2 object processes the document with XML namespaces.
   */
  setNamespaceAware(aware: boolean): any;
  /**
   * Returns a string containing the XML.
   */
  toString(): any;
}
export { XMLDocument2 };

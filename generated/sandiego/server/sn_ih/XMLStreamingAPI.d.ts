declare class XMLStreamingAPI {
  /**
   * Closes the XMLStreamingAPI object. You must call this method to close the stream after
   * building your XML document.
   */
  close(): any;
  /**
   * Ends pretty print XML formatting.
   */
  disablePrettyPrint(): any;
  /**
   * Adds pretty print formatting to an XML element or tree of elements.
   */
  enablePrettyPrint(): any;
  /**
   * Ends the structure of your XML document.
   */
  endDocument(): any;
  /**
   * Adds a closing tag to an XML element.
   */
  endElement(): any;
  /**
   * Returns the XML document as a
   * string.
   */
  getXMLString(): any;
  /**
   * Begins building an XML document.
   * @param rootElement Optional. Root element, or top-level parent element, for your XML
   * document.
   * @param namespaceDefinitionMap Optional. Map of keys and values for the namespaces and their associated values
   * in a subsequent list of elements. For example:
   * {
   * 'namespaceOne':'namespaceValue',
   * 'namespaceTwo':'namespaceValue'
   * }
   */
  startDocument(rootElement?: string, namespaceDefinitionMap?: any): any;
  /**
   * Adds a starting tag for an XML element.
   * @param name Name of the XML element.
   * @param namespaceMap Optional. Map of keys and values for the namespaces and their associated values
   * in a subsequent list of elements. For
   * example:{
   * 'namespaceOne':'namespaceValue',
   * 'namespaceTwo':'namespaceValue'
   * }
   * @param attributeMap Optional. Map of keys and values for the attributes and their associated values
   * in a subsequent list of elements.
   * @param prefix Optional. Prefix for the XML element.
   */
  startElement(
    name: string,
    namespaceMap?: any,
    attributeMap?: any,
    prefix?: string,
  ): any;
  /**
   * Adds a list of nested elements with predefined text to your streaming XML
   * document.
   * @param elementName Name of the XML element associated with each string listed in the
   * data
   * array.
   * @param data List of values to assign to each element nested inside
   * wrappingElement.
   * @param wrappingElement Parent element containing each
   * elementName.
   */
  writeArray(elementName: string, data: any[], wrappingElement: string): any;
  /**
   * Adds an attribute to an element in your XML document.
   * @param name Name of the XML element's attribute.
   * @param value Value for the XML element's attribute.
   */
  writeAttribute(name: string, value: string): any;
  /**
   * Adds attributes to an element in your XML document.
   * @param attributeMap Map of keys and values containing attribute names and values to associate with
   * the XML element. For
   * example:{
   * 'attributeOne':'attributeValue',
   * 'attributeTwo':'attributeValue'
   * }
   */
  writeAttributes(attributeMap: any): any;
  /**
   * Adds CDATA to your XML document.
   * @param data Value to include after the CDATA keyword in your CDATA element.
   */
  writeCData(data: string): any;
  /**
   * Adds a CDATA element to your XML document.
   * @param name Name of the CDATA element.
   * @param data Optional. Type of data to parse the CDATA element
   * as.
   * @param prefix Optional. Map of child elements and values that the CDATA element includes. For
   * example:
   * {
   * 'prefixOne':'prefixValue',
   * 'prefixTwo':'prefixValue'
   * }You
   * must associate an XML element's prefix with a namespace using writeNamespace().
   */
  writeCDataElement(name: string, data?: string, prefix?: any): any;
  /**
   * Adds text to your XML document.
   * @param text Text to add to a section of your XML document.
   */
  writeCharacters(text: string): any;
  /**
   * Adds a comment to your XML document.
   * @param comment Comment text to include.
   */
  writeComment(comment: string): any;
  /**
   * Adds a document type definition to your XML document.
   * @param dtd Name of a valid XML document type definition.
   */
  writeDtd(dtd: string): any;
  /**
   * Adds a namespace to an element in your XML document.
   * @param prefix Prefix for the XML namespace.
   * @param namespaceURI Optional. URI for the namespace.
   */
  writeNamespace(prefix: string, namespaceURI?: string): any;
  /**
   * Adds namespaces to the
   * root
   * element in your XML document.
   * @param namespaceMap Map of keys and values containing namespace prefixes and URIs to associate with
   * the root element of the
   * XML
   * document. For example:
   * {
   * 'namespaceOne':'namespaceValue',
   * 'namespaceTwo':'namespaceValue'
   * }
   */
  writeNamespaces(namespaceMap: any): any;
  /**
   * Adds a single XML element to your XML document.
   * @param name Name of the XML element.
   * @param text Value for the XML element.
   * @param prefix Optional. Map of prefixes and values associated with the XML element. For
   * example:
   * {
   * 'prefixOne':'prefixValue',
   * 'prefixTwo':'prefixValue'
   * }You
   * must associate an XML element's prefix with a namespace using writeNamespace().
   */
  writeTextElement(name: string, text: string, prefix?: any): any;
}
export { XMLStreamingAPI };

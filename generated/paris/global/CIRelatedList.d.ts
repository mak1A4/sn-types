declare class CIRelatedList {
  constructor(
    table: string,
    refField: string,
    cmdb_ci: string,
    debugFlag: string,
  );
  /**
   * Adds the specified record to the related list.
   * @param record The record to add
   */
  addRec(record: string): any;
  /**
   * Sets the given records to the related list.
   * @param records The records to set
   */
  addRecs(records: string): any;
  /**
   * Appends an XML child to a field.
   * @param parent The parent element
   * @param name The element name
   * @param datum The data to append
   */
  appendXMLChildFld(parent: string, name: string, datum: string): any;
  /**
   * Appends an XML child to a record.
   * @param parent The parent element
   * @param name The element name
   * @param record The record
   */
  appendXMLChildRecord(parent: string, name: string, record: string): any;
  /**
   * Checks to see if this is a SysCollection table. If it is, sets the target table name
   * and reference field name.
   */
  checkSysCollection(): any;
  /**
   * Checks to see if this is a Sys many-to-many table. If it is, sets the target table name
   * and reference field name.
   */
  checkSysM2M(): any;
  /**
   * Initializes this instance from the specified XML element.
   * @param element An XML element
   */
  fromXML(element: string): any;
  /**
   * Populates the this.records field of this instance.
   */
  populate(): any;
  /**
   * Removes all the related list items.
   */
  remove(): any;
  /**
   * Makes a string representation of this instance, pushing each line onto the end of the
   * given result array.
   * @param result The result to convert
   */
  toString(result: any[]): any;
  /**
   * Serializes this instance to XML in the given document and  element.
   * @param document The document
   * @param element The rl element
   */
  toXML(document: string, element: string): any;
  /**
   * Converts a related list from XML to record format.
   * @param records The record to create
   * @param element The XML element
   */
  xmlToRecord(records: string, element: string): any;
}
export { CIRelatedList };

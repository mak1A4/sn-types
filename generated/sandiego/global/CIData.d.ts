declare class CIData {
  constructor(debugFlag: string);
  /**
   * Adds the specified related list to this instance.
   * @param relatedList Related list to add.
   */
  addRelatedList(relatedList: any[]): any;
  /**
   * Converts the specified related list to a related list in a given sensor.
   * @param sensor The sensor
   * @param tableName The table name
   * @param refField The reference field
   * @param keyName The key name
   */
  convertRelatedList(
    sensor: string,
    tableName: string,
    refField: string,
    keyName: string,
  ): any;
  /**
   * Initializes the current CIData instance from the specified XML string.
   * @param xml An XML string.
   */
  fromXML(xml: string): any;
  /**
   * Gets the data map in the base CI record.
   */
  getData(): any;
  /**
   * Returns an array of data maps in the given many-to-many list (to this CI).
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI. In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getM2MTable(table: string, refField: string): any;
  /**
   * Gets an array of maps of data in the given related list (to this CI).
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI.  In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getRelatedList(table: string, refField: string): any;
  /**
   * Returns the instance of CIRelatedList for the given list.
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI.  In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getRelatedListInstance(table: string, refField: string): any;
  /**
   * Initializes this instance in preparation for loading a new CI.
   */
  init(): any;
  /**
   * Loads the current data from a specified sys_id.
   * @param cmdb_ci The sys_id of the CI
   */
  loadFromCI(cmdb_ci: string): any;
  /**
   * Converts the name of this instance to a string.
   */
  toString(): any;
  /**
   * Returns an XML string containing a serialized version of this instance (including any
   * related lists).
   */
  toXML(): any;
}
export { CIData };

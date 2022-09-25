declare class AbstractReconciler {
  /**
   * Determines if the newly discovered data is different than the data already in the
   * database for the current item.
   */
  getReconciliationField(): any;
  /**
   * Gets the string value of the field to be used as a key to look up a record in the newly
   * discovered data.
   */
  getReconciliationKey(): any;
  /**
   * Returns true if the newly discovered data is different than the data already in the
   * database for this item.
   */
  hasChanged(): any;
  /**
   * Marks CIs as absent by setting the install status to "Absent"; other tables are marked
   * by setting the (presumed present) field "absent" to true.
   */
  markAbsent(): any;
  /**
   * Marks CIs as present by setting the install status to "Installed"; other tables are
   * marked by setting the (presumed present) field "absent" to false.
   */
  markPresent(): any;
  /**
   * Reconciles the newly discovered data with the data already present in the database and
   * resolves references to previously reconciled data.
   */
  process(): any;
  /**
   * Reads the current memory table record of newly discovered data and checks its validity.
   */
  readDatabaseFields(): any;
  /**
   * Reads the current memory table record of newly discovered data and checks its validity.
   */
  readDiscovered(): any;
  /**
   * Reads the fields in the current database record into instance member fields.
   */
  resolveReferenceFields(): any;
  /**
   * Sets the database fields for the current record to the values in the newly discovered
   * information.
   */
  setDatabaseFields(): any;
  /**
   * Optional override for concrete subclasses that require special setup.
   */
  setup(): any;
  /**
   * Optional method to override in concrete subclasses that need to resolve reference
   * fields.
   * @param sys_id The sys_id of the current database record.
   */
  track(sys_id: string): any;
}
export { AbstractReconciler };

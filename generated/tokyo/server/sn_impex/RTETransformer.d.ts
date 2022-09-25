declare class RTETransformer {
  constructor(
    transformDefinitionId: string,
    verboseLogging: boolean,
    source: string,
    batchSize: number,
  );
  /**
   * Transforms and stores an array of messages into a record in the associated ServiceNow instance based on a provided extract, transform, and load (ETL)
   * definition.
   * @param message Stringified JSON objects representing the records to transform based on the ETL
   * definition.For example, if you want to transform a single user with the data
   * active, email, first name, and last name to the sys_user table, the message would
   * look similar to this: [
   * {
   * "active”:”true”,
   * "email”:”example@servicenow.com”,
   * "first_name”:”Jane”,
   * "last_name”:”Doe”
   * }
   * ]
   * Note: The field names must match the field/path of the source entity
   * fields.
   *
   */
  transform(message: any[]): any;
}
export { RTETransformer };

declare class hr_ActivityUtils {
  /**
   * Creates a case from a record producer and service. This method is intended to be called
   * as-is to create a producer and does not require supplying data.
   * @param current GlideRecord for case to be created.
   * @param producer Comma-separated key value pair containing data as questions and answers that
   * are automatically provided when a user submits an answer to a record producer
   * question.
   */
  createCaseFromProducer(current: any, producer: any): any;
}
export { hr_ActivityUtils };

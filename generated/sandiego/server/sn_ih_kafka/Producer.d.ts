declare class Producer {
  /**
   * Sends the specified message to the specified Kafka topic.
   * @param topic Name of the topic to send the message to. A topic stores messages of the same
   * type. For example, a topic named Payments might store messages about recent
   * payments.
   * @param key Name of the key for a specific partition. Topics can be partitioned. Messages
   * with the same key are stored in the same partition. For example, payment messages
   * with a key of June would all be stored in the same partition of the Payments
   * topic.
   * @param message Message text.
   * @param isSync Flag that indicates whether to require the flow to wait for the step to
   * complete before continuing.Valid values:
   * true: Wait for the step to complete before continuing the associated
   * flow.
   *
   * false: Do not wait for the step to complete before continuing the associated
   * flow.
   *
   *
   *
   */
  send(topic: string, key: string, message: string, isSync: boolean): any;
}
export { Producer };

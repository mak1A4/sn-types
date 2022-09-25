declare class IEventSender {
  /**
   * Returns the size of the event queue.
   */
  getQueueSize(): any;
  /**
   * Checks if the event queue has exceeded its maximum size.
   */
  isFullQueue(): any;
  /**
   * Places the specified event in the event queue.
   * @param event Event object to place in the events queue.
   */
  sendEvent(event: any): any;
}
export { IEventSender };

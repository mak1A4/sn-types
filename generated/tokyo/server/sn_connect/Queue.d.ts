declare class Queue {
  /**
   * Retrieves a specified chat queue.
   * @param SysID Sys_id of a queue from the Chat Queue [chat_queue] table.
   */
  get(SysID: string): any;
  /**
   * Adds the current user to an existing Connect Support chat queue and
   * posts the specified question.
   * @param Question Question to add to the chat queue.
   */
  join(Question: string): any;
}
export { Queue };

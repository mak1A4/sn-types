declare class Queue {
  /**
   * Gets a queue record by sys_id.
   * @param queue_id Represents sys_id of  queue record from  awa_queue table
   */
  get(queue_id: string): any;
  /**
   * Routes an active work item to the queue object.
   * @param options Contains document sys_id and table associated with work item:
   *
   * document_sys_id: "&lt;sys_id&gt;"
   *
   *
   * document_table: "&lt;table&gt;", e.g., interaction
   *
   *
   */
  route(options: any): any;
}
export { Queue };

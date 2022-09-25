declare class MIDServerFileSync {
  constructor();
  /**
   * Checks for any changes to attachments on the specified table that are instances of MID
   * server synchronized files and, if so, notifies the MID servers of a change.
   * @param table The table to check
   */
  notifyMIDServers(table: string): any;
}
export { MIDServerFileSync };

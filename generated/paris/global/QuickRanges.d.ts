declare class QuickRanges {
  /**
   * Creates a new discovery range item.
   * @param table The table where the item will be created.
   * @param id The identifier to use for the new item.
   * @param type The type of entries to generate: IP address, IP network, or IP range.
   */
  createItem(table: string, id: string, type: string): any;
  /**
   * Returns the IP network, range, and address information to use when generating the
   * entries.
   */
  onMakeRanges(): any;
}
export { QuickRanges };

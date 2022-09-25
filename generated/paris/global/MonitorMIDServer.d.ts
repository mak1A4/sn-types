declare class MonitorMIDServer {
  constructor();
  /**
   * If there are any heartbeat probe requests that haven't been processed, cancels them so
   * that they don't accumulate when a MID server is down for a while.
   */
  killOldRequests(): any;
  /**
   * Marks any non-responding MID servers as being down, by determining when the most recent
   * heartbeat was sent and finding all non-responding servers.
   */
  markDowners(): any;
  /**
   * Performs the functions required for a scheduled MID server monitor cycle, including
   * killing old requests, marking the MID servers that are down, and sending heartbeat requests to
   * all servers.
   */
  monitor(): any;
  /**
   * Sends heartbeat requests to all MID servers and notes when by updating the server
   * status record.
   */
  sendHeartbeatRequests(): any;
}
export { MonitorMIDServer };

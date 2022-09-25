declare class DiscoveryTCPConnection {
  /**
   * Brief description of the method.
   */
  getCommand(): any;
  /**
   * Returns the host name of the from host.
   */
  getFromHost(): any;
  /**
   * Returns the port number of the from host.
   */
  getFromPort(): any;
  /**
   * Returns the IP address and port number for the specified port.
   * @param hostPort The host's port
   */
  getHostPort(hostPort: string): any;
  /**
   * Returns the process identifier (PID) of the current application.
   */
  getPID(): any;
  /**
   * Returns the host name of the to host.
   */
  getToHost(): any;
  /**
   * Returns the port number of the to host.
   */
  getToPort(): any;
  /**
   * Determines if the current device is listening.
   */
  isListening(): any;
  /**
   * Determines if there is a from host and from port.
   */
  isValid(): any;
  /**
   * Determines if there is a valid connection with the from host and port.
   */
  isValidConnection(): any;
  /**
   * Sets the connection command for the current process.
   * @param cmd The connection command
   */
  setCommand(cmd: string): any;
  /**
   * Sets up the discovery TCP connection.
   * @param connectStr The connection string
   */
  setConnection(connectStr: string): any;
  /**
   * Sets the host name and port of the from host.
   * @param hostName The name of the host
   * @param portName The name of the port
   */
  setFrom(hostName: string, portName: string): any;
  /**
   * Sets a listener for the current device.
   * @param b
   */
  setListening(b: boolean): any;
  /**
   * Sets the process identifier (PID) for the application.
   * @param pid The application's process identifier.
   */
  setPID(pid: string): any;
  /**
   * Sets the host name and port number of the to host.
   * @param hostName The host name
   * @param portName The port number
   */
  setTo(hostName: string, portName: string): any;
  /**
   * Returns the current connection command and connection string in string
   * format.
   */
  toString(): any;
}
export { DiscoveryTCPConnection };

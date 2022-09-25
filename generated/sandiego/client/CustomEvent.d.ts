declare class CustomEvent {
  /**
   * Show the embedded-help content specified by the qualifier parameter in the right
   * sidebar.
   * @param event The event to send. Must be the string
   * "embedded_help:load_embedded_help"
   * @param qualifier The qualifier name created in the Embedded Help application.
   */
  fireAll(event: string, qualifier: string): any;
}
export { CustomEvent };

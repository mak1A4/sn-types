declare class JavascriptProbe {
  constructor(midServer: string);
  /**
   * Adds a parameter with the specified value to the probe.
   * @param name The parameter name
   * @param value The parameter's value
   */
  addParameter(name: string, value: string): any;
  /**
   * Creates the probe for the current MID server, puts it on the output queue, and sets its
   * state to "ready".
   */
  create(): any;
  /**
   * Adds a script to the probe.
   * @param script The script to add to the probe
   */
  setJavascript(script: string): any;
  /**
   * Sets the name of the JavascriptProbe
   * @param name The name to give the JavascriptProbe.
   */
  setName(name: string): any;
  /**
   * Sets the source of the probe.
   * @param ip The IP address of the target probe.
   */
  setSource(ip: string): any;
}
export { JavascriptProbe };

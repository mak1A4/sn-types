declare class ProbeHandlerMulti {
  /**
   * Adds the probe parameters to the given XML parent element, taken from the given probe's
   * parameter table.
   * @param parent The XML parent element to add parameters to.
   * @param sysID The sys_id of the probe to get parameters from.
   * @param probe Optional GlideRecord of the probe. If present, and there is a probe handler, it
   * is called.
   */
  addParameters(parent: string, sysID: string, probe?: any): any;
  /**
   * Adds the probes for this multiprobe to the document.
   * @param parent The XML parent element to add the probes to.
   * @param sysID The sys_id of the multi-probe
   */
  addProbes(parent: string, sysID: string): any;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * If the given probe's GlideRecord is present and contains a probe handler, runs the
   * probe handler and adds any parameters it creates to the given parameter element.
   * @param params The XML parameter element to add parameters to.
   * @param sysID The sys_id of the probe to get parameters from.
   * @param probe Optional GlideRecord of the probe. If present, and there is a probe handler, it
   * is called.
   */
  runProbeHandler(params: string, sysID: string, probe?: any): any;
  /**
   * Sets the value of a given XML parameter element.
   * @param parent The XML parent element to add the parameter to.
   * @param name The name of the parameter to set
   * @param value The value to set the parameter to.
   */
  setParameter(parent: string, name: string, value: string): any;
}
export { ProbeHandlerMulti };

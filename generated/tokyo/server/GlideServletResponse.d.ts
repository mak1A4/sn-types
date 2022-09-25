declare class GlideServletResponse {
  /**
   * Sends a temporary redirect to the client.
   * @param location The URL to receive the response.
   */
  sendRedirect(location: string): any;
  /**
   * Sets the MIME type of the response
   * @param type The MIME type.
   */
  setContentType(type: string): any;
  /**
   * Sets a response header to the specified value.
   * @param key Specifies the header.
   * @param value The value to be assigned to the header. If the header exists, it is
   * overwritten.
   */
  setHeader(key: string, value: string): any;
  /**
   * Sets the status code for the response.
   * @param status The status to be set.
   */
  setStatus(status: number): any;
}
export { GlideServletResponse };

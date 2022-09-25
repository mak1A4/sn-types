declare class RESTAPIRequestBody {
  data: any;
  dataStream: any;
  dataString: string;
  /**
   * Determines if there are additional entries in the request body.
   */
  hasNext(): any;
  /**
   * Retrieve one entry from the request body as a script object.
   */
  nextEntry(): any;
}
export { RESTAPIRequestBody };

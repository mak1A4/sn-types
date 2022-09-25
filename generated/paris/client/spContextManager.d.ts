declare class spContextManager {
  /**
   * Initializes a key and adds widget data as the value. For example, add data to the
   * 'agent-chat' key to make it available to Agent Chat.
   * @param key Name of the key to send the data. Available keys
   * include:
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   * @param context Widget data in JSON format to send to the
   * application or service specified in the key parameter. For example,
   * {'approval_count': 5}.
   */
  addContext(key: string, context: any): any;
  /**
   * Returns each key and associated data object defined by any widget on the
   * page.
   */
  getContext(): any;
  /**
   * Returns the widget data associated with a key.
   * @param key Name of the key to get context from. Available keys include:
   *
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   *
   * @param returnPromise Flag that determines whether to return the data associated with a key as a
   * promise or an object. Values include:
   *
   * True: return the data as a promise. Use this option if another widget on the
   * page uses the addContext() method to initialize the same
   * key. Returning a promise prevents returning an undefined object when the key
   * is not yet initialized.
   *
   * False: returns an object containing the data associated with the key.
   *
   *
   *
   *
   */
  getContextForKey(key: string, returnPromise: boolean): any;
  /**
   * Sends data to an existing key. For example, if another widget on the page uses the
   * 'agent-chat' key to pass data to the Agent Chat configuration, you must
   * update the context of the key rather than using the addContext()
   * method.
   * @param key Name of the key to send the data. Available keys
   * include:
   * agent-chat: Sends widget data to Agent Chat when it opens
   * in a Service Portal
   * page.
   *
   *
   *
   * @param context Widget data in JSON format to send to the
   * application or service specified in the key parameter. For example,
   * {'approval_count': 5}.
   */
  updateContextForKey(key: string, context: any): any;
}
export { spContextManager };

declare class openFrameAPI {
  /**
   * Hides the OpenFrame in the TopFrame.
   */
  hide(): any;
  /**
   * Initialize OpenFrame, must be the first method called.
   * @param config An object of key value pairs. The possible keys are height, width, title,
   * subTitle, and titleIcon. All keys are optional.
   * @param successCallback The callback function used if the init method succeeds. The
   * openframe configuration stored in the system is passed as a parameter to the
   * callback function.
   * @param failureCallback The callback function used if the init method fails.
   */
  init(
    config: any | undefined,
    successCallback: any,
    failureCallback: any,
  ): any;
  /**
   * Checks to see if the OpenFrame is visible in the TopFrame.
   * @param callback The callback function receives a parameter with a value of true or false. True
   * if OpenFrame is visible and false if not visible.
   */
  isVisible(callback: any): any;
  /**
   * Opens a custom URL in TopFrame.
   * @param Url A string of 2083 or fewer characters.
   */
  openCustomURL(Url: string): any;
  /**
   * Opens a form URL.
   * @param details Key-value pairs that identify the form URL to open.
   * "details": {
   * "entity": "String";
   * "interaction_sys_id": "String";
   * "query": "String"
   * }
   */
  openServiceNowForm(details: any): any;
  /**
   * Opens a list URL in TopFrame.
   * @param details An object of key value pairs. The possible keys are
   * entity, the table name
   *
   * query, an encoded query string
   *
   *
   */
  openServiceNowList(details: any): any;
  /**
   * Sets the OpenFrame mode.
   * @param Mode Set OpenFrame Mode. Enumerated options:
   * openFrameAPI.FRAME_MODE.COLLAPSE
   *
   * openFrameAPI.FRAME_MODE.EXPAND
   *
   *
   */
  setFrameMode(Mode: string): any;
  /**
   * Sets the OpenFrame height.
   * @param Height Height in pixels
   */
  setHeight(Height: number): any;
  /**
   * The OpenFrame header can include icons that are placed next to the close
   * icon.
   * @param icons A list of icon configurations, where each icon configuration is an object with
   * key values imageURL, imageTitle, and any other needed context.
   */
  setIcons(icons: any[]): any;
  /**
   * Sets the presence indicator to display agent availability in a workspace.
   * @param state Presence state of the agent.Default states:
   *
   * Available
   *
   * Away
   *
   * Offline
   *
   *
   * You can also specify custom states.
   * @param color Presence indicator color on workspace. Supported colors:
   *
   * red
   *
   * orange
   *
   * grey
   *
   * green
   *
   *
   */
  setPresenceIndicator(state: string, color: string): any;
  /**
   * Sets the OpenFrame size.
   * @param width Should be greater than zero.
   * @param height Should be greater than zero.
   */
  setSize(width: number, height: number): any;
  /**
   * Sets the OpenFrame subtitle.
   * @param subTitle A string of 256 or fewer characters.
   */
  setSubtitle(subTitle: string): any;
  /**
   * Sets the OpenFrame title.
   * @param title A string of 256 or fewer characters.
   */
  setTitle(title: string): any;
  /**
   * Sets the OpenFrame's title icon.
   * @param icon Object of key value pairs. Keys include imageURL, imageTitle, and any other
   * context needed.
   */
  setTitleIcon(icon: any): any;
  /**
   * Sets the OpenFrame width.
   * @param Width Width in pixels
   */
  setWidth(Width: number): any;
  /**
   * Makes the OpenFrame visible in the TopFrame.
   */
  show(): any;
  /**
   * Subscribes to the event.
   * @param event One of the following events:
   * openframe_awa_agent_presence: In Advanced Work Assignment (AWA), this event occurs when there is any change
   * in the agent presence state. Computer Telephony Integration (CTI) developers can
   * subscribe to the this event to receive presence state changes.
   *
   * openframe_before_destroy: Occurs before the TopFrame is unloaded.
   *
   * openframe_collapse: Occurs when the collapse icon is clicked on the OpenFrame
   * header.
   *
   * openframe_communication: Application-specific and can be customized.
   *
   * openframe_communication_failure: Occurs when communication to TopFrame
   * fails.
   *
   * openframe_expand: Occurs when the expand icon is clicked on the OpenFrame
   * header.
   *
   * openframe_header_icon_clicked: Deprecated. Use openframe_icon_clicked or
   * openframe_title_icon_clicked instead.
   *
   * openframe_hidden: Occurs when the OpenFrame is hidden.
   *
   * openframe_icon_clicked: Occurs when any icon other than the close icon is
   * clicked on the OpenFrame footer. The callback receives the icon object as a
   * parameter.
   *
   * openframe_shown: Occurs when the OpenFrame is shown.
   *
   * openframe_title_icon_clicked: Occurs when the title icon is clicked on the
   * OpenFrame. The callback receives the titleIcon object as a parameter.
   *
   *
   * @param eventCallback Function called when the specified event occurs.
   */
  subscribe(event: any, eventCallback: any): any;
  /**
   * Returns the OpenFrame API version.
   */
  version(): any;
}
export { openFrameAPI };

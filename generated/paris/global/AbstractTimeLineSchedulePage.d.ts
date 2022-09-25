declare class AbstractTimeLineSchedulePage {
  /**
   * Adds a TimelineItem object that will be returned to the client and
   * appropriately displayed on the timeline.
   * @param ObjTimeline The TimelineItem object to add to the timeline.
   */
  add(ObjTimeline: any): any;
  /**
   * Adds a horizontal frame separator into the list of timeline items.
   * All future items added via add() will be added into the subsequent timeline
   * frame.
   */
  addSeparator(): any;
  /**
   * Event handler for when a timeline span moves horizontally.
   * @param spanSysId The sys ID of the current span being adjusted.
   * @param newStartDateTimeMs The new start time of the span in milliseconds. Make sure to parse the string
   * using parseInt() before performing any numerical
   * comparisons.
   */
  elementMoveX(spanSysId: string, newStartDateTimeMs: string): any;
  /**
   * Event handler for when a timeline span moves both horizontally and vertically.
   * @param spanSysId The sys ID of the current span being adjusted.
   * @param itemSysId The sys ID of the timeline item associated with the current span.
   * @param newItemSysId The sys ID of the timeline item (a row) that the current span was dragged into.
   * @param newStartDateTimeMs The new start time of the span in milliseconds. Make sure to parse the string
   * using parseInt() before performing any numerical
   * comparisons.
   */
  elementMoveXY(
    spanSysId: string,
    itemSysId: string,
    newItemSysId: string,
    newStartDateTimeMs: string,
  ): any;
  /**
   * Event handler for when a timeline span moves vertically.
   * @param spanSysId The sys ID of the current span being adjusted.
   * @param itemSysId The sys ID of the timeline item associated with the current span.
   * @param newItemSysId The sys ID of the timeline item (a row) that the current span was dragged into.
   */
  elementMoveY(spanSysId: string, itemSysId: string, newItemSysId: string): any;
  /**
   * Event handler for when a timeline relationship has been created between two spans.
   * @param spanSysId The sys ID of the current span which will be a predecessor for the newly created relationship.
   * @param newSuccSpanId The sys ID of the successor span from the relationship created.
   */
  elementSuccessor(spanSysId: string, newSuccSpanId: string): any;
  /**
   * Event handler for when a timeline span's end date was modified.
   * @param spanSysId The sys ID of the current span that is being adjusted.
   * @param newEndDateTimeMs The new end time of the span in milliseconds. Make sure to parse the string
   * using parseInt() prior to performing any numerical
   * comparisons.
   */
  elementTimeAdjustEnd(spanSysId: string, newEndDateTimeMs: string): any;
  /**
   * Event handler for when a timeline span's start date was modified.
   * @param spanSysId The sys ID of the current span that is being adjusted.
   * @param newStartDateTimeMs The new start time of the span in milliseconds. Make sure to parse the string
   * using parseInt() prior to performing any numerical
   * comparisons.
   */
  elementTimeAdjustStart(spanSysId: string, newStartDateTimeMs: string): any;
  /**
   * Event handler for returning schedule items to display on the timeline.
   */
  getItems(): any;
  /**
   * Event handler for when a string was typed into the left pane input box.
   * @param strInputText The text that was entered in the input box in the left pane.
   */
  inputBox(strInputText: string): any;
  /**
   * Event handler for when a timeline row item was moved and dragged into another row item.
   * @param itemSysId The sys ID of the timeline item associated with the current span.
   * @param newItemSysId The sys ID of the timeline item (a row) that the current span was dragged into.
   */
  itemMove(itemSysId: string, newItemSysId: string): any;
  /**
   * Specifies whether or not to re-render all of the timeline items using the
   * getItems() function.
   * @param b If true, re-render the timeline by making a new event
   * call to the server's getItems() handler.
   */
  setDoReRenderTimeline(b: boolean): any;
  /**
   * Specifies the text to display as the title of the timeline.
   * @param strTitle The text to be displayed on the timeline title.
   */
  setPageTitle(strTitle: string): any;
  /**
   * Sets the current event request to an error status with a specified title and message to
   * display in phase two of the GlideTimeline event processing.
   * @param strTitle The text to be displayed in the dialog box title.
   * @param strMessage The text to be displayed within the dialog box. The text can contain HTML formatting.
   */
  setStatusError(strTitle: string, strMessage: string): any;
  /**
   * Sets the current event request to a prompt error status with a specified title and
   * message to display in a confirmation dialog box during phase two of the
   * GlideTimeline event processing. The confirmation box displays an OK and Cancel
   * button that each generate new events that will call the  functions specified the parameter
   * arguments. The custom defined functions for  OK,
   * Cancel, and Close  receive the same
   * parameter arguments as those for the current event.
   * @param strTitle The text to display in the dialog box. The text can contain HTML formatting.
   * @param strOkFunction The function to call in the current script include class if the users clicks
   * the OK button.
   * @param strCancelFunction The function to call in the current script include class if the user clicks the
   * Cancel button.
   * @param strCloseFunction The function to call in the current script include class if the user clicks the
   * Close button.
   */
  setStatusPrompt(
    strTitle: string,
    strOkFunction: string,
    strCancelFunction: string,
    strCloseFunction: string,
  ): any;
  /**
   * Sets the current event request to a success status with a specified title and message to
   * display in phase two of the GlideTimeline event processing.
   * @param strTitle The text to be displayed in the dialog box title.
   * @param strMessage The text to be displayed within the dialog box. The text can contain HTML formatting.
   */
  setStatusSuccess(strTitle: string, strMessage: string): any;
}
export { AbstractTimeLineSchedulePage };

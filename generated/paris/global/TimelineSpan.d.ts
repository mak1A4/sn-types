declare class TimelineSpan {
  /**
   * Adds multiple relationships between the current instance and other
   * TimelineSpan objects by enumerating through the array of JavaScript
   * objects.
   * @param objArray JavaScript object array that contains two internal properties:
   * relationship_sys_id and
   * predecessor_sys_id.
   */
  addPredecessor(objArray: any): any;
  /**
   * Adds multiple relationships between the current instance and other
   * TimelineSpan objects by enumerating through the array of JavaScript
   * objects.
   * @param strPredecessorSysId The sys ID of the planned task that is the predecessor of the
   * relationship.
   * @param strRelationshipSysId The sys ID of the relationship of the relationship.
   */
  addPredecessor(
    strPredecessorSysId: string,
    strRelationshipSysId: string,
  ): any;
  /**
   * Adds multiple relationships between the current instance and other
   * TimelineSpan objects by enumerating through the array of JavaScript
   * objects.
   * @param strPredecessorSysId The sys ID of the planned task that is the predecessor of the
   * relationship.
   * @param strRelationshipSysId The sys ID of the relationship of the relationship.
   * @param strTableName The name of the table for the relationship.
   */
  addPredecessor(
    strPredecessorSysId: string,
    strRelationshipSysId: string,
    strTableName: string,
  ): any;
  /**
   * Returns the boolean value of the AllowXDragLeft
   * property.
   */
  getAllowXDragLeft(): any;
  /**
   * Returns the boolean value of the AllowXDragRight
   * property.
   */
  getAllowXDragRight(): any;
  /**
   * Returns the boolean value of the AllowXMove property.
   */
  getAllowXMove(): any;
  /**
   * Returns the boolean value of the AllowYMove property.
   */
  getAllowYMove(): any;
  /**
   * Returns the boolean value of the AllowYMovePredecessor
   * property.
   */
  getAllowYMovePredecessor(): any;
  /**
   * Returns the name of the current inner segment class for the
   * TimelineSpan.
   */
  getInnerSegmentClass(): any;
  /**
   * Returns the time in milliseconds of the end time of the inner segment portion of the
   * TimelineSpan .
   */
  getInnerSegmentEndTimeMs(): any;
  /**
   * Returns the time in milliseconds of the start time of the inner segment portion of the
   * TimelineSpan.
   */
  getInnerSegmentStartTimeMs(): any;
  /**
   * Returns a boolean that specifies whether or not the current timeline item has been modified after initialization.
   */
  getIsChanged(): any;
  /**
   * Returns a string that specifies the name of the icon class to use for displaying the
   * element on the timeline if the current instance has zero duration.
   */
  getPointIconClass(): any;
  /**
   * Returns an array of all the predecessor objects associated with the current instance.
   * Each array object is a HashMap that contains a predecessor_sys_id and
   * relationship_sys_id property.
   */
  getPredecessors(): any;
  /**
   * Returns the string name of the color specified for displaying this span.
   */
  getSpanColor(): any;
  /**
   * Returns the string that specifies the text to display adjacent to the time element.
   */
  getSpanText(): any;
  /**
   * Returns the start time in milliseconds of the current TimelineSpan
   * object.
   */
  getStartTimeMs(): any;
  /**
   * Returns the sys ID of the current object.
   */
  getSysId(): any;
  /**
   * Returns the name of the table where the sys ID is referenced.
   */
  getTable(): any;
  /**
   * Returns the text/html to display in the tooltip when the TimelineSpan
   * element is being hovered over.
   */
  getTooltip(): any;
  /**
   * Sets a flag that determines whether the element's start date can be dragged left or right
   * therefore adjusting the duration of the task.
   * @param bFlag True to enable the element's start date to be adjusted;
   * false otherwise.
   */
  setAllowXDragLeft(bFlag: boolean): any;
  /**
   * Sets a flag that determines whether the element's end date can be dragged left or right
   * therefore adjusting the duration of the task.
   * @param bFlag True to enable the element's end date to be adjusted;
   * false otherwise.
   */
  setAllowXDragRight(bFlag: boolean): any;
  /**
   * Sets a flag that determines whether the element can be moved to start at a different
   * time.
   * @param bFlag True to enable the element to be moved horizontally;
   * false otherwise.
   */
  setAllowXMove(bFlag: boolean): any;
  /**
   * Sets a flag that determines whether the element can be dragged vertically on the
   * timeline.
   * @param bFlag True to enable the element to be moved vertically;
   * false otherwise.
   */
  setAllowYMove(bFlag: boolean): any;
  /**
   * Sets a flag that determines whether a dashed relationship line can be drawn from this
   * element interactively on the timeline.
   * @param bFlag True to enable a relationship line to be drawn from this
   * element; false otherwise.
   */
  setAllowYMovePredecessor(bFlag: boolean): any;
  /**
   * Specifies the name of the class to use for stylizing the inner segment if it exists.
   * @param styleClass One of the following values: green,
   * blue, or silver.
   */
  setInnerSegmentClass(styleClass: string): any;
  /**
   * Creates an inner segment to show within the current timespan defined by the range specified.
   * @param startTimeMs The start time in milliseconds.
   * @param endTimeMs The end time in milliseconds.
   */
  setInnerSegmentTimeSpan(startTimeMs: number, endTimeMs: number): any;
  /**
   * Sets the icon class to use for displaying the current element on the timeline if the current instance has zero duration.
   * @param iconClassName String that specifies one of the following values:
   * milestone
   *
   * blue_square
   *
   * sepia_square
   *
   * green_square
   *
   * red_square
   *
   * black_square
   *
   * blue_circle
   *
   * sepia_circle
   *
   * green_circle
   *
   * red_circle
   *
   * black_circle
   *
   *
   */
  setPointIconClass(iconClassName: string): any;
  /**
   * Sets the color for displaying this span.
   * @param strColor The HTML color name for the color of this span.
   */
  setSpanColor(strColor: string): any;
  /**
   * Sets the text to display adjacent to the time element.
   * @param strSpanText The text to display next to the time element.
   */
  setSpanText(strSpanText: string): any;
  /**
   * Sets the start and end dates for the current span.
   * @param nStartTime The start time in milliseconds.
   * @param nEndTimeMs The end time in milliseconds.
   */
  setTimeSpan(nStartTime: number, nEndTimeMs: number): any;
  /**
   * Sets the start and end dates for the current span.
   * @param strStartTime The start time in milliseconds.
   * @param strEndTimeMs The end time in milliseconds.
   */
  setTimeSpan(strStartTime: string, strEndTimeMs: string): any;
  /**
   * Sets the text to display in the tooltip when the TimelinSpan element
   * is being hovered over.
   * @param strTooltipText The text to display in the tooltip.
   */
  setTooltip(strTooltipText: string): any;
}
export { TimelineSpan };

declare class GlideTimelineItem {
  constructor(tableName: string);
  constructor(tableName: string, sys_id: string);
  /**
   * Creates a new TimelineSpan object associated with the current instance
   * object.
   * @param tableName The name of the table associated with current object.
   */
  createTimelineSpan(tableName: string): any;
  /**
   * Creates a new TimelineSpan object associated with the current instance
   * object.
   * @param tableName The name of the table associated with current object
   * @param sys_id The sys ID for the object.
   */
  createTimelineSpan(tableName: string, sys_id: string): any;
  /**
   * Returns a string specifying the name of the image file associated with the current
   * GlideTimelineItem.
   */
  getImage(): any;
  /**
   * Indicates whether or not the current instance object should be allowed as a "drop zone" when moving timeline elements vertically.
   */
  getIsDroppable(): any;
  /**
   * Returns the text to be displayed in the left pane (if enabled).
   */
  getLeftLabelText(): any;
  /**
   * Returns the unique sysId of the current
   * GlideTimelineItem's parent object.
   */
  getParent(): any;
  /**
   * Returns all the TimelineSpan objects associated with the current
   * instance in an ArrayList.
   */
  getTimelineSpans(): any;
  /**
   * Indicates if the left pane text is set to be displayed using a bold style.
   */
  isTextBold(): any;
  /**
   * Sets the name of the image file (including it's path) to use as the icon for the item in the left pane.
   * @param strImageName The name of the image, including its path.
   */
  setImage(strImageName: string): any;
  /**
   * Sets whether or not the current instance object can be clicked and dragged into another
   * GlideTimelineItem.
   * @param b True if item should be able to be moved with click and drag. Otherwise,
   * false.
   */
  setIsDraggable(b: boolean): any;
  /**
   * Specifies the text to display in the left pane for this item.
   * @param strText The text to display in the left pane for this item.
   */
  setLeftLabelText(strText: string): any;
  /**
   * Sets the parent of the current GlideTimelineItem.
   * @param sysId The sysID of the GlideTimelineItem that should become the parent of the current
   * GlideTimelineItem.
   */
  setParent(sysId: string): any;
  /**
   * Specifies whether or not to bold the text style of the item in the left pane.
   * @param b True if text in left pane should be bolded; otherwise false.
   */
  setTextBold(b: boolean): any;
}
export { GlideTimelineItem };

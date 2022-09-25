declare class GlideTimeline {
  /**
   * Specifies whether or not to group timeline items by their parent.
   * If true, this will nest all child items inside their parent. This affects
   * the ordering of display and children will always be listed immediately after their parent.
   * The default value for the groupByParent property is
   * false.
   * @param b If true, displays Timeline Items grouped by parent.
   */
  groupByParent(b: boolean): any;
  /**
   * Registers the specified Timeline server event.
   * The strServerEvent must be one of the allowed events for registration to work
   * correctly. When the event occurs, the GlideTimeline sends a request to
   * the server and processes the event as handled inside the
   * strScriptIncludeName class.
   * @param strServerEvent Specifies one of the following case-sensitive events:
   * getItems
   *
   * elementMoveX
   *
   * elementMoveY
   *
   * elementMoveXY
   *
   * elementSuccessor
   *
   * elementTimeAdjustStart
   *
   * elementTimeAdjustEnd
   *
   * inputBox
   *
   * itemMove
   *
   *
   * @param strScriptIncludeName Specifies the name of the class to receive the
   * strServerEvent. This class must be defined in a script
   * include that extends AbstractTimelineSchedulePage.
   */
  registerEvent(strServerEvent: string, strScriptIncludeName: string): any;
  /**
   * Specifies the number of seconds to wait before performing an auto refresh of the data on
   * the timeline. Setting the number of seconds to 0 will
   * turn auto refresh off. By default, auto refresh is disabled. If intSeconds
   * is greater than 0 and less than the minimum allowed time in seconds (10), it will be set to 10
   * seconds.
   * @param intSeconds An integer specifying the time in seconds between auto-refreshing.
   */
  setAutoRefresh(intSeconds: number): any;
  /**
   * Specifies the default icon class to use for Timeline Spans with
   * zero duration if no icon class was explicitly specified in the properties of the
   * Timeline Span returned from the server.
   * The default value for the setDefaultPointIconClass property is
   * milestone.
   * @param icon_class String that specifies one of the following values:
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
  setDefaultPointIconClass(icon_class: string): any;
  /**
   * Allows setting of additional parameters in the client script to be made available to the
   * corresponding Script Include events by using the getParameter()
   * method.
   * URI parameters that are prefixed with sysparm_timeline_ will automatically be
   * included in all server side AJAX calls.
   * @param strName The URI parameter name.
   * @param strValue The value of strName.
   */
  setExtraAjaxParam(strName: string, strValue: string): any;
  /**
   * Specifies the initial viewable range for the timeline.
   * The default range is the range that specifies the earliest Timeline Span point to the end of the
   * latest Timeline Span. If the initialViewRange property is specified, it
   * will override the default range.
   * @param objStartDate The start time of the view range in milliseconds.
   * @param objEndDate The end time in milliseconds.
   */
  setInitialViewRange(objStartDate: number, objEndDate: number): any;
  /**
   * Specifies the initial viewable range for the timeline.
   * The default range is the range that specifies the earliest Timeline Span point to the end of the
   * latest Timeline Span. If the initialViewRange property is specified, it
   * will override the default range.
   * @param objStartDate The start time of the view range in milliseconds.
   * @param objEndDate The end time of the view range in format: yyyy-MM-dd HH:mm:ss .
   */
  setInitialViewRange(objStartDate: number, objEndDate: string): any;
  /**
   * Specifies the initial viewable range for the timeline.
   * The default range is the range that specifies the earliest Timeline Span point to the end of the
   * latest Timeline Span. If the initialViewRange property is specified, it
   * will override the default range.
   * @param objStartDate The start time of the view range in format: yyyy-MM-dd HH:mm:ss .
   * @param objEndDate The end time in milliseconds.
   */
  setInitialViewRange(objStartDate: string, objEndDate: number): any;
  /**
   * Specifies the initial viewable range for the timeline.
   * The default range is the range that specifies the earliest Timeline Span point to the end of the
   * latest Timeline Span. If the initialViewRange property is specified, it
   * will override the default range.
   * @param objStartDate The start time of the view range in format: yyyy-MM-dd HH:mm:ss .
   * @param objEndDate The end time of the view range in format: yyyy-MM-dd HH:mm:ss .
   */
  setInitialViewRange(objStartDate: string, objEndDate: string): any;
  /**
   * Enables or disables all timeline event interaction.
   * If enabled, event interaction is determined from the corresponding attributes specified by each
   * Timeline Item. The default value for the readOnly
   * property is false.
   * @param b If true, marks the entire timeline as
   * read-only (non-interactive).
   */
  setReadOnly(b: boolean): any;
  /**
   * Specifies whether or not to show dependency lines between Timeline Spans.
   * This method applies only if the set of Timeline Items returned from the server includes
   * dependency relationships. The default value for the showDependencyLines property is
   * false.
   * @param b If true, displays dependency lines on the timeline;
   * otherwise, does not.
   */
  showDependencyLines(b: boolean): any;
  /**
   * Specifies whether or not to show grid lines for each row of data on the timeline.
   * By default, grid lines are enabled.
   * @param bShowGridlines If true, timeline shows grid lines; otherwise, does not
   * display grid lines.
   * @param amount amount
   */
  showGridLines(bShowGridlines: boolean, amount: number): any;
  /**
   * Specifies whether or not to show the left hand pane in the timeline.
   * The default value for the leftPane property is
   * true.
   * @param b If true, the timeline shows the left pane; otherwise,
   * the left pane is not be displayed.
   */
  showLeftPane(b: boolean): any;
  /**
   * Specifies how to show child items in the left pane of the timeline. Child items
   * are displayed either as nested, indented nodes with expand and collapse capability or on a single indent level.
   * The default value for the showLeftPaneAsTree property is
   * false.
   * @param b If true, child item nodes are shown as indented with
   * expand/collapse capability; otherwise, all left pane items are displayed at a single
   * indent level.
   */
  showLeftPaneAsTree(b: boolean): any;
  /**
   * Specifies whether or not to show the text input box at the bottom of the left pane with a
   * default value as specified by strDefaultValue.
   * If the left pane is diabled via showLeftPane(), the input box will not be
   * visible. The default value for the showLeftPaneInputBox property is
   * false.
   * @param b If true, show the left pane input box.
   * @param strDefaultValue The default value to display in the input box.
   */
  showLeftPaneInputBox(b: boolean, strDefaultValue: string): any;
  /**
   * Specifies whether or not to show the summary pane at the bottom of the timeline.
   * The default value for the showSummaryPane property is true.
   * @param b If true, the timeline includes the summary pane;
   * otherwise, the summary pane is not  displayed.
   */
  showSummaryPane(b: boolean): any;
  /**
   * Specifies whether or not to show the timeline text underneath each Timeline Span in the primary timeline pane.
   * The default value for the showTimelineText property is false.
   * @param b If true, displays descriptive text underneath each
   * Timeline Span; otherwise, no text is displayed underneath each Timeline
   * Span.
   */
  showTimelineText(b: boolean): any;
  /**
   * Specifies whether or not the vertical
   * movement of timeline span objects (if appropriately registered to perform this event)
   * should snap adjust into the closest row.
   * By default this value is enabled.
   * @param b If true, snaps vertical movement of timeline span
   * objects into rows; otherwise, items move exactly with respect to the mouse.
   */
  snapVertScrollingIntoRows(b: boolean): any;
  /**
   * Specifies whether or not to group items by their left label text.
   * The default value for the sortByLeftLabelText property is
   * false.
   * @param b If true, sort Timeline Items alphabetically by the text
   * specified in each item's left label.
   */
  sortByLeftLabelText(b: boolean): any;
  /**
   * Specifies whether or not to sort the list of Timeline Items returned by the earliest start date of an item's
   * Timeline Span objects. If groupByParent() is set true, items are sorted after
   * grouping has occurred. The default value for the sortByStartDate
   * property is false.
   * @param b If true, sort Timeline Items chronologically starting
   * with their earliest start date.
   */
  sortByStartDate(b: boolean): any;
  /**
   * Specifies whether or not to sort the list of Timeline Items returned in alphabetical order
   * according to the text that was specified to show in the Timeline Pane.
   * @param b If true, sorts Timeline Items alphabetically by the text specified in each item's timeline span text.
   */
  sortByTimelineLabelText(b: boolean): any;
}
export { GlideTimeline };

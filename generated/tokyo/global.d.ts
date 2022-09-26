/// <reference no-default-lib="true"/>

declare class AbstractDBObject {
  /**
   * Determines if the current database record is valid.
   */
  isValid(): boolean;
}
declare class AbstractReconciler {
  /**
   * Determines if the newly discovered data is different than the data already in the
   * database for the current item.
   */
  getReconciliationField(): boolean;
  /**
   * Gets the string value of the field to be used as a key to look up a record in the newly
   * discovered data.
   */
  getReconciliationKey(): string;
  /**
   * Returns true if the newly discovered data is different than the data already in the
   * database for this item.
   */
  hasChanged(): boolean;
  /**
   * Marks CIs as absent by setting the install status to "Absent"; other tables are marked
   * by setting the (presumed present) field "absent" to true.
   */
  markAbsent(): any;
  /**
   * Marks CIs as present by setting the install status to "Installed"; other tables are
   * marked by setting the (presumed present) field "absent" to false.
   */
  markPresent(): any;
  /**
   * Reconciles the newly discovered data with the data already present in the database and
   * resolves references to previously reconciled data.
   */
  process(): any;
  /**
   * Reads the current memory table record of newly discovered data and checks its validity.
   */
  readDatabaseFields(): boolean;
  /**
   * Reads the current memory table record of newly discovered data and checks its validity.
   */
  readDiscovered(): boolean;
  /**
   * Reads the fields in the current database record into instance member fields.
   */
  resolveReferenceFields(): any;
  /**
   * Sets the database fields for the current record to the values in the newly discovered
   * information.
   */
  setDatabaseFields(): any;
  /**
   * Optional override for concrete subclasses that require special setup.
   */
  setup(): any;
  /**
   * Optional method to override in concrete subclasses that need to resolve reference
   * fields.
   * @param sys_id The sys_id of the current database record.
   */
  track(sys_id: string): any;
}
declare class AbstractScriptProcessor {
  /**
   * Called by the Prototype JavaScript Framework during object construction.
   * @param request The request
   * @param response The response
   * @param process The process
   */
  initialize(request: string, response: string, process: string): any;
  /**
   * Called by the Prototype JavaScript Framework during object processing. Do not call this
   * method directly.
   */
  process(): any;
}
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
declare class ActivityHistoryRecord {
  /**
   * Changes the arrivedState of already known ids to
   * true.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  addArrivedActivityToJoin(activityIds: string): any;
  /**
   * Seeds all the expected wf_activity sys_ids that are expected to pass
   * through this join and sets their arriveState = false.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  addJoinFromActivityIds(activityIds: string): any;
  /**
   * As model is cached by _getExecutedTransitions(), this method adds
   * transitions that have gone FROM this activity towards the .to activity.
   * @param InTransition ExecutedTransition Javascript object to add to this activity.
   */
  addTransition(InTransition: any): any;
  /**
   * Prints debug information.
   */
  debugDump(): any;
  /**
   * Tests the incoming wf_activity sys_id,
   * presumed to be seeded in this history record.
   * If it is, it is tested to see if it is an activity that
   * would come through this join.
   */
  doesJoinContainActivity(): boolean;
  /**
   * Returns the log string from the history record.
   */
  getLogString(): string;
  /**
   * Returns the sys_ids of the history records that transition to this Join activity that have already come through.
   */
  getSatisfiedJoinActivities(): string;
  /**
   * Returns the transition count for this activity.
   */
  getTransitionCount(): number;
  /**
   * Returns the sys_ids of the history records that transition to this Join activity that the join is still waiting for.
   */
  getUnSatisfiedJoinActivities(): string;
  /**
   * Determines if this activity is one of the rollback activities.
   */
  isARollback(): boolean;
  /**
   * Determines if the sys_id passed in is a destination of any of the transitions associated
   * with this instance of an ActivityHistoryRecord.
   * @param ahrSys_id Activity history sys_id from table wf_history.
   */
  isIdADestination(ahrSys_id: string): boolean;
  /**
   * Determines if this activity is a join.
   */
  isJoin(): boolean;
  /**
   * Examines the value of the arriveState.
   */
  isJoinSatisfied(): boolean;
  /**
   * Tests the incoming wf_activity sys_id, presumed to be seeded in this history record.
   * @param activityIds Array of wf_activity.sys_ids that are headed towards join.
   */
  isJoinWaitingForActivity(activityIds: string): boolean;
  /**
   * Determines if this workflow was rolled back.
   */
  isRolledBack(): boolean;
  /**
   * Determines if the current activity is a turnstile.
   */
  isTurnstile(): boolean;
}
declare class Agent {
  /**
   * Gets an agent by sys_id.
   * @param user_sys_id The sys_id of the user listed in sys_user table.
   */
  get(user_sys_id: string): boolean;
  /**
   * Gets the current presence state and channel availability of a provided
   * agent.
   */
  getPresence(): any;
  /**
   * Sets the state of a provided agent’s presence and sets the agent’s channel availability
   * for that state.
   * @param setRequest Contains setRequest.sys_id and setRequest.channels.
   */
  setPresence(setRequest: any): boolean;
}
declare class AgentMetrics {
  constructor();
  /**
   * Handles counter metrics from the agent by putting them into an array that can be used
   * to update the ECC Agent Counter Metric table (ecc_agent_counter_metric).
   * @param metric The counter object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleCounter(metric: string, name: string, midId: string): any;
  /**
   * Updates the memory metrics for the given agent.
   * @param metric The memory object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleMemory(metric: string, name: string, midId: string): any;
  /**
   * Handles metric information from a remote glide record by putting it into an
   * array.
   * @param metric The remote object from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleRGR(metric: string, name: string, midId: string): any;
  /**
   * Handles scalar values from the agent by putting them into an array.
   * @param metric The counter object  from the agent
   * @param name The device name
   * @param midId The MID server sys_id
   */
  handleScalar(metric: string, name: string, midId: string): any;
  /**
   * Updates the specified metrics table with the new metric information.
   * @param tableName The metrics table to update
   * @param values The object containing the values to add to the table
   * @param metric The metric type to add to the table
   * @param midID The MID server sys_id
   */
  updateMetric(
    tableName: string,
    values: string,
    metric: string,
    midID: string,
  ): any;
}
declare class APCHandler {
  /**
   * Classifies and identifies APC devices.
   */
  classifyAndIdentify(): any;
}
declare class ApcPduOutletReconciler {
  /**
   * Returns the reconciliation field.
   */
  getReconcilationField(): string;
  /**
   * Returns the reconciliation key.
   */
  getReconcilationKey(): string;
  /**
   * Determines if the outlet state has changed.
   */
  hasChanged(): boolean;
  /**
   * Reads the outlet database fields.
   */
  readDatabaseFields(): any;
  /**
   * Reads the discovered outlet database fields.
   */
  readDiscovered(): any;
  /**
   * Sets the outlet database fields.
   */
  setDatabaseFields(): any;
}
declare class ArrayUtil {
  /**
   * Merge two arrays.
   * @param parent An array to merge
   * @param child An array to merge
   */
  concat(parent: any[], child: any[]): any[];
  /**
   * Searches the array for the specified element. Returns true if the element exists in the
   * array, otherwise returns false.
   * @param array Array to search.
   * @param element Element to search for.
   */
  contains(array: any[], element: any): boolean;
  /**
   * Converts a Java object to an array.
   * @param a Object to convert.
   */
  convertArray(a: any): any[];
  /**
   * Finds the differences between two or more arrays.
   * @param a An array
   * @param b An array
   */
  diff(a: any[], b: any[]): any[];
  /**
   * Returns an array from the specified object.
   * @param object Object from which to create an array.
   */
  ensureArray(object: any): any[];
  /**
   * Searches the array for the element. Returns the element index or -1 if not
   * found.
   * @param array Array to search.
   * @param element Element to search for.
   */
  indexOf(array: any[], element: any): number;
  /**
   * Searches the array for the element. Returns the element index or -1 if not
   * found.
   * @param array Array to search.
   * @param element Element to search for.
   * @param startIndex Index to start searching from.
   */
  indexOf(array: any[], element: any, startIndex: number): number;
  /**
   * Finds the elements present in all arrays.
   * @param a An array
   * @param b An array
   */
  intersect(a: any[], b: any[]): any[];
  /**
   * Merge two or more arrays.
   * @param a An array
   * @param b An array
   */
  union(a: any[], b: any[]): any[];
  /**
   * Removes duplicate items from an array.
   * @param a The array to check for duplicate elements.
   */
  unique(a: any[]): any[];
}
declare class AssessmentCreation {
  /**
   * Creates one or more assessments or surveys for the specified metric type or survey
   * definition.
   * @param typeID The sys_id of the metric type or survey definition for which to generate
   * assessments or surveys.
   * @param sourceRecordID One or more comma-separated survey definition sys_ids to include in the
   * assessments generated. There must be an assessable record associated with the
   * specified metric type for each source record. If this parameter is left blank, the
   * assessments generated includes all assessable records for the specified type. This
   * parameter is for use with assessments only.
   * @param userID One or more comma-separated sys_ids of users to which to send assessment or
   * survey instances. If this parameter is left blank, the assessment stakeholders or
   * survey users receive instances. This parameter is required for on-demand
   * assessments.
   */
  createAssessments(
    typeID: string,
    sourceRecordID: string,
    userID: string,
  ): string;
}
declare class AutomationException {
  /**
   * Retrieves the error message.
   */
  getMessage(): string;
}
declare class BusinessServiceManager {
  constructor();
  /**
   * Adds a CI to a manually-created application service.
   * @param service_id Sys ID of the application service to add a CI to. Must be of type
   * cmdb_ci_service_discovered.
   * @param source_id Sys ID of the CI whose outgoing connection joins the target CI.
   * @param target_id Sys ID of the CI to add to the service. Cannot be an excluded item. Excluded
   * items are CIs configured in the Manual CI Inclusions / Exclusions
   * [svc_manual_ci_exclusions_inclusions.list] table.
   */
  addCI(service_id: string, source_id: string, target_id: string): any;
  /**
   * Adds a manually created connection to an application service.
   * @param source_id Sys ID of the CI to add to the connection.
   * @param manual_endpoint GlideRecord object in the cmdb_ci_endpoint_manual table to add to the
   * application service.
   * @param service_id Sys ID of the application service to add the connection to.
   */
  addManualConnection(
    source_id: string,
    manual_endpoint: any,
    service_id: string,
  ): any;
  /**
   * Converts a manual service to an application service.
   * @param service_id Sys ID of the manual service to convert.
   */
  migrateManualToApplicationService(service_id: string): boolean;
  /**
   * Populates an application service with relations and CIs from the designated entry
   * point.
   * @param service_id Sys ID of the application service to populate.
   * @param levels Number of levels of CIs to add from the CMDB.
   * @param black_listed_relation_types Relation types to exclude when populating the application service.
   */
  populateApplicationService(
    service_id: string,
    levels: number,
    black_listed_relation_types: string,
  ): boolean;
  /**
   * Removes a manually created CI from an application service.
   * @param service_id Sys ID of the application service to remove a CI from.
   *
   *
   * Note: Passing a GlideRecord object is also supported.
   *
   * @param target_id Sys ID of the CI to remove from the application service.
   *
   *
   * Note: Passing a GlideRecord object is also supported.
   *
   */
  removeCI(service_id: string, target_id: string): any;
  /**
   * Removes a manually created connection and the connected CI from an application
   * service.
   * @param source_id Sys ID of the CI connected to the endpoint.
   * @param endpoint_id Sys ID of the manually created connection to remove from the application
   * service
   * @param service_id Sys ID of the application service to remove the connection from.
   */
  removeManualConnection(
    source_id: string,
    endpoint_id: string,
    service_id: string,
  ): any;
}
declare class ChangeCollisionHelper {
  /**
   * Adds the CI to the change's affected CI list.
   * @param ci The sys_id of the configuration item
   * @param changeId The change record's sys_id
   */
  addCiToChangeAffectedCis(ci: string, changeId: string): any;
  /**
   * Returns the Affected CI sys_ids for the given change.
   * @param changeId A change record's sys_id
   */
  getAffectedCisByChangeId(changeId: string): any[];
  /**
   * Returns any blackout that overlap the period defined by startDate and
   * endDate.
   * @param startDate The beginning date
   * @param endDate The ending date
   */
  getBlackoutsByDate(startDate: GlideDateTime, endDate: GlideDateTime): any[];
  /**
   * Returns changes scheduled in the timespan (defined by startDate and endDate) that have
   * the given CI in their Affected CIs list.
   * @param ci The configuration item's sys_id
   * @param startDate The beginning date
   * @param endDate The ending date of the time span
   */
  getChangesWithAffectedCi(
    ci: string,
    startDate: GlideDateTime,
    endDate: GlideDateTime,
  ): any[];
  /**
   * Returns the changes that are in the timespan (startDate, endDate) and that are linked
   * to the given CI.
   * @param ci The configuration item's sys_id
   * @param startDate The beginning date
   * @param endDate The ending date of the time span
   */
  getChangesWithCi(
    ci: string,
    startDate: GlideDateTime,
    endDate: GlideDateTime,
  ): any[];
  /**
   * Returns the Maintenance Schedule for a CI.
   * @param ci The configuration item's sys_id
   */
  getCiMaintenanceSchedule(ci: string): any;
  /**
   * Returns all the CIs that depend on the given CI.
   * @param ci A configuration item's sys_id
   */
  getDependants(ci: string): any[];
  /**
   * Returns all the CIs that the given CI depends on.
   * @param ci The configuration item's sys_id
   */
  getDependencies(ci: string): any[];
  /**
   * Check if an CI is already in the change's affected CIs list.
   * @param ci The sys_id of the configuration item
   * @param changeId The change record's sys_id
   */
  isCiInAffectedCis(ci: string, changeId: string): boolean;
  /**
   * Checks if the time span defined by startDate and endDate falls in the CI's maintenance
   * window.
   * @param startDate The beginning date
   * @param endDate The ending date
   * @param maintenanceWindow The configuration item's sys_id
   */
  isDateInCiMaintenanceWindows(
    startDate: GlideDateTime,
    endDate: GlideDateTime,
    maintenanceWindow: string,
  ): boolean;
}
declare class CIData {
  constructor(debugFlag: string);
  /**
   * Adds the specified related list to this instance.
   * @param relatedList Related list to add.
   */
  addRelatedList(relatedList: any[]): any;
  /**
   * Converts the specified related list to a related list in a given sensor.
   * @param sensor The sensor
   * @param tableName The table name
   * @param refField The reference field
   * @param keyName The key name
   */
  convertRelatedList(
    sensor: string,
    tableName: string,
    refField: string,
    keyName: string,
  ): any;
  /**
   * Initializes the current CIData instance from the specified XML string.
   * @param xml An XML string.
   */
  fromXML(xml: string): any;
  /**
   * Gets the data map in the base CI record.
   */
  getData(): any;
  /**
   * Returns an array of data maps in the given many-to-many list (to this CI).
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI. In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getM2MTable(table: string, refField: string): any[];
  /**
   * Gets an array of maps of data in the given related list (to this CI).
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI.  In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getRelatedList(table: string, refField: string): any[];
  /**
   * Returns the instance of CIRelatedList for the given list.
   * @param table Name of the table containing the related list. In the case of a many-to-many
   * list, this is the name of the many-to-many table, not the target table.
   * @param refField Name of the field in the related list that refers to this CI.  In the case of a
   * many-to-many list, this is the name of the referring field in the many-to-many
   * table, not in the target table.
   */
  getRelatedListInstance(table: string, refField: string): any;
  /**
   * Initializes this instance in preparation for loading a new CI.
   */
  init(): any;
  /**
   * Loads the current data from a specified sys_id.
   * @param cmdb_ci The sys_id of the CI
   */
  loadFromCI(cmdb_ci: string): any;
  /**
   * Converts the name of this CIData instance to a string.
   */
  toString(): string;
  /**
   * Returns an XML string containing a serialized version of this instance (including any
   * related lists).
   */
  toXML(): string;
}
declare class CIIdentification {
  constructor(ciData: string, logger: string);
  /**
   * Logs a message to the CI Identification log if debug logging is turned on.
   * @param msg The message to log
   */
  debug(msg: string): any;
  /**
   * Identifies the CI. This is the entry point for the entire CI Identification
   * process.
   */
  process(): any;
}
declare class CIIdentifierResult {
  constructor(matched: any[], matchable: boolean, terminatedChain: boolean);
}
declare class CimCIData {
  /**
   * Adds a serial number to the current configuration item (CI), by type.
   * @param type Serial number type. For the base system, use the CimCIData.serialType
   * enum.
   * @param serial Serial number to add.
   */
  addSerial(type: string, serial: string): string;
  /**
   * Creates a new serial record.
   * @param type The serial type to assign to the CI. If out-of-box, uses the
   * CimCIData.serialType enum.
   * @param serial The serial number to assign.
   */
  SerialRecord(type: string, serial: string): any;
  /**
   * Sets the make and model for the current configuration item (CI).
   * @param make Name of the manufacturer to set for the CI.
   * @param model Name of the model to set for the CI.
   */
  setMakeAndModel(make: string, model: string): any;
}
declare class CimIDSensor {
  /**
   * Configures a triggered probe before it is launched.
   * @param probe An already configured probe that is ready to fire.
   */
  configureTriggeredProbe(probe: string): boolean;
  /**
   * Gets the instance hash token.
   */
  getInstanceHashToken(): string;
  /**
   * Prepares the probe results.
   */
  prepare(): any;
  /**
   * Processes all CIM probe query results for a CIM ID sensor.
   * @param results The query results
   * @param cimData The CI data of the device being identified.
   * @param sensor The wrapping sensor, extends CimIDSensor
   */
  process(results: any, cimData: any, sensor: any): any;
  /**
   * Runs a multi-probe script against a probe result.
   * @param script The script
   * @param probeResult The probe result
   * @param probeRecord The probe ID
   */
  runMultiProbeScript(
    script: string,
    probeResult: any,
    probeRecord: string,
  ): any;
  /**
   * Updates the device count.
   */
  updateDeviceCount(): any;
}
declare class CimInstanceToken {
  /**
   * Parses the instance token.
   * @param cimomip
   */
  getHashToken(cimomip: string): string;
  /**
   * Parses the instance token.
   * @param instance The CIM instance
   */
  parse(instance: any): string;
}
declare class CimProbe {
  /**
   * Returns all the named queries for the current CIM probe.
   */
  getNamedQueries(): any;
  /**
   * Returns all the queries for the current CIM probe.
   */
  getQueries(): any[];
  /**
   * Returns all the records in the CIM Probe table.
   */
  getQueryRecords(): GlideRecord;
}
declare class CimProbeResult {
  /**
   * Gets the named instances for the specified named queries.
   * @param namedQueries The named queries
   */
  getNamedInstances(namedQueries: string): string;
  /**
   * Gets all the queries for the current CIM probe.
   */
  getQueries(): string;
}
declare class CIRelatedList {
  constructor(
    table: string,
    refField: string,
    cmdb_ci: string,
    debugFlag: string,
  );
  /**
   * Adds the specified record to the related list.
   * @param record Each member in the object is a column name in the associated table. For
   * example, if referencing the cmdb_serial_number table this value may contain
   * something similar to the
   * following:{"serial_number_type":"bios","serial_number":"1BC5E4z89246","valid":"true"}
   */
  addRec(record: any): any;
  /**
   * Sets the given records to the related list.
   * @param records Each object represents a record in the associated table. Each member in the
   * object is a column name in that table. For example, if referencing the
   * cmdb_serial_number table this value may contain something similar to the
   * following:[{"serial_number_type":"bios","serial_number":"1BC5E4z89246","valid":"true"},{"serial_number_type":"baseboard","serial_number":"w4z89246","valid":"true"}]
   */
  addRecs(records: any[]): any;
  /**
   * Appends an XML child to a field.
   * @param parent The parent element
   * @param name The element name
   * @param datum The data to append
   */
  appendXMLChildFld(parent: string, name: string, datum: string): any;
  /**
   * Appends an XML child to a record.
   * @param parent The parent element
   * @param name The element name
   * @param record The record
   */
  appendXMLChildRecord(parent: string, name: string, record: string): any;
  /**
   * Checks to see if this is a SysCollection table. If it is, sets the target table name
   * and reference field name.
   */
  checkSysCollection(): any;
  /**
   * Checks to see if this is a Sys many-to-many table. If it is, sets the target table name
   * and reference field name.
   */
  checkSysM2M(): boolean;
  /**
   * Initializes this instance from the specified XML element.
   * @param element An XML element
   */
  fromXML(element: string): any;
  /**
   * Populates the this.records field of this instance.
   */
  populate(): any;
  /**
   * Removes all the related list items.
   */
  remove(): any;
  /**
   * Makes a string representation of this instance, pushing each line onto the end of the
   * given result array.
   * @param result The result to convert
   */
  toString(result: any[]): any;
  /**
   * Serializes this instance to XML in the given document and  element.
   * @param document The document
   * @param element The rl element
   */
  toXML(document: string, element: string): any;
  /**
   * Converts a related list from XML to record format.
   * @param records The record to create
   * @param element The XML element
   */
  xmlToRecord(records: string, element: string): any;
}
declare class CIUtils {
  /**
   * Determines which business services are affected by the specific configuration item
   * (CI).
   * @param CI_sys_id The sys_id of a configuration item (cmdb_ci) to check.
   */
  servicesAffectedByCI(CI_sys_id: string): any[];
  /**
   * Determines which business services are affected by the specified task.
   * @param task A task GlideRecord, for example incident, change_request, or problem.
   */
  servicesAffectedByTask(task: GlideRecord): any[];
}
declare class ClassificationSolution {
  constructor(config: any);
  /**
   * Cancels a job for a solution object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * ClassificationSolutionVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a classification solution.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of a solution.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets a solution by provided version number.
   * @param version Existing version number of a solution.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a
   * solution in the store.
   * @param version Name of the ClassificationSolution() object version to
   * activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class ClassificationSolutionStore {
  /**
   * Adds a new solution object to the store and returns a unique name.
   * @param mlSolution ClassificationSolution()
   * object to add to the store.
   */
  add(mlSolution: any): string;
  /**
   * Removes a specified solution object from the
   * store.
   * @param name Name of the ClassificationSolution()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a solution object from the store.
   * @param name Name of a solution in the store.
   */
  get(name: string): any;
  /**
   * Gets the names of all solution definition
   * records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Replaces an existing object in the store with the
   * object passed as a parameter. The object name provided must be empty or
   * match.
   * @param name Name of the solution to update.
   * @param mlSolution ClassificationSolution()
   * object properties to update.
   */
  update(name: string, mlSolution: any): any;
}
declare class ClassificationSolutionVersion {
  /**
   * Calculates solution precision and coverage.
   * @param options Selects a metric to retrieve within a span of dates.  For more information, see
   * Configuring target
   * metrics.{
   * "metricName" : "String",
   * "fromDate" : "String",
   * "toDate" : "String"
   * }
   */
  getPredictionPerformance(options: any): any;
  /**
   * Gets estimated precision, estimated coverage, estimated recall values from the ML
   * Solutions [ml_solution] table and records from the Class Confidence [ml_class]
   * table.
   */
  getPredictionSettings(): any;
  /**
   * Gets solution object
   * properties
   * and version number.
   */
  getProperties(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets all the training statistics for a given solution.
   */
  getTrainingStatistics(): any;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): string;
  /**
   * Gets the input data for a prediction.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional values for filtering prediction
   * results.{
   * "apply_threshold": Boolean,
   * "top_n": Number
   * }
   */
  predict(input: any, options?: any): any;
  /**
   * Sets precision, coverage, or recall values at solution level or class
   * level.
   * @param options Metric configuration values. For information about these features, see Configuring target
   * metrics.{
   * "metricName" : "String",
   * "metricValue" : "String",
   * "className" : "String"
   * }
   */
  setPredictionSettings(options: any): any;
}
declare class ClassifierProbes {
  /**
   * Launches the next highest priority classifier from those in the list.
   */
  launch(): boolean;
  /**
   * Launches a supplementary probe.
   */
  launchSupplementary(): any;
  /**
   * Returns the probe length.
   */
  size(): number;
}
declare class ClusteringSolution {
  constructor(config: any);
  /**
   * Cancels a job for a solution object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active ClusteringSolutionVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a clustering solution.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of a solution.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets a solution by provided version number.
   * @param version Existing version number of a solution.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a
   * solution in the store.
   * @param version Name of the ClusteringSolution() object version to activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class ClusteringSolutionStore {
  /**
   * Adds a new solution object to the store and returns a unique name.
   * @param mlSolution ClusteringSolution()
   * object to add to the store.
   */
  add(mlSolution: any): string;
  /**
   * Removes a specified solution object from the
   * store.
   * @param name Name of the ClusteringSolution()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a solution object from the store.
   * @param name Name of a solution in the store.
   */
  get(name: string): any;
  /**
   * Gets the names of all solution definition
   * records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Replaces an existing object in the store with the
   * object passed as a parameter. The object name provided must be empty or
   * match.
   * @param name Name of the solution to update.
   * @param mlSolution ClusteringSolution()
   * object properties to update.
   */
  update(name: string, mlSolution: any): any;
}
declare class ClusteringSolutionVersion {
  /**
   * Cancels an update job on a trainer.
   */
  cancelUpdateJob(): any;
  /**
   * Deletes cluster assignments from rows by position in table sequence or
   * GlideDateTime.
   * @param options Object defining one option for deleting cluster assignments.Note: Only one
   * delete option is valid.
   */
  deleteClusterAssignments(options: any): number;
  /**
   * Gets assignments for a clustering
   * solution.
   * @param options Values to use to narrow down the returned results by group, level, system
   * update times, and table row number within a clustering solution. Minimum of one
   * argument must be
   * specified.{
   * "cluster_id": "String",
   * "group_by": "String",
   * "limit": Number,
   * "sequenceSince": Number,
   * "sequenceUntil": Number,
   * "topNPerCluster": Number,
   * "updatedSince": "String",
   * "updatedUntil": "String"
   * }
   */
  getClusterAssignments(options: any): any;
  /**
   * Gets information for a specified clustering
   * solution in the store. The purity measurement provides insights as a percentage for the clustering
   * fields on which the purity is based.
   * @param options Optional. Object containing properties that enable filtering results within a
   * clustering
   * solution.{
   * "clusterId": "String",
   * "groupBy": "String",
   * "limit": "String",
   * "recSysId": "String",
   * "sequenceSince": Number,
   * "sequenceUntil": Number,
   * "updatedSince": "String",
   * "updatedUntil": "String"
   * }Default: Return cluster memberships for all
   * clusters.
   */
  getClusterInfo(options?: any): any;
  /**
   * Gets solution object
   * properties
   * and version number.
   */
  getProperties(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the top purity results for a clustering solution. The purity measurement provides
   * insights as a percentage for the clustering fields on which the purity is based.
   * @param options Options that determine the number and format of the top cluster purity
   * results.{
   * "clusterIds": [Array],
   * "groupBy": [Array],
   * "purityFields": [Array],
   * "topN": Number,
   * "topNFields": Number
   * }
   */
  getTopNPurityInfo(options: any): any;
  /**
   * Gets the status of the most recent clustering solution update job.
   */
  getUpdateStatus(): string;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): string;
  /**
   * Gets the input data for a prediction.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional values for filtering prediction
   * results.{
   * "apply_threshold": Boolean,
   * "top_n": Number
   * }
   */
  predict(input: any, options?: any): any;
  /**
   * Submits clustering update jobs with options to narrow results to a specific table and
   * filter for matching records.
   * @param options JavaScript object containing options on which to base a clustering solution
   * update.{
   * "filter" : "String",
   * "table" : "String"
   * }
   */
  submitUpdateJob(options: any): any;
}
declare class CMDBDuplicateTaskUtils {
  constructor();
  /**
   * Create a De-duplication task in which the sys_ids of duplicate
   * tasks are specified.
   * @param sysIDs A comma separated list of sys_IDs.
   */
  createDuplicateTask(sysIDs: string): string;
}
declare class CMDBQueryBuilderAPI {
  /**
   * Returns the execution details for a specified Configuration Management Database (CMDB) Query Builder saved query.
   * @param executeQuery Optional. Flag that indicates whether to execute the specified query or
   * not.Valid values:
   *
   * true: Execute the specified query and return its execution details.
   *
   * false: Do not execute the specified query. Return the most recent execution
   * details of the query.
   *
   *
   * Default: False
   * @param savedQueryName Name of the CMDB Query Builder saved query for which to return query execution
   * details.
   * @param timeout Optional. Integer value that overrides the default query execution timeout
   * limit of five minutes.Unit: Seconds
   * Default: Five minutes
   */
  getSavedQueryExecutionDetails(
    executeQuery: boolean | undefined,
    savedQueryName: string,
    timeout?: number,
  ): any;
}
declare class CMDBTransformUtil {
  constructor();
  /**
   * Returns any errors generated by the previous identifyAndReconcile()
   * or identifyAndReconcileEnhanced() method call.
   */
  getError(): string;
  /**
   * Returns the JSON payload from the previous identifyAndReconcile() or
   * identifyAndReconcileEnhanced() method call.
   */
  getOutputPayload(): any;
  /**
   * Returns the sys_id of the configuration item (CI) that was inserted or updated.
   */
  getOutputRecordSysId(): string;
  /**
   * Returns the JSON payload generated from the specified input.
   * @param source Global object available in transform map scripts that holds the incoming
   * record.
   * @param map Map object available in transform map scripts that holds the current transform
   * map record.
   * @param log Log object available in transform map scripts.
   */
  getPayload(source: any, map: any, log: any): any;
  /**
   * Determines if an error occurred in the previous
   * identifyAndReconcile() or identifyAndReconcileEnhanced()
   * method call.
   */
  hasError(): boolean;
  /**
   * Inserts or updates a configuration item (CI) in the Configuration Management Database (CMDB).
   * @param source Global object available in transform map scripts that holds the incoming
   * record.
   * @param map Map object available in transform map scripts that holds the current transform
   * map record.
   * @param log Log object available in transform map scripts.
   */
  identifyAndReconcile(source: any, map: any, log: any): any;
  /**
   * Inserts or updates a configuration item (CI) in the Configuration Management Database (CMDB).
   * @param source Global object available in transform map scripts that holds the incoming
   * record.
   * @param map Map object available in transform map scripts that holds the current transform
   * map record.
   * @param log Log object available in transform map scripts.
   */
  identifyAndReconcileEnhanced(source: any, map: any, log: any): any;
  /**
   * Logs the number of configuration items (CI) inserted, updated, skipped, or that had
   * errors.
   * @param log Log object available in transform map scripts.
   */
  logTransformStats(log: any): any;
  /**
   * Sets the data source to use when the identifyAndReconcile() or
   * identifyAndReconcileEnhanced() method is called.
   * @param source Data source for the source configuration item record.
   */
  setDataSource(source: string): any;
  /**
   * Sets the payload to use when the identifyAndReconcile() or
   * identifyAndReconcileEnhanced() method is called.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param options Optional, but {} or null must be passed-in. Options to enable
   * or disable features.Note: By default or if partial_payloads is
   * set to true, both partial_commits and
   * deduplicate_payloads are enabled, even if they are set to
   * false, as those features are essential for partial payloads
   * functionality.
   * "options": {
   * "deduplicate_payloads": "Boolean",
   * "generate_summary": "Boolean",
   * "partial_commits": "Boolean",
   * "partial_payloads": "Boolean",
   * "skip_updating_last_scan_to_now": "Boolean",
   * "skip_updating_source_last_discovered_to_now": "Boolean"
   * }
   * @param source Data source of the CI information. This value must be one of
   * the choice values defined for the discovery_source field of the Configuration Item
   * [cmdb_ci] table.
   */
  setPayload(input: string, options: any | undefined, source: string): any;
}
declare class CMDBUtil {
  /**
   * Applies proposed changes in a task_ci record that represent an update set for all CIs
   * associated with the task.
   * @param proposedChanges The collection of proposed changes in the change request (CHG).
   */
  baselineProposedChangesApplyChanges(proposedChanges: GlideRecord): any;
  /**
   * Generates the XML for proposed changes diff, and adds it to the corresponding task_ci
   * record.
   * @param current The GlideRecord that contains the collection of proposed changes.
   * @param changeSet The sysid of the task_ci record that represents the change set to use.
   */
  baselineProposedChangesGenDiff(current: GlideRecord, changeSet: string): any;
  /**
   * Bootstraps the environment by creating the database, creating the system dictionary
   * table, and having the system dictionary table describe itself.
   * @param dictFile The file name including path, of the dictionary to load.
   */
  bootstrap(dictFile: string): any;
  /**
   * Creates a CI relationship between fields.
   * @param tableName Optional. The name of the relationship target table.Default: CI Relationship
   * [cmdb_rel_ci] table.
   * @param parent Sys_id of the parent CI record in the Configuration Items [cmdb_ci]
   * table.
   * @param child Sys_id of the child CI record in the Configuration Items [cmdb_ci]
   * table.
   * @param parentField The parent relationship label listed in the CI Relationship Type
   * [cmdb_rel_type] table.
   * @param childField The child relationship label listed in the CI Relationship Type [cmdb_rel_type]
   * table.
   */
  createCIRelationship(
    tableName: string | undefined,
    parent: string,
    child: string,
    parentField: string,
    childField: string,
  ): string;
  /**
   * Gets all the child tables of the specified table as a comma-separated list.
   * @param baseTable The base table name.
   */
  getAllChildrenOfAsCommaList(baseTable: string): string;
  /**
   * Gets all the records in the CMDB View [cmdb_view] table.
   */
  getCMDBViews(): any[];
  /**
   * Gets a list of all the parents of a table.
   * @param tableName The table name.
   */
  getTables0(tableName: string): any[];
  /**
   * Determines whether a CI class is defined in the Business Rule Exclusion Lists
   * [cmdb_business_rule_exclusions] table. Use this method in an advanced condition to prevent a
   * business rule from executing on excluded CI classes.
   * @param className Name of the class to check for exclusion.
   */
  isExcludedFromBR(className: string): boolean;
  /**
   * Wraps the call to RelationshipEventProcessor(), which processes any
   * changes to CI relationships.
   * @param event The event record.
   * @param target The target record.
   */
  processCIChange(event: GlideRecord, target: GlideRecord): any;
  /**
   * Wraps the call to RelationshipEventProcessor(), which processes any
   * changes to CI relationships, with the specified type and triplet.
   * @param event The event record
   * @param current The current record, which is either the relation record or a user record if the
   * current process is a deletion.
   * @param relType The type of relation that changed.
   * @param triplet The child, parent, and class name from the relation that changed.
   */
  processRelChange(
    event: GlideRecord,
    current: GlideRecord,
    relType: string,
    triplet: string,
  ): any;
  /**
   * Deletes the specified CI relationship.
   * @param tableName Optional. Table nameDefault: CI Relationship [cmdb_rel_ci] table
   * @param parentField Parent field
   * @param childField Child field
   * @param parentDesc Parent relationship descriptor
   * @param childDesc Child relationship descriptor
   */
  removeCIRelationship(
    tableName: string | undefined,
    parentField: string,
    childField: string,
    parentDesc: string,
    childDesc: any,
  ): any;
  /**
   * Changes the parent of the given table to the new parent.
   * @param table The table to re-parent.
   * @param oldParent The old parent.
   * @param newParent The new parent.
   */
  reParentTable(table: string, oldParent: string, newParent: string): boolean;
}
declare class ConnectActionResponse {
  /**
   * Create a GlideRecord in the specified table with the specified values.
   * @param table Name of the table where the record is to be added.
   * @param values An object of name value pairs where the names are field names in the table and
   * the values are the field values.
   * @param view The form view to load. This parameter is optional.
   */
  newRecord(table: string, values: any, view?: string): any;
}
declare class CostPlanBatchOperations {
  /**
   * Adds one or more cost plans to a specified task (project or demand). Use this method
   * when you want to create multiple cost plans.
   * @param costPlan One or more objects or an array of objects that describe each of the cost plans
   * to add to an existing task.
   */
  add(costPlan: any): any;
  /**
   * Removes all cost plan objects that were added using the
   * CostPlanBatchOperations.add() method.
   */
  clear(): any;
  /**
   * Processes all of the cost plans that were added using the
   * CostPlanBatchOperations.add() method and creates corresponding cost plans
   * and relevant rollups.
   */
  process(): any[];
}
declare class CriteriaEvaluator {
  /**
   * Adds the criteria to be evaluated.
   * @param lhComparand The left hand comparand. Must be a named value in the left hand values input
   * into evaluate().
   * @param operator The operator. Must be one of: equals, starts with, contains, does not contain,
   * ends with, or regex matches.
   * @param rhComparand The right hand comparand. Can be evaluated either as one of the right hand
   * values input to evaluate() or as a literal string.
   */
  addCriterion(lhComparand: string, operator: string, rhComparand: string): any;
  /**
   * Evaluates the criteria.
   * @param lhValues A hashmap of name-value pairs to evaluate the left hand comparands of the
   * criteria.
   * @param rhValues Optional right hand values to use instead of the literal value in evaluating
   * the right hand comparands.
   * @param any If true, any criterion matching suffices for a true result. If false, all
   * criteria must match for a true result.
   */
  evaluate(lhValues: any, rhValues: string | undefined, any: boolean): boolean;
}
declare class DatasetDefinition {
  constructor(config: any);
  /**
   * Returns a list of fields that are eligible as either input fields (features) or
   * predicted fields regarding a solution of a given capability, for example, a classification
   * solution. Eligibility is determined based on the fields having the appropriate glide data
   * types.
   * @param capability Capability for which to retrieve fields eligible for training. This method
   * currently only supports classification solutions, any other value for the capability
   * throws a "capability not supported" exception.Valid values:
   * "classification"
   */
  getEligibleFields(capability: string): any;
}
declare class DateTimeUtils {
  /**
   * Converts Microsoft AD integer8 DateTime format into GlideDateTime format.
   * @param int64 A 64-bit value representing the number of 100-nanosecond intervals since
   * January 1, 1601 (UTC).
   */
  int8ToGlideDateTime(int64: number): GlideDateTime;
  /**
   * Convert milliseconds to a GlideDateTime object
   * @param milliseconds The number of milliseconds
   */
  msToGlideDateTime(milliseconds: number): GlideDateTime;
}
declare class DCManager {
  /**
   * Assigns pre-defined or user-defined data classifications
   * to existing dictionary entries.
   * @param dictEntries The sys_ids of the records you want to classify. The
   * sys_ids are from the Dictionary [sys_dictionary] table. Entered as a comma-separated list
   * enclosed in a string.
   * @param dataClasses The sys_ids of the data classifications you want to assign. The
   * sys_ids are from the Data Classification [data_classification] table. Entered as a
   * comma-separated list enclosed in a string.
   */
  classify(dictEntries: string, dataClasses: string): string;
  /**
   * Removes all data classifications for the specified
   * dictionary entries.
   * @param dictEntries The sys_ids of the records you want to remove
   * classifications from. The sys_ids are from the Dictionary [sys_dictionary] table. Entered
   * as a comma-separated list enclosed in a string.
   */
  clearClassification(dictEntries: string): string;
  /**
   * Returns a list of all data classifications
   * available in the current domain.
   */
  getAllDataClasses(): any;
  /**
   * Retrieves all data classifications for the specified
   * dictionary entries.
   * @param dictEntries The sys_ids of the records you want to retrieve
   * classifications for. The sys_ids are from the Dictionary [sys_dictionary] table. Entered as
   * a comma-separated list enclosed in a string.
   */
  getClassification(dictEntries: string): any;
}
declare class Discovery {
  constructor();
  /**
   * Called when the completed business rule is called because the discovery_status started
   * has completed.
   */
  completed(): any;
  /**
   * Starts a discovery of the CI with the given sysID, returning the sysID of the status
   * record.
   * @param cmdb_ci The sys_id of the CI to be discovered.
   */
  discoveryFromCI(cmdb_ci: string): string;
  /**
   * Starts the current discovery job.
   */
  discoveryStartJob(): any;
  /**
   * Gets an array of IP addresses in the CI with a given sysID.
   * @param ci_sysID The sys_id for the CI to look for
   */
  getIPsinCI(ci_sysID: string): any[];
  /**
   * Gets the DiscoverySchedule instance for any IP address in a given array and the IP
   * address to be discovered.
   * @param ips An array of IP addresses
   */
  getScheduleContainingAnyIP(ips: any[]): any;
  /**
   * Determines if the current discovery schedule is valid.
   * @param schedule The sys_id of the schedule to check.
   */
  isValidDiscoverySchedule(schedule: string): boolean;
  /**
   * Determines if the IP range for the specified discovery schedule is valid.
   * @param schedule The sys_id of the schedule to check
   */
  isValidRange(schedule: string): boolean;
  /**
   * Logs a warning message.
   * @param message The warning message
   */
  warnMsg(message: string): any;
}
declare class DiscoveryAjax {
  /**
   * Retrieves the number of records in the ECC queue, and the maximum entries.
   */
  ajaxFunction_countECCRecords(): string;
  /**
   * Gets the IP address for the next device that is ready for discovery.
   */
  ajaxFunction_discoverIP(): GlideRecord;
  /**
   * Gets the Discovery status of a device that has started and is active.
   */
  ajaxFunction_discoverStatus(): string;
  /**
   * Gets the sys_id for the current Discovery CI.
   */
  ajaxFunction_getSysID(): string;
  /**
   * Sets the status of all processed devices to ready.
   */
  ajaxFunction_setAllToReady(): any;
}
declare class DiscoveryAPDEnvSensor {
  /**
   * Starts processing the application discovery environment file.
   * @param result Te discovery result file
   */
  start(result: any): any;
}
declare class DiscoveryAPDSensor {
  /**
   * Determines if the application file has valid content.
   * @param result The application file
   */
  hasValidContent(result: any): boolean;
  /**
   * Processes a custom application.
   * @param dcaGR The application record
   * @param versionResult The application version
   * @param envResult The environment file
   */
  processCustom(dcaGR: GlideRecord, versionResult: string, envResult: any): any;
  /**
   * Processes a part of the service provided by the current application.
   */
  processPartOfService(): any;
  /**
   * Processes the result. UNIX-based results must be converted to a JavaScript
   * object.
   * @param result The application file
   */
  processResult(result: any): any;
  /**
   * Processes the services the current application consumes from other
   * applications.
   */
  processServicesConsumed(): any;
  /**
   * Processes the services provided by the current application.
   */
  processServicesProvided(): any;
}
declare class DiscoveryAPDVersionSensor {
  /**
   * Finds the record for the specified application or, if not found, creates
   * one.
   * @param dcaGR The application classification
   */
  findOrCreateApplication(dcaGR: GlideRecord): GlideRecord;
  /**
   * Processes the application.
   */
  processApplication(): any;
  /**
   * Creates an application-to-system relation.
   * @param dcaGR The application record
   */
  processAppToSystemRelation(dcaGR: GlideRecord): any;
  /**
   * Processes the environment.
   */
  processEnv(): GlideRecord;
  /**
   * Processes the XML files.
   */
  processXML(): any;
  /**
   * Starts processing the application discovery version file.
   * @param result The application file
   */
  start(result: any): any;
}
declare class DiscoveryApplicationDiscoMatcher {
  /**
   * Determines if this is a new CI.
   */
  isNewCI(): boolean;
  /**
   * Attempts to match with an application. If no match is found, creates a new application
   * entry.
   */
  match(): GlideRecord;
}
declare class DiscoveryAttachments {
  /**
   * Deletes the attachments for the current Discovery record.
   */
  deleteAttachments(): any;
}
declare class DiscoveryBehavior {
  constructor();
  /**
   * Starts the basic functionality probe for the specified MID server.
   * @param defaultMID The MID server
   */
  fireBasicFunctionality(defaultMID: string): any;
  /**
   * Starts the behavior functionality probe and logs the event.
   */
  fireBehaviorFunctionality(): any;
  /**
   * Starts the first Discovery execution phase for the specified MID server.
   * @param defaultMID The MID server
   */
  fireFirstPhase(defaultMID: string): any;
  /**
   * Starts the next Discovery execution phase.
   */
  fireNextPhase(): any;
  /**
   * Gets an array of hashmaps of the discovery_functionality table with all the instances
   * in the next phase, and updates the scratchpad.last_phase entry.
   */
  getFunctionality(): any[];
  /**
   * Retrieves the current Discovery Behavior ID.
   */
  getId(): string;
  /**
   * Gets the MID server Windows domain for the specified Discovery function.
   * @param dis_Function The discovery function
   */
  getMidWinDomain(dis_Function: string): GlideRecord;
  /**
   * Determines if the current device has unscanned ports.
   */
  haveUnscannedPorts(): boolean;
  /**
   * Determines if the current device ID is valid.
   */
  isValid(): boolean;
  /**
   * Determines if there are functionality criteria for the given discovery_functionality
   * record.
   * @param dis_function The discovery function
   */
  meetsCriteria(dis_function: string): boolean;
  /**
   * Coverts a string to lowercase.
   * @param str The string to convert
   */
  safeLower(str: string): string;
  /**
   * Starts a Discovery scan for the specified MID server and ports.
   * @param mid The name of the MID server
   * @param ports The ports to scan
   */
  triggerPortScanner(mid: string, ports: string): any;
}
declare class DiscoveryBehaviorRecord {
  constructor(source: any, discover: string);
  /**
   * Starts the first discovery execution phase for the specified MID server.
   */
  firstPhase(): any;
  /**
   * Returns the functionality for this phase.
   * @param phase The phase
   */
  getPhase(phase: string): string;
  /**
   * Gets the port probes for the specified stage and status.
   * @param phase The current probe phase
   * @param status The current probe status
   */
  getPortProbesForPhase(phase: string, status: string): any;
  /**
   * Gets a hashmap of information from this behavior if we can find a port probe that
   * probes the given service name and for which the functionality criteria are met with the given
   * left-hand values and right-hand values. Returns null if no such port probe exists.
   * @param result The ShazzamResult instance for the device being processed.
   * @param scanner The ShazzamScanner instance for the scanner being processed.
   * @param phase The current phase of the behavior.
   * @param midServer The MIDserver instance for the MID server whose Shazzam results are being
   * processed.
   * @param status The DiscoveryStatus instance for the current discover.
   */
  getStuffForResult(
    result: string,
    scanner: string,
    phase: string,
    midServer: string,
    status: string,
  ): any;
  /**
   * Starts the next discovery execution phase.
   * @param prevPhase The last completed execution phase.
   */
  nextPhase(prevPhase: string): any;
}
declare class DiscoveryCIRelationReconciler {
  constructor(
    fromID: string,
    nature: string,
    toTable: string,
    ciData: any[],
    keys: string,
    retireMissing: boolean,
    reason: string,
  );
  /**
   * Inserts and updates all the provided CIs, updating the original CI object with the
   * appropriate IDs, then scans all relationships of the same type and class name from the origin
   * for CIs that are not in the current list and retires those missing CIs.
   */
  reconcile(): GlideRecord;
}
declare class DiscoveryClusteredProcessHelper {
  /**
   * Returns all classified processes that have a "Runs on::Runs" relationship with the
   * given child.
   */
  getClassifiedProcesses(): GlideRecord;
  /**
   * Returns the first valid cluster where the current CI is a node.
   */
  getCluster(): GlideRecord;
  /**
   * Returns a classified process that already exists on the cluster.
   * @param procName The process to get
   */
  getExistingProc(procName: string): GlideRecord;
  /**
   * Determines which classified processes support clustering, by creating a array of
   * supported processes.
   */
  getSupportedProcs(): any;
  /**
   * Checks if the specified process is a cluster resource.
   * @param process The process to check
   */
  isClusterResource(process: any): boolean;
  /**
   * Determines if the specified process is listening on all TCP connections.
   * @param pid The process identifier of the process to check
   */
  isListeningOnAll(pid: string): boolean;
  /**
   * Builds up TCP half connections for clustered processes that are listening on *
   * (enumerate over cluster IPs in addition to the CI IPs that are already there).
   * @param deviceGR The device record
   */
  layer7Connections(deviceGR: GlideRecord): any;
  /**
   * If the current device is a member of a cluster, processes classified processes that can
   * be clustered.
   * @param deviceGR The record of the device to process.
   */
  process(deviceGR: GlideRecord): any;
  /**
   * Processes any existing classified processes associated with the cluster, and newly
   * discovered classified processes from one of the cluster nodes.
   */
  processClusteredProcs(): any;
  /**
   * Rewrites the "@host" portion of an existing cluster process name if a node has
   * overwritten it.
   * @param classyProc The cluster process name.
   */
  processExisting(classyProc: any): any;
  /**
   * Processes a new classified process.
   * @param classyProc The classification process
   */
  processNew(classyProc: any): any;
  /**
   * Removes the relationship between the classified process and the cluster
   * node.
   * @param process The classified process
   */
  removeNodeRelationship(process: any): any;
}
declare class DiscoveryCreateRangeSets {
  constructor(statusID: string);
  /**
   * Increments the number of sensor records that were processed by one.
   */
  bumpStatusCompleted(): any;
  /**
   * Creates a range item.
   * @param subnet The subnet range
   */
  createRangeItem(subnet: string): any;
  /**
   * Ensures a range is set for a specified router.
   * @param routerID The router ID
   */
  ensureRangeSet(routerID: string): any;
  /**
   * Processes the specified network.
   * @param netGR The network to process
   */
  processNetwork(netGR: GlideRecord): any;
  /**
   * Processes all of the current networks.
   */
  processNetworks(): any;
  /**
   * Ensures that an item exists in a specified subnet.
   * @param subnet The subnet range
   */
  rangeItemExists(subnet: string): any;
  /**
   * Updates the number of probe messages sent to by the specified number.
   * @param startCount The number to increment
   */
  updateStatusStarted(startCount: number): any;
}
declare class DiscoveryFunctionality {
  active: string;
  behavior: any;
  criteria: any[];
  functionality: any;
  matchCriteria: string;
  midServer: any;
  midServers: any[];
  phase: number;
  sysID: string;
  constructor(source: any, behavior?: string);
  /**
   * Evaluates the criteria in this functionality using the provided left-hand and
   * right-hand values.
   * @param lhValue A hashmap of left-hand criteria values.
   * @param rhValue A hashmap of right-hand criteria values.
   */
  evaluateCriteria(lhValue: any, rhValue: any): boolean;
  /**
   * Gets a JavaScript array of DiscoveryFunctionality instances related to the specified
   * behavior.
   * @param behavior A DiscoveryBehaviorRecord instance
   */
  getForBehavior(behavior: GlideRecord): any[];
  /**
   * Retrieves a hashmap of information from the current functionality if a port probe that
   * probes the given service name can be found and for which the functionality criteria are met with
   * the given left-hand values and right-hand values. Returns null if no such port probe
   * exists.
   * @param name Name of the service for which a port probe is desired
   * @param lhCriteria A hashmap of left-hand criteria values, for example
   * "win_domain"="service-now.com"
   * @param rhCriteria A hashmap of right-hand criteria values, for example
   * "mid_win_domain"="bogus.com"
   */
  getStuffForServiceName(name: string, lhCriteria: any, rhCriteria: any): any;
  /**
   * Retrieves a JavaScript array of one synthetic DiscoveryFunctionality instance, for the
   * given MID server.
   * @param midServer A MidServer instance
   * @param discover What kind of discovery, 'IPs', 'CIs', or 'Nets'
   */
  getSyntheticBasic(midServer: string, discover: string): any[];
}
declare class DiscoveryFunctionalityCriterion {
  constructor(source: any, functionality?: string);
  /**
   * Retrieves an array of DiscoveryFunctionalityCriterion instances associated with the
   * given functionality.
   * @param functionality The functionality
   */
  getForFunctionality(functionality: string): any[];
}
declare class DiscoveryFunctionalityDefinition {
  constructor(source: any);
  /**
   * Gets an array of DiscoveryFunctionalityCriterion instances associated with the given
   * functionality.
   */
  getAll(): any[];
  /**
   * Gets the specified DiscoveryFunctionalityCriterion instance.
   * @param name The name of the DiscoveryFunctionalityCriterion
   */
  getNamed(name: string): any;
  /**
   * Checks if the trigger type is Run Once, i.e., at one specific date and
   * time.
   */
  isRunOnce(): boolean;
}
declare class DiscoveryFunctions {
  /**
   * Creates a relationship between two virtual machines.
   * @param parent The parent virtual machine.
   * @param child The child virtual machine
   * @param pDescription A description of the parent virtual machine
   * @param cDescription A description of the child virtual machine
   */
  createRelationship(
    parent: GlideRecord,
    child: GlideRecord,
    pDescription: string,
    cDescription: string,
  ): string;
  /**
   * Creates a relationship between the specified parent and child if none already
   * exists.
   * @param parent The parent virtual machine
   * @param child The child virtual machine
   * @param descriptor The relationship descriptor
   */
  createRelationshipIfNotExists(
    parent: GlideRecord,
    child: GlideRecord,
    descriptor: string,
  ): string;
  /**
   * Deletes a virtual machine by record (cmdb_ci_computer) and workflow application
   * (cmdb_ci_appl).
   * @param now_GR The cmdb_ci_computer for the virtual machine
   * @param workflow The workflow application cmdb_ci_appl
   */
  deleteCI(now_GR: GlideRecord, workflow: GlideRecord): any;
  /**
   * Deletes virtual machines by traversing through the relationship tree.
   * @param appList The application list
   */
  deleteCIAndRelationshipsRecursive(appList: string): any;
  /**
   * Deletes a virtual machine by its sys_id.
   * @param sysId The sys_id of the virtual machine to delete.
   * @param workflow The workflow of the virtual machine
   */
  deleteCIBySysId(sysId: string, workflow: GlideRecord): any;
  /**
   * Finds the relationship type for the current VM given its reference table and
   * descriptor.
   * @param refTable The reference table
   * @param descriptor The relationship descriptor
   */
  findCIRelationshipType(refTable: string, descriptor: string): string;
  /**
   * Finds the relationship type for the current virtual machine given its parent and child
   * descriptors.
   * @param refTable The reference table
   * @param pDesc The parent descriptor
   * @param cDesc The child descriptor
   */
  findCIRelationshipTypeByDesc(
    refTable: string,
    pDesc: string,
    cDesc: string,
  ): string;
  /**
   * Finds the node value with a specified attribute.
   * @param node The current node
   * @param attrName The attribute for which to search
   */
  findNodeValueWithAttribute(node: any, attrName: string): any;
  /**
   * Brief description of the method.
   * @param currNode The current node
   * @param attrName The attribute name
   */
  findNodeWithAttribute(currNode: any, attrName: string): any;
  /**
   * Finds the registry node for a given registry item.
   * @param currNode The current node
   * @param regName The registry name
   */
  findRegistryNode(currNode: string, regName: string): any;
  /**
   * Gets the discovery type for the specified status ID.
   * @param statusID The discovery status ID
   */
  getDiscoveryType(statusID: string): GlideRecord;
  /**
   * Gets the fields that have changed for the specified device.
   * @param now_GR The device
   */
  getFieldsThatChanged(now_GR: GlideRecord): any[];
  /**
   * Gets the schedule record.
   */
  getScheduleRecord(): GlideRecord;
  /**
   * Gets the service assigned to the specified port.
   * @param port The port to check
   */
  getService(port: string): GlideRecord;
  /**
   * Gets the status record.
   */
  getStatusRecord(): GlideRecord;
  /**
   * Gets the XML memory table.
   * @param tableName The table name
   * @param doc The document where the table resides.
   * @param path The path to the table
   */
  getXMLMemoryTable(tableName: string, doc: string, path: string): string;
  /**
   * Inserts a new process ID.
   * @param pids The process ID
   * @param app_sys_id The application sys_id
   * @param ci_sys_id The virtual machine ID
   */
  insertPIDs(pids: string, app_sys_id: string, ci_sys_id: string): any;
  /**
   * Determines if the given IP address is within the current IP range.
   * @param ip The IP address to check
   */
  isInRange(ip: string): boolean;
  /**
   * Reclassifies a device.
   * @param device The device to reclassify
   * @param newClassName The new classification
   * @param reason The reason for the change
   */
  reclassify(
    device: GlideRecord,
    newClassName: string,
    reason: string,
  ): GlideRecord;
  /**
   * Determines whether a relationship already exists between the parent and
   * child.
   * @param parent The parent virtual machine
   * @param child The child virtual machine
   * @param descriptor The relationship descriptor
   */
  relationshipExists(
    parent: GlideRecord,
    child: GlideRecord,
    descriptor: GlideRecord,
  ): GlideRecord;
  /**
   * Updates the history of the current device.
   * @param now_GR The device
   * @param sensor The sensor
   * @param eccID The External Communication Channel (ECC) queue ID.
   */
  updatedHistory(now_GR: GlideRecord, sensor: string, eccID: string): any;
  /**
   * Updates the process ID.
   * @param pids The process ID
   * @param app_sys_id The application sys_id
   * @param ci_sys_id The virtual machine ID
   */
  updatePIDS(pids: string, app_sys_id: string, ci_sys_id: string): any;
}
declare class DiscoveryIssuesURLBuilder {
  /**
   * Builds and returns the URL for the calculated issues_link field in
   * discovery_device_history.
   * @param deviceHistory The device history record
   */
  url(deviceHistory: GlideRecord): string;
}
declare class DiscoveryJob {
  constructor();
  /**
   * Determines if the discovery job has been run at least once.
   */
  isRunOnce(): boolean;
}
declare class DiscoveryLogger {
  constructor(sys_id: string);
  /**
   * Logs error events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  error(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs information events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  info(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs all events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  log(msg: string, source: string, sensor: string, ci: string): any;
  /**
   * Logs warning events.
   * @param msg The message detailing the outcome of the activity or the discovery
   * process.
   * @param source The activity, such as SNMP Identity or Windows Identity, where the event
   * occurred.
   * @param sensor The sensor that processed the results of the probe.
   * @param ci The device for which a matching CI was found in the CMDB.
   */
  warn(msg: string, source: string, sensor: string, ci: string): any;
}
declare class DiscoveryMacProfileUtils {
  /**
   * Returns the child elements for a specified node as an array.
   * @param el The node for which to get the child elements.
   */
  getArrayFromNode(el: string): string;
  /**
   * Returns the base element for a specified output.
   * @param output The output for which to get the base element.
   */
  getBaseElement(output: string): string;
  /**
   * Returns the child elements for a specified node as a hash map.
   * @param el The node for which to get the child elements
   */
  getHashFromNode(el: string): any;
}
declare class DiscoveryMSSQLSensor {
  /**
   * Parses the data fetched from the probe.
   * @param result The data fetched from the probe
   */
  parseResult(result: any): any;
  /**
   * Populates the database catalogs with the data fetched from the probe.
   * @param result The data fetched from the probe
   */
  populateDBCatalogs(result: any): any;
  /**
   * Does nothing if there is no data fetched from the probe.
   */
  zeroResults(): any;
}
declare class DiscoveryMultiSensor {
  /**
   * Logs the event if the sensor script has no payload data to process.
   * @param name The sensor name
   */
  logEmptyPayload(name: string): any;
  /**
   * Prepares the sensor by loading the CI data.
   */
  prepare(): any;
  /**
   * Determines if the script is valid. Logs an error if the script is invalid.
   * @param script The script to validate
   * @param msgr The multisensor record
   */
  validateScript(script: string, msgr: GlideRecord): boolean;
}
declare class DiscoveryPhaser {
  constructor(discoveryStatus: GlideRecord);
  /**
   * Determines if any ports were scanned for the specified probe.
   * @param portProbes The probes to check
   */
  anyScanned(portProbes: string): boolean;
  /**
   * Determines if there are any remaining phases for the discovery probe.
   */
  hasNextPhase(): boolean;
}
declare class DiscoveryPortProbe {
  Active: boolean;
  class: string;
  classificationPriority: number;
  conditional: boolean;
  Description: string;
  discoverCIs: boolean;
  Name: string;
  scanner: string;
  script: string;
  services: any[];
  sysID: string;
  triggersProbeID: string;
  constructor(source: any);
}
declare class DiscoveryPortScanner {
  constructor();
  /**
   * Fires the port probe for the specified port.
   * @param port The port to probe.
   */
  firePortProbeByPort(port: string): number;
  /**
   * Gets a list of all service ports.
   */
  getAllServicePorts(): any[];
  /**
   * Brief description of the method.
   * @param name Name of the port probe
   */
  getPortProbeByName(name: string): GlideRecord;
  /**
   * Gets all the current port probes for the current device.
   */
  getPortProbes(): GlideRecord;
  /**
   * Returns the port probes for a specified service port.
   * @param servicePort The service port
   */
  getPPFromSP(servicePort: string): GlideRecord;
  /**
   * Returns the service ports for a specified port probe.
   * @param portProbe The port probe
   */
  getSPFromPP(portProbe: any): any[];
  /**
   * Returns the service ports for a specified probe process ID.
   * @param ppid The probe process ID.
   */
  getSPFromPPId(ppid: string): any[];
  /**
   * Puts the specified probe and port on the discovery schedule.
   * @param portProbe The port probe to schedule
   * @param port The port to probe
   */
  scheduleProbe(portProbe: any, port: string): number;
  /**
   * Updates the service ports for a specified CMDB configuration item.
   * @param openPorts The ports that are open
   * @param scannedPorts The ports that have been scanned
   * @param cmdbCi The CMDB configuration item
   */
  updateCIServicePorts(
    openPorts: any[],
    scannedPorts: string,
    cmdbCi: string,
  ): any;
}
declare class DiscoveryProcessAppMatch {
  /**
   * Matches an application during process classification.
   */
  match(): boolean;
}
declare class DiscoveryProcessConnectionsSensor {
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection to add
   */
  addConnection(dtcp: any): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections to add
   */
  addConnections(connections: any[]): any;
  /**
   * Adds a single listener.
   * @param dtcp The discovery TCP
   */
  addListener(dtcp: any): any;
  /**
   * Adds an array of listeners.
   * @param listeners An array of discovery TCPs
   */
  addListeners(listeners: any[]): any;
  /**
   * Completes a number of tasks after a connection has been reconciled, including checking
   * for a print server.
   */
  after(): any;
  /**
   * Logs the connections made by the sensor.
   */
  logConnections(): any;
  /**
   * Provide code for this method to parse the output.
   * @param output The output to parse
   */
  parse(output: any): any;
}
declare class DiscoveryPsSensor {
  /**
   * Returns the operating system type, either ESXi or UNIX.
   */
  getOSType(): string;
  /**
   * Maps the process status results returned from the ps command.
   * @param result The result of the ps command
   */
  mapProcesses(result: any): any;
  /**
   * Parses the column header.
   * @param line The column header to parse
   */
  parseColumnHeader(line: string): any;
  /**
   * Parses a line returned by the ps command.
   * @param line The line to parse
   */
  parseLine(line: string): any;
}
declare class DiscoveryRunningProcessSensor {
  /**
   * Adds a discovered sensor to the specified process.
   * @param fc The process to add the sensor to.
   */
  addDiscovered(fc: string): any;
  /**
   * After the reconciler finishes processing, finishes other tasks and starts application
   * mapping.
   */
  after(): any;
  /**
   * Determines if the cluster has any relationships.
   * @param ci The cluster node cmdb_ci
   */
  hasClusterRelationship(ci: any): boolean;
  /**
   * Adds any inserts to the specified process.
   * @param correlationId The correlation ID
   * @param classifiedProcess The classified process
   */
  insertCiProcess(correlationId: string, classifiedProcess: any): any;
  /**
   * Performs both pending inserts and updates to the specified process.
   * @param classifiedProcess The process into which inserts of updates will be made.
   */
  insertOrUpdate(classifiedProcess: any): any;
  /**
   * Determines if a classified process can be clustered.
   * @param classifiedProcess The classified process
   */
  isClusterable(classifiedProcess: any): boolean;
  /**
   * Implement your own map process by overwriting this method with a class extending this
   * object.
   * @param result The result from the discovery sensor
   */
  mapProcesses(result: any): any;
  /**
   * Triggers the probe when the process is discovered.
   */
  processDiscovered(): any;
  /**
   * Sets the field values of the CI, if values are available.
   * @param ci The CI whose fields are to be set.
   * @param fields The fields to set
   */
  setFields(ci: any, fields: any): any;
  /**
   * Adds any updates to the specified process.
   * @param ci The CI of the process to update
   * @param correlationid The correlation ID
   * @param classifiedProcess The classified process
   */
  updateCiProcess(ci: any, correlationid: string, classifiedProcess: any): any;
}
declare class DiscoverySchedule {
  active: boolean;
  discover: string;
  includeAlive: boolean;
  location: string;
  logStateChanges: boolean;
  maxRun: GlideElement;
  midServer: any;
  midServerID: string;
  name: string;
  ranges: any;
  sysID: string;
  constructor(source: any);
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection
   */
  addConnection(dtcp: string): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections
   */
  addConnections(connections: any[]): any;
  /**
   * Adds an array of listeners.
   * @param listeners Discovery TCPs.
   */
  addListeners(listeners: any[]): any;
  /**
   * Determines if the current range contains the given IP address.
   * @param ip The IP address in dot-decimal notation.
   */
  contains(ip: string): boolean;
  /**
   * Gets the correct behavior for the specified IP address, or null if none can be
   * found.
   * @param ip The IP address in dot-decimal notation.
   */
  getBehaviorForIP(ip: string): any;
  /**
   * Retrieves the DiscoveryBehavior instance for the given range.
   * @param ipiec The IPIncludeExcludeCollection for the range.
   */
  getBehaviorForRange(ipiec: string): GlideRecord;
  /**
   * Logs the connections made by the sensor.
   */
  logConnections(): any;
}
declare class DiscoverySensor {
  /**
   * Exposes the base values in CIData to the classifiers. Currently used by Windows, Unix,
   * and SNMP.
   * @param sensor The sensor object
   */
  addCIDataBaseValue(sensor: any): any;
  /**
   * Adds the CI to the related list.
   * @param tableName The table to add to
   * @param dataArray The data array
   * @param refName The reference name
   * @param keyName The key name
   */
  addToRelatedList(
    tableName: string,
    dataArray: any[],
    refName: string,
    keyName: string,
  ): any;
  /**
   * Optionally override this in the sensor to finish after processing and saving all
   * results. This method is invoked once after all results have been processed and
   * saved.
   */
  after(): any;
  /**
   * Checks if the device history is not yet created. If so, do not write to it.
   * @param result The result from the probe
   */
  checkEmptyPayload(result: any): boolean;
  /**
   * Checks whether an error has occurred, and if so calls the function to process the
   * error.
   * @param result The result from the probe
   */
  checkErrorPayload(result: any): any;
  /**
   * If debugging is turned on, logs the message.
   * @param msg The message to log
   */
  debug(msg: string): any;
  /**
   * Optionally override this in the sensor to finish after processing all results. This
   * method is invoked once after all results have been processed.
   */
  finish(): any;
  /**
   * Fires additional classifiers.
   */
  fireAdditionalClassifier(): any;
  /**
   * Returns the agent name for the probe.
   */
  getAgent(): string;
  /**
   * Returns the Configuration Management Database (CMDB) Configuration Item (CI) of the
   * current device.
   */
  getCmdbCi(): GlideRecord;
  /**
   * Returns the current Configuration Management Database (CMDB) record.
   */
  getCmdbRecord(): GlideRecord;
  /**
   * Returns the current device's CI object.
   */
  getDeviceCi(): any;
  /**
   * Returns the queue ID of the current probe.
   */
  getEccQueueId(): string;
  /**
   * Returns the ECC Queue record for the current probe.
   */
  getEccQueueRecord(): GlideRecord;
  /**
   * Returns a specified parameter from the Discovery probe.
   */
  getParameter(): string;
  /**
   * Returns the name of the current sensor.
   */
  getSensorName(): string;
  /**
   * Returns the probe's Source field value.
   */
  getSource(): string;
  /**
   * Optionally override this method to handle errors.
   * @param error The error message
   */
  handleError(error: string): any;
  /**
   * Initializes the sensor.
   * @param definition The discovery definition
   */
  init(definition: any): any;
  /**
   * Checks to see if debugging mode is on.
   */
  isDebugging(): boolean;
  /**
   * Creates a log entry if the device history is empty.
   */
  logEmptyPayload(): any;
  /**
   * Checks for warnings and logs them.
   * @param result The result from the probe
   */
  logWarningPayload(result: any): any;
  /**
   * Provides main processing sequence for the script. Loops recursively until a sys_id is
   * found, then processes the CI.
   */
  main(): any;
  /**
   * Optionally override this in the sensor to prepare for processing results. This method
   * is invoked once before any results have been processed.
   */
  prepare(): any;
  /**
   * Override this in the sensor to process each result.
   * @param result The result from the probe
   */
  process(result: any): any;
  /**
   * Processes an error by eliminating duplicates, writing the error to the error map, and
   * sending the error to the error handler.
   * @param msg The message to process
   */
  processError(msg: string): any;
  /**
   * Processes a warning message by ignoring duplicate messages and calling
   * handleWarning().
   * @param msg The warning message
   */
  processWarning(msg: string): any;
  /**
   * Reclassifies a device to the specified classification.
   * @param ciClass The new classification
   */
  reclassify(ciClass: string): GlideRecord;
  /**
   * Runs the sensor, including preparation, checking for and logging any warnings and
   * errors, and checking the payload to ensure that a valid sensor is available to process, and
   * calling finish().
   */
  run(): any;
  /**
   * Adds variables to the ci_data variable after running the classification script and
   * storing the variables in ci_data.
   * @param script The classification script
   * @param ciData The CI data
   */
  runClassificationScript(script: string, ciData: any): any;
  /**
   * If there is a device history, saves the processed data from the probe.
   */
  save(): any;
  /**
   * Sets the current sensor data from a Java map.
   * @param javaMap The sensor data
   */
  setCurrentFromJavaMap(javaMap: any): any;
  /**
   * Sets the trigger value from the probe.
   * @param value The probe trigger
   */
  setTriggerProbes(value: string): any;
  /**
   * Updates the sensor data and related lists.
   * @param data The sensor data
   */
  update(data: any): any;
  /**
   * Updates the status count and the device count.
   */
  updateCounts(): any;
  /**
   * Updates the count of completed devices.
   */
  updateDeviceCount(): any;
  /**
   * Updates the status count.
   */
  updateStatusCount(): any;
  /**
   * Override this in the sensor to change the behavior with no results.
   */
  zeroResults(): any;
}
declare class DiscoveryStatus {
  constructor(statusGR: GlideRecord);
  /**
   * Adds a connection to the sensor.
   * @param dtcp The connection to add
   */
  addConnection(dtcp: string): any;
  /**
   * Adds an array of connections to the sensor.
   * @param connections An array of connections
   */
  addConnections(connections: any[]): any;
  /**
   * Adds a single listener.
   * @param dtcp The discovery TCP
   */
  addListener(dtcp: string): any;
  /**
   * Adds an array of listeners.
   * @param listeners An array of discovery TCPs
   */
  addListeners(listeners: any[]): any;
  /**
   * Completes a number of tasks after a connection has been reconciled, including checking
   * for a print server.
   */
  after(): any;
  /**
   * Logs the connections made by the sensor.
   */
  logConnections(): any;
  /**
   * Provide code for this method to parse the output.
   * @param output The output to parse
   */
  parse(output: string): any;
  /**
   * Called by the Prototype JavaScript Framework during object processing. Provide a value
   * for the parameter, but do not call this method directly.
   * @param result The discovery result
   */
  process(result: string): any;
}
declare class DiscoveryTCPConnection {
  /**
   * Brief description of the method.
   */
  getCommand(): string;
  /**
   * Returns the host name of the from host.
   */
  getFromHost(): string;
  /**
   * Returns the port number of the from host.
   */
  getFromPort(): string;
  /**
   * Returns the IP address and port number for the specified port.
   * @param hostPort The host's port
   */
  getHostPort(hostPort: string): string;
  /**
   * Returns the process identifier (PID) of the current application.
   */
  getPID(): string;
  /**
   * Returns the host name of the to host.
   */
  getToHost(): string;
  /**
   * Returns the port number of the to host.
   */
  getToPort(): string;
  /**
   * Determines if the current device is listening.
   */
  isListening(): boolean;
  /**
   * Determines if there is a from host and from port.
   */
  isValid(): boolean;
  /**
   * Determines if there is a valid connection with the from host and port.
   */
  isValidConnection(): boolean;
  /**
   * Sets the connection command for the current process.
   * @param cmd The connection command
   */
  setCommand(cmd: string): any;
  /**
   * Sets up the discovery TCP connection.
   * @param connectStr The connection string
   */
  setConnection(connectStr: string): any;
  /**
   * Sets the host name and port of the from host.
   * @param hostName The name of the host
   * @param portName The name of the port
   */
  setFrom(hostName: string, portName: string): any;
  /**
   * Sets a listener for the current device.
   * @param b
   */
  setListening(b: boolean): any;
  /**
   * Sets the process identifier (PID) for the application.
   * @param pid The application's process identifier.
   */
  setPID(pid: string): any;
  /**
   * Sets the host name and port number of the to host.
   * @param hostName The host name
   * @param portName The port number
   */
  setTo(hostName: string, portName: string): any;
  /**
   * Returns the current connection command and connection string in string
   * format.
   */
  toString(): string;
}
declare class DiscoveryTimeline {
  /**
   * Brief description of the method.
   */
  getItems(): any;
}
declare class DiscoveryUIActionUtils {
  /**
   * Determines if there are newer entries in the device history table.
   */
  hasNewerDeviceHistory(): boolean;
  /**
   * Determines if there are older entries in the device history table.
   */
  hasOlderDeviceHistory(): boolean;
}
declare class DiscoveryVMWareSensor {
  /**
   * Creates a link to the virtual servers.
   * @param images The VMWare images
   * @param vmWare The CI of the VMWare, which can be the ESXi box, or a VMWare application running
   * on top.
   */
  createLinkToVirtualServers(images: any, vmWare: any): any;
  /**
   * Deletes the VM images.
   * @param vmWare The VMWare images to delete.
   * @param imageProcessed The processed image
   */
  deleteVMImagesFromVMWare(vmWare: any, imageProcessed: any): any;
  /**
   * Parses the result returned from the discovery sensor.
   * @param result The result returned by the sensor.
   */
  parseResult(result: any): any;
  /**
   * Parses the VM file.
   * @param file The file
   */
  parseVMFile(file: string): any[];
  /**
   * Returns the VMware host (ESXi box) where the current application is
   * running.
   * @param vms The VM node
   */
  parseVMNodes(vms: any): any[];
  /**
   * Updates the VMware images and links to the virtual servers.
   * @param instance The instance to process
   */
  processInstances(instance: any): any;
  /**
   * Returns the VM version information.
   * @param vmList The result returned by the sensor.
   */
  processVersion(vmList: any): any;
  /**
   * Updates the VMware images.
   * @param instances An array of instances to process.
   * @param vmWare The VMWare images to update.
   */
  updateVMWareImages(instances: any[], vmWare: any): any[];
}
declare class DiscoveryWindowsClusterBaseSensor {
  /**
   * Associates Windows clusters with resources in the result returned by the
   * sensor
   * @param result The result from the sensor
   */
  associateClustersToResources(result: any): any;
  /**
   * Associates Windows clusters with specific nodes in the result returned by the
   * sensor.
   * @param result The result from the sensor
   */
  associateClustertoNodes(result: any): any;
  /**
   * Associates resources with specific nodes in the result returned by the
   * sensor.
   * @param result The result from the sensor
   */
  associateResourcesToNodes(result: any): any;
  /**
   * Changes the CI sys_id for the current device to the specified CI sys_id.
   * @param newCIGR The new CI sys_id for the device.
   */
  changeCI(newCIGR: string): any;
  /**
   * Finds the specified cluster record.
   * @param name The cluster record to find
   */
  findCluster(name: string): GlideRecord;
  /**
   * Finds the Windows clusters in the result returned by the sensor.
   * @param result The result from the sensor
   */
  findClusters(result: any): any;
  /**
   * Finds the Windows cluster nodes in the result returned by the sensor, and creates an
   * object for each with information about the node, including name, status, description, state,
   * caption, and server.
   * @param result The result from the sensor
   */
  findNodes(result: any): any;
  /**
   * Finds the requested cluster; if it does not exist, creates a new cluster record under
   * the specified name.
   * @param name The cluster name to find or, if it does not exist, the name for the new cluster
   * record.
   */
  findOrCreateCluster(name: string): GlideRecord;
  /**
   * Finds the Windows cluster resources and puts them into an array of resource
   * information.
   * @param result The result from the sensor
   */
  findResources(result: any): any;
  /**
   * Returns the value of a specified property.
   * @param name The property
   * @param source The property's source
   */
  getPropValue(name: string, source: string): string;
  /**
   * Converts the specified value to a string.
   * @param value The value to convert
   */
  primStr(value: any): string;
  /**
   * Converts cluster properties to a readable format.
   * @param properties The properties to convert
   */
  propertiesToHumanReadable(properties: string): string;
  /**
   * Queries the Windows Cluster (cmdb_ci_win_cluster) table for the specified
   * cluster.
   * @param name The cluster for which to search.
   */
  queryForCluster(name: string): GlideRecord;
}
declare class DSCScriptableAPI {
  constructor();
  /**
   * Checks a list of comma-separated tables for invalid domains.
   * @param tableNames Comma-separated list of table names.
   */
  chkDataInvalidDomainForTables(tableNames: string): string;
  /**
   * Checks a list of comma-separated tables for invalid domain paths.
   * @param tableNames Comma-separated list of table names.
   */
  chkDataInvalidPathForTables(tableNames: string): string;
}
declare class DurationCalculator {
  constructor();
  /**
   * Calculates an end date and time based on current start date and time and passed in
   * duration (seconds).
   * @param seconds Number of seconds to add to the start date and time to compute the end date and
   * time, seconds, and total seconds values.
   */
  calcDuration(seconds: number): boolean;
  /**
   * Calculates the due date starting at the passed in start time and adding the number of
   * days using the current schedule and time zone.
   * @param start GlideDateTime object that contains the start date for the computation.
   * @param days Number of days to add to the start date.
   * @param endTime Time of day that the work is due on the computed due date.If blank, defaults
   * to the end of the work day.
   * Format: HH:mm:ss
   */
  calcRelativeDueDate(
    start: GlideDateTime,
    days: number,
    endTime: string,
  ): boolean;
  /**
   * Calculates the duration using the specified relative duration script.
   * @param relativeDurationID sys_id of relative duration schedule (table cmn_relative_duration).
   */
  calcRelativeDuration(relativeDurationID: string): boolean;
  /**
   * Returns the duration between the startTime and the
   * endTime within the already-specified schedule and optionally overridden
   * timezone.
   * @param startTime Optional. GlideDateTime object that contains the start time to use. Default:
   * Uses the current date and time (set using setStartDateTime()).
   * You must pass a placeholder if this parameter it not passed, such as
   * dur.calcScheduleDuration("", endDateTime);.
   * @param endTime Optional. GlideDateTime object that contains the end time to use. Default:
   * Uses the current date and time (set using
   * setEndDateTime()).
   */
  calcScheduleDuration(
    startTime?: GlideDateTime,
    endTime?: GlideDateTime,
  ): number;
  /**
   * Returns the duration between the startTime and the
   * endTime within the already-specified schedule and optionally overridden
   * timezone.
   * @param startTime Optional. Display value for the end time. Default: Uses the current date and
   * time (set using setStartDateTime()). You must pass a
   * placeholder if this parameter it not passed, such as
   * dur.calcScheduleDuration("", endDateTime);.
   * @param endTime Optional. Display value for the start time.Default: Uses the current date
   * and time (set using setEndDateTime()).
   */
  calcScheduleDuration(startTime?: string, endTime?: string): number;
  /**
   * Gets the endDateTime property that was set by
   * calcDuration/calcRelativeDuration, indicating the end
   * date and time for the duration.
   */
  getEndDateTime(): GlideDateTime;
  /**
   * Returns the this.seconds property that was set by
   * calcDuration/calcRelativeDuration, indicating the total
   * number of seconds of work to be performed for the duration.
   */
  getSeconds(): number;
  /**
   * Returns the totalSeconds value that was set by a call to
   * calculate(record).
   */
  getTotalSeconds(): number;
  /**
   * Compares the passed in time to the time value in the passed in GlideDateTime
   * object.
   * @param dt Either a GlideDateTime object or a display value date and time to compare to
   * the passed in tm value. If you pass a display value date and
   * time, the method converts it to a GlideDateTime object.
   * @param tm Display value for the time to compare against the time value in the
   * GlideDateTime object. Assumes same date.Format: HH:mm:ss
   */
  isAfter(dt: GlideDateTime, tm: string): boolean;
  /**
   * Sets the schedule and time zone to use for calculating the due date.
   * @param schedId Sys_id of the schedule to set. Located in the Schedule [cmn_schedule]
   * table.
   * @param timezone Optional. Time zone to set.Default: User's time zone.
   */
  setSchedule(schedId: string, timezone?: string): any;
  /**
   * Sets the start date and time for the duration calculations.
   * @param description GlideDateTime object that contains the start time in GMT for subsequent
   * calculations.
   */
  setStartDateTime(description: GlideDateTime): any;
  /**
   * Sets the start date and time for the duration calculations.
   * @param start Display value for the start time in GMT for subsequent calculations.
   */
  setStartDateTime(start: string): any;
  /**
   * Sets the time zone to use for calculating the due date.
   * @param timezone Value of the time zone.
   */
  setTimeZone(timezone: string): any;
}
declare class Encoder {
  constructor(config: any);
  /**
   * Cancels a job for a encoder object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active EncoderVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of an encoder.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of an encoder.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets an encoder by provided version number.
   * @param version Existing version number of an encoder.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of an encoder in the store.
   * @param version Name of the Encoder() object version to activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class EncoderStore {
  /**
   * Adds a new encoder object to the store and returns a unique name.
   * @param mlEncoder Encoder()
   * object to add to the store.
   */
  add(mlEncoder: any): string;
  /**
   * Removes a specified encoder object from the store.
   * @param name Name of the Encoder()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets an encoder object from a store.
   * @param name Name of an encoder in a store.
   */
  get(name: string): any;
  /**
   * Gets the names of all encoder definition records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Updates an encoder object in a store.
   * @param name Name of the encoder to update.
   * @param mlEncoder Encoder()
   * object properties to update.
   */
  update(name: string, mlEncoder: any): any;
}
declare class EncoderVersion {
  /**
   * Gets encoder object properties and version number.
   */
  getProperties(): any;
  /**
   * Returns vectors for each input sentence.
   * @param input Array of strings as sentences from which to receive vectors.
   */
  getSentenceVectors(input: any[]): string;
  /**
   * Returns words similar to each input word in the descending rank order of
   * similarity.
   * @param input Array of words for which to find similar words.
   * @param options Map to refine results. { "topN":"String" }
   */
  getSimilarWords(input: any[], options: any): any[];
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): string;
  /**
   * Returns vectors for each input word.
   * @param input List of strings as words from which to receive vectors.
   */
  getWordVectors(input: any[]): any[];
}
declare class Event {
  constructor();
  /**
   * Returns the current value of the passed in event management field.
   * @param field Name of the event management field value to return.
   */
  getField(field: string): string;
  /**
   * Replaces the existing additional_info field in the associated
   * event with the passed in JSON string.
   * @param additionalInfo JSON String (key/value pairs) to save in the
   * additional_info field.Note: This parameter replaces the
   * existing information. It does not update the existing fields.
   */
  setAdditionalInfo(additionalInfo: string): any;
  /**
   * Sets the specified field in the associated event.
   * @param key Name of the key to add or update in the event. For additional information on
   * the predefined event fields, see Event field format for event
   * collection.
   * @param value Information to store in the associated event field.Note: The
   * value string is trimmed before it is stored, whereby
   * multiple spaces are replaced with a single space.
   */
  setField(key: string, value: string): any;
  /**
   * Sets the description field of the associated event to the passed
   * in value.
   * @param text Text to store in the description field of the associated
   * event.Max length: 4000 characters
   */
  setText(text: string): any;
  /**
   * Sets the time_of_event field in the associated event to the passed
   * in UTC time value.
   * @param timeOfEvent UTC time value to set in the time_of_event
   * field.Format: "yyyy-MM-dd HH:mm:ss"
   * Max length: 40 characters
   */
  setTimeOfEvent(timeOfEvent: string): any;
}
declare class ExpenseAllocation {
  constructor(expense: GlideRecord, rule: GlideRecord);
  /**
   * Creates an expense allocation (fm_expense_allocation) record
   * referencing the parameters provided during instantiation and this method.
   * @param target GlideRecord target of the allocation, for example a cost
   * center record to allocate an expense to Decimal amount - the amount of the
   * allocation.
   * @param amount The amount of the allocation.
   */
  createAllocation(target: GlideRecord, amount: number): boolean;
}
declare class ExpenseLine {
  constructor(source: GlideRecord, amount: number, description?: string);
  /**
   * Creates a new expense line record.
   */
  createExpense(): boolean;
  /**
   * Used internally by the createExpense method to process CI
   * relationships when the expense source is a cmdb_ci record.
   */
  processCIParents(): any;
  /**
   * Identifies the source rate card or distribution cost that was the source of expense
   * line generation.
   * @param costSource GlideRecord of CI rate card cost, distribution cost, or task
   * rate card. This is generally only used for system-generated expense lines.
   */
  setCostSource(costSource: GlideRecord): any;
  /**
   * Defines the description of an expense.
   * @param description Description of expense.
   */
  setDescription(description: string): any;
  /**
   * Sets the parent field on the expense line.
   * @param expense Parent expense line record.
   */
  setParent(expense: GlideRecord): any;
  /**
   * Flags the expense as recurring by setting the recurring field to true.
   * @param recurring Set to true to identify expense line as a recurring expense.
   */
  setRecurring(recurring: boolean): any;
  /**
   * Sets a value for the expense line summary_type field.
   * @param summaryType Typically you would set this to a value already specified in the expense line
   * summary type field choice list.
   */
  setSummaryType(summaryType: string): any;
}
declare class ExtractTermsFromAttachment {}
declare class FormInfoHeader {
  /**
   * Adds an HTML message to the form header, where form info messages are
   * displayed.
   * @param message A message that may include HTML tags.
   */
  addMessage(message: string): any;
}
declare class GenericUPSAlarmsReconciler {
  /**
   * Returns the reconciliation field.
   */
  getReconcilationField(): string;
  /**
   * Returns the reconciliation key.
   */
  getReconcilationKey(): string;
  /**
   * Determines if the generic UPS Bypass information has changed.
   */
  hasChanged(): boolean;
  /**
   * Reads the database fields.
   */
  readDatabaseFields(): any;
  /**
   * Reads the discovered information.
   */
  readDiscovered(): any;
  /**
   * Sets the database fields.
   */
  setDatabaseFields(): any;
}
declare class GenericUPSBypassReconciler {
  /**
   * Returns the reconciliation field.
   */
  getReconcilationField(): string;
  /**
   * Returns the reconciliation key.
   */
  getReconcilationKey(): string;
  /**
   * Determines if the generic UPS Bypass information has changed.
   */
  hasChanged(): boolean;
  /**
   * Reads the database fields.
   */
  readDatabaseFields(): any;
  /**
   * Reads the discovered information.
   */
  readDiscovered(): any;
  /**
   * Sets the database fields.
   */
  setDatabaseFields(): any;
}
declare class GenericUPSInputsReconciler {
  /**
   * Returns the reconciliation field.
   */
  getReconcilationField(): string;
  /**
   * Returns the reconciliation key.
   */
  getReconcilationKey(): string;
  /**
   * Determines if the generic UPS Bypass information has changed.
   */
  hasChanged(): boolean;
  /**
   * Reads the database fields.
   */
  readDatabaseFields(): any;
  /**
   * Reads the discovered information.
   */
  readDiscovered(): any;
  /**
   * Sets the database fields.
   */
  setDatabaseFields(): any;
}
declare class GenericUPSOutputsReconciler {
  /**
   * Returns the reconciliation field.
   */
  getReconcilationField(): string;
  /**
   * Returns the reconciliation key.
   */
  getReconcilationKey(): any;
  /**
   * Determines if the generic UPS bypass information has changed.
   */
  hasChanged(): boolean;
  /**
   * Reads the database fields.
   */
  readDatabaseFields(): any;
  /**
   * Reads the discovered information.
   */
  readDiscovered(): any;
  /**
   * Sets the database fields.
   */
  setDatabaseFields(): any;
}
declare class GlideAggregate {
  /**
   * Adds an aggregate to a database
   * query.
   * @param agg Name of an aggregate to use.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param name Optional. Name of the field to group the results of the aggregation
   * by.Default: Null
   */
  addAggregate(agg: string, name?: string): any;
  /**
   * Adds an encoded query to the other queries that may have been set for this
   * aggregate.
   * @param query Encoded query string to add to the aggregate.
   */
  addEncodedQuery(query: string): any;
  /**
   * Adds a "having" element to the aggregate, such as select category, count(*) from
   * incident group by category HAVING count(*) > 5.
   * @param name Aggregate to filter on. For example, COUNT.
   * @param operator Operator symbol. For example , =, !=.
   * @param value Value to query on. For example, '5'.
   */
  addHaving(name: string, operator: string, value: string): any;
  /**
   * Adds a trend for a field.
   * @param fieldName Name of the field for which trending should occur.
   * @param timeInterval Time interval for the trend. Valid values:
   * date
   *
   * dayofweek
   *
   * hour
   *
   * minute
   *
   * quarter
   *
   * value
   *
   * week
   *
   * year
   *
   *
   *
   * @param numUnits Optional. Only valid when timeInterval =
   * minute. Number of minutes to include in the trend.Default:
   * 1
   */
  addTrend(fieldName: string, timeInterval: string, numUnits?: number): any;
  /**
   * Gets the value of an aggregate from the current record.
   * @param agg Type of the aggregate.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param name Name of the field to get the aggregate from.
   */
  getAggregate(agg: string, name: string): string;
  /**
   * Retrieves the query necessary to return the current aggregate.
   */
  getQuery(): string;
  /**
   * Returns the number of records by summing an aggregate.
   * @param agg Name of an aggregate to use.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param name Name of the field to aggregate.
   */
  getTotal(agg: string, name: string): number;
  /**
   * Returns the value of a field.
   * @param name Name of the field.
   */
  getValue(name: string): string;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: string): any;
  /**
   * Provides the name of a field that should be used to order the aggregates. The field
   * will also be added to the group-by list.
   * @param name Name of the field used to order the aggregates.
   */
  orderBy(name: string): any;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.Valid values:
   * AVG: Average value of the expression.
   *
   * COUNT: Count of the number of non-null values.
   *
   * GROUP_CONCAT: Concatenates all non-null values of the group in ascending
   * order, joins them with a comma (‘,’), and returns the result as a String.
   *
   * GROUP_CONCAT_DISTINCT: Concatenates all non-null values of the group in
   * ascending order, removes duplicates, joins them with a comma (‘,’), and returns
   * the result as a String.
   *
   * MAX: Largest, or maximum, value.
   *
   * MIN: Minimum value.
   *
   * STDDEV: Population standard deviation.
   *
   * SUM: Sum of all values.
   *
   *
   *
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): any;
  /**
   * Issues the query and gets the results.
   */
  query(): any;
  /**
   * Limits the number of rows from the table
   * to include in the aggregate query.
   * @param firstRow Zero-based index of the first row to include in the aggregate query,
   * inclusive.
   * @param lastRow Zero-based index of the last row to include in the aggregate query,
   * exclusive.
   */
  setAggregateWindow(firstRow: number, lastRow: number): any;
  /**
   * Sets whether to group the results.
   * @param b Flag that indicates whether to group the results.Valid values:
   * true: Group the results.
   *
   * false: Do not group the results.
   *
   *
   *
   */
  setGroup(b: boolean): any;
}
declare class GlideappCalculationHelper {
  /**
   * Adds a specific catalog item to an existing request. This API should be used only
   * before a request (REQ) is approved. After the REQ is approved, the RITM process is not
   * initiated.
   * @param requestID Sys_id of the request to which to add the catalog item(s)
   * @param catalogID Sys_id of the catalog item to add to the request
   * @param quantity Number (quantity) of the specified catalog item to be add to the
   * request.
   */
  addItemToExistingRequest(
    requestID: string,
    catalogID: string,
    quantity: string,
  ): any;
  /**
   * Recalculates the price of all of the items in a specified request.
   * @param requestID Sys_id of the request for which to recalculate the price
   */
  rebalanceRequest(requestID: string): any;
}
declare class GlideCertificateEncryption {
  constructor();
  /**
   * Generates the Message Authentication Code (MAC), which is used to authenticate a
   * message.
   * @param key Key to use to sign the message. Must be Base64 encoded.
   * @param algorithm Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so
   * on.
   * @param data Data to process.
   */
  generateMac(key: string, algorithm: string, data: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store
   * Cert.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param algorithm SHA-1, SHA-256, and so on
   */
  getThumbPrint(certificateID: string, algorithm: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the key store
   * entry.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Alias name for the certificate.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  getThumbPrintFromKeystore(
    certificateID: string,
    alias: string,
    algorithm: string,
  ): string;
  /**
   * Signs the data using the private key and the given algorithm.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Private key name.
   * @param aliaspassword Password for the private key.
   * @param datatosign Data to sign.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  sign(
    certificateID: string,
    alias: string,
    aliaspassword: string,
    datatosign: string,
    algorithm: string,
  ): string;
}
declare class GlideConversation {
  description: string;
  document: GlideRecord;
  name: string;
  queueEntry: GlideRecord;
  sys_id: string;
  table: string;
  type: string;
}
declare class GlideDate {
  constructor();
  /**
   * Gets the date in the specified date format.
   * @param format Desired date format using Java SimpleDateFormat. For example,
   * "dd-MM-yyyy" to get the day, month, and year, or
   * "EEEE" to get the day of the week.
   */
  getByFormat(format: string): string;
  /**
   * Gets the day of the month stored by the GlideDate object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthNoTZ(): number;
  /**
   * Gets the date in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the date in the internal format (yyyy-MM-dd) and current user's timezone.
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
   */
  getMonthNoTZ(): number;
  /**
   * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
   */
  getYearNoTZ(): number;
  /**
   * Sets a date value using the current user's display format and time zone.
   * @param asDisplayed Date in the current user's display format and time zone. Format: Must be
   * formatted using the current user's preferred display format, such as yyyy-MM-dd.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the date of the current GlideDate object in internal format (yyyy-MM-dd) and the
   * system time zone (UTC by default)..
   * @param o Date and time to set in the current GlideDate object.Format:
   * yyyy-MM-dd
   */
  setValue(o: string): any;
}
declare class GlideDateTime {
  constructor();
  constructor(gdt: GlideDateTime);
  constructor(dateTime: string);
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param time GlideTime object whose time value to add to the specified GlideDateTime
   * object.
   */
  add(time: GlideTime): any;
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param milliseconds The number of milliseconds to add
   */
  add(milliseconds: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative number to subtract.
   */
  addDays(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): any;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysUTC(days: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative number to subtract.
   */
  addMonths(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): any;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months.
   * @param months The number of months to add. Use a negative number to subtract.
   */
  addMonthsUTC(months: number): any;
  /**
   * Adds a specified number of seconds to the GlideDateTime object.
   * @param seconds The number of seconds to add
   */
  addSeconds(seconds: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeks(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeksLocalTime(weeks: number): any;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks.
   * @param weeks The number of weeks to add. Use a negative number to subtract.
   */
  addWeeksUTC(weeks: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYears(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. To subtract use a negative value.
   */
  addYearsLocalTime(years: number): any;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): any;
  /**
   * Compares two date and time objects to determine whether one occurs before the other or
   * if they are equivalent.
   * @param dateTime Date time in a GlideDateTime object
   */
  compareTo(dateTime: any): number;
  /**
   * Compares an object with an existing value for equality.
   * @param GDT The object to compare. Can be a GlideDateTIme object or a valid date time
   * string.
   */
  equals(GDT: any): boolean;
  /**
   * Returns the date stored by the GlideDateTime object. Expressed in the standard format,
   * yyyy-MM-dd, and in the system time zone, GMT by default.
   */
  getDate(): string;
  /**
   * Gets the current day of the month in the UTC time zone.
   */
  getDayOfMonth(): number;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the current
   * user's time zone.
   */
  getDayOfMonthLocalTime(): number;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthUTC(): number;
  /**
   * Retrieves the day of the week stored by the GlideDateTime object, expressed in the
   * user's time zone.
   */
  getDayOfWeek(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the user's
   * time zone.
   */
  getDayOfWeekLocalTime(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfWeekUTC(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the Java Virtual Machine time zone.
   */
  getDaysInMonth(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the current user's time zone.
   */
  getDaysInMonthLocalTime(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the UTC time zone.
   */
  getDaysInMonthUTC(): number;
  /**
   * Gets the date and time value in the current user's display format and time
   * zone.
   */
  getDisplayValue(): string;
  /**
   * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss). This method is
   * useful for date/time fields, but not for date fields.
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): number;
  /**
   * Gets the current error message.
   */
  getErrorMsg(): string;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): string;
  /**
   * Returns a date and time object set to midnight of a specified day using
   * UTC.
   * @param dayOfTheWeek The day of the week for which to return the date/time object.
   */
  getInternalMidnight(dayOfTheWeek: number): GlideDateTime;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): GlideDate;
  /**
   * Gets the time in the user's time zone.
   */
  getLocalTime(): GlideTime;
  /**
   * Retrieves the month stored by the GlideDateTime object, expressed in Java Virtual
   * Machine time zone.
   */
  getMonth(): number;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getMonthLocalTime(): number;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getMonthUTC(): number;
  /**
   * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): number;
  /**
   * Retrieves the amount of time elapsed since the midnight of a specified day to the
   * current time.
   * @param dayOfWeek Day of week value from 1 to 7. 1 = Monday, 7=Sunday.
   */
  getSpanTime(dayOfWeek: number): GlideTime;
  /**
   * Gets the Unix duration stamp.
   */
  getTime(): GlideTime;
  /**
   * Gets the time zone offset in milliseconds.
   */
  getTZOffset(): number;
  /**
   * Returns the object's time in local time zone in the user's format.
   */
  getUserFormattedLocalTime(): string;
  /**
   * Retrieves the time zone for the current user session.
   */
  getUserTimeZone(): any;
  /**
   * Retrieves a GlideDateTime object with the time set to midnight using the UTC time zone.
   * @param dayOfTheWeek The day of the week, from 1 to 7. Monday=1, Sunday=7. Do not enter 0 in this
   * parameter.
   */
  getUTCMidnight(dayOfTheWeek: number): GlideDateTime;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  getValue(): string;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the
   * current user's time zone.
   */
  getWeekOfYearLocalTime(): number;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC
   * time zone.
   */
  getWeekOfYearUTC(): number;
  /**
   * Retrieves the year stored by the GlideDateTime object, expressed in the Java Virtual
   * Machine time zone.
   */
  getYear(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getYearLocalTime(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getYearUTC(): number;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): boolean;
  /**
   * Determines if the object's time uses a daylight saving offset
   */
  isDST(): boolean;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): boolean;
  /**
   * Sets the day of the month to a specified value.
   * @param day Day of the month, from 1 to 31.
   */
  setDayOfMonth(day: number): any;
  /**
   * Sets the day of the month to a specified value in the current user's time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthLocalTime(day: number): any;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the
   * month.
   */
  setDayOfMonthUTC(day: number): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed The date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format, such
   * as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a
   * workflow script, use
   * &lt;variable&gt;.setDisplayValue(gs.nowDateTime);.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param dateTime The date and time in the current user's time zone.
   * @param format The format to use to parse the dateTime parameter.
   */
  setDisplayValue(dateTime: string, format: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime The date and time in internal format
   */
  setDisplayValueInternal(dateTime: string): any;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param dateTime The date and time in internal format.
   */
  setDisplayValueInternalWithAlternates(dateTime: string): any;
  /**
   * Sets the date and time of the current object using an existing GlideDateTime object.
   * @param gDT A GlideDateTime object
   */
  setGlideDateTime(gDT: GlideDateTime): any;
  /**
   * Sets the date and time.
   * @param dateTime The date and time to use. Accepts either a string in the GMT time zone in the
   * internal format, or a GlideDateTime object.
   */
  setInitialValue(dateTime: string): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the Java
   * Virtual Machine time zone.
   * @param month The month to change to.
   */
  setMonth(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the
   * current user's time zone.
   * @param month The month to change to.
   */
  setMonthLocalTime(month: number): any;
  /**
   * Sets the month stored by the GlideDateTime object to a specified value using the UTC
   * time zone.
   * @param month The month to change to.
   */
  setMonthUTC(month: number): any;
  /**
   * Sets the date and time to the number of milliseconds since January 1, 1970 00:00:00
   * GMT.
   * @param milliseconds Number of milliseconds
   */
  setNumericValue(milliseconds: number): any;
  /**
   * Sets the time zone of the GlideDateTime object to be the specified time
   * zone.
   * @param timeZone A time zone object
   */
  setTZ(timeZone: any): any;
  /**
   * Sets the date and time of the GlideDateTime object.
   * @param dateTime The date and time to use. This parameter may be one of several types.
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss:
   * Sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(value) constructor. If the date and time format
   * used does not match the internal format, the method attempts to set the date and
   * time using other available formats. Resolving the date and time this way can
   * lead to inaccurate data due to ambiguity in the day and month values. When using
   * a non-standard date and time format, use setValueUTC(dateTime,
   * format) instead.
   *
   * A GlideDateTime object: Sets the value of the object to the date and time
   * stored by the GlideDateTime passed in the parameter. Using the method this way
   * is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(g) constructor.
   *
   * A Java Date object: Sets the value of the object using the value stored by the
   * Java Date object. Using the method this way is equivalent to passing the value
   * returned by the Java Date object getTime() to the
   * GlideDateTime setNumericValue() method. This method does not
   * accept JavaScript Date objects.
   *
   * A JavaScript Number: Sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is
   * equivalent to the setNumericValue(milliseconds) method.
   *
   * A Java Integer or Long: Sets the value of the object using the Integer or Long
   * value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method this
   * way is equivalent to the setNumericValue(milliseconds)
   * method.
   *
   *
   */
  setValue(dateTime: any): any;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format.
   * @param dateTime The date and time to use.
   * @param format The format to use.
   */
  setValueUTC(dateTime: string, format: string): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the Java
   * Virtual Machine time zone.
   * @param year The year to change to.
   */
  setYear(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the current
   * user's time zone.
   * @param year The year to change to.
   */
  setYearLocalTime(year: number): any;
  /**
   * Sets the year stored by the GlideDateTime object to a specified value using the UTC
   * time zone.
   * @param year The year to change to.
   */
  setYearUTC(year: number): any;
  /**
   * Returns the duration difference between two specified GlideDateTime
   * objects.
   * @param start Start date object.
   * @param end End date object.
   */
  subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
  /**
   * Returns the duration difference between two specified GlideDateTime
   * objects.
   * @param time The time to subtract
   */
  subtract(time: GlideTime): any;
  /**
   * Returns the duration difference between two specified GlideDateTime
   * objects.
   * @param milliseconds The number of milliseconds to subtract
   */
  subtract(milliseconds: number): any;
  /**
   * Returns the date and time value stored by the GlideDateTime object in the internal
   * format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  toString(): string;
}
declare class GlideElement {
  /**
   * Determines if the user's role permits the creation of new entries in the associated
   * field.
   */
  canCreate(): boolean;
  /**
   * Determines whether the user's role permits them to read the associated
   * GlideRecord.
   */
  canRead(): boolean;
  /**
   * Determines whether the user's role permits them to write to the associated
   * GlideRecord.
   */
  canWrite(): boolean;
  /**
   * Determines if the current field has been modified. This functionality is available for
   * all available data types, except Journal fields.
   */
  changes(): boolean;
  /**
   * Determines if the previous value of the current field matches the specified
   * object.
   * @param value An object value to check against the previous value of the current
   * field.
   */
  changesFrom(value: any): boolean;
  /**
   * Determines if the new value of a field, after a change, matches the specified
   * object.
   * @param value An object value to check against the new value of the current field.
   */
  changesTo(value: any): boolean;
  /**
   * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration
   * field. Does not require the creation of a GlideDateTime object because the duration field is
   * already a GlideDateTime object.
   */
  dateNumericValue(): number;
  /**
   * Debugs the object and adds debug messages using
   * setError(String).
   * @param o An object to debug.
   */
  debug(o: any): any;
  /**
   * Returns the value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getAttribute(attributeName: string): string;
  /**
   * Gets the base table of the field.
   */
  getBaseTableName(): string;
  /**
   * Returns the Boolean value of the specified attribute from the dictionary.
   * @param attributeName Attribute name
   */
  getBooleanAttribute(attributeName: string): boolean;
  /**
   * Generates a choice list for a field. Returns the choice values from the base table
   * only, not from the extended table.
   * @param dependent Optional. Field within the associated record on which the choice list field
   * depends.
   */
  getChoices(dependent?: string): any[];
  /**
   * Gets the choice label for the current choice value.
   */
  getChoiceValue(): string;
  /**
   * Gets the number of debug messages logged by debug().
   */
  getDebugCount(): number;
  /**
   * Returns the field (element) that a specified field is dependent on.
   */
  getDependent(): string;
  /**
   * Gets the table that the current table depends on.
   */
  getDependentTable(): string;
  /**
   * Returns the formatted display value of the field.
   * @param maxChar Optional. Maximum number of characters to return.
   */
  getDisplayValue(maxChar?: number): string;
  /**
   * Returns the formatted display value of a field, or a specified substitute value if the
   * display value is null or empty.
   * @param maxChar Optional. Maximum number of characters to be returned.Default:
   * All
   * @param nullSub Value to return if the display value is null or empty.
   */
  getDisplayValueExt(maxChar: number | undefined, nullSub: string): string;
  /**
   * Returns an element descriptor, which provides information about specific fields, rather
   * than the data inside of those fields.
   */
  getED(): any;
  /**
   * Returns the value for the specified element.
   * @param value Element whose value you want returned.
   */
  getElementValue(value: string): string;
  /**
   * Returns any error message associated with the specified element.
   */
  getError(): string;
  /**
   * Gets the escaped value for the current element.
   */
  getEscapedValue(): string;
  /**
   * Gets the CSS style for the field.
   */
  getFieldStyle(): string;
  /**
   * Gets a glide object.
   */
  getGlideObject(): any;
  /**
   * Gets a glide record.
   */
  getGlideRecord(): GlideRecord;
  /**
   * Returns the HTML value of a field.
   * @param maxChars Optional. Maximum number of characters to return.
   */
  getHTMLValue(maxChars?: number): string;
  /**
   * Returns the HTML value of a field, or a specified substitute value if the HTML value is
   * null or empty.
   * @param maxChar The maximum number of characters to return.
   * @param nullSub The value to return if the HTML value is null or empty.
   */
  getHTMLValueExt(maxChar: number, nullSub: string): string;
  /**
   * Returns either the most recent journal entry or all journal entries.
   * @param mostRecent If 1, returns the most recent entry. If -1, returns all journal
   * entries.
   */
  getJournalEntry(mostRecent: number): string;
  /**
   * Returns the object's label.
   */
  getLabel(): string;
  /**
   * Returns the name of the field.
   */
  getName(): string;
  /**
   * Returns a GlideRecord object for a given reference element.
   */
  getRefRecord(): GlideRecord;
  /**
   * Get the CSS style for the value.
   */
  getStyle(): string;
  /**
   * Returns the name of the field's table.
   */
  getTableName(): string;
  /**
   * Retrieves the display value for the associated field and escapes the HTML.
   */
  getTextAreaDisplayValue(): string;
  /**
   * Returns the value of the field in the database.
   */
  getValue(): string;
  /**
   * Retrieves the XHTML value of a field.
   */
  getXHTMLValue(): string;
  /**
   * Gets the XML value of a field as a string.
   */
  getXMLValue(): string;
  /**
   * Determines whether a field has a particular attribute.
   * @param attributeName The attribute to check for
   */
  hasAttribute(attributeName: string): boolean;
  /**
   * Determines if the user has the right to perform a particular operation.
   * @param operationName Name of the operation to check for
   */
  hasRightsTo(operationName: string): boolean;
  /**
   * Determines if the field has a value.
   */
  hasValue(): boolean;
  /**
   * Determines whether the field is null.
   */
  nil(): boolean;
  /**
   * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT
   * for a duration field. Does not require the creation of a GlideDateTime object because the
   * duration field is already a GlideDateTime object.
   * @param milliseconds Number of milliseconds spanned by the duration.
   */
  setDateNumericValue(milliseconds: number): any;
  /**
   * Sets the display value of the field.
   * @param displayValue Value to be displayed.
   */
  setDisplayValue(displayValue: any): any;
  /**
   * Adds an error message to the associated field (element).
   */
  setError(): any;
  /**
   * Sets the initial value of a field.
   * @param value Initial value for the field.
   */
  setInitialValue(value: any): any;
  /**
   * Adds a journal entry and author as a work note or comment field.
   * @param entry Content of the journal entry.
   * @param userName Optional. The user to attribute the journal entry to. Does not set the journal
   * entry's created by field.
   */
  setJournalEntry(entry: string, userName?: string): any;
  /**
   * Sets the value of a field.
   * @param value The value the field is to be set to.
   */
  setValue(value: any): any;
  /**
   * Converts the field's value to a string.
   */
  toString(): string;
}
declare class GlideEncrypter {
  constructor();
  constructor(key: string);
  /**
   * Decrypts a clear string using the Triple DES algorithm.
   * @param encryptedString String to be decrypted.
   */
  decrypt(encryptedString: string): string;
  /**
   * Encrypts a clear string using the Triple DES algorithm.
   * @param clearString String to be encrypted.
   */
  encrypt(clearString: string): string;
}
declare class GlideHTTPRequest {
  /**
   * Adds a header to your HTTP request.
   * @param name Header name, such as Accept or
   * Content-Type.
   * @param value Header value, such as application/json.
   */
  addHeader(name: string, value: string): any;
  /**
   * Adds a parameter to your HTTP request.
   * @param name Parameter to add, such as sysparm_limit.
   * @param value Value for the parameter.
   */
  addParameter(name: string, value: string): any;
  /**
   * Performs a delete request on a specified endpoint.
   */
  del(): GlideHTTPResponse;
  /**
   * Retrieves a specified record(s) from a resource (REST endpoint).
   */
  get(): GlideHTTPResponse;
  /**
   * Updates the specified resource only with the specified fields.
   * @param content Name-value pairs of the fields to update in the specified GlideHTTPRequest
   * object (record).
   */
  patch(content: any): any;
  /**
   * Posts a record to the specified resource.
   * @param content Name-value pairs of the fields to pass to the specified GlideHTTPRequest
   * object.
   */
  post(content: any): any;
  /**
   * Updates a specified record in a resource.
   * @param content Name-value pairs of the fields to update in the specified GlideHTTPRequest
   * object (record).
   */
  put(content: any): any;
  /**
   * Sets a user name and password for basic authentication.
   * @param userName User name to use for authentication.
   * @param password User's password to use for authentication.
   */
  setBasicAuth(userName: string, password: string): any;
  /**
   * Sets the Content-Type header for your HTTP request to the specified value.
   * @param type Content type to set, such as application/json or
   * multipart/form-data. For additional information on Content-Type,
   * see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type.
   */
  setContentType(type: string): any;
  /**
   * Enables or disables the follow redirect option for a REST endpoint call.
   * @param followRedirect Flag that indicates whether the endpoint should follow any URL redirect
   * returned by the endpoint. Valid values:
   * true: Following any returned redirect.
   *
   * false: Ignore any returned redirect.
   *
   *
   *
   * Default: true
   */
  setFollowRedirect(followRedirect: boolean): any;
  /**
   * Sets the HTTP timeout value in milliseconds.
   * @param timeout Timeout value to set.Unit: Milliseconds
   */
  setHttpTimeout(timeout: number): any;
  /**
   * Sets the log level for an HTTP request.
   * @param logLevel The level of logging available.
   * Note: For performance reasons, in production it is advisable to leave HTTP request
   * logging at basic.
   *
   * Valid values:
   *
   * basic: Covers many of the attributes of the HTTP transaction including host,
   * path, response status, and so on.
   *
   * elevated: Includes all of basic, as well as all request
   * headers, the query string, and all response headers.
   *
   * all: Includes all of elevated, as well as the request
   * body and the response body.
   *
   *
   * Default: basic
   */
  setLogLevel(logLevel: string): any;
  /**
   * Sets the proxy host and port for the associated REST call.
   * @param host Proxy host
   * @param port Proxy port
   */
  setupProxy(host: string, port: string): any;
}
declare class GlideHTTPResponse {
  /**
   * Returns a list of all headers.
   */
  getAllHeaders(): any[];
  /**
   * Returns a string containing the body for the HTTP response.
   */
  getBody(): string;
  /**
   * Returns the list of cookies associated with an endpoint call.
   */
  getCookies(): any[];
  /**
   * Returns the current error code returned by an endpoint.
   */
  getErrorCode(): number;
  /**
   * Returns the last error encountered.
   */
  getErrorMessage(): string;
  /**
   * Returns the header specified in the passed-in parameter.
   * @param name Name of the response header to return, such as
   * Content-Type.
   */
  getHeader(name: string): string;
  /**
   * Returns all headers associated with the endpoint response.
   */
  getHeaders(): any;
  /**
   * Returns the HTTP method associated with the specified endpoint call.
   */
  getHttpMethod(): string;
  /**
   * Returns the last status code for an endpoint call.
   */
  getStatusCode(): number;
  /**
   * Returns a flag that indicates whether there were any errors while processing the
   * endpoint call.
   */
  haveError(): boolean;
}
declare class GlideImpersonate {
  /**
   * Verifies whether the specified user can perform debugging on scripts.
   * @param userSysId sys_Id of the user to verify for debugging capability.
   */
  canDebug(userSysId: string): boolean;
  /**
   * Verifies whether the current user can impersonate the specified user.
   * @param userSysId sys_Id of the user to impersonate
   */
  canImpersonate(userSysId: string): boolean;
  /**
   * Sets the user ID for the current administrator to the passed-in user ID, enabling the
   * administrator to act as that user.
   * @param userSysId Sys_id of the user to impersonate.
   */
  impersonate(userSysId: string): string;
  /**
   * Determines whether the current user is impersonating another user.
   */
  isImpersonating(): boolean;
}
declare class GlideListProperties {
  constructor();
  /**
   * Returns the unique ID for a list.
   */
  getListID(): string;
  /**
   * Returns the name of the list.
   */
  getListName(): string;
  /**
   * Get the title of a list.
   */
  getTitle(): string;
  /**
   * Returns whether or not the Actions on select rows option is
   * enabled for a list.
   */
  hasActions(): boolean;
  /**
   * Returns whether or not a list has navigation at the bottom.
   */
  hasBottomNav(): boolean;
  /**
   * Returns whether or not the page navigation controls appear in the footer of a
   * list.
   */
  hasBottomVCR(): boolean;
  /**
   * Returns whether or not a list has a filter.
   */
  hasFilter(): boolean;
  /**
   * Returns whether or not a list has a header.
   */
  hasHeader(): boolean;
  /**
   * Returns whether or not a header context menu is enabled for a list.
   */
  hasHeaderContextMenu(): boolean;
  /**
   * Returns whether list personalization is enabled for a list.
   */
  hasListMechanic(): boolean;
  /**
   * Returns whether or not a list can have popup windows.
   */
  hasPopup(): boolean;
  /**
   * Returns whether or not rows in a list have a context menu.
   */
  hasRowContextMenu(): boolean;
  /**
   * Returns whether or not the search bar is enabled for a list.
   */
  hasSearch(): boolean;
  /**
   * Returns whether or not the list title appears in the list header.
   */
  hasTitle(): boolean;
  /**
   * Returns whether a context menu appears in a list header.
   */
  hasTitleContextMenu(): boolean;
  /**
   * Returns whether or not the page navigation controls appear in the header of a
   * list.
   */
  hasTopVCR(): boolean;
  /**
   * Returns whether or not the omit filter option has been selected.
   */
  isOmitFilter(): boolean;
  /**
   * Returns whether the Save Filter button is hidden in the condition builder.
   */
  isSaveFilterHidden(): boolean;
  /**
   * Returns whether or not a list shows links.
   */
  isShowLinks(): any;
  /**
   * Returns whether or not toggling the header columns is available for a list.
   */
  isToggleHeader(): boolean;
  /**
   * Determine whether the user can change the view for the list.
   * @param onOff If false users cannot change the list view. By default,
   * changing views is enabled.
   */
  setCanChangeView(onOff: boolean): any;
  /**
   * Determine whether users can group items in a list.
   * @param onOff If false, the group by option does not appear in the
   * column context menu. By default the group by option appears in the list context
   * menu.
   */
  setCanGroup(onOff: boolean): any;
  /**
   * Determine whether the sort option is available in a list.
   * @param onOff If false, the sort option does not appear in column list
   * context menu, and users cannot click the column title to change the order of the
   * list.
   */
  setCanSort(onOff: boolean): any;
  /**
   * Displays or hides all of the available context menus for a list.
   * @param onOff If set to true displays the title context menu, header
   * context menu, and list context menu for a list.
   */
  setContextMenus(onOff: boolean): any;
  /**
   * Determine whether the Actions on select rows options display at
   * the bottom of a list.
   * @param onOff If true displays action options for a list.
   */
  setHasActions(onOff: boolean): any;
  /**
   * Determine whether the navigation actions at the bottom of a list are hidden or not.
   * @param onOff When true adds navigation to the bottom of a
   * list.
   */
  setHasBottomNav(onOff: boolean): any;
  /**
   * Determine whether the first page, last page, next page, and previous page buttons
   * appear at the bottom of the list.
   * @param onOff If true, the first page, last page, next page, and
   * previous page buttons appear at the bottom of the list.
   */
  setHasBottomVCR(onOff: boolean): any;
  /**
   * Determine whether or not breadcrumbs appear at the top of a list.
   * @param onOff If true breadcrumbs appear at the top of a list.
   */
  setHasBreadcrumbs(onOff: boolean): any;
  /**
   * Determine whether or not the filter displays as part of a list.
   * @param onOff If true a filter icon appears at the top of the list.
   * Users can use the filter to narrow search results.
   */
  setHasFilter(onOff: boolean): any;
  /**
   * Determine whether or not a list displays a header.
   * @param onOff If true the list displays a header.
   */
  setHasHeader(onOff: boolean): any;
  /**
   * Determine whether or not the context menu appears next to each column in a
   * list.
   * @param onOff If true the context menu appears next to each column in
   * a list.
   */
  setHasHeaderContextMenu(onOff: boolean): any;
  /**
   * Determine whether or not a list has the option for personalization.
   * @param onOff If true the list mechanic is enabled and the Personalize
   * List icon appears on the page.
   */
  setHasListMechanic(onOff: boolean): any;
  /**
   * Determine whether the list has a popup or modal window.
   * @param onOff If truethe list can have popup windows.
   */
  setHasPopup(onOff: boolean): any;
  /**
   * Determines whether or not list rows have a context menu.
   * @param onOff When true list rows can have a context  menu.
   */
  setHasRowContextMenu(onOff: boolean): any;
  /**
   * Determine whether search appears for a list.
   * @param onOff If true the search bar appears in the list
   * header.
   */
  setHasSearch(onOff: boolean): any;
  /**
   * Determine whether the list title appears in the header.
   * @param onOff If true the title of the list appears in the list
   * header.
   */
  setHasTitle(onOff: boolean): any;
  /**
   * Determine whether or not a list has a context menu in the header.
   * @param onOff If true the context menu appears next to the list title
   * in the header
   */
  setHasTitleContextMenu(onOff: boolean): any;
  /**
   * Determine whether or not a list has the page navigation controls in the list
   * header.
   * @param onOff If true the page navigation controls appear in the
   * header of a list.
   */
  setHasTopVCR(onOff: boolean): any;
  /**
   * Determine whether rows are visible in a list.
   * @param onOff If true all of the rows are hidden for a list.
   */
  setHideRows(onOff: boolean): any;
  /**
   * Set the unique ID for a list.
   * @param Unique_ID The unique ID for the list.
   */
  setListID(Unique_ID: string): any;
  /**
   * Defines a name for the list.
   * @param name Name of the list.
   */
  setListName(name: string): any;
  /**
   * Determine whether the Save Filter button appears in the condition builder.
   * @param onOff If true the Save Filter button is hidden.
   */
  setSaveFilterHidden(onOff: boolean): any;
  /**
   * Whether or not a list includes links.
   * @param onOff If true list includes related links.
   */
  setShowLinks(onOff: boolean): any;
  /**
   * Defines the list title.
   * @param title Title for the list.
   */
  setTitle(title: string): any;
  /**
   * Determine whether users can show or hide column headers for a table.
   * @param onOff If true an icon appears in the header that allows users
   * to show or hide the column headers.
   */
  setToggleHeader(onOff: boolean): any;
  /**
   * Determine whether the first page, last page, next page, and previous page buttons appear
   * at the top and bottom of the list.
   * @param onOff If false, the list does not have any of the page
   * navigation buttons for a list.
   */
  setVCR(onOff: boolean): any;
}
declare class GlideQueryCondition {
  /**
   * Adds an AND condition to the current condition.
   * @param name The name of a field.
   * @param oper (Optional) The operator for the query. If you do not specify an operator, the
   * condition uses an equals operator.
   * @param value The value to query on.
   */
  addCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition;
  /**
   * Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.
   * @param name Field name
   * @param oper (Optional) Query operator. The available values are dependent on the data
   * type of the value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOESNOTCONTAIN
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).Note: All passed in arrays must
   * contain a minimum of two elements. Single element arrays are not
   * supported.
   */
  addOrCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition;
}
declare class GlideRecord {
  constructor(tableName: string);
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): GlideQueryCondition;
  /**
   * Changes the domain used for the query from the user's domain to the domain of the
   * provided GlideRecord.
   * @param glideRecord GlideRecord from which to obtain the domain.
   */
  addDomainQuery(glideRecord: any): any;
  /**
   * Adds an encoded query to other queries that may have been set.
   * @param query An encoded query
   * string.
   */
  addEncodedQuery(query: string): any;
  /**
   * Applies a pre-defined GlideDBFunctionBuilder object to a record.
   * @param _function A GlideDBFunctionBuilder object that defines a SQL operation.
   */
  addFunction(_function: any): any;
  /**
   * Adds a filter to return inactive records. Inactive records have the active flag set to
   * false.
   */
  addInactiveQuery(): GlideQueryCondition;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   */
  addJoinQuery(table: string): GlideQueryCondition;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   * @param primaryField If other than sys_id, the primary field.
   */
  addJoinQuery(table: string, primaryField: string): GlideQueryCondition;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param table Table name
   * @param primaryField If other than sys_id, the primary field.
   * @param joinTableField If other than sys_id, the field that joins the tables
   */
  addJoinQuery(
    table: string,
    primaryField: string,
    joinTableField: string,
  ): GlideQueryCondition;
  /**
   * Adds a filter to return records where the specified field is not null.
   * @param fieldName The field name.
   */
  addNotNullQuery(fieldName: string): GlideQueryCondition;
  /**
   * Adds a filter to return records where the specified field is null.
   * @param fieldName The field name.
   */
  addNullQuery(fieldName: string): GlideQueryCondition;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table that match the request.
   * @param name Table field name
   * @param operator Query operator. The available values are dependent on the data type of the
   * value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * NOT IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOES NOT CONTAIN
   *
   * INSTANCEOF
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, operator: any, value: any): GlideQueryCondition;
  /**
   * Provides atomic add and subtract operations on a specified number field at the database
   * level for the current GlideRecord object.
   * @param field The name of the field in this GlideRecord to modify. If the associated field
   * is not a numeric type, the operation is ignored.
   * @param value The amount to add to the value when the record is saved. To perform a
   * subtraction operation, simply pass a negative value.
   */
  addValue(field: string, value: number): any;
  /**
   * Sets the values of the specified encoded query terms and applies them to the current
   * GlideRecord.
   * @param queryString Encoded query to apply to the current GlideRecord.
   */
  applyEncodedQuery(queryString: string): any;
  /**
   * Apply a template record from the Template table [sys_template] to the current record.
   * If the specified template is not found, no action is taken.
   * @param template Name of a template from the Templates [sys_template] table.
   */
  applyTemplate(template: string): any;
  /**
   * Enables or disables the update to the fields sys_updated_by, sys_updated_on,
   * sys_mod_count, sys_created_by, and sys_created_on. This is often used for manually updating
   * field values on a record while leaving historical information unchanged.
   * @param e If false disables updates to sys_updated_by, sys_updated_on, sys_mod_count,
   * sys_created_by, and sys_created_on.
   */
  autoSysFields(e: boolean): any;
  /**
   * Determines if the access control rules (which includes the user's role) permit
   * inserting new records in this table.
   */
  canCreate(): boolean;
  /**
   * Determines if the access control rules (which includes the user's role) permit deletion
   * of records in this table.
   */
  canDelete(): boolean;
  /**
   * Determines if the access control rules (which includes the user's role) permit reading
   * this table.
   */
  canRead(): boolean;
  /**
   * Determines if the access control rules (which includes the user's role) permit updates
   * to records in this table.
   */
  canWrite(): boolean;
  /**
   * Determines whether any of the fields in the record have changed.
   */
  changes(): boolean;
  /**
   * Deletes multiple records according to the current "where" clause.
   */
  deleteMultiple(): any;
  /**
   * Deletes a single record.
   */
  deleteRecord(): boolean;
  /**
   * Returns true if any record has a matching value in the specified column. If found, it
   * also moves to the first record that matches, essentially executing next()
   * until the record is returned.
   * @param columnName Field name to search.
   * @param value Value to check for in the specified field.
   */
  find(columnName: string, value: string): boolean;
  /**
   * Returns the specified record in the current GlideRecord object.
   * @param name Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is passed
   * in, the method assumes that this parameter is sys_id.
   * @param value Value to match.
   */
  get(name: any | undefined, value: any): boolean;
  /**
   * Returns the dictionary attributes on the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: string): string;
  /**
   * Returns the table's label.
   */
  getClassDisplayValue(): string;
  /**
   * Retrieves the display value for the current record.
   */
  getDisplayValue(): string;
  /**
   * Returns the element's descriptor.
   */
  getED(): GlideElementDescriptor;
  /**
   * Retrieves the GlideElement for a specified field.
   * @param fieldName Column name for which to return the GlideElement object.
   */
  getElement(fieldName: string): GlideElement;
  /**
   * Retrieves the query condition of the current result set as an encoded query string.
   */
  getEncodedQuery(): string;
  /**
   * Retrieves the field value for the display field of the current record and adds escape
   * characters for use in Jelly scripts.
   */
  getEscapedDisplayValue(): string;
  /**
   * Retrieves a Java ArrayList of fields in the current record.
   */
  getFields(): any;
  /**
   * Retrieves the field's label.
   */
  getLabel(): string;
  /**
   * Retrieves the link for the current record.
   * @param noStack Flag that indicates whether to append the generated link to the end of the URL.
   * For example: &amp;sysparm_stack=[tablename]_list.do?
   * sysparm_query=active=true.Valid values:
   * true: Append link.
   *
   * false: Do not append link.
   *
   *
   *
   * Default: false
   */
  getLink(noStack: boolean): string;
  /**
   * Retrieves the row number of the current record within the table.
   */
  getLocation(): number;
  /**
   * Retrieves the plural label of the GlideRecord table.
   */
  getPlural(): string;
  /**
   * Retrieves the class (table) name for the current record.
   */
  getRecordClassName(): string;
  /**
   * Retrieves a list of names and display values of related lists associated with the
   * current GlideRecord.
   */
  getRelatedLists(): any;
  /**
   * Retrieves a list of names and display values of tables that are referred to by the
   * current record.
   */
  getRelatedTables(): any;
  /**
   * Retrieves the number of rows (records) in the current GlideRecord object.
   */
  getRowCount(): number;
  /**
   * Retrieves the row number set by saveLocation() or
   * setLocation().
   */
  getRowNumber(): number;
  /**
   * Retrieves the table name associated with this GlideRecord.
   */
  getTableName(): string;
  /**
   * Gets the primary key of the record, which is usually the sys_id unless otherwise
   * specified.
   */
  getUniqueValue(): string;
  /**
   * Retrieves the string value of a specified field.
   * @param fieldName Name of a field for which to retrieve its value.
   */
  getValue(fieldName: string): string;
  /**
   * Determines if the current GlideRecord has any attachments.
   */
  hasAttachments(): boolean;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): boolean;
  /**
   * Creates an empty record within the current GlideRecord that is suitable for population
   * before an insert.
   */
  initialize(): any;
  /**
   * Inserts a new record with the field values that have been set for the current
   * record.
   */
  insert(): string;
  /**
   * Inserts a new record and also inserts or updates any related records with the provided
   * information.
   */
  insertWithReferences(): string;
  /**
   * Checks a table for the type\class of table.
   * @param className Name of a type or class of record.
   */
  instanceOf(className: string): boolean;
  /**
   * Determines whether the current record has been inserted into the database.
   */
  isNewRecord(): boolean;
  /**
   * Determines if the current GlideRecord table exists.
   */
  isValid(): boolean;
  /**
   * Determines if the specified field is defined in the current GlideRecord
   * table.
   * @param fieldName Name of a field to check.
   */
  isValidField(fieldName: string): boolean;
  /**
   * Determines if the current record is valid.
   */
  isValidRecord(): boolean;
  /**
   * Creates a GlideRecord, sets the default values for the fields, and assigns a unique ID
   * to the record.
   */
  newRecord(): any;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): boolean;
  /**
   * Determines if an operation is insert, update, or
   * delete.
   */
  operation(): string;
  /**
   * Specifies a field name to use to order the query set. To order by multiple fields, call
   * this method multiple times with different field values.
   * @param fieldName Field on which to order the query set.
   */
  orderBy(fieldName: string): any;
  /**
   * Specifies the field to use to order the query set in descending order.
   * @param fieldName Name of field to use to order the query results in descending order.
   */
  orderByDesc(fieldName: string): any;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  query(name?: string, value?: string): any;
  /**
   * Used in domain-separated instances. Similar to query(), runs the
   * query against the table based on the filters specified by addQuery() and
   * addEncodedQuery(), but ignores domains.
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  queryNoDomain(name?: string, value?: string): any;
  /**
   * Sets the current record to be the record that was saved with
   * saveLocation(). If saveLocation() has not been called,
   * the current record is set to the first record of the GlideRecord.
   */
  restoreLocation(): any;
  /**
   * Saves the current row number so you can return to this location using the
   * restoreLocation() method.
   */
  saveLocation(): any;
  /**
   * Sets a flag to indicate if the next database action (insert, update, delete) is to be
   * aborted.
   * @param b True to abort next action, or false to allow the next action.
   */
  setAbortAction(b: boolean): any;
  /**
   * Sets the specified field to the specified display value.
   * @param name Name of the field for which to set the display value.
   * @param value Display value for the specified field.
   */
  setDisplayValue(name: string, value: any): any;
  /**
   * Updates the record even if fields have not changed.
   * @param force True to update even if fields have not changed, otherwise false.
   */
  setForceUpdate(force: boolean): any;
  /**
   * Sets the maximum number of records to return in the GlideRecord from a
   * query.
   * @param limit Limit for records to fetch.
   */
  setLimit(limit: number): any;
  /**
   * Sets the current row location to the specified value.
   * @param rowNumber Row number to set as the current row.
   */
  setLocation(rowNumber: number): any;
  /**
   * Generates a new GUID and sets it as the unique ID (sys_id) for the current record.
   */
  setNewGuid(): string;
  /**
   * Generates a new GUID and sets it as the unique ID for the current record, when
   * inserting a new record.
   * @param guid Value for the new GUID.
   */
  setNewGuidValue(guid: string): any;
  /**
   * Enables or disables using the reference field's display name when querying a reference
   * field.
   * @param queryReferences Flag indicating what time of data to generate.Valid values:
   * true: Generate a string of display names.
   *
   * false: Generate a string of sys_ids.
   *
   *
   *
   */
  setQueryReferences(queryReferences: boolean): any;
  /**
   * Disables or enables the running of any engines (approval rules / assignment
   * rules).
   * @param e Flag that indicates whether to enable or disable the running of any
   * engines.Valid values:
   * true: Enable engines
   *
   * false: Disable engines
   *
   *
   *
   */
  setUseEngines(e: boolean): any;
  /**
   * Sets the specified field to the specified value.
   * @param name Name of the field whose value you want to set.
   * @param value Value to set in the specified field.
   */
  setValue(name: string, value: any): any;
  /**
   * Enables or disables the running of business rules that might normally be triggered by
   * subsequent actions. If the e parameter is set to false, an insert/update
   * will not be audited. Auditing only happens when the parameter is set to true for a GlideRecord
   * operation.
   * @param e Flag that indicates whether to enable or disable the running of business
   * rules.Valid values:
   * true: Enable business rules
   *
   * false: Disable business rules
   *
   *
   *
   */
  setWorkflow(e: boolean): any;
  /**
   * Updates the GlideRecord with any changes that have been made. If the record does not
   * exist, it is inserted.
   * @param reason Optional. Reason for the update. The reason appears in the audit record.
   */
  update(reason?: any): string;
  /**
   * Updates each GlideRecord in a stated query with a specified
   * set of changes.
   */
  updateMultiple(): any;
  /**
   * Updates a record and also inserts or updates any related records with the information
   * provided.
   * @param reason Reason for the updates. The reason is displayed in the audit record.
   */
  updateWithReferences(reason: any): string;
  /**
   * Moves to the next record in the GlideRecord. Provides the same functionality as
   * next(), intended to be used in cases where the GlideRecord has a column
   * named next.
   */
  _next(): boolean;
  /**
   * Runs a query against the table based on the filters specified
   * by query methods such as addQuery() and
   * addEncodedQuery().
   * This method is intended to be used on tables in which
   * there is a column named "query", which might cause errors running the query()
   * method.
   * @param name Optional - must also specify value parameter. Name of the field to search for
   * the value specified in the value parameter.
   * Note: This method is typically run without arguments, but you can specify a
   * name-value pair to filter records containing the specified values. If the
   * parameters are specified, the "name=value" condition is added to the
   * query.
   *
   * @param value Optional - must also specify field parameter. Value to search for in the
   * specified field parameter.
   */
  _query(name?: string, value?: string): any;
}
declare class GlideRecordUtil {
  /**
   * Returns the GlideRecord object for the specified configuration item (CI) using just the
   * sys_id of the CI.
   * @param sys_id Sys_id of the desired CI.
   */
  getCIGR(sys_id: string): GlideRecord;
  /**
   * Returns an array of all the fields in the specified GlideRecord.
   * @param gr GlideRecord instance positioned to a valid record.
   */
  getFields(gr: GlideRecord): any[];
  /**
   * Returns a GlideRecord instance for the given table, positioned to the given sys_id, and
   * of the right class (table).
   * @param baseTable The name of the base table containing the sys_id.
   * @param sys_id The sys_id of the desired record.
   */
  getGR(baseTable: string, sys_id: string): GlideRecord;
  /**
   * Returns a Java ArrayList of the ancestors of the specified table name.
   * @param tableName Name of the table.
   */
  getTables(tableName: string): any;
  /**
   * Sets the fields in the specified GlideRecord with the field values contained in the
   * specified hashmap, unless that field name is in the ignore hashmap.
   * @param hashMap An Object instance (being used as a hashmap), with properties named for fields
   * and containing the fields' value.
   * @param GlideRecord The GlideRecord instance to receive the field values.
   * @param ignore An optional hashmap of field names to ignore.
   */
  mergeToGR(hashMap: any, GlideRecord: any, ignore?: any): any;
  /**
   * Populates the given hashmap from the given GlideRecord instance. Each field in the
   * GlideRecord becomes a property in the hashmap.
   * @param hashMap An object being used as a hashmap.
   * @param now_GR A GlideRecord instance positioned to a valid record.
   * @param ignore An optional hashmap of file names not to populate.
   */
  populateFromGR(hashMap: any, now_GR: GlideRecord, ignore?: any): any;
}
declare class GlideScopedEvaluator {
  constructor();
  /**
   * Evaluates a script from a GlideRecord field.
   * @param grObj The GlideRecord containing a script expression.
   * @param scriptField (Optional) The name of the field containing the script expression.
   * @param variables (Optional) A map of variables with name-value pairs. These variables are
   * available to the script during execution of this method.
   */
  evaluateScript(
    grObj: GlideRecord,
    scriptField?: string,
    variables?: any,
  ): any;
  /**
   * Returns a variable from a GlideScopedEvaluator object.
   * @param name The name of the variable.
   */
  getVariable(name: string): any;
  /**
   * Puts a variable into the GlideScopedEvaluator object. These variables are available to
   * the script that this GlideScopedEvaluator object runs.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  putVariable(name: string, value: any): any;
}
declare class GlideSession {
  /**
   * Clears a session client value previously set with putClientData().
   * @param paramName Name of the client data to clear.
   */
  clearClientData(paramName: string): any;
  /**
   * Returns a session client value previously set with putClientData().
   * @param paramName Name of the client data to retrieve.
   */
  getClientData(paramName: string): string;
  /**
   * Gets the session's language code.
   */
  getLanguage(): string;
  /**
   * Gets a list of roles for the current user.
   */
  getRoles(): string;
  /**
   * Gets the name of the session's time zone.
   */
  getTimeZoneName(): string;
  /**
   * Determines if the current session is interactive.
   */
  isInteractive(): boolean;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): boolean;
  /**
   * Sets a session client value that can be retrieved with
   * getClientData(). This method is used in a server side script that runs when
   * a form is created.
   * @param paramName Name of the client parameter to set.
   * @param paramValue Parameter value.
   */
  putClientData(paramName: string, paramValue: string): any;
}
declare class GlideSPSearchAnalytics {
  /**
   * Sends search data to the Search Event [sys_search_event], Search Event per source
   * [sys_search_source_event], and Search Signal Event [sys_search_signal_event] tables for search
   * results, or to the Search Result Clicked [sys_search_result_clicked] and Search Signal Result
   * Event [sys_search_signal_result_event] tables when a user clicks a search result.
   * @param payload JSON payload in String format containing the search data to send to the Search
   * Event [sys_search_event], Search Event per source [sys_search_source_event], and
   * Search Signal Event [sys_search_signal_event] tables for search results, or to the
   * Search Result Clicked [sys_search_result_clicked] and Search Signal Result Event
   * [sys_search_signal_result_event] tables when a user clicks a search result.
   * Structure the payload as key-value pairs according to the type of search data you
   * would like to collect.
   * Collect data when the user searches for a term:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   * ais_profile: String. Sys_id of the search profile applied
   * to the search. Only applicable for searches made with the AI Search engine.
   *
   * search_results: Array. Results returned in the first page
   * of search results.
   * record_id: String. Sys_id of the search result
   * record.
   *
   * table_name: String. Name of the table in which the
   * search result record was found.
   *
   *
   *
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   *
   *
   *
   * Collect data when a user refines their search results:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   *
   *
   *
   * Collect the rank of the search result that the user selected.
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   *
   *
   *
   * Collect information on the search result that the user clicks. Data logs to
   * the Search Result Clicked [sys_search_result_clicked] table.
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   * refinement_occurred: Boolean. True if the
   * user filtered the search results; otherwise false.
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   * browser_info: String. Logs browser name, version, and
   * platform.
   *
   * location: Float. Logs latitude and longitude coordinates
   * of the user location.
   *
   * result_clicked_sys_id: String. Sys_id of the result the
   * user selected.
   *
   * label_description: String. Description of the result that
   * the user selected.
   *
   * source_table: String. Name of the source table containing
   * the selected result.
   *
   * ais_doc_id: String. Underscore-separated name of the
   * source table and sys_id of the result record for each result the user
   * selected. For example, if the user clicked a result from the Knowledge
   * [kb_knowledge] table, the value is of the form
   * kb_knowledge_3020c9b14843210e9db4b5b08b9a712d. Only
   * applicable for searches made with the AI Search engine.
   *
   *
   *
   *
   * Collect data when a user searches for a term and collect the rank of the
   * search result that the user clicked:
   * query: String. The query being
   * searched.
   *
   * portal_id: String. Sys_id of the portal
   * record from the Service Portals [sp_portal] table.
   *
   * page_id: String. Sys_id of the page record from
   * the Pages [sp_page] table.
   *
   * results_per_source: Array. Number of results returned
   * from each search source.
   * source_id: String. Sys_id of the search source record
   * from the Search Sources [sp_search_source] table.
   *
   * number_of_results: Number. Number of results returned
   * from the query for the specific search source.
   *
   *
   *
   *
   * ais_profile: String. Sys_id of the search profile applied
   * to the search. Only applicable for searches made with the AI Search engine.
   *
   * search_results: Array. Summary of records returned in the
   * first page of search results.
   * record_id: String. Sys_id of the search result
   * record.
   *
   * table_name: String. Name of the table in which the
   * search result record was found.
   *
   *
   *
   *
   * click_rank: Number. Rank of the item the
   * user selected. For example, if the user clicked the third item in a list of search
   * results, the value is 3.
   *
   * ais_doc_id: String. Underscore-separated name of the
   * source table and sys_id of the result record for each result the user
   * selected. For example, if the user clicked a result from the Knowledge
   * [kb_knowledge] table, the value is of the form
   * kb_knowledge_3020c9b14843210e9db4b5b08b9a712d. Only
   * applicable for searches made with the AI Search engine.
   *
   *
   *
   *
   *
   */
  publish(payload: string): any;
}
declare class GlideSysAttachment {
  constructor();
  /**
   * Copies attachments from the source record to the target record.
   * @param sourceTable Name of the table with the attachments to be copied.
   * @param sourceID Source table's sys_id.
   * @param targetTable Name of the table on which to add the attachments.
   * @param targetID Target table's sys_id.
   */
  copy(
    sourceTable: string,
    sourceID: string,
    targetTable: string,
    targetID: string,
  ): string;
  /**
   * Deletes the specified attachment.
   * @param attachmentID Attachment's sys_id.
   */
  deleteAttachment(attachmentID: string): any;
  /**
   * Returns a GlideRecord containing the matching attachment metadata such as name, type,
   * or size.
   * @param tableName Name of the table to which the attachment belongs; for example, incident.
   * @param sys_id The sys_id of record to which the attachment belongs.
   */
  getAttachments(tableName: string, sys_id: string): GlideRecord;
  /**
   * Returns a GlideScriptableInputStream object given the sys_id of an
   * attachment.
   * @param sysID Attachment sys_id.
   */
  getContentStream(sysID: string): GlideScriptableInputStream;
  /**
   * Attaches a specified attachment to the specified record.
   * @param record Record to which to attach the attachment.
   * @param fileName Attachment file name.
   * @param contentType Attachment content type.
   * @param content Attachment content.
   */
  write(
    record: GlideRecord,
    fileName: string,
    contentType: string,
    content: string,
  ): string;
  /**
   * Inserts an attachment using the input stream.
   * @param now_GR Record to which the attachment is to be attached.
   * @param fileName Attachment's file name.
   * @param contentType Attachment's content type.
   * @param content Attachment content.
   */
  writeContentStream(
    now_GR: GlideRecord,
    fileName: string,
    contentType: string,
    content: GlideScriptableInputStream,
  ): string;
}
declare class GlideSystem {
  /**
   * Adds an error message for the current session.
   * @param message The message to add.
   */
  addErrorMessage(message: any): any;
  /**
   * Adds an info message for the current session.
   * @param message The message to add.
   */
  addInfoMessage(message: any): any;
  /**
   * Adds a message for the current session.
   * @param type Type of message, such as error or
   * info.
   * @param message Message to add to the current session.
   */
  addMessage(type: string, message: any): any;
  /**
   * Gets the date and time for the beginning of last month in GMT.
   */
  beginningOfLastMonth(): string;
  /**
   * Returns the date and time for the beginning of last week in GMT.
   */
  beginningOfLastWeek(): string;
  /**
   * Returns the date and time for the beginning of next month in GMT.
   */
  beginningOfNextMonth(): string;
  /**
   * Returns the date and time for the beginning of next week in GMT.
   */
  beginningOfNextWeek(): string;
  /**
   * Returns the date and time for the beginning of next year in GMT.
   */
  beginningOfNextYear(): string;
  /**
   * Returns the date and time for the beginning of the current month in GMT.
   */
  beginningOfThisMonth(): string;
  /**
   * Returns the date and time for the beginning of the current quarter in GMT.
   */
  beginningOfThisQuarter(): string;
  /**
   * Returns the date and time for the beginning of this week in GMT.
   */
  beginningOfThisWeek(): string;
  /**
   * Returns the date and time for the beginning of this year in GMT.
   */
  beginningOfThisYear(): string;
  /**
   * Retrieves the date and time for the beginning of today in GMT.
   */
  beginningOfToday(): string;
  /**
   * Retrieves the (UTC) beginning of tomorrow adjusted for the timezone of the current
   * session.
   */
  beginningOfTomorrow(): string;
  /**
   * Retrieves the date and time for the beginning of yesterday in GMT.
   */
  beginningOfYesterday(): string;
  /**
   * Calculate the difference between two dates using the default calendar.
   * @param startDate Starting date to compare in the current user's date format.
   * @param endDate Ending date to compare in the current user's date format.
   * @param numericValue Flag that indicates ther format of the returned time value.Valid values:
   *
   * true: Return value is formatted in number of seconds
   *
   * false: Return value is formatted ddd hh:mm:ss.
   *
   *
   */
  calDateDiff(
    startDate: string,
    endDate: string,
    numericValue: boolean,
  ): string;
  /**
   * Calculates the difference between two dates.
   * @param startDate The starting date to compare in the current user's date format.
   * @param endDate The ending date to compare in the current user's date format.
   * @param numericValue If true, the return value will be formatted in number of seconds; if false the
   * return value will be formatted ddd hh:mm:ss.
   */
  dateDiff(startDate: string, endDate: string, numericValue: boolean): string;
  /**
   * Generates a date and time for the specified date in GMT.
   * @param date Date to generate in GMT.Format: yyyy-mm-dd
   * @param range Start, end, or a time. Format: 24-hour hh:mm:ss
   */
  dateGenerate(date: string, range: string): string;
  /**
   * Returns a date and time for a certain number of days ago.
   * @param days Number of days
   */
  daysAgo(days: number): string;
  /**
   * Returns a date and time for the end of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoEnd(days: number): string;
  /**
   * Returns the date and time of the beginning of the day for the specified number of days
   * ago. The returned date and time reflect the time zone of the current session (local
   * time).
   * @param days Number of days ago
   */
  daysAgoLocal(days: number): string;
  /**
   * Returns a date and time for the beginning of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoStart(days: string): string;
  /**
   * Returns the date and time for the end of last month in GMT.
   */
  endOfLastMonth(): string;
  /**
   * Returns the date and time for the end of last week in GMT.
   */
  endOfLastWeek(): string;
  /**
   * Returns the date and time for the end of last year in GMT.
   */
  endOfLastYear(): string;
  /**
   * Returns the date and time for the end of next month in GMT.
   */
  endOfNextMonth(): string;
  /**
   * Returns the date and time for the end of next week in GMT.
   */
  endOfNextWeek(): string;
  /**
   * Returns the date and time for the end of next year in GMT.
   */
  endOfNextYear(): string;
  /**
   * Returns the date and time for the end of this month in GMT.
   */
  endOfThisMonth(): string;
  /**
   * Returns the date and time for the end of this quarter in GMT.
   */
  endOfThisQuarter(): string;
  /**
   * Returns the date and time for the end of this week in GMT.
   */
  endOfThisWeek(): string;
  /**
   * Returns the date and time for the end of this year in GMT.
   */
  endOfThisYear(): string;
  /**
   * Retrieves the date and time for the end of today in GMT.
   */
  endOfToday(): string;
  /**
   * Retrieves the date and time for the end of tomorrow in GMT.
   */
  endOfTomorrow(): string;
  /**
   * Gets the date and time for the end of yesterday in GMT.
   */
  endOfYesterday(): string;
  /**
   * Queues an event for the event manager.
   * @param name Name of the event being queued.
   * @param glideRecord GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param queue Name of the queue.
   */
  eventQueue(
    name: string,
    glideRecord: any,
    parm1: string | undefined,
    parm2: string | undefined,
    queue: string,
  ): any;
  /**
   * Queues an event for the event manager at a specified date and time.
   * @param name Name of the event being queued.
   * @param glideRecord GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param expiration Date and time to process this event.
   */
  eventQueueScheduled(
    name: string,
    glideRecord: any,
    parm1: string | undefined,
    parm2: string | undefined,
    expiration: any,
  ): any;
  /**
   * Clears session messages saved using addErrorMessage() or
   * addInfoMessage().
   */
  flushMessages(): any;
  /**
   * Returns the file path to the user's avatar.
   */
  getAvatar(): string;
  /**
   * Returns the name of the current application scope.
   */
  getCurrentScopeName(): string;
  /**
   * Retrieves the display column for the table.
   * @param tableName Name of the table from which to get the display column name.
   */
  getDisplayColumn(tableName: string): string;
  /**
   * Returns the display value for a specified field on a specified record.
   * @param tableName Name of the table.
   * @param recordID Sys_id for the record.
   * @param fieldName Name of the field whose display value to return.
   */
  getDisplayValueFor(
    tableName: string,
    recordID: string,
    fieldName: string,
  ): string;
  /**
   * Returns the list of error messages for the session that were added by
   * addErrorMessage().
   */
  getErrorMessages(): string;
  /**
   * Retrieves the property and escapes it for XML parsing.
   * @param key Key for the property whose value should be returned.
   * @param substituteObject Optional. Object to return if the property is not found.
   */
  getEscapedProperty(key: string, substituteObject?: any): string;
  /**
   * Returns the display name of the impersonating user.
   */
  getImpersonatingUserDisplayName(): string;
  /**
   * Returns the name of the impersonating user or null if not impersonating.
   */
  getImpersonatingUserName(): string;
  /**
   * Retrieves the list of info messages for the session that were added by
   * addInfoMessage().
   */
  getInfoMessages(): string;
  /**
   * Returns the user's initials.
   */
  getInitials(): string;
  /**
   * Retrieves translated messages from the Message [sys_ui_message] table to display in a
   * UI.
   * @param messageID Message identifier. You can locate
   * this value in the Key field of the Message [sys_ui_message] table. Note the Key
   * field may look exactly like the actual message string.
   * @param args Optional. List of strings or other values defined by
   * java.text.MessageFormat that replace the variables within the specified message.
   * For example: gs.getMessage("Abort adding action '{0}', same subflow
   * can't be added twice in this subflow.", current.action.name);
   * In
   * this example '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getMessage(messageID: string, args?: any): string;
  /**
   * Retrieves translated messages to display in the UI and escapes all ticks (').
   * @param MessageID Message identifier. You can locate
   * this value in the Key field of the Message [sys_ui_message] table. Note the Key
   * field may look exactly like the actual message string.
   * @param args Optional. List of strings or other values defined by
   * java.text.MessageFormat that replace the variables within the specified message.
   * For example: gs.getMessage("Abort adding action '{0}', same subflow
   * can't be added twice in this subflow.", current.action.name);
   * In
   * this example '{0}' is replaced with the content of
   * current.action.name.
   * Note: The passed in values are not
   * translated. They are inserted verbatim in the message.
   */
  getMessageS(MessageID: string, args?: any): string;
  /**
   * Returns the node name for the specified index.
   * @param obj Object to examine.
   * @param index Index from which to obtain the node name.
   */
  getNodeName(obj: any, index: number): string;
  /**
   * Returns the node value for the specified index.
   * @param obj Object to examine.
   * @param index Index from which to get the node valu.e
   */
  getNodeValue(obj: any, index: number): any;
  /**
   * Returns the specified user preference.
   * @param key Key for the preference.
   * @param _default Default value to use if the specified preference is not found.
   */
  getPreference(key: string, _default: any): string;
  /**
   * Returns the value of a Glide property. If the property is not found, returns the
   * specified alt value.
   * @param key Key for the property whose value should be returned.
   * @param alt Optional. Alternate object to return if the property is not found.
   */
  getProperty(key: string, alt?: any): string;
  /**
   * Returns the script error found in the specified script, if there is one.
   * @param script Script to check for errors.
   */
  getScriptError(script: string): string;
  /**
   * Returns a GlideSession object.
   */
  getSession(): GlideSession;
  /**
   * Returns the GlideSession session ID.
   */
  getSessionID(): string;
  /**
   * Returns the style defined for the table, field, and field value.
   * @param tableName Table name
   * @param fieldName Field name
   * @param fieldValue Field value
   */
  getStyle(tableName: string, fieldName: string, fieldValue: string): string;
  /**
   * Returns a reference to the user object for the current user.
   */
  getUser(): GlideUser;
  /**
   * Returns the name field of the current user. For example, the API returns John Smith
   * instead of jsmith.
   */
  getUserDisplayName(): string;
  /**
   * Returns the sys_id of the current user.
   */
  getUserID(): string;
  /**
   * Returns the name of the current user, such as jsmith.
   */
  getUserName(): string;
  /**
   * Returns the user display name based on a provided user login name.
   * @param user_id Login name of the user from which to retrieve the associated display
   * name.
   */
  getUserNameByUserID(user_id: string): string;
  /**
   * Constructs an array of all the nodes and values in an XML document.
   * @param xml XML document to parse.
   */
  getXMLNodeList(xml: string): any[];
  /**
   * Returns the XML text for the first element in the XML string that matches the XPath
   * query.
   * @param xml XML string to search.
   * @param xpathQuery XPath query to match.
   */
  getXMLText(xml: string, xpathQuery: string): string;
  /**
   * Determines if the current user has at least one of the passed-in roles.
   * @param roleName Comma-separated list of roles.
   */
  hasRole(roleName: string): boolean;
  /**
   * Determines if the current user has the specified role within a specified
   * group.
   * @param roleName Name of the role.
   * @param group Sys_id of the group to check for the specified role.
   */
  hasRoleInGroup(roleName: any, group: any): boolean;
  /**
   * Returns a date and time for the specified number of hours ago. The returned value is
   * adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgo(hours: number): string;
  /**
   * Returns a date and time for the end of the hour for the specified number of hours ago.
   * The returned value is adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgoEnd(hours: number): string;
  /**
   * Returns a date and time for the start of the hour for the specified number of hours
   * ago. The returned value is adjusted for the time zone of the instance.
   * @param hours Number of hours ago.
   */
  hoursAgoStart(hours: number): string;
  /**
   * Checks whether the date in the specified date object is the first day of the
   * month.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfMonth(date: any): boolean;
  /**
   * Checks whether the date in the specified date object is the first day of the week. This
   * method uses the ISO standard of Monday being the first day of the week.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfWeek(date: any): boolean;
  /**
   * Checks whether the date in the specified date object is the first day of the
   * year.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isFirstDayOfYear(date: any): boolean;
  /**
   * Checks if the current session is interactive.
   */
  isInteractive(): boolean;
  /**
   * Checks whether the date in the specified date object is the last day of the
   * month.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayofMonth(date: any): boolean;
  /**
   * Checks whether the date in the specified date object is the last day of the week. This
   * method uses the ISO standard of Sunday being the last day of the week.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayOfWeek(date: any): boolean;
  /**
   * Checks whether the date in the specified date object is the last day of the
   * year.
   * @param date Date object on which to check the date, such as GlideDateTime or
   * GlideDate.
   */
  isLastDayOfYear(date: any): boolean;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): boolean;
  /**
   * Determines whether the request came from a mobile device.
   */
  isMobile(): boolean;
  /**
   * Returns the date and time one week ago in GMT.
   */
  lastWeek(): string;
  /**
   * Logs a message to the system log and saves it to the syslog table.
   * @param message Message to log.
   * @param source Optional. Source of the message.
   */
  log(message: string, source?: string): any;
  /**
   * Logs an error to the system log and saves it to the syslog table.
   * @param message Error message to log.
   * @param source Optional. Source of the message.
   */
  logError(message: string, source?: string): any;
  /**
   * Logs a warning to the system log and saves it to the syslog table.
   * @param message Message to log.
   * @param source Optional. Source of the message.
   */
  logWarning(message: string, source?: string): any;
  /**
   * Returns a date and time for the specified number of minutes ago.
   * @param minutes Number of minutes in the past to return.
   */
  minutesAgo(minutes: number): string;
  /**
   * Returns a date and time for the end of the minute a certain number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 5 or 11.
   */
  minutesAgoEnd(minutes: number): string;
  /**
   * Returns a date and time for the start of the minute a certain number of minutes
   * ago.
   * @param minutes Integer number of minutes ago, such as 15 or 112.
   */
  minutesAgoStart(minutes: number): string;
  /**
   * Returns a date and time for a certain number of months ago.
   * @param months Integer number of months ago.
   */
  monthsAgo(months: number): string;
  /**
   * Returns a date and time for the last day of the month a certain number of months
   * ago.
   * @param months Integer number of months, such as 4 or 16.
   */
  monthsAgoEnd(months: number): string;
  /**
   * Returns a date and time for the start of the month a certain number of months
   * ago.
   * @param months Integer number of months ago, such as 5 or 14.
   */
  monthsAgoStart(months: number): string;
  /**
   * Queries an object and returns true if the object is null or contains an empty
   * string.
   * @param obj The object to be checked.
   */
  nil(obj: any): boolean;
  /**
   * Returns the current date in UTC.
   */
  now(): string;
  /**
   * Returns the current date and time in the user-defined format.
   */
  nowDateTime(): string;
  /**
   * Gets a GlideDateTime object with the current date and time.
   */
  nowGlideDateTime(): any;
  /**
   * Returns the current date and time in UTC format.
   */
  nowNoTZ(): string;
  /**
   * Writes a message to the system log.
   * @param message The message to log
   */
  print(message: string): any;
  /**
   * Returns a date and time for a certain number of quarters ago.
   * @param quarters Integer number of the quarters ago.
   */
  quartersAgo(quarters: number): string;
  /**
   * Returns a date and time for the last day of the quarter, for a specified number of
   * quarters ago.
   * @param quarters An integer number of quarters
   */
  quartersAgoEnd(quarters: number): string;
  /**
   * Returns a date and time for the first day of the quarter, for a specified number of
   * quarters ago.
   * @param quarters An integer number of quarters
   */
  quartersAgoStart(quarters: number): string;
  /**
   * Sets the specified key to the specified value.
   * @param key The key for the property to be set.
   * @param value The value of the property to be set.
   * @param description A description of the property.
   */
  setProperty(key: string, value: string, description: string): any;
  /**
   * Sets the redirect URI for this transaction, which then determines the next page the
   * user will see.
   * @param URI URI to set as the redirect
   */
  setRedirect(URI: any): any;
  /**
   * Sets the return URI for this transaction. This determines what page the user will be
   * directed to when they return from the next form.
   * @param URI URI to set as the return location.
   */
  setReturn(URI: any): any;
  /**
   * Determines if a database table exists in the ServiceNow
   * instance.
   * @param tableName Name of the table to check.
   */
  tableExists(tableName: string): boolean;
  /**
   * Returns the sys_id of the user associated with this session. Use
   * getUserID() instead.
   */
  userID(): string;
  /**
   * Deletes any open scheduled job records in the Schedule (sys_trigger) table for the
   * specified GlideRecord.
   * @param glideRecord The GlideRecord
   */
  workflowFlush(glideRecord: any): any;
  /**
   * Gets a date and time for a certain number of years ago.
   * @param years An integer number of years
   */
  yearsAgo(years: number): string;
  /**
   * Returns yesterday's time (24 hours ago).
   */
  yesterday(): string;
}
declare class GlideSystemRunLevel {
  /**
   * Retrieves the current system run level.
   */
  getCurrentLevel(): string;
  /**
   * Switches the system run level.
   * @param newLevel The ID value of the new system run level. This value is from the
   * ID field in the System Run Level [sys_run_level]
   * table.
   */
  switchLevel(newLevel: string): string;
}
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
   * @param tableName Name of the table associated with current object
   * @param sys_id Sys_id for the object.
   */
  createTimelineSpan(tableName: string, sys_id: string): any;
  /**
   * Returns a string specifying the name of the image file associated with the current
   * GlideTimelineItem.
   */
  getImage(): string;
  /**
   * Indicates whether or not the current instance object should be allowed as a "drop zone" when moving timeline elements vertically.
   */
  getIsDroppable(): boolean;
  /**
   * Returns the text to be displayed in the left pane (if enabled).
   */
  getLeftLabelText(): string;
  /**
   * Returns the unique sysId of the current
   * GlideTimelineItem's parent object.
   */
  getParent(): string;
  /**
   * Returns all the TimelineSpan objects associated with the current
   * instance in an ArrayList.
   */
  getTimelineSpans(): any;
  /**
   * Indicates if the left pane text is set to display using a bold style.
   */
  isTextBold(): boolean;
  /**
   * Sets the name of the image file (including it's path) to use as the icon for the item in the left pane.
   * @param strImageName Name of the image, including its path.
   */
  setImage(strImageName: string): any;
  /**
   * Sets whether or not the current instance object can be clicked and dragged into another
   * GlideTimelineItem.
   * @param b Flag that indicates whether the item can be moved using click and drag.
   * Valid values:
   * true: Item can be moved using click and drag.
   *
   * false: Item cannot be moved using click and drag.
   *
   *
   *
   */
  setIsDraggable(b: boolean): any;
  /**
   * Specifies the text to display in the left pane for this item.
   * @param strText Text to display in the left pane for this item.
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
   * @param b Flag that indicates whether the text in left pane should be bold.Valid
   * values:
   * true: Text should be bold.
   *
   * false: Text should not be bold.
   *
   *
   *
   */
  setTextBold(b: boolean): any;
}
declare class GlideURI {
  /**
   * Deletes one or more parameters from the URI that match the beginning of the provided
   * string.
   * @param match Partial name of one or more parameters to remove from the query portion of a
   * URI.
   */
  deleteMatchingParameter(match: string): any;
  /**
   * Removes a specified parameter from the query portion of the URI.
   * @param name Name of the parameter to remove from the query portion of a URI.
   */
  deleteParameter(name: string): any;
  /**
   * Returns the value of the specified
   * parameter.
   * @param name The parameter name.
   */
  get(name: string): string;
  /**
   * Returns the file name portion of the
   * URI.
   */
  getFileFromPath(): string;
  /**
   * Returns a map (key value pairs) containing each parameter in the query and its
   * associated value.
   */
  getMap(): any;
  /**
   * Sets the specified parameter to the specified
   * value.
   * @param name The parameter name.
   * @param value The value.
   */
  set(name: string, value: string): any;
  /**
   * Adds the sysparm_view parameter to the query with the named
   * view.
   * @param view Name of the sysparm_view parameter to set in the URI
   * query.
   */
  setView(view: string): any;
  /**
   * Reconstructs the URI string and performs the proper
   * URL encoding by converting non-valid characters to their URL code. For example,
   * converting &amp; to '%26'.
   * @param path The base portion of the system URL to which the URI is appended.
   */
  toString(path: string): string;
}
declare class GlideUser {
  /**
   * Returns the current user's company sys_id.
   */
  getCompanyID(): string;
  /**
   * Returns the current user's display name.
   */
  getDisplayName(): string;
  /**
   * Returns the display value of the user's session domain.
   */
  getDomainDisplayValue(): string;
  /**
   * Returns the user's email address.
   */
  getEmail(): string;
  /**
   * Returns the user's first name.
   */
  getFirstName(): any;
  /**
   * Returns the sys_id of the current user.
   */
  getID(): string;
  /**
   * Returns the user's last name.
   */
  getLastName(): any;
  /**
   * Returns an iterator containing the list of all groups to which the user belongs. Only
   * active groups are returned.
   */
  getMyGroups(): any;
  /**
   * Returns the user ID, or login name, of the current user.
   */
  getName(): string;
  /**
   * Returns a list of roles associated with the user. Includes explicitly granted roles,
   * inherited roles, and roles acquired by group membership.
   */
  getRoles(): any;
  /**
   * Returns the user object associated with the passed-in user ID (sys_id in sys_user) or
   * user_name.
   * @param id Unique ID (sys_id) or user_name of the desired user record.
   */
  getUserByID(id: string): any;
  /**
   * Returns the list of roles explicitly granted to the user.
   */
  getUserRoles(): any;
  /**
   * Determines if the current user has the specified role.
   * @param role Role to check
   */
  hasRole(role: string): boolean;
  /**
   * Determines if the current user is a member of the specified group. Only active groups
   * are evaluated by this method.
   * @param group Group to check
   */
  isMemberOf(group: string): boolean;
}
declare class HostnameJS {
  /**
   * Formats the specified host name according to the property settings.
   * @param hostname The host name to format
   * @param source The property settings source
   */
  format(hostname: string, source: string): string;
  /**
   * Returns the DNS domain name.
   */
  getDomainName(): string;
  /**
   * Returns the current system name.
   */
  getSysName(): string;
}
declare class ICalUtil {}
declare class ICalUtilSNC {
  /**
   * Generates a formatted VCALENDAR component.
   * @param arrEvents Contains the properties that make up a  VCALENDAR component.
   */
  formatICalComponent(arrEvents: any[]): any[];
  /**
   * Generates a formatted VEVENT.
   * @param arrEvent Contains the individual properties that make up a VEVENT.
   * @param useAlarm If true, adds a VALARM to the VEVENT.
   */
  formatICalEvent(arrEvent: any[], useAlarm: boolean): string;
  /**
   * Formats the RRULE property for a VEVENT.
   * @param ruleObj Contains the properties for the RRULE property.
   */
  formatRecurringRule(ruleObj: any): string;
  /**
   * Returns the date from the GlideScheduleDateTime.
   * @param scheduleDateTime A GlideScheduleDateTime representation of the date and time.
   */
  getDateFromScheduleDateTime(scheduleDateTime: GlideScheduleDateTime): string;
  /**
   * If provided with a formatted date time string, it returns a GlideScheduleDateTime
   * object.
   * @param sdtStr Formatted ScheduleDateTime.
   * @param timeZone If provided, will be used for the generated GlideScheduleDateTime.
   */
  getSDT(sdtStr: string, timeZone: string): GlideScheduleDateTime;
  /**
   * Returns the time from the GlideScheduleDateTime.
   * @param scheduleDateTime A GlideScheduleDateTime representation of the date and time.
   */
  getTimeFromScheduleDateTime(scheduleDateTime: GlideScheduleDateTime): string;
}
declare class IdentificationEngineScriptableApi {
  /**
   * Inserts or updates
   * configuration items (CI) and non-Configuration Management Database (CMDB) CIs
   * (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation rules. Use this API instead of
   * updating the CMDB directly.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param source Identifies the data source of the CI information. This value must be one of the
   * choice values defined for the discovery_source field of the cmdb_ci table.
   */
  createOrUpdateCI(input: string, source: string): any;
  /**
   * Inserts or updates
   * configuration items (CI) and non-Configuration Management Database (CMDB) CIs
   * (classes not extending from cmdb_ci) in the CMDB based on identification and reconciliation rules. Use this API instead of
   * updating the CMDB directly.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param options Optional, but {} or null must be passed-in. Options to enable
   * or disable features.Note: By default or if partial_payloads is
   * set to true, both partial_commits and
   * deduplicate_payloads are enabled, even if they are set to
   * false, as those features are essential for partial payloads
   * functionality.
   * "options": {
   * "deduplicate_payloads": "Boolean",
   * "generate_summary": "Boolean",
   * "partial_commits": "Boolean",
   * "partial_payloads": "Boolean",
   * "skip_updating_last_scan_to_now": "Boolean",
   * "skip_updating_source_last_discovered_to_now": "Boolean"
   * }
   * @param source Data source of the CI information. This value must be one of
   * the choice values defined for the discovery_source field of the Configuration Item
   * [cmdb_ci] table.
   */
  createOrUpdateCIEnhanced(
    input: string,
    options: any | undefined,
    source: string,
  ): any;
  /**
   * Determines the operation (insert/update) to perform with the specified payload without
   * committing the operation in the database.
   * @param jsonString A JSON formatted string of configuration items to be added or updated. Each
   * input string is in the format  'items: [{}], relations:[{}]', where each item within
   * the items and relations lists contains name-value pairs. The possible name-value
   * pairs within the items list are:
   * className - Sys_class_name of the CI to be created or updated.
   *
   * values:{} - Field information for the CI as name-value pairs, where the name
   * is the field name.
   *
   * lookup:[{}] - List of records with each item having name-value pairs like
   * the items list.
   *
   *
   *
   * The possible name-value pairs within the relations list are:
   * parent - Index of the parent item in the dependency relation
   *
   * child - Index of the child item in the dependency relation
   *
   * type - Relationship type. This is one of the name field values from the
   * cmdb_rel_type table.
   *
   *
   *
   */
  identifyCI(jsonString: string): string;
  /**
   * Determines the Configuration Management Database (CMDB) operation (insert/update)
   * to perform with the specified payload (request body), without committing the operations in the
   * database.
   * @param input Required. Input payload. A JSON formatted string of
   * configuration items to add or update.
   * "input" {
   * "items": [Array],
   * "referenceItems": [Array],
   * "relations": [Array]
   * }
   * @param options Optional, but {} or null must be passed-in. Options to enable
   * or disable features.Note: By default or if partial_payloads is
   * set to true, both partial_commits and
   * deduplicate_payloads are enabled, even if they are set to
   * false, as those features are essential for partial payloads
   * functionality.
   * "options": {
   * "deduplicate_payloads": "Boolean",
   * "generate_summary": "Boolean",
   * "partial_commits": "Boolean",
   * "partial_payloads": "Boolean",
   * "skip_updating_last_scan_to_now": "Boolean",
   * "skip_updating_source_last_discovered_to_now": "Boolean"
   * }
   * @param source Data source of the CI information. This value must be one of
   * the choice values defined for the discovery_source field of the Configuration Item
   * [cmdb_ci] table.
   */
  identifyCIEnhanced(
    input: string,
    options: any | undefined,
    source: string,
  ): any;
  /**
   * Runs an identification audit against the specified configuration item (CI) to detect
   * duplicates.
   * @param now_GR CI on which to run the audit to detect duplicates. The CI must have independent
   * identification rules.
   */
  runIdentificationAudit(now_GR: GlideRecord): any;
}
declare class IDResult {
  constructor(explore: boolean, sysID: string);
}
declare class IEventSender {
  /**
   * Returns the size of the event queue.
   */
  getQueueSize(): number;
  /**
   * Checks if the event queue has exceeded its maximum size.
   */
  isFullQueue(): boolean;
  /**
   * Places the specified event in the event queue.
   * @param event Event object to place in the events queue.
   */
  sendEvent(event: any): boolean;
}
declare class IPAddressFixup {
  /**
   * Removes duplicates of the specified IP address in the specified table.
   * @param tableName Table to check for duplicates.
   * @param ip IP address to check for.
   */
  dedupe(tableName: string, ip: string): any;
  /**
   * Removes all duplicate IP addresses from the tables.
   */
  dedupeAll(): any;
  /**
   * Removes all duplicate IP addresses and ensures that the parent ip_address record is set
   * to one of the network interface card's (NIC) IP addresses.
   */
  fix(): any;
  /**
   * Returns the parent IP address for the current device.
   */
  getParentIP(): string;
  /**
   * Sets the parent IP address field for the current CI.
   * @param ip Parent IP address for the current CI.
   */
  setParentIP(ip: string): any;
  /**
   * Ensures that the parent ip_address record is set to one of the NIC's IP addresses, or
   * leaves it alone if there were no NICs.
   */
  syncIP(): any;
}
declare class IPService {
  creates: string;
  description: string;
  name: string;
  port: string;
  protocol: string;
  serviceName: string;
  sysID: string;
  constructor(source: any);
  /**
   * Returns an array of IPService instances specified by a Java ArrayList of
   * sys_ids.
   * @param list List of sys_ids.
   */
  getFromArrayList(list: any[]): any[];
}
declare class J2js {
  /**
   * Converts a java object from system code to a JavaScript object.
   * @param javaObject A Java object from system code such as a Packages call.
   */
  j2js(javaObject: any): any;
}
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
declare class JSUtil {
  /**
   * Checks if item is null or is undefined.
   * @param item The object to check
   */
  doesNotHave(item: any): boolean;
  /**
   * Escape ampersands commonly used to define URL attributes.
   * @param text The text
   */
  escapeAttr(text: string): string;
  /**
   * Escapes invalid XML characters such as "< > &".
   * @param text The text
   */
  escapeText(text: string): string;
  /**
   * Returns the value in a boolean GlideRecord field.
   * @param now_GR A GlideRecord
   * @param field The field from which to retrieve the boolean value.
   */
  getBooleanValue(now_GR: GlideRecord, field: string): boolean;
  /**
   * Checks if item is not null and is not undefined.
   * @param item The Object to check
   */
  has(item: any): boolean;
  /**
   * Checks to see if the specified object is a member of the specified class.
   * @param item The object to check
   * @param _class The class to check
   */
  instance_of(item: any, _class: string): boolean;
  /**
   * Checks if the specified object is a Java class.
   * @param value The object to check
   */
  isJavaObject(value: any): boolean;
  /**
   * Logs all the properties in the given object: name, type, and value.
   * @param obj The object for which to enumerate properties
   * @param name Optional name for the logged object
   */
  logObject(obj: any, name?: string): any;
  /**
   * Checks if item is null, undefined, or evaluates to the empty string.
   * @param item The object to check
   */
  nil(item: any): boolean;
  /**
   * Checks if item is null, undefined, or evaluates to the empty string.
   * @param item The object to check
   */
  notNil(item: any): boolean;
  /**
   * Converts the specified object to a Boolean.
   * @param item The object to convert
   */
  toBoolean(item: any): boolean;
  /**
   * Determines the type of the specified object.
   * @param value The object to check
   */
  type_of(value: any): string;
  /**
   * Restore ampersands from escaped text.
   * @param text The text
   */
  unescapeAttr(text: string): string;
  /**
   * Removes escape characters.
   * @param text The text to process.
   */
  unescapeText(text: string): string;
}
declare class Logger {
  /**
   * Appends the specified message to the email log.
   * @param msg Text to append to the email log. These should be information type
   * messages.
   */
  log(msg: string): any;
  /**
   * Appends the specified error message to the email log file.
   * @param msg Error message to append to the email log
   */
  logError(msg: string): any;
  /**
   * Appends the specified warning message to the email log file.
   * @param msg Warning message to append to the email log
   */
  logWarning(msg: string): any;
}
declare class LSOFParser {
  /**
   * Generates the specified error message.
   * @param msg The error message
   */
  error(msg: string): any;
  /**
   * Initializes the file descriptor process.
   */
  initFileDescriptor(): any;
  /**
   * Initializes the parser process.
   */
  initProcess(): any;
  /**
   * Sets the current command.
   * @param line The command
   */
  on_c(line: string): any;
  /**
   * Closes the file descriptor process.
   */
  on_endFileDescriptor(): any;
  /**
   * Closes the parser process.
   */
  on_endProcess(): any;
  /**
   * Sets the current file descriptor.
   * @param line The file descriptor
   */
  on_f(line: string): any;
  /**
   * Sets the current address.
   * @param line The address
   */
  on_n(line: string): any;
  /**
   * Sets the current PID.
   * @param line The PID
   */
  on_p(line: string): any;
  /**
   * Sets the current state.
   * @param line The state
   */
  on_T(line: string): any;
  /**
   * Parses the specified lsof output.
   * @param lsofOutput The lsof output
   */
  parse(lsofOutput: string): any;
}
declare class MIDServer {
  hostname: string;
  hostOS: string;
  ip: string;
  name: string;
  network: string;
  routerIP: string;
  status: string;
  sysID: string;
  url: string;
  version: string;
  windowsDomain: string;
  /**
   * Returns the specified MID server.
   * @param name The MID server name
   */
  getByName(name: string): GlideRecord;
  /**
   * Returns the MID server associated with the specified schedule (the MID server with the
   * same name). If there is no associated MID server, gets the next MID server in the ecc_agent
   * table.
   * @param schedule The discovery schedule
   */
  getDefault(schedule: any): GlideRecord;
  /**
   * Returns the MID Server with the specified schedule and range set.
   * @param schedule The discovery schedule
   * @param range The discovery range set
   */
  getForPing(schedule: any, range: any): GlideRecord;
}
declare class MIDServerAjax {
  constructor();
  /**
   * Sends a test probe to the MID server.
   */
  ajaxFunction_testProbe(): any;
}
declare class MIDServerCluster {
  constructor(agent: GlideRecord);
  /**
   * Determines if a cluster exists.
   */
  clusterExists(): boolean;
  /**
   * Gets the cluster agent.
   */
  getClusterAgent(): string;
}
declare class MIDServerFileSync {
  constructor();
  /**
   * Checks for any changes to attachments on the specified table that are instances of MID
   * server synchronized files and, if so, notifies the MID servers of a change.
   * @param table The table to check
   */
  notifyMIDServers(table: string): any;
}
declare class MIDServerFinder {
  constructor();
  /**
   * Gets the names of MID servers available for a given range and capability.
   */
  getMIDServers(): any[];
  /**
   * Gets the sys_ids of MID servers available for a given range and capability.
   */
  getMIDServersBySysId(): any[];
  /**
   * Gets the state of the finder operation.
   */
  getStatusMessage(): string;
  /**
   * Sets whether to look for active or inactive MID servers. By default, searches are for
   * active MID servers unless inactive is specified by this method.
   * @param flag If true, look for inactive MID servers. If false, do not look for inactive MID
   * servers.
   */
  setActive(flag: boolean): any;
  /**
   * Sets the technologies for which to look.
   * @param capabilities Contains a list of capabilities, for example - capabilities =
   * ["ssh","wmi","snmp",{"os_domain":"disco"},{"phase":1}];
   */
  setCapabilities(capabilities: any[]): any;
  /**
   * Turns debugging on or off.
   * @param onOrOff True to turn on debugging; false to turn debugging off.
   */
  setDebug(onOrOff: boolean): any;
  /**
   * Sets the range of IP addresses for which to look.
   * @param ranges A comma-separated list in one of these formats.
   * IP addresses (10.10.10.1, 10.10.10.2)
   *
   * IP networks (10.10.10.0/23)
   *
   * IP ranges (10.10.10.1-10.10.11.254)
   *
   *
   */
  setRanges(ranges: string): any;
  /**
   * Determines if the input is a single IP or a hostname, and passes the IP or multiple IPs
   * to the setRanges() method.
   * @param ipOrHostname The IP address, IP range, or host name.
   */
  setRangesByIPOrHostname(ipOrHostname: string): any;
}
declare class MIDServerManage {
  constructor();
  /**
   * Gets the logs for the specified MID server.
   * @param agentName The MID server name
   * @param logs The type of log to get (Optional)
   */
  grab_logs(agentName: string, logs?: string): string;
  /**
   * Restarts the specified MID server.
   * @param agentName The MID server name
   */
  restart(agentName: string): any;
  /**
   * Stops the specified MID server.
   * @param agentName The MID server name
   */
  stop(agentName: string): any;
  /**
   * Creates a system message for the specified MID server.
   * @param agentName The MID server name
   * @param cmd The value of the probe source field
   * @param name The name of the probe
   */
  system_msg(agentName: string, cmd: string, name: string): any;
  /**
   * Sends a test probe for the specified MID server.
   * @param agentName The MID server name
   * @param probeId The ID of the probe to send
   * @param topic The information for the topic field
   * @param ename The name for the probe
   * @param source The information for the source field
   */
  text_probe(
    agentName: string,
    probeId: string,
    topic: string,
    ename: string,
    source: string,
  ): any;
  /**
   * Upgrades the specified MID server.
   * @param agentName The MID server name
   */
  upgrade(agentName: string): any;
}
declare class MIDServerSelector {
  constructor();
  /**
   * Finds the MID server based on the capabilities and target IP address.
   * @param target The target IP address
   */
  findAgent(target: string): any;
  /**
   * Gets the error messages for the current MID server.
   */
  getError(): any;
  /**
   * Gets the warning messages for the current MID server.
   */
  getWarning(): any;
  /**
   * Sets the technologies for which to look.
   * @param capabilities A list of capabilities, for example -  capabilities =
   * ["ssh","wmi","snmp",{"os_domain":"disco"},{"phase":1}];
   */
  setCapabilities(capabilities: any[]): any;
}
declare class MLPredictor {
  constructor();
  /**
   * Sets predicted values from an array of specified solutions to a specified
   * record.
   * @param now_GR The record on which to apply the array of predicted solutions.
   * @param solutions Specified solution objects associated with the GlideRecord.
   */
  applyPrediction(now_GR: GlideRecord, solutions: any[]): any;
  /**
   * Applies a predicted value from a specified classification solution to the specified
   * GlideRecord.
   * @param now_GR GlideRecord object containing values on which to run a prediction and apply the
   * results.
   * @param solution Classification solution object to be executed.
   */
  applyPredictionForSolution(now_GR: GlideRecord, solution: any): boolean;
  /**
   * Gets the solution object.
   * @param solutionName Name of the ml_solution record.
   */
  findActiveSolution(solutionName: string): any;
  /**
   * Gets active solutions for a table in a specified GlideRecord.
   * @param now_GR GlideRecord from which to collect active solution objects.
   */
  findActiveSolutionsForRecord(now_GR: GlideRecord): any[];
  /**
   * Gets the predicted value for a specified solution based on the specified prediction
   * outcome.
   * @param solution Solution from which to get the predicted value.
   * @param outcome Prediction outcome results for the specified solution (var outcome =
   * solution.predict(now_GR)).
   */
  getPredictedValue(solution: any, outcome: any): any;
  /**
   * Gets predictions for a specified solution.
   * @param now_GR GlideRecord to be predicted.
   * @param solution Solution object to be executed.
   * @param options Optional JSON object key value pair with the following properties:
   * options.top_n: If provided, returns results up to the expected number of
   * predictions, otherwise default is read from the
   * glide.platform_ml.max_num_predictions system property.
   *
   * options.apply_threshold: Checks the threshold value (solution threshold for
   * similarity, class level threshold for classification) for the solution and
   * applies it to the result set. Default value is true.
   *
   *
   */
  getPredictions(now_GR: GlideRecord, solution: any, options?: any): any[];
  /**
   * Identifies if a solution object is a classification type.
   * @param solution Name of the ML solution.
   */
  isClassificationSolution(solution: any): boolean;
  /**
   * Identifies if a solution object is a similarity type.
   * @param solution Name of the ML solution; for example, ml_incident_categorization.
   */
  isSimilaritySolution(solution: any): boolean;
  /**
   * Sets final prediction result values to a specified GlideRecord with an optionally
   * specified reason.
   * @param now_GR GlideRecord on which to set the final prediction result values.
   * @param reason Optional. Reason for applying results.
   */
  recordFinalValuesInPredictionResults(
    now_GR: GlideRecord,
    reason?: string,
  ): any;
}
declare class MLSolution {
  /**
   * Gets the prediction result for a classification solution and applies it to the input
   * GlideRecord if the confidence value is higher than the threshold.
   * @param now_GR GlideRecord object containing values on which to run a prediction and apply the
   * results.
   */
  applyPrediction(now_GR: GlideRecord): boolean;
  /**
   * Gets the capability information of a trained solution.
   */
  getCapability(): string;
  /**
   * Gets assignments for a clustering
   * solution.
   * @param options Optional. Values to use to narrow down the returned results by group and level
   * within a clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterAssignments(options?: any): any;
  /**
   * Gets the cluster information for a clustering solution.
   * @param now_GR Name of the input GlideRecord.
   */
  getClusterForRecord(now_GR: GlideRecord): string;
  /**
   * Gets information for a specified clustering
   * solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterInfo(options?: any): any;
  /**
   * Gets the version of the active solution.
   */
  getVersion(): string;
  /**
   * Determines if a solution is active.
   */
  isActive(): boolean;
  /**
   * Gets the prediction results from the prediction server given a GlideRecord or an array
   * of key-value pairs.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional. JSON key-value pair with the following properties:
   * top_n: Number. If provided, returns the top
   * results, up to the specified number of predictions.
   *
   * apply_threshold: Boolean. Checks the
   * threshold value for the solution and applies it to the result set. The
   * threshold value is solution threshold for similarity or class-level threshold
   * for classification. Default value is true.
   *
   * custom_results_filter: String. Similarity solutions only. Specifies the allowed set from which results
   * are returned using an encoded query.
   *
   *
   */
  predict(input: any, options?: any): any;
}
declare class MLSolutionFactory {
  /**
   * Gets an MLSolution object for a specified solution name.
   * @param solutionName Name of the solution.
   * @param options Optional. options.version: If provided, creates MLSolution instance for
   * provided version of solutionName.
   */
  getSolution(solutionName: string, options?: any): any;
}
declare class MLSolutionResult {
  constructor();
  /**
   * Returns the solution object.
   * @param solutionName Name of the clustering ml_solution record.
   */
  findActiveSolution(solutionName: string): any;
  /**
   * Returns all members of a clustering solution.
   * @param solutionName Name of active cluster solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterAssignments(solutionName: string, options?: any): any[];
  /**
   * Returns all outcome information for a clustering solution.
   * @param solutionName Name of active cluster solution.
   * @param options Optional. Narrows down the returned results by group and level within a
   * clustering solution. Default: Return cluster memberships for all
   * clusters.
   */
  getClusterInfo(solutionName: string, options?: any): any[];
}
declare class MLSolutionUtil {
  constructor();
  /**
   * Gets predictions for one or more specified solutions.
   * @param input GlideRecord or
   * array
   * of JSON objects as key-value pairs.
   * @param solutionNames Array of solution names to retrieve predictions from.
   * @param options Optional. JSON object key-value pair with the following properties:
   * top_n: Number. If provided, returns the top
   * results, up to the specified number of predictions.
   *
   * apply_threshold: Boolean. Checks the
   * threshold value for the solution and applies it to the result set. The
   * threshold value is solution threshold for similarity or class-level threshold
   * for classification. Default value is true.
   *
   * custom_results_filter: String. Similarity solutions only. Specifies the allowed set from which results
   * are returned using an encoded query.
   *
   *
   */
  getPredictions(input: any, solutionNames: any[], options?: any): any[];
}
declare class MobileDeepLinkGenerator {
  constructor(clientType: string);
  /**
   * Create a link to a form applet.
   * @param formScreenId Sys ID of the applet record in the Applets [sys_sg_screen] table.
   * @param tableName Name of the table containing the record in the recordSysId
   * parameter.
   * @param recordSysId Sys ID of the record to open in the applet.
   */
  getFormScreenLink(
    formScreenId: string,
    tableName: string,
    recordSysId: string,
  ): string;
  /**
   * Create a link to a list applet.
   * @param documentId Sys ID of the applet record in the Applets [sys_sg_screen] table.
   * @param uiParams Optional. JSON object containing any URL parameters to include in the link.
   * Determine which URL parameters to include by inspecting the URL you want to link to.
   * In general, URL parameters filter records in the list. For example, var
   * param = {'&lt;company-sys-id&gt;': 'servicenow'}, where
   * &lt;company-sys-id&gt; is the Sys ID of a company UI parameter from
   * the UI Parameters [sys_sg_ui_parameter] table for a specific mobile screen.
   */
  getScreenLink(documentId: string, uiParams?: any): string;
}
declare class MonitorMIDServer {
  constructor();
  /**
   * If there are any heartbeat probe requests that haven't been processed, cancels them so
   * that they don't accumulate when a MID server is down for a while.
   */
  killOldRequests(): any;
  /**
   * Marks any non-responding MID servers as being down, by determining when the most recent
   * heartbeat was sent and finding all non-responding servers.
   */
  markDowners(): any;
  /**
   * Performs the functions required for a scheduled MID server monitor cycle, including
   * killing old requests, marking the MID servers that are down, and sending heartbeat requests to
   * all servers.
   */
  monitor(): any;
  /**
   * Sends heartbeat requests to all MID servers and notes when by updating the server
   * status record.
   */
  sendHeartbeatRequests(): any;
}
declare class NameValuePairs {
  constructor(mapForm: any);
  constructor(stringForm: string);
  /**
   * Produces this.string from this.map.
   */
  mapToString(): any;
  /**
   * If the specified value contains double quotes, equals, commas, or spaces, this method
   * surrounds the value with double quotes and doubles up any enclosed double quotes.
   * @param value The value to process
   */
  quotify(value: any): string;
  /**
   * Produces this.map from this.string.
   */
  stringToMap(): any;
}
declare class NetwareHandler {
  /**
   * Classifies and identifies the SNMP device.
   */
  classifyAndIdentify(): any;
}
declare class Notify {
  /**
   * Calls the specified E.164-compliant telephone number.
   * @param notifyPhoneNumber Notify phone number from which to make the call. When you initiate a call, the
   * outgoing call workflow for the number group associated with this number runs. Ensure
   * this workflow includes a join conference call activity to
   * connect the user to the conference call.
   * @param toPhoneNumber Phone number to call. Called numbers are added to the conference call.
   * @param conferenceCall Optional. If this parameter is passed in, the callers identified in the
   * toPhoneNumber parameter are automatically joined into the
   * conference call identified by this record. GlideRecord for the Notify Call
   * [notify_call] table that identifies the conference call record. This record is
   * automatically added to the outgoing call workflow scratchpad as the
   * workflow.scratchpad.conference_call variable.
   * @param userSysId Optional. Unique identifier (sys_id) of the user associated with the
   * call.
   * @param groupSysId Optional. Unique identifier (sys_id) of the group associated with the
   * call.
   * @param sourceRecord Optional. Source record that prompted this call.
   */
  call(
    notifyPhoneNumber: string,
    toPhoneNumber: string,
    conferenceCall?: GlideRecord,
    userSysId?: string,
    groupSysId?: string,
    sourceRecord?: GlideRecord,
  ): any;
  /**
   * Creates a new conference call GlideRecord.
   * @param sourceRecord Optional. Record that initiated the request to create the conference call. Used
   * to populate the source and table fields on notify_conference_call record.
   */
  conferenceCall(sourceRecord?: GlideRecord): GlideRecord;
  /**
   * Resumes a call after it was put in a queue (on hold).
   * @param callRecord A GlideRecord object on the Notify Call [notify_call] table with the  held call
   * you want to resume.
   */
  dequeueCall(callRecord: GlideRecord): any;
  /**
   * Forwards the specified call to a different call recipient.
   * @param call Notify call record or the telephony provider call ID, of the call to be
   * forwarded.
   * @param destination Notify phone number record or an E.164-compliant phone number, of the caller to
   * which to forward the call.
   * @param dtmf Dual Tone - Multi Frequency (DTMF) code to send upon call connection.
   */
  forwardCall(call: GlideRecord, destination: GlideRecord, dtmf: string): any;
  /**
   * Returns a list of client sessions that are available to receive calls.
   * @param notifyNumber Valid Notify phone number.
   */
  getAvailableClients(notifyNumber: string): GlideRecord;
  /**
   * Returns the sys_id of a specified call's parent call.
   * @param callRecord Record on the Notify Call [notify_call] table for which to return the call
   * status.
   */
  getParentCallID(callRecord: GlideRecord): string;
  /**
   * Returns all phone numbers and short codes available to Notify.
   */
  getPhoneNumbers(): any;
  /**
   * Returns client tokens for any active telephony drivers for use in WebRTC or mobile
   * clients.
   * @param record GlideRecord to use to identify the Notify client, such as a group record or a
   * user record.
   */
  getTokens(record: GlideRecord): string;
  /**
   * Returns the maximum amount of time that a client session stays active for a specified
   * telephony driver before automatically timing out.
   * @param owner Name of the telephony driver for which to retrieve the session length. Valid
   * values:
   *
   * Twilio: for the old driver
   *
   * TwilioDirect: for the new driver
   *
   *
   */
  getTokenTTL(owner: string): number;
  /**
   * Determines whether the specified phone number has the specified capability.
   * @param notifyPhoneNumber Phone number for which to check for the specified capability.
   * @param capability Capability to detect. The string text must be an exact match to what is in the
   * phone.
   */
  hasCapability(notifyPhoneNumber: string, capability: string): boolean;
  /**
   * Removes the specified caller from the current Notify conference call.
   * @param participant GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to remove from the conference call.
   */
  kick(participant: GlideRecord): any;
  /**
   * Performs one or more actions on an active Notify phone call.
   * @param callRecord Notify Call [notify_call] record of the call for which to apply the
   * actions.
   * @param notifyAction NotifyAction object describing one or more actions to perform on the call.
   * Create this object by calling one or more of the NotifyAction()
   * methods.
   */
  modifyCall(callRecord: GlideRecord, notifyAction: any): any;
  /**
   * Mutes the specified conference call participant.
   * @param participantRecord GlideRecord from the notify_participant table for the participant to
   * mute.
   */
  mute(participantRecord: GlideRecord): any;
  /**
   * Puts the specified call into a queue (on hold).
   * @param callRecord GlideRecord object of the Notify Call  record (notify_call table) to put on
   * hold.
   */
  queueCall(callRecord: GlideRecord): any;
  /**
   * Sends a specified SMS message to the specified list of Notify clients (phone
   * numbers).
   * @param notifyPhoneNumber Notify phone number from which the SMS message is being sent.
   * @param toPhoneNumbers Comma separated list of phone numbers to which to send the SMS
   * message.Format: E.164
   * @param messageBody SMS text to send.
   * @param source Source record that prompted this SMS message, such as an incident.
   */
  sendBulkSMS(
    notifyPhoneNumber: any,
    toPhoneNumbers: string,
    messageBody: string,
    source: GlideRecord,
  ): string;
  /**
   * Sends an SMS text message to an E.164-compliant phone number.
   * @param notifyPhoneNumber Notify phone number or short code to which to send this SMS message.
   * @param toPhoneNumber E.164-compliant phone number to which to send the SMS message.
   * @param messageBody Body of the SMS text message.
   * @param source Source record that prompted this SMS message, such as an incident.
   */
  sendSMS(
    notifyPhoneNumber: string,
    toPhoneNumber: string,
    messageBody: string,
    source: GlideRecord,
  ): string;
  /**
   * Unmutes the specified conference call participant.
   * @param participantRecord GlideRecord from the notify_participant table for the participant to
   * unmute.
   */
  unmute(participantRecord: GlideRecord): any;
}
declare class NotifyAction {
  /**
   * Adds a conference action to move the current call into the current conference
   * call.
   */
  addConference(): any;
  /**
   * Forwards a call to a specified phone number or Notify Client.
   */
  addDial(): any;
  /**
   * Presents a specified interactive phone menu to the caller.
   */
  addGather(): any;
  /**
   * Ends an active phone call.
   */
  addHangUp(): any;
  /**
   * Plays an audio file on the call.
   */
  addPlay(): any;
  /**
   * Queues the call, which puts the call on hold.
   */
  addQueue(): any;
  /**
   * Adds an action to record the call to the current NotifyAction object.
   */
  addRecord(): any;
  /**
   * Rejects an incoming call.
   */
  addReject(): any;
  /**
   * Defines the text-to-speech to read on the call.
   */
  addSay(): any;
  /**
   * Sends an SMS message.
   */
  addSMS(): any;
  /**
   * Appends the specified NotifyAction object to the current client's NotifyAction
   * object.
   * @param action NotifyAction object to append to the NotifyAction object of the current
   * caller.
   */
  append(action: any): any;
  /**
   * Deserialize a NotifyAction object from a JSON string.
   * @param json A JSON string representation of a NotifyAction
   * object.
   */
  fromJson(json: string): any;
  /**
   * Defines the Notify call record in which to add subsequent actions.
   * @param callRecord GlideRecord containing the record of the caller (within the notify_call table)
   * for which to add actions. This caller stays in affect until this method is called
   * again with a different caller.
   */
  setCallRecord(callRecord: GlideRecord): any;
  /**
   * Serialize the NotifyAction object to a JSON string.
   */
  toJson(): string;
}
declare class NotifyJsTelephonyDriver {
  /**
   * Calls a specified telephone number.
   * @param notifyPhoneNumber NotifyPhoneNumber record that contains the Notify phone number from which to
   * make the call. Located in the Notify Phone Number [notify_number] table.
   * @param toPhoneNumber Telephone number to call.Format: E.164
   */
  call(notifyPhoneNumber: any, toPhoneNumber: string): any;
  /**
   * Returns a list of the capabilities of the telephony driver.
   */
  getCapabilities(): any;
  /**
   * Returns the maximum number of telephone numbers to which the telephony driver
   * associated with the passed in Notify telephone number can send an SMS message to at one
   * time.
   * @param phoneNumber Notify telephone number to check for the maximum number of telephone numbers
   * that the associated driver is able to send to in one bulk SMS message.
   */
  getMaxSizeForBulkSms(phoneNumber: string): number;
  /**
   * Returns the Notify phone number record for the specified phone number.
   */
  getPhoneNumber(): any;
  /**
   * Returns a list of all Notify telephone numbers associated with the current telephony
   * driver.
   */
  getPhoneNumbers(): string;
  /**
   * Checks whether the current telephony driver is active.
   */
  isActive(): boolean;
  /**
   * Removes the specified caller from the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to remove from the conference call.
   */
  kick(participantRecord: GlideRecord): string;
  /**
   * Mutes the specified caller in the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to mute in the conference call.
   */
  mute(participantRecord: GlideRecord): string;
  /**
   * Sends the specified Short Message Service (SMS) message to the specified list of
   * telephone numbers.
   * @param message Message to send.
   * @param notifyPhoneNumber Record that contains the phone number that is sending the bulk SMS
   * message.
   * @param source Optional. Incident GlideRecord to store in the Source field of the associated
   * SMS message record in the Notify Message [notify message] table. This links the
   * Incident record that caused the SMS message to be generated to that SMS
   * message.Default: None. If this parameter is not passed in, this information is
   * not tracked.
   * @param toPhoneNumbers List of telephone numbers of the devices to receive the SMS message.
   */
  sendAutonomousBulkSms(
    message: string,
    notifyPhoneNumber: any,
    source: GlideRecord | undefined,
    toPhoneNumbers: any[],
  ): any;
  /**
   * Sends a specified Short Message Service (SMS) message to a specified telephone
   * number.
   * @param notifyPhoneNumber Notify phone number record that contains the telephone number that is sending
   * the SMS message. Located in the Notify Phone Number [notify_number] table.
   * @param toPhoneNumber Phone number to send the SMS message to. Format: E.164 compliant
   * @param message Text to send in the SMS message.
   */
  sendSMS(notifyPhoneNumber: any, toPhoneNumber: string, message: string): any;
  /**
   * Checks whether the specified Notify telephone number is capable of handling autonomous
   * bulk Short Message Service (SMS) messages.
   */
  supportsAutonomousBulkSms(): boolean;
  /**
   * Checks whether the current telephony driver is capable of handling telephone
   * calls.
   */
  supportsCall(): boolean;
  /**
   * Checks whether the specified Notify telephone number is capable of calls to a browser
   * using WebRTC (Real-Time Communications.)
   */
  supportsCallOverWebRtc(): boolean;
  /**
   * Checks whether the current telephony driver is capable of handling Short Message
   * Service (SMS) messages.
   */
  supportsSMS(): boolean;
  /**
   * Unmutes the specified caller in the current Notify conference call.
   * @param participantRecord GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to mute in the conference call.
   */
  unmute(participantRecord: GlideRecord): string;
}
declare class NotifyNow {
  /**
   * Adds ad-hoc users to an ongoing conference call.
   * @param conferenceCall The sys_id or GlideRecord of an active conference call.
   * @param participant The sys_id or GlideRecord of a user with an E.164-compliant phone number, or an
   * E.164-compliant phone number.
   */
  addConferenceCallParticipant(
    conferenceCall: string,
    participant: string,
  ): GlideRecord;
  /**
   * Converts a local phone number to an E.164-compliant phone number based on a user's
   * location.
   * @param userID The sys_id of a sys_user record to get location information from.
   * @param phoneNumber The phone number.
   */
  convertLocalPhoneNumberToE164(userID: string, phoneNumber: string): string;
  /**
   * Returns all participants for a conference call.
   * @param conferenceCallId The ID of the conference call.
   * @param isCallable An optional flag to return either only the users you can call (true) or those
   * you cannot call (false).
   */
  getConferenceCallParticipants(
    conferenceCallId: string,
    isCallable?: boolean,
  ): GlideRecord;
  /**
   * Returns a number of frequently-called users, up to the limit parameter, in alphabetical
   * order.
   * @param limit The maximum number of results.
   */
  getFrequentlyCalledUsers(limit: number): GlideRecord;
  /**
   * Returns a user's preferred E.164-compliant phone number for SMS messages.
   * @param user The user record or the sys_id of a user to get the E.164-compliant phone number
   * from.
   */
  getPreferredE164SMSNumber(user: GlideRecord): string;
  /**
   * Returns a user's preferred E.164-compliant phone number for voice calls.
   * @param user The user record or the sys_id of a user to get the E.164-compliant phone number
   * from.
   */
  getPreferredE164VoiceNumber(user: GlideRecord): string;
  /**
   * Returns a user's preferred email address
   * @param user The user record or the sys_id of a user to get the email address from.
   */
  getPreferredEmailAddress(user: GlideRecord): string;
  /**
   * Indicates whether Notify is set up correctly or not.
   */
  getReadyState(): boolean;
  /**
   * Returns the current status of Notify configuration.
   */
  getStatus(): string;
  /**
   * Initiate a new conference call.
   * @param conferenceCallParticipants One or more users, conference call participants, identified by the sys_ids from
   * the sys_user table or E.164-compliant phone numbers.
   * @param conferenceCallTitle Title of the conference call. This parameter has a maximum length of 40
   * characters.
   */
  initiateConferenceCall(
    conferenceCallParticipants: string,
    conferenceCallTitle: string,
  ): GlideRecord;
  /**
   * Initiate a new conference call.
   * @param conferenceCallParticipants One or more users, conference call participants, identified by the sys_ids from
   * the sys_user table or E.164-compliant phone numbers.
   * @param conferenceCallTitle Title of the conference call. This parameter has a maximum length of 40
   * characters.
   * @param sourceRecord Source record to associate to the conference call such as an incident or
   * problem number.
   * @param private Value to control if a conference call is private. This value defaults to
   * false.
   */
  initiateConferenceCall(
    conferenceCallParticipants: string,
    conferenceCallTitle: string,
    sourceRecord: GlideRecord,
    private: boolean,
  ): GlideRecord;
  /**
   * Determines whether a user is callable or not.
   * @param participant A sys_user or notifynow_participant record, or an E.164-compliant phone
   * number.
   */
  isCallable(participant: string): boolean;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of sending
   * SMS messages.
   */
  isSMSCapable(): boolean;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of sending
   * SMS messages.
   * @param userID The sys_id of the user you want to check for an SMS-capable phone
   * number.
   */
  isSMSCapable(userID: string): boolean;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of setting
   * up phone calls.
   */
  isVoiceCapable(): boolean;
  /**
   * Checks if the telephone number associated with the Twilio account is capable of setting
   * up phone calls.
   * @param userID The sys_id of the user you want to check for a voice-call capable phone
   * number.
   */
  isVoiceCapable(userID: string): boolean;
  /**
   * Removes a participant from a conference call.
   * @param participant The conference call participant to remove from the call.
   */
  kick(participant: GlideRecord): boolean;
  /**
   * Mutes a participant on a conference call.
   * @param participant The conference call participant to mute.
   */
  mute(participant: GlideRecord): boolean;
  /**
   * Send an email question to an email address.
   * @param emailAddress Email address to send the question to.
   * @param question The question record to send or the sys_id of a question record.
   * @param sourceRecord An optional source record to associate to the SMS question, such as an
   * incident.
   * @param emailSubject Optional text to override the default email subject.
   */
  sendEmailQuestion(
    emailAddress: string,
    question: string,
    sourceRecord?: GlideRecord,
    emailSubject?: string,
  ): string;
  /**
   * Sends an SMS message to an E.164-compliant mobile phone number.
   * @param phoneNumber The E.164-compliant phone number to send the message to.
   * @param smsBody The message to send, maximum 1600 characters.
   */
  sendSMS(phoneNumber: string, smsBody: string): any;
  /**
   * Sends an SMS message to an E.164-compliant mobile phone number.
   * @param phoneNumber The E.164-compliant phone number to send the message to.
   * @param smsBody The message to send, maximum 1600 characters.
   * @param source The source record to associate with this SMS message.
   */
  sendSMS(phoneNumber: string, smsBody: string, source: GlideRecord): any;
  /**
   * Sends an SMS question.
   * @param phoneNumber An E.164-compliant phone number to send the message to.
   * @param question The question record to send or the sys_id of a question record.
   * @param sourceRecord An optional source record to associate to the SMS question, such as an
   * incident.
   */
  sendSMSQuestion(
    phoneNumber: any,
    question: string,
    sourceRecord?: any,
  ): string;
  /**
   * Unmutes a participant on a conference call.
   * @param participant The muted conference call participant to unmute.
   */
  umute(participant: GlideRecord): boolean;
}
declare class NotifyPhoneNumber {
  /**
   * Returns the international dialing code for a Notify phone number.
   */
  getDialCode(): string;
  /**
   * Returns the ID of this phone number as defined by the telephony provider.
   */
  getID(): string;
  /**
   * Returns the numerical phone number for the current Notify caller.
   */
  getNumber(): string;
  /**
   * Returns the telephony provider associated with this phone number.
   */
  getOwner(): string;
  /**
   * Returns the country associated with the phone number.
   */
  getTerritory(): string;
  /**
   * Determines whether the current Notify phone number is a short code.
   */
  isShortCode(): boolean;
  /**
   * Determines if the Notify phone number supports conference calling.
   */
  supportsConferenceCall(): boolean;
  /**
   * Determines if the Notify phone number supports receiving phone calls.
   */
  supportsIncomingPhoneCall(): boolean;
  /**
   * Determines if the Notify phone number supports receiving SMS messages.
   */
  supportsIncomingSMS(): boolean;
  /**
   * Determines if the Notify phone number supports initiating phone calls.
   */
  supportsOutgoingPhoneCall(): boolean;
  /**
   * Determines if the Notify phone number supports sending SMS messages.
   */
  supportsOutgoingSMS(): boolean;
  /**
   * Determines if the Notify phone number supports recording phone calls.
   */
  supportsRecording(): boolean;
  /**
   * Determines if the Notify phone number supports calls to a browser, such as in a WebRTC
   * implementation.
   */
  supportsWebRTC(): boolean;
}
declare class NotifySMS {
  constructor();
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify telephone number to
   * a specified telephone number.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toNumber Telephone number of the device to receive the SMS message.
   */
  sendToNumber(
    fromNumber: string,
    message: string,
    sourceRecord: GlideRecord | undefined,
    toNumber: string,
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify phone number to a
   * list of phone numbers.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toNumber List of telephone numbers to receive the SMS message.
   */
  sendToNumbers(
    fromNumber: string,
    message: string,
    sourceRecord: GlideRecord | undefined,
    toNumber: any[],
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified phone number to the user
   * identified in a specified GlideRecord.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toGr GlideRecord of a record type that contains a field that
   * resolves to a user's telephone number. The record type must correlate with the record
   * type used by the phone number resolver that is currently implemented. A phone number
   * resolver is simply a method that obtains the user telephone number from a specific
   * type of GlideRecord, such as a User record or a Case record. When using the default
   * resolver, the records correspond to the User [sys_user] table. To change the type
   * of record that the resolver uses to obtain the telephone number, use the NotifySMS - setRecordToNumberResolver(Object scriptIncludeInstance, String methodName) method.
   */
  sendToUser(
    fromNumber: string,
    message: string,
    sourceRecord: GlideRecord | undefined,
    toGr: GlideRecord,
  ): any;
  /**
   * Sends a Short Message Service (SMS) message from a specified Notify phone number to
   * users found in a specified GlideRecord.
   * @param fromNumber Notify telephone number sending the SMS message.
   * @param message Message to send.
   * @param sourceRecord Optional. Incident GlideRecord to store in the
   * Source field of the associated SMS message record in the Notify Message
   * [notify_message] table. This links the Incident record that caused the SMS message to
   * be generated to that SMS message.Default: None. If this parameter is not passed in,
   * this information is not tracked.
   * @param toGr GlideRecord of a record type that contains a field that
   * resolves to a user's telephone number. The record type must correlate with the record
   * type used by the phone number resolver that is currently implemented. A phone number
   * resolver is simply a method that obtains the user telephone number from a specific
   * type of GlideRecord, such as a User record or a Case record. When using the default
   * resolver, the records correspond to the User [sys_user] table. To change the type
   * of record that the resolver uses to obtain the telephone number, use the NotifySMS - setRecordToNumberResolver(Object scriptIncludeInstance, String methodName) method.
   */
  sendToUsers(
    fromNumber: string,
    message: string,
    sourceRecord: GlideRecord | undefined,
    toGr: GlideRecord,
  ): any;
  /**
   * Sets the method within a script include to use to obtain the target telephone number in
   * the GlideRecord that is passed in the NotifySMS.sendToUser() and
   * NotifySMS.sendToUsers() methods.
   * @param methodName Name of the method to use to obtain the target telephone number in a
   * GlideRecord.
   * @param scriptIncludeInstance Instance of the script include that contains the specified number resolver
   * method.
   */
  setRecordToNumberResolver(
    methodName: string,
    scriptIncludeInstance: any,
  ): any;
}
declare class NotifyUtil {
  constructor();
  /**
   * Returns all of the Notify telephone numbers and related Notify information from a
   * specified source record, such as an incident.
   * @param filterSMSCapableNums Optional. Flag that indicates if only numbers that are SMS-capable should be
   * returned.Valid values:
   * true: Only return SMS-capable telephone numbers and information.
   *
   * false: Return all notify telephone numbers and information.
   *
   *
   *
   * Default: false
   * @param notifyGroupSelectorSysId Optional. Sys_id of a Notify group for which to return the notify numbers and
   * information. Default: All groups
   * @param sourceSysId Sys_id of the source record for which to return the Notify numbers and
   * information. For example, this could be the sys_id of a record in the Incident
   * [incident] table.
   * @param sourceTable Name of the table that contains the source record that contains the desired
   * Notify numbers and information.
   */
  getListOfNotifyNumbersAndProviders(
    filterSMSCapableNums: boolean | undefined,
    notifyGroupSelectorSysId: string | undefined,
    sourceSysId: string,
    sourceTable: string,
  ): number;
  /**
   * Returns the SMS-capable number associated with the specified Notify user.
   * @param userGROrId Sys_id of the user record, located in the User [sys_user] table, or the
   * sys_user GlideRecord of the user for whom to return the SMS-capable telephone
   * number.
   */
  getSMSNumberForUser(userGROrId: string): string;
  /**
   * Returns a list of unique Notify telephone numbers.
   * @param getData Optional. Flag that indicates whether to return metadata along with the list of
   * unique phone numbers.Valid values:
   * true: Return metadata.
   *
   * false: Do not return metadata.
   *
   *
   *
   * Default: false
   * @param groups Optional. List of sys_id groups to check. Located in the Group [sys_user_group]
   * table.Default: Check all groups.
   * @param numbers Optional. List of specific Notify telephone numbers to check.Default: Check
   * all phone numbers.
   * @param type Optional. Type of telephone numbers to check.Valid values
   * (case-sensitive):
   * voice
   *
   * sms
   *
   *
   *
   * Default: Check all phone number types
   * @param users Optional. List of sys_ids of specific users to check. Located in the User
   * [sys_user] table. Default: Check all users
   */
  getUniquePhoneNumbersForUsersAndGroups(
    getData?: boolean,
    groups?: any[],
    numbers?: any[],
    type?: string,
    users?: any[],
  ): any;
  /**
   * Determines whether there are any active conference calls for the specified source
   * record.
   * @param sourceRecSysId Sys_id of the record to check for active conference calls. For example the
   * sys_id of a record in the Incident table.
   */
  hasActiveConferenceCalls(sourceRecSysId: string): boolean;
  /**
   * Validates a specified Notify telephone number.
   * @param number Notify number to validate.
   */
  validateOutboundNotifyPhoneNumber(number: string): any;
  /**
   * Verifies that the specified number is a valid E.164 telephone number.
   * @param number Telephone number to validate.
   */
  validatePhoneNumber(number: string): boolean;
}
declare class OAuthUtil {
  /**
   * Adds a name:value pair to the request parameters.
   * @param requestParamMap The name:value pair you want to add.
   */
  interceptRequestParameters(requestParamMap: string): any;
  /**
   * Parses the token received into a parameter map.
   * @param accessTokenResponse The access token response that you want to parse.
   */
  parseTokenResponse(accessTokenResponse: string): any;
}
declare class OCRosterSpanApprovalUtil {
  /**
   * Changes the type of the roster_schedule_span to time-off from approval.
   * @param rosterSpanGr A roster_schedule_span_proposal record.
   */
  approvePTOSpan(rosterSpanGr: GlideRecord): any;
  /**
   * Returns a URL to the on-call calendar based on the rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getContextualCalUrlPerSpanProposal(rosterSpanProposalGr: GlideRecord): string;
  /**
   * Returns a formatted GlideScheduleDateTime string based on the start date of the
   * rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getFromDateDisplayValuePerSpanProposal(
    rosterSpanProposalGr: GlideRecord,
  ): string;
  /**
   * Returns an array of group managers based on the user's rota groups.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getPTOApproversList(rosterSpanProposalGr: GlideRecord): any[];
  /**
   * Returns a formatted GlideScheduleDateTime string based on the end date of the
   * rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getToDateDisplayValuePerSpanProposal(
    rosterSpanProposalGr: GlideRecord,
  ): string;
  /**
   * Returns the user's name based on rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getUserNamePerSpanProposal(rosterSpanProposalGr: GlideRecord): string;
  /**
   * Checks whether the system property
   * com.snc.on_call_rotation.pto.approval.required is true.
   */
  isPTOApprovalRequired(): boolean;
  /**
   * Changes the type of the roster_schedule_span to rejected from approval.
   * @param rosterSpanGr A roster_schedule_span_proposal record.
   */
  rejectPTOSpan(rosterSpanGr: GlideRecord): any;
}
declare class OCRotaICalendar {}
declare class OCRotaICalendarSNC {
  /**
   * Records in the cmn_rota_resp_cache table that have a From date prior to
   * today.
   */
  cleanExpiredCache(): any;
  /**
   * Returns list of AJAXScheduleItems for the user's on-call.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   */
  createCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
  ): any;
  /**
   * Creates a VEVENT based on the scheduleItemSpan provided.
   * @param groupName Name of the on-call group.
   * @param scheduleItemSpan Span of time for the on-call period.
   * @param calendarLink A link back to the on-call calendar in the instance.
   */
  createCustomEvent(
    groupName: string,
    scheduleItemSpan: any,
    calendarLink: string,
  ): string;
  /**
   * Creates a formatted iCalendar if the user has no upcoming on-call.
   * @param rotaGR The cmn_rota glide record.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  createPlaceholderCalendar(
    rotaGR: GlideRecord,
    dateRangeObj: any,
    calendarLink: string,
  ): string;
  /**
   * Returns the formatted iCalendar for the user's rotation.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param useCache If true, makes use of the cache table cmn_rota_resp_cache.
   */
  getCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    useCache: boolean,
  ): string;
  /**
   * Returns the formatted iCalendar for the user's rotation if found in the
   * cmn_rota_resp_cache table.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   */
  getEventsFromTable(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
  ): string;
  /**
   * Checks whether the provided timeSpan intersects with one of the rota span
   * items.
   * @param timeSpan A single span for the user's on-call.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   */
  getIntersectRotaSpanItem(timeSpan: any, rotaSpanItems: any[]): any;
  /**
   * Creates the subscribable URL for the user's iCalendar.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   */
  getMemberCalendarURL(groupId: string, rotaId: any, userId: string): string;
  /**
   * Returns a URL to the on-call calendar based on the rota record.
   * @param rotaGR A cmn_rota record.
   */
  getOnCallCalendarURL(rotaGR: GlideRecord): string;
  /**
   * Returns an array of the user's overrides (extra coverage).
   * @param scheduleItem A list of AJAXScheduleItems.
   */
  handleOverrideMember(scheduleItem: any): any[];
  /**
   * Returns an object containing the user's override (extra coverage) and excluded
   * spans.
   * @param scheduleItem A list of AJAXScheduleItems.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   * @param definitionItems Contains the rota's standard on-call spans.
   * @param repeatRotaSpanIdArr An array of rota span sys ids.
   */
  handleRotaMember(
    scheduleItem: any,
    rotaSpanItems: any,
    definitionItems: any,
    repeatRotaSpanIdArr: any[],
  ): any;
  /**
   * Used by business rules on the cmn_rota_member, cmn_schedule_span, and
   * roster_schedule_span tables tp update the cmn_rota_resp_cache table.
   * @param rotaRespCacheGR Record that has been updated.
   */
  invalRotaRespCache(rotaRespCacheGR: GlideRecord): any;
  /**
   * Checks whether the provided timeSpan matches one of the rotaSpanItems.
   * @param timeSpan A single span for the user's on-call.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   * @param repeatRotaSpanIdArr An array of rota span sys ids.
   * @param seriesStartTimes Start time of the rota spans.
   */
  matchRotaSpanRule(
    timeSpan: any,
    rotaSpanItems: any[],
    repeatRotaSpanIdArr: any[],
    seriesStartTimes: any,
  ): boolean;
  /**
   * Used by fixed job to populate the calendar subscription fields on the cmn_rota
   * form
   */
  populateCalendarSubscriptionSettings(): any;
  /**
   * Returns an object containing the user's rotations.
   * @param scheduleItems The user's on-call rotation as an AJAXScheduleItem list.
   * @param repeatRotaSpanIdArr An array of the cmn_rota schedule span record sys_ids.
   * @param userId The user sys id.
   */
  processSeriesEvent(
    scheduleItems: any,
    repeatRotaSpanIdArr: any[],
    userId: string,
  ): any;
  /**
   * Inserts the user's iCalendar into the cmn_rota_resp_cache table.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param result The user's iCalendar.
   */
  saveCalendarEvents(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    result: string,
  ): any;
  /**
   * Queues events to send an email to all members of the rotation.
   * @param rotaGR A cmn_rota record.
   */
  sendCalendarURL(rotaGR: GlideRecord): any;
  /**
   * Returns an object that contains all of the timeSpans that need to be excluded from the
   * user's iCalendar.
   * @param scheduleItem One AJAXScheduleItem.
   * @param timeSpan A single user's standard on-call span.
   * @param rotaSpanItems Contains the user's standard on-call spans.
   */
  updateExceptionList(
    scheduleItem: any,
    timeSpan: any,
    rotaSpanItems: any[],
  ): any;
}
declare class OCRotaMember {
  /**
   * Deactivates the user's rota member records according to the deactivate
   * date.
   * @param userId The sys id of the user.
   * @param deactivateDate The date from which the user's rotation is deactivated.
   */
  deactivateUser(userId: string, deactivateDate: GlideDateTime): any;
  /**
   * Checks whether the cmn_rota_member record has changed. Checks the Member, From, To, and
   * Order fields have changed.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  hasChanged(current: GlideRecord, previous: GlideRecord): any;
  /**
   * On update of a cmn_rota_member record, checks whether the order of the record has
   * changed.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  hasOrderChanged(current: GlideRecord, previous: GlideRecord): boolean;
  /**
   * Recalculates the schedule for the cmn_rota_member record.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  recalculate(current: GlideRecord, previous: GlideRecord): any;
  /**
   * Ensures that the From date occurs before or on the same date as the To
   * date.
   * @param from Formatted date/
   * @param to Formatted date/
   */
  validateDates(from: string, to: string): boolean;
}
declare class OCRotation {
  /**
   * Builds the on-call coverage based on your groups, rotas, and rosters. This is used by
   * the OCRotationV2 - getSpans method.
   */
  buildRotas(): any;
  /**
   * Returns the end date for the time period for which you want to retrieve on-call
   * coverage.
   */
  getEndDate(): string;
  /**
   * Returns a comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   */
  getGroupIds(): string;
  /**
   * Returns the rosters according to the selected rotas.
   */
  getRosterIds(): string;
  /**
   * Returns a GlideRecord for the cmn_rota table filtered by groups, rota, users, and
   * roster.
   * @param rotaIds Comma separated list of rota sys_id (cmn_rota) values for an on-call
   * schedule.
   * @param groupIds Comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   * @param rosterIds Comma separated list of roster sys_id (cmn_rota_roster) values for an on-call
   * schedule.
   * @param userIds Comma separated list of user sys_id (sys_user) values for an on-call
   * schedule.
   */
  getRotaGr(
    rotaIds: string,
    groupIds: string,
    rosterIds: string,
    userIds: string,
  ): GlideRecord;
  /**
   * Returns the rotas for the groups on your calendar.
   */
  getRotaIds(): string;
  /**
   * Returns the start date for the time period for which you want to retrieve on-call
   * coverage.
   */
  getStartDate(): string;
  /**
   * Returns the timezone that your on-call calendar will use.
   */
  getTimezone(): string;
  /**
   * This will filter the schedules return by users. Get comma separated list of user sys_id
   * (sys_user) values used to filter on-call schedules.
   */
  getUserIDs(): string;
  /**
   * Set the end date for the time period for which you want to retrieve on-call coverage.
   * If the end date is not set, then the last day of the next month is applied by default. Use in
   * conjunction with OCRotationV2 - getSpans.
   * @param endDate [Optional] End date of the on-call schedule.
   * @param inclusive [Optional] When true, the end date is included in the time span. If not
   * specified, this value defaults to true.
   */
  setEndDate(endDate?: string, inclusive?: boolean): any;
  /**
   * Filters the schedules return by groups. Set comma separated list of group sys_id
   * (sys_user_group) values for an on-call schedule. Use in conjunction with OCRotationV2 -
   * getSpans.
   * @param groupIds Comma separated list of group sys_id (sys_user_group) values for an on-call
   * schedule.
   */
  setGroupIds(groupIds: string): any;
  /**
   * Sets the rosters according to the selected rotas. Use in conjunction with OCRotationV2
   * - getSpans.
   * @param RosterIds Rosters according to the selected rotas.
   */
  setRosterIds(RosterIds: string): any;
  /**
   * Sets the rotas for the groups on your calendar. Use in conjunction with OCRotationV2 -
   * getSpans.
   * @param RotaIds Rotas for the groups on your calendar.
   */
  setRotaIds(RotaIds: string): any;
  /**
   * Sets the start date for the time period for which you want to retrieve on-call
   * coverage. If the start date is not set, then the first day of the previous month is applied by
   * default. Use in conjunction with OCRotationV2 - getSpans.
   * @param startDate [Optional] Start date for the time period for which you want to retrieve
   * on-call coverage.
   */
  setStartDate(startDate?: string): any;
  /**
   * Sets the timezone that your on-call calendar will use. Use in conjunction with
   * OCRotationV2 - getSpans.
   * @param Timezone Timezone that your on-call calendar will use. For example,
   * Europe/Madrid and
   * US/Pacific.
   */
  setTimezone(Timezone: string): any;
  /**
   * Sets comma separated list of user sys_id (sys_user) values used to filter on-call
   * schedules. Use in conjunction with OCRotationV2 - getSpans.
   * @param UserIds Comma separated list of user sys_id (sys_user) values used to filter on-call
   * schedules.
   */
  setUserIds(UserIds: string): any;
}
declare class OCRotationV2 {
  /**
   * Returns an array of groups that have active rotas.
   */
  getGroups(): any[];
  /**
   * Returns an array of active rosters for a given rota ID.
   * @param rotaSysIds Comma separated list of rota sys_id (cmn_rota) values.
   */
  getRostersByRotas(rotaSysIds: string): any[];
  /**
   * Returns an array of active rotas for a given group ID.
   * @param groupSysIds Comma separated list of group sys_id (sys_user_group) values.
   */
  getRotasByGroup(groupSysIds: string): any[];
  /**
   * Get the spans from the specified start date to the specified end date. If no start and
   * end dates are provided, the start date defaults to a month before and the end date defaults to a
   * month after the current time. You can also use the groups IDs, rota IDs, roster IDs, user IDs to
   * further filter the spans.
   */
  getSpans(): any[];
}
declare class OCSeriesEventGenerator {
  /**
   * Returns an array of the repeating on-call events.
   * @param groupId The group sys id.
   * @param rotaId The rota sys id.
   * @param userId The user sys id.
   * @param dateRangeObj Contains the from and to dates for the data set.
   * @param memberSchedules The user's schedule.
   * @param calendarLink A link back to the on-call calendar in the instance.
   */
  getMemberCalendar(
    groupId: string,
    rotaId: string,
    userId: string,
    dateRangeObj: any,
    memberSchedules: any,
    calendarLink: string,
  ): any[];
  /**
   * Returns an array of VEVENTs that represent the on-call for the provided
   * rotaScheduleSpanGR and the memberScheduleSpanGR.
   * @param rotaScheduleSpanGR A cmn_schedule_span glide record for a rota.
   * @param memberScheduleSpanGR A cmn_schedule_span glide record for a rota member.
   * @param seriesStartTimes An array of the repeating rota span start times.
   * @param excludeItems The schedule items that need to be excluded.
   * @param repeatUntil A formatted ScheduleDateTime string.
   * @param timeZone Time zone for the on-call rota.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  getRosterICalEvents(
    rotaScheduleSpanGR: GlideRecord,
    memberScheduleSpanGR: GlideRecord,
    seriesStartTimes: any[],
    excludeItems: any,
    repeatUntil: string,
    timeZone: string,
    calendarLink: string,
  ): any[];
  /**
   * Returns an array of the repeating on-call VEVENTS.
   * @param rotaMemberGR A cmn_rota_member record.
   * @param seriesStartTimes An array of the repeating rota span start times.
   * @param excludeItems The schedule items that need to be excluded.
   * @param repeatUntil A formatted ScheduleDateTime string.
   * @param calendarLink A link to the on-call calendar for this user.
   */
  getRosterMemberEvents(
    rotaMemberGR: GlideRecord,
    seriesStartTimes: any[],
    excludeItems: any,
    repeatUntil: string,
    calendarLink: string,
  ): any[];
}
declare class OCTimer {
  /**
   * Logs the entry based on the function name.
   * @param name Function name.
   * @param entry Text that will be part of the output in the log.
   */
  log(name: string, entry: string): any;
  /**
   * Takes a millisecond value and returns a formatted duration.
   * @param millis Duration in miliseconds.
   */
  millisToTime(millis: number): string;
  /**
   * Calculates the time taken for each function registered.
   */
  result(): string;
  /**
   * Initializes a timer based on the name provided.
   * @param name Function name.
   */
  start(name: string): any;
  /**
   * Registers the end of the timer for the provided name.
   * @param name Function name.
   */
  stop(name: string): any;
}
declare class OnCallContactPreferenceUtil {
  constructor();
  /**
   * Gets a list of catch-all contacts and preferences.
   * @param rotaId Sys ID of the shift from the [cmn_rota] table.
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.
   */
  getCatchAllContacts(rotaId: string, gdt?: GlideDateTime): any[];
  /**
   * Gets a list of contacts with the escalatee object. Each returned contact contains a
   * list of user contact preferences.
   * @param escalatee Mandatory. Escalatee object returned by the getEscalationPlan() method.
   * @param contactAttempt Optional. The attempt you are trying to contact [ default value = 1 ].
   * 1: First attempt
   *
   * 2: First reminder
   *
   * 3 or more: Subsequent reminders
   *
   *
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.admin
   * @param rotaSysIds Optional. Comma-separated string of Sys IDs of shifts from the [cmn_rota]
   * table. Default value returns Sys IDs of the shifts at current time.
   */
  getContactsAtByEscalatee(
    escalatee: any,
    contactAttempt?: number,
    gdt?: GlideDateTime,
    rotaSysIds?: string,
  ): any[];
  /**
   * Gets the list of contact preferences at the time at which the user has opted for
   * communication. If no time is specified, then current time is used. This method is applicable to
   * single and overlapping shifts.
   * @param userSysId Sys ID of the user from the [sys_user] table.
   * @param contactAttempt Optional. The attempt you are trying to contact [ default value = 1 ].
   * 1: First attempt
   *
   * 2: First reminder
   *
   * 3 or more: Subsequent reminders
   *
   *
   * @param gdt Optional. yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is
   * now.
   * @param communicationTypes Optional. Comma-separated string containing one or more of the following
   * values:
   * email
   *
   * sms
   *
   * voice
   *
   *
   * Default includes all available communication types.
   */
  getUserPreferences(
    userSysId: string,
    contactAttempt?: number,
    gdt?: GlideDateTime,
    communicationTypes?: string,
  ): any[];
}
declare class OnCallRotation {
  constructor();
  /**
   * Add the current escalation member to the list of notified users so that the API knows
   * who has been contacted. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   */
  addCurrentToNotified(): any;
  /**
   * Cancels any escalations for the GlideRecord that were started with the
   * startEscalations API. This API is applicable for a single shift,
   * overlapping shifts, and custom escalation.
   * @param escalationGr GlideRecord of Rotation escalation(cmn_rota_escalation
   */
  cancelEscalations(escalationGr: GlideRecord): any;
  /**
   * Continue the escalations for a document(incident now_GR) and group. This API is applicable
   * for a single shift, overlapping shifts, and custom escalation.
   * @param escalationGr GlideRecord of Rotation escalation(cmn_rota_escalation
   */
  continueEscalations(escalationGr: GlideRecord): any;
  /**
   * Gets the sys_id of the catch all person. Use together with the
   * getCatchAllType() method to determine the source of the returned id. This
   * API is applicable for a single shift, overlapping shifts, and custom escalation.
   * @param rotaID The sys_id of the rota.
   */
  getCatchAll(rotaID: string): string;
  /**
   * Gets the type of _catch all_ that lives at the end of the escalation chain. When the
   * escalation chain finishes without assigning an on-call person, if configured, the incident is
   * assigned to the _catch all_. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   * @param rotaID The sys_id of the rota.
   */
  getCatchAllType(rotaID: string): string;
  /**
   * Gets an item to escalate to, either a user [sys_user], group, or notification device
   * [cmn_notif_device], for a group's shift at the specified date and time and at a certain position
   * in the escalation lineup. This API is applicable for a single shift.
   * @param groupID The sys_id for the group from which to get the item to escalate.
   * @param dateTime The date and time when the escalation lineup should begin.
   * @param position The position in the lineup to determine the item to escalate to (1-based, which
   * means the count starts with 1).
   */
  getEscalateeAt(
    groupID: string,
    dateTime: GlideDateTime,
    position: number,
  ): GlideRecord;
  /**
   * Gets a list of escalatees that are on-call for a given time. If no time is specified,
   * then the current time is used. If no groupSysIds are provided, empty list is returned. This API
   * is applicable for a single shift, overlapping shifts, and custom escalation.
   * @param groupSysIds Comma-separated list of sys_ids of the sys_user_group, to filter the records
   * by.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param rosterSysIds Comma-separated list of cmn_rota_roster sys_ids  to filter the records
   * by.
   * @param gdt Date in the UTC timezone
   * @param taskGr Optional. Current task record. If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalatees(
    groupSysIds: string,
    rotaSysIds: string,
    rosterSysIds: string,
    gdt: GlideDateTime,
    taskGr?: GlideRecord,
  ): any;
  /**
   * Gets the escalatees (either a user, group, or device records depending on the
   * notification rules) at a specific time and position. This API is applicable for a single shift,
   * overlapping shifts and custom escalation.
   * @param groupSysId ys_id of the group.
   * @param gdt yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is now.
   * @param position Position of the escalation step.
   * @param taskGr Optional. Current task record.  If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalateesAt(
    groupSysId: string,
    gdt: GlideDateTime,
    position: number,
    taskGr?: GlideRecord,
  ): GlideRecord;
  /**
   * Gets a list of objects to escalate to, escalation plans that consist of either a user
   * [sys_user] or notification device [cmn_notif_device], for a group's shift at the specified date
   * and time. This API is applicable for a single shift, overlapping shifts, and custom
   * escalation.
   * @param groupID sys_id for the group for which you need the escalation plan.
   * @param gdt Date and time when the escalation lineup should begin. Default is now.
   * yyyy-MM-dd HH:mm:ss is the format in UTC timezone.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param taskGr Optional. Current task record. If taskGr is empty, this method returns the
   * default escalation plan. If taskGr is passed, escalation policies are  evaluated in
   * order and this method returns the corresponding escalation plan.
   */
  getEscalationPlan(
    groupID: string,
    gdt: GlideDateTime,
    rotaSysIds: string,
    taskGr?: GlideRecord,
  ): any;
  /**
   * Gets the type of escalation based on a simple calculation. If there is one active
   * roster in the rota, rotate through members. If there is more than one active roster in the rota,
   * rotate through rosters. This API is applicable for a single shift, overlapping shifts, and
   * custom escalation.
   * @param rotaID The sys_id for the rota to check for rosters.
   */
  getEscalationType(rotaID: string): string;
  /**
   * Gets the sys_id of the current primary contact when there is a single
   * shift.
   */
  getPrimaryUser(): string;
  /**
   * Gets the sys_id of the current primary user of the specified shift. This API is
   * applicable for a single shift and overlapping shifts.
   * @param rotaId sys_id of the cmn_rota.
   */
  getPrimaryUserByRota(rotaId: string): string;
  /**
   * Gets the name of the current primary contact. This API is applicable for a single
   * shift.
   */
  getPrimaryUserName(): string;
  /**
   * Gets the name of the current primary user of the specified shift. This API is
   * applicable for a single shift and overlapping shifts.
   * @param rotaId sys_id of the cmn_rota.
   */
  getPrimaryUserNameByRota(rotaId: string): string;
  /**
   * Gets the list of primary contacts for a shift. This API is applicable for a single
   * shift, overlapping shifts, and custom escalation.
   */
  getPrimaryUsers(): any;
  /**
   * Checks if the parent span and child spans overlap.
   * @param parent The parent spans to compare.
   * @param child The child spans to compare.
   * @param timeZone The name of the time zone.
   */
  spansOverlap(parent: any, child: any, timeZone: string): boolean;
  /**
   * Start the escalations for a document(incident now_GR) and group, and specify the event name
   * for the escalation notifications. In addition, specify the name of the business rule to call
   * when an escalation occurs. This method should be used after a succesful call to
   * who or whoAt methods. This API is applicable for a
   * single shift, overlapping shifts, and custom escalation.
   * @param now_GR Document glide record. For example, Incident now_GR.
   * @param eventName Event name for the escalation notifications.
   * @param escalationScriptName Business rule to call when escalation occurs
   */
  startEscalations(
    now_GR: GlideRecord,
    eventName: string,
    escalationScriptName: string,
  ): any;
  /**
   * Specifies if there is an on-call user, group, or device. This method is applicable for
   * a single shift, overlapping shifts, and custom escalation.
   * @param groupSysId Sys_id of the group to check for.
   * @param gdt Date and time.Format: yyyy-MM-dd HH:mm:ss in the UTC time zone
   * Default:
   * Current date and time
   * @param nullifyOverrideRoster Flag that indicates whether the notification list for the group is for a
   * specific roster.Valid values:
   * true: Not for a specific roster.
   *
   * false: For a specific roster.
   *
   *
   *
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param overrideCustomEscalation Flag that indicates whether to override the default escalation policy with the
   * custom escalation. Valid values:
   * true: Override the default escalation policy.
   *
   * false: Do not override the default escalation policy.
   *
   *
   *
   * @param taskGR Optional. Current task record. If passed, the method populates the escalatees
   * based on the escalation conditions.
   */
  who(
    groupSysId: string,
    gdt: GlideDateTime,
    nullifyOverrideRoster: boolean,
    rotaSysIds: string,
    overrideCustomEscalation: boolean,
    taskGR?: GlideRecord,
  ): boolean;
  /**
   * Specifies if there is an on-call user, group, or device. This API is applicable for a
   * single shift, overlapping shifts, and custom escalation.
   * @param groupSysId Sys ID of the group.
   * @param gdt yyyy-MM-dd HH:mm:ss format in the UTC timezone. Default is now.
   * @param rotaSysIds Comma-separated list of cmn_rota Sys IDs to filter the records by.
   */
  whoAt(groupSysId: string, gdt: GlideDateTime, rotaSysIds: string): boolean;
  /**
   * Escalation business rules determine who in the shift should be contacted next. The
   * escalation record passed to the method tracks the escalation between invocations of the business
   * rule. This API is applicable for a single shift, overlapping shifts, and custom
   * escalation.
   * @param escalationGr GlideRecord of Rotation escalation [cmn_rota_escalation].
   */
  whoIsNext(escalationGr: GlideRecord): any;
  /**
   * Gets the list of users that are on-call at a given time. If no time is specified, then
   * current time is used. This API is applicable for a single shift and overlapping
   * shifts.
   * @param groupSysIds Comma-separated list of sys_ids of the sys_user_group, to filter the records
   * by.
   * @param rotaSysIds Comma-separated list of cmn_rota sys_ids to filter the records by.
   * @param rosterSysIds Comma-separated list of cmn_rota_roster sys_ids  to filter the records
   * by.
   * @param gdt Date in the UTC timezone
   */
  whoIsOnCall(
    groupSysIds: string,
    rotaSysIds: string,
    rosterSysIds: string,
    gdt: GlideDateTime,
  ): any;
}
declare class PADomainUtils {
  constructor();
  constructor(domainFrom: string);
  /**
   * Copies Performance Analytics records to a different domain.
   * @param runAs The user whose domain you want to copy records to.
   */
  copy(runAs: string): any;
  /**
   * Copy a dashboard to another domain.
   * @param dashboardId The sys_id of the dashboard to copy.
   * @param runAs The user whose domain you want to copy the dashboard to.
   */
  copyDashboard(dashboardId: string, runAs: string): any;
  /**
   * Copies a Performance Analytics scheduled data collection job record to another domain.
   * @param paJob The sys_id of a Performance Analytics
   * scheduled data collection job [sysauto_pa] record.
   * @param runAs The user whose domain you want to copy the job to.
   */
  copyJob(paJob: string, runAs: string): string;
  /**
   * Evaluate if you can write to a specific record identified by table and
   * sys_id.
   * @param table The name of the table containing the record to query, such as
   * pa_indicators.
   * @param id The sys_id of the record to query.
   */
  isWriteable(table: string, id: string): boolean;
  /**
   * Moves Performance Analytics records to a different domain.
   * @param runAs The user whose domain you want to copy records to.
   */
  move(runAs: string): any;
  /**
   * Use this method to move or copy only foundational records in a hybrid domain
   * configuration.
   * @param foundation Indicates if only foundational records should be copied or moved by this
   * PADomainUtils object.
   */
  setFoundation(foundation: boolean): any;
  /**
   * Use this method before copying records to set the sys_override value of the new record
   * to the original parent record.
   * @param overrides Indicates that copied records in a child domain should override the source
   * record in the parent domain. This value is true by default.
   */
  setOverrides(overrides: boolean): any;
}
declare class PredictabilityEstimate {
  constructor(config: any);
  /**
   * Cancels a job for a predictability estimate object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * PredictabilityEstimateVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a predictability estimate.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of a predictability estimate.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets predictability estimate object properties.
   */
  getProperties(): any;
  /**
   * Gets a predictability estimate by provided version number.
   * @param version Existing version number of a predictability estimate.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a predictability estimate in the store.
   * @param version Name of the PredictabilityEstimate() object version to
   * activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class PredictabilityEstimateStore {
  /**
   * Adds a new predictability estimate object to the store and returns a unique name.
   * @param mlEstimate PredictabilityEstimate()
   * object to add to the store.
   */
  add(mlEstimate: any): string;
  /**
   * Removes a specified predictability estimate object from the store.
   * @param name Name of the PredictabilityEstimate()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a predictability estimate object from a store.
   * @param name Name of a predictability estimate in a store.
   */
  get(name: string): any;
  /**
   * Gets the names of all predictability estimate definition records in the
   * store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Updates a predictability estimate object in a store.
   * @param name Name of the predictability estimate to update.
   * @param mlEstimate PredictabilityEstimate()
   * object properties to update.
   */
  update(name: string, mlEstimate: any): any;
}
declare class PredictabilityEstimateVersion {
  /**
   * Gets predictability estimate object properties and version number.
   */
  getProperties(): any;
  /**
   * Returns JSON results containing suggested input fields for an output field.
   */
  getResults(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a predictability estimate object.
   */
  getVersionNumber(): string;
}
declare class ProbeHandlerCim {
  /**
   * Returns a string containing the CIM fields to fetch
   */
  getCimQueries(): string;
  /**
   * Returns the CIM name space.
   */
  getNamespace(): string;
  /**
   * Returns a hash map of the parameters added by this probe handler.
   */
  getParameters(): string;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the probe parameters.
   * @param params The parameters to add
   */
  setProbeParameters(params: any): any;
}
declare class ProbeHandlerMulti {
  /**
   * Adds the probe parameters to the given XML parent element, taken from the given probe's
   * parameter table.
   * @param parent The XML parent element to add parameters to.
   * @param sysID The sys_id of the probe to get parameters from.
   * @param probe Optional GlideRecord of the probe. If present, and there is a probe handler, it
   * is called.
   */
  addParameters(parent: string, sysID: string, probe?: GlideRecord): any;
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
  runProbeHandler(params: string, sysID: string, probe?: GlideRecord): any;
  /**
   * Sets the value of a given XML parameter element.
   * @param parent The XML parent element to add the parameter to.
   * @param name The name of the parameter to set
   * @param value The value to set the parameter to.
   */
  setParameter(parent: string, name: string, value: string): any;
}
declare class ProbeHandlerSNMP {
  /**
   * Adds a boolean value to the parameter map.
   * @param dbName The database name
   * @param paramName The parameter name
   * @param paramMap The parameter map
   */
  addBoolean(dbName: string, paramName: string, paramMap: string): any;
  /**
   * Adds debugging to the probe handler.
   * @param paramMap The parameter map
   */
  addDebug(paramMap: string): any;
  /**
   * Adds a JavaScript handler.
   * @param paramMap The parameter map
   */
  addJavascriptHandlers(paramMap: string): any;
  /**
   * Adds OID automatic resolution.
   * @param paramMap The parameter map
   */
  addOIDAutoResolve(paramMap: string): any;
  /**
   * Adds OID specifications to the parameter map.
   * @param paramMap The parameter map
   */
  addOIDSpec(paramMap: string): any;
  /**
   * Adds a sensor handler.
   * @param paramMap The parameter map
   */
  addSensorHandler(paramMap: string): any;
  /**
   * Adds the stage to the parameter map.
   * @param paramMap The parameter map
   */
  addStage(paramMap: string): any;
  /**
   * Adds timing specifications to the parameter map.
   * @param paramMap The parameter map
   */
  addTimingSpecs(paramMap: string): any;
  /**
   * Returns the parameters added by this probe handler.
   */
  getParameters(): string;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the value of a given XML parameter element.
   * @param params The probe's parameters
   */
  setProbeParameters(params: string): any;
}
declare class ProbeHandlerWMI {
  /**
   * Returns the parameters added by this probe handler.
   */
  getParameters(): string;
  /**
   * Generates a string containing the WMI fields to fetch.
   */
  getWMIFields(): string;
  /**
   * Runs the probe.
   */
  run(): any;
  /**
   * Sets the probe parameters.
   * @param params The probe parameters
   */
  setProbeParameters(params: any): any;
}
declare class Queue {
  /**
   * Gets a queue record by sys_id.
   * @param queue_id Represents sys_id of  queue record from  awa_queue table
   */
  get(queue_id: string): boolean;
  /**
   * Routes an active work item to the queue object.
   * @param options Contains document sys_id and table associated with work item:
   *
   * document_sys_id: "&lt;sys_id&gt;"
   *
   *
   * document_table: "&lt;table&gt;", e.g., interaction
   *
   *
   */
  route(options: any): boolean;
}
declare class QuickRanges {
  /**
   * Creates a new discovery range item.
   * @param table The table where the item will be created.
   * @param id The identifier to use for the new item.
   * @param type The type of entries to generate: IP address, IP network, or IP range.
   */
  createItem(table: string, id: string, type: string): GlideRecord;
  /**
   * Returns the IP network, range, and address information to use when generating the
   * entries.
   */
  onMakeRanges(): any;
}
declare class RecordToHTML {
  constructor(table: string, sys_id: string, pattern: string, link: boolean);
  /**
   * Sets the specified field to the specified value.
   * @param fieldName Name of the field to change.
   * @param value Value to set the field to.
   */
  setValue(fieldName: string, value: string): any;
  /**
   * Converts the record to a string.
   */
  toString(): string;
}
declare class RegressionSolution {
  constructor(config: any);
  /**
   * Cancels a job for a solution object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * RegressionSolutionVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a RegressionSolution object.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of a solution.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets a solution by provided version number.
   * @param version Existing version number of a solution.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a
   * solution in the store.
   * @param version Name of the RegressionSolution() object version to activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class RegressionSolutionStore {
  /**
   * Adds a new solution object to the store and returns a unique name.
   * @param mlSolution RegressionSolution()
   * object to add to the store.
   */
  add(mlSolution: any): string;
  /**
   * Removes a specified solution object from the
   * store.
   * @param name Name of the RegressionSolution()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a solution object from the store.
   * @param name Name of a solution in the store.
   */
  get(name: string): any;
  /**
   * Gets the names of all solution definition
   * records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Replaces an existing object in the store with the
   * object passed as a parameter. The object name provided must be empty or
   * match.
   * @param name Name of the solution to update.
   * @param mlSolution RegressionSolution()
   * object properties to update.
   */
  update(name: string, mlSolution: any): any;
}
declare class RegressionSolutionVersion {
  /**
   * Gets solution object
   * properties
   * and version number.
   */
  getProperties(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): string;
  /**
   * Gets the input data for a prediction.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional values for filtering prediction
   * results.{
   * "apply_threshold": Boolean,
   * "top_n": Number
   * }
   */
  predict(input: any, options?: any): any;
}
declare class RenderProperties {
  /**
   * Returns the encoded query from the URL sent to the page.
   */
  getEncodedQuery(): string;
  /**
   * Returns the list control object for the page.
   */
  getListControl(): any;
  /**
   * Returns the value of the specified URL parameter.
   * @param parameterName Name of the parameter passed on the URL.
   */
  getParameterValue(parameterName: string): string;
  /**
   * Returns the URL where the request originated.
   */
  getReferringURL(): string;
  /**
   * Returns the view the page is using.
   */
  getViewID(): string;
  /**
   * Returns the name of the view in use.
   */
  getViewName(): string;
  /**
   * Returns the window's properties.
   */
  getWindowProperties(): any;
  /**
   * Returns true if the page is part of Studio.
   */
  isInDevStudio(): boolean;
  /**
   * Returns true if this is an interactive session. An interactive session is when a user
   * has logged in as opposed to a REST request.
   */
  isInteractive(): boolean;
  /**
   * Returns true when the sysparm_collection_related_file URL parameter is
   * set.
   */
  isManyToMany(): boolean;
  /**
   * Returns true when the sys_is_related_list URL-parameter is true.
   * Returns false if the parameter is not present.
   */
  isRelatedList(): boolean;
}
declare class RoundingInterval {
  constructor(type: string);
  /**
   * Returns the value after applying the rounding interval.
   * @param value The value to round off
   */
  getRoundedValue(value: number): number;
}
declare class SerialNumberManager {
  /**
   * Adds the specified serial number.
   * @param sType The serial number type
   * @param value The serial number
   */
  add(sType: number, value: number): any;
  /**
   * Returns the serial number.
   */
  getSerialNumber(): number;
  /**
   * Returns serial number information for CI Data, including the type, serial number, and
   * validity.
   */
  getSerialsForCIData(): any[];
  /**
   * Checks if the number is a valid serial number.
   * @param value The number to check
   */
  isValid(value: number): boolean;
}
declare class ServiceRegistryQuery {
  constructor(source: any);
  /**
   * Parses an array of IDs for the given port probe.
   * @param portProbe The port probe
   */
  findForPortProbe(portProbe: any): any;
  /**
   * Retrieves a registry service by id, regardless of child class.
   * @param source The registry service GlideRecord or sys_id.
   */
  get(source: any): string;
  /**
   * Returns the Shazzam! querier class name.
   */
  getShazzamQuerierClassname(): string;
  /**
   * Retrieves the port probe XML and creates a map.
   */
  toPortProbeMap(): string;
  /**
   * Creates XML output for Shazzam! port probes.
   */
  toPortProbeXml(): string;
}
declare class ShazzamLaunch {
  constructor(status: any, schedule: any);
  /**
   * Adds a single port probe to our MID services collection.
   * @param midPPs A hashmap with two properties.
   * midServer: a MIDServer instance
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe
   * instances.
   *
   *
   * @param portProbes A hashmap (byMIDServer name) that contains these properties.
   * range: An IPMetaCollection containing the ranges to be probed.
   *
   * midserver: A MIDServer instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   * @param ipiec The range to be probed.
   */
  addPortProbe(midPPs: string, portProbes: string, ipiec: any): any;
  /**
   * Adds the specified range and this discovery's port probes to scan (as defined by
   * behavior) to the collection of MID servers and port probes that need to be probed.
   * @param ipc The range to be discovered
   * @param portProbes A hashmap (by MID server name) of hashmaps containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a Mid server instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   * @param samePhase True if this should use the same phase as is currently running.
   */
  addRange(ipc: any, portProbes: string, samePhase: boolean): any;
  /**
   * Fires a Shazzam probe for the MID server and services in the given hash
   * map.
   * @param portProbe A hashmap containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a MIDServer instance for the MID server to be probed.
   *
   *
   * @param ip A comma-separated list of IPs to fire probes for.
   * @param sensor The sys_id of the sensor that launched this probe (network discovery
   * only).
   */
  fireShazzamProbe(portProbe: string, ip: string, sensor: string): any;
  /**
   * Launches Shazzam probes as necessary, depending on the current phase of each behavior
   * used.
   * @param ip A comma-separated list of IPs to fire probes for.
   * @param samePhase True if this launch should use the same phase as is currently running.
   * @param sensor The sys_id of the sensor that launched this (only in network
   * discovery).
   */
  launch(ip: string, samePhase: boolean, sensor: string): boolean;
  /**
   * Makes an XML port probe spec for the given port probe hashmap.
   * @param portProbe A hashmap containing these properties.
   * range: an IPMetaCollection containing the ranges to be probed.
   *
   * midServer: a MIDServer instance for the MID server to be probed.
   *
   * portProbes: a hashmap (by port probe name) of DiscoveryPortProbe instances to
   * be probed.
   *
   *
   */
  makeProbeSpec(portProbe: string): string;
}
declare class ShazzamResult {
  active: boolean;
  alive: boolean;
  domainName: string;
  hostName: string;
  ip: string;
  scanners: any[];
}
declare class ShazzamScanner {
  contents: any;
  domainName: string;
  hostName: string;
  name: string;
  port: string;
  portProbe: string;
  protocol: string;
  result: string;
  service: string;
}
declare class SimilaritySolution {
  constructor(config: any);
  /**
   * Cancels a job for a solution object that has been submitted for training.
   */
  cancelTrainingJob(): any;
  /**
   * Gets the active
   * SimilaritySolutionVersion object.
   */
  getActiveVersion(): any;
  /**
   * Gets all versions of a SimilaritySolution object.
   */
  getAllVersions(): any[];
  /**
   * Gets the latest version of a solution.
   */
  getLatestVersion(): any;
  /**
   * Gets the name of the object to use for interaction
   * with the store.
   */
  getName(): string;
  /**
   * Gets solution object
   * properties.
   */
  getProperties(): any;
  /**
   * Gets a solution by provided version number.
   * @param version Existing version number of a solution.
   */
  getVersion(version: string): any;
  /**
   * Activates a specified version of a
   * solution in the store.
   * @param version Name of the SimilaritySolution() object version to activate.Activating this version deactivates any other version.
   */
  setActiveVersion(version: string): any;
  /**
   * Submits a training job.
   */
  submitTrainingJob(): any;
}
declare class SimilaritySolutionStore {
  /**
   * Adds a new solution object to the store and returns a unique name.
   * @param mlSolution SimilaritySolution()
   * object to add to the store.
   */
  add(mlSolution: any): string;
  /**
   * Removes a specified solution object from the
   * store.
   * @param name Name of the SimilaritySolution()
   * object to be deleted.
   */
  deleteObject(name: string): any;
  /**
   * Gets a solution object from the store.
   * @param name Name of a solution in the store.
   */
  get(name: string): any;
  /**
   * Gets the names of all solution definition
   * records in the store.
   * @param options Options for restricting results within the specified
   * properties.{
   * "label": "String",
   * "domainName": "String",
   * "scope": "String"
   * };
   */
  getAllNames(options: any): any[];
  /**
   * Replaces an existing object in the store with the
   * object passed as a parameter. The object name provided must be empty or
   * match.
   * @param name Name of the solution to update.
   * @param mlSolution SimilaritySolution()
   * object properties to update.
   */
  update(name: string, mlSolution: any): any;
}
declare class SimilaritySolutionVersion {
  /**
   * Gets solution object
   * properties
   * and version number.
   */
  getProperties(): any;
  /**
   * Gets training completion status.
   * @param includeDetails Flag that indicates whether to return status details.
   *
   * Valid values:
   * true: Return additional details.
   *
   * false: Do not return additional details.
   *
   *
   *
   *
   * Default: False
   */
  getStatus(includeDetails: boolean): any;
  /**
   * Gets the version number of a solution object.
   */
  getVersionNumber(): string;
  /**
   * Gets the input data for a prediction.
   * @param input GlideRecord or array of JSON objects containing field names and
   * values as key-value pairs.
   * @param options Optional values for filtering prediction
   * results.{
   * "apply_threshold": Boolean,
   * "top_n": Number
   * }
   */
  predict(input: any, options?: any): any;
}
declare class SLARepair {
  /**
   * Repair the task SLAs associated with the passed-in filter and source table.
   * @param filter Specify an encoded query that is used to retrieve a set of records from the
   * source table.
   * @param sourceTable Specify the name of a table that is (or extends) contract_sla, task_sla, or
   * task.
   */
  repairByFilter(filter: string, sourceTable: string): any;
  /**
   * Repair the task SLAs associated with the passed in GlideRecord.
   * @param now_GR Specify a GlideRecord for a table that is (or extends) contract_sla, task_sla,
   * or task.
   */
  repairByGlideRecord(now_GR: GlideRecord): any;
  /**
   * Repair the task SLAs associated with the passed in sys_id and source table.
   * @param sysId Specify the ID of a table that is (or extends) contract_sla, task_sla, or
   * task.
   * @param sourceTable Specify the name of a table that is (or extends) contract_sla, task_sla, or
   * task.
   */
  repairBySysId(sysId: string, sourceTable: string): any;
  /**
   * Enables or disables auditing when running a repair.
   * @param onOrOff Determines whether to enable or disable auditing.
   */
  setAuditEnabled(onOrOff: boolean): any;
  /**
   * Enables or disables running a workflow for each of the Task SLA records being repaired.
   * @param onOrOff Determines whether to enable or disable workflow.
   */
  setRunWorkflow(onOrOff: boolean): any;
  /**
   * Validates the repair request.
   * @param onOrOff Determines whether to enable or disable validation.
   */
  setValidateOnly(onOrOff: boolean): any;
}
declare class SLPServiceRegistryQuery {
  /**
   * Returns the Shazzam querier class name.
   */
  getShazzamQuerierClassname(): string;
  /**
   * Creates a scalar map for port probes to use in XML output to Shazzam!.
   */
  toPortProbeMap(): any;
}
declare class SNEventSenderProvider {
  /**
   * Returns an IEventSender object to use to send events from a MID Server
   * to a ServiceNow instance.
   */
  getEventSender(): any;
}
declare class SNMPGatherDocParts {
  /**
   * Returns the given XML document with any data gathered by prior SNMP probes.
   * @param doc The XML document for this sensor
   * @param probe The probe instance
   */
  gather(doc: string, probe: any): string;
}
declare class SNMPNetworkInterfaces {
  /**
   * Analyzes the SNMP data and reconciles the discovered NICs to the CMDB's
   * NICs.
   * @param cmdb_ci The sys_id of the CI
   * @param doc The SNMP data in XML form
   * @param isComputer If true, this is a computer; otherwise, false.
   * @param agentName Name of the MID server
   * @param ecc_sys_id The sys_id of the ECC queue record with the input.
   */
  process(
    cmdb_ci: string,
    doc: string,
    isComputer: boolean,
    agentName: string,
    ecc_sys_id: string,
  ): any;
}
declare class SNMPResponse {
  /**
   * Builds an index to all SNMP entities in the current object.
   * @param cur The current object
   * @param name The index name
   * @param extName The index extension
   */
  buildIndex(cur: any, name: string, extName: string): any;
  /**
   * Builds references to actual instances for all identified indexes (in the
   * discovery_snmp_ref table) that can be resolved.
   */
  buildReferences(): any;
  /**
   * Returns an array of OIDs that match the given ref_base and which have a defined,
   * non-null ref_leaf.
   * @param refBase The reference base
   * @param refLeaf The reference leaf
   */
  getAmbiguousOIDs(refBase: string, refLeaf: string): any[];
  /**
   * Returns the integer contained in the OID object with the given MIB name.
   * @param name The MIB name
   */
  getOIDInt(name: string): number;
  /**
   * Retrieves the OID object with the given MIB name from the response.
   * @param name The MIB name
   */
  getOIDObj(name: string): any;
  /**
   * Returns a hashmap of table entries under the given parent MIB name, with the given
   * entry MIB names.
   * @param parentName The parent MIB name
   * @param entryName The entry MIB name
   */
  getOIDTable(parentName: string, entryName: string): any;
  /**
   * Returns the text contained in the OID object with the given MIB name.
   * @param name The MIB name
   */
  getOIDText(name: string): string;
  /**
   * Resolves SNMP tables into hashmaps and OID values into primitives.
   * @param cur The SNMP table or OID value.
   */
  normalize(cur: any): any;
}
declare class StartDiscovery {
  /**
   * Adds an IP (or comma-separated list of IPs) to an existing discovery (used by networks
   * discovery).
   * @param status The discovery status
   * @param ip An IP address, or a comma-separated list of IP addresses.
   * @param sensor The discovery sensor
   */
  addAdditionalIP(status: string, ip: string, sensor: string): any;
  /**
   * Handles discovery of devices (whether basic or advanced) from a schedule.
   * @param ip An IP address, or a comma-separated list of IP addresses.
   * @param samePhase
   * @param sensor The discovery sensor
   */
  discoverFromSchedule(ip: string, samePhase: boolean, sensor: string): any;
  /**
   * Returns the cancel script.
   */
  getCancelScript(): string;
  /**
   * If the schedule specifies a cancel time, if necessary, schedules a job to cancel the
   * discovery.
   */
  scheduleCancelJob(): any;
  /**
   * Starts a discovery for a single IP using the specified schedule to get information such
   * as MID servers and behaviors.
   * @param schedule DiscoverySchedule instance for the schedule to use.
   * @param ip IP address to discover.Format: dot-formatted string
   */
  startFromIP(schedule: any, ip: string): string;
  /**
   * Invoked by the discovery script include to kick off a scheduled (or discover now)
   * discovery.
   * @param schedule The instance of discovery_schedule that this discovery is based on.
   * @param job The instance of sys_trigger that triggered this discovery.
   */
  startFromSchedule(schedule: GlideRecord, job: GlideRecord): any;
}
declare class StateManagementScriptableApi {
  /**
   * Add a CI action to a list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A list comma separated list of CI sys_ids.
   * @param ciActionName The CI action name.
   * @param ciActionListOld (Optional) A comma separated list of old CI actions that all CIs should be
   * in.
   * @param leaseTime (Optional) Time duration for which the lease is valid for specified CI Action.
   * In the format HH:MM:SS.
   */
  addBulkCIAction(
    requestorId: string,
    sysIdList: string,
    ciActionName: string,
    ciActionListOld?: string,
    leaseTime?: string,
  ): string;
  /**
   * Extend the CI-action-lease time for the registered user. If the previous lease has
   * expired, the new lease time starts now.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param ciSysId The CI's sys_id.
   * @param ciActionName The CI action name.
   * @param leaseTime Time duration for which the lease is valid for specified CI Action. In the
   * format HH:MM:SS.
   */
  extendCIActionLease(
    requestorId: string,
    ciSysId: string,
    ciActionName: string,
    leaseTime: string,
  ): string;
  /**
   * Returns a list of active CI actions for the specified CI.
   * @param ciSysId Sys_id of the CI.
   */
  getCIActions(ciSysId: string): string;
  /**
   * Returns the operational state of the CI.
   * @param ciSysId Sys_id of the CI.
   */
  getOperationalState(ciSysId: string): string;
  /**
   * Determines if the two specified actions are compatible.
   * @param actionName A CI action name
   * @param otherActionName A CI action name
   */
  isCompatibleCIAction(actionName: string, otherActionName: string): boolean;
  /**
   * Determines if the lease has expired for the requestor of a specified CI
   * Action.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param ciSysId The CI's sys_id.
   * @param ciActionName Name of the CI action.
   */
  isLeaseExpired(
    requestorId: string,
    ciSysId: string,
    ciActionName: string,
  ): string;
  /**
   * For a type of CI, determine if a CI action is not allowed for an operational
   * state.
   * @param ciType The CI type
   * @param opsLabel The operational state
   * @param actionName The CI action name
   */
  isNotAllowedAction(
    ciType: string,
    opsLabel: string,
    actionName: string,
  ): boolean;
  /**
   * For a type of CI, determine if an operational state transition is not
   * allowed.
   * @param ciType The CI type
   * @param opsLabel The label of the beginning operational state.
   * @param transitionOpsLabel The label of the ending operational state.
   */
  isNotAllowedOpsTransition(
    ciType: string,
    opsLabel: string,
    transitionOpsLabel: string,
  ): boolean;
  /**
   * Determines if the specified requestor is a valid active workflow user or a registered
   * user.
   * @param requestorId Sys_id of a workflow context or the GUID returned from the
   * registerOperator() method.
   */
  isValidRequestor(requestorId: string): string;
  /**
   * Registers an operator for a non-workflow user.
   */
  registerOperator(): string;
  /**
   * Removes a CI action for a list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A comma separated list of CI sys_ids
   * @param ciActionName The CI action name
   */
  removeBulkCIAction(
    requestorId: string,
    sysIdList: string,
    ciActionName: string,
  ): string;
  /**
   * Set the operational state for list of CIs.
   * @param requestorId A sys_id of a workflow context, or the GUID returned from the
   * registerOperator() method.
   * @param sysIdList A comma separated list of CI sys_ids.
   * @param opsLabel This is the string label of an operational_status choice.
   * @param opsStateListOld (Optional) A comma separated list of old CI states that all CIs should be
   * in.
   */
  setBulkCIOperationalState(
    requestorId: string,
    sysIdList: string,
    opsLabel: string,
    opsStateListOld?: string,
  ): string;
  /**
   * Unregisters an operator for non-workflow users.
   * @param requestorId Sys_id of a workflow context or the GUID returned from the
   * registerOperator() method.
   */
  unregisterOperator(requestorId: string): string;
}
declare class SummaryTableWriter {
  constructor(tableName: string, columnName: string);
  /**
   * Creates the summary set of records for reports.
   */
  generate(): any;
  /**
   * Defines the query to use to load the data for the summary record set.
   * @param query Query to use to load the summary data.
   */
  setQuery(query: string): any;
  /**
   * Defines the column on which to stack the incident records.
   * @param column Column that is used to stack the incident records.
   */
  setStackOn(column: string): any;
  /**
   * Sets the title of the summary set, which is also the chart title.
   * @param title Title given to the summary set that is used as the chart title. Also used as
   * the key field for chart generators to determine whether the data was
   * generated.
   */
  setTitle(title: string): any;
  /**
   * Sets the time field used for the X axis or stacking field; can also set the time
   * interval used to calculate the trend.
   * @param field Time field that is used for X axis values if grouping is not used. If grouping
   * is used, then this is the stacking field.
   * @param interval Time interval that is used to calculate the trend.
   */
  setTrend(field: string, interval: string): any;
}
declare class TableUtils {
  constructor(tableName: string);
  /**
   * Drops a database table.
   * @param tableName Name of the table to drop
   */
  drop(tableName: string): any;
  /**
   * Drops a database table and cleans up references to the table.
   * @param tableName Name of the table to drop
   */
  dropAndClean(tableName: string): any;
  /**
   * Drops a database table, all of it's extended tables, and cleans up references to the
   * tables.
   * @param tableName The table to drop
   */
  dropTableAndExtensions(tableName: string): any;
  /**
   * Returns the base table name from which the table was extended.
   */
  getAbsoluteBase(): string;
  /**
   * Returns the list of tables that extend a table, includes the base table.
   */
  getAllExtensions(): any;
  /**
   * Returns a list of all classes participating in the hierarchy of the specified
   * table.
   */
  getHierarchy(): any;
  /**
   * Returns a list of tables that extend a table.
   */
  getTableExtensions(): any;
  /**
   * Returns the table hierarchy.
   */
  getTables(): any;
  /**
   * Determines if a table has been extended.
   */
  hasExtensions(): boolean;
  /**
   * Determines if a table is a base class, meaning it has no parents and has
   * extensions.
   */
  isBaseClass(): boolean;
  /**
   * Determines if the table has no parents and no extensions.
   */
  isSoloClass(): boolean;
  /**
   * Checks to see if a table exists.
   */
  tableExists(): boolean;
}
declare class TaskStateUtil {
  ATTR_DEFAULT_CLOSE: string;
  ATTR_DEFAULT_WORK: string;
  ATTR_INACTIVE_STATES: string;
  SYSTEM_DEFAULT_CLOSE: number;
  SYSTEM_DEFAULT_WORK: number;
  SYSTEM_INACTIVE_STATES: number;
  constructor(task: GlideRecord);
  /**
   * Returns the value for the default closed state.
   */
  getDefaultCloseState(): number;
  /**
   * Returns the value for the default work state.
   */
  getDefaultWorkState(): number;
  /**
   * Returns a list of the inactive state values.
   */
  getInactiveStates(): any[];
  /**
   * Returns the active status of the specified state.
   * @param state The state value to check.
   */
  isStateInactive(state: string): boolean;
  /**
   * Decides whether the mark closed business rule should be run or
   * not.
   */
  runMarkClosed(): boolean;
  /**
   * Decides whether the task closer business rule should be run or
   * not.
   */
  runTaskCloser(): boolean;
  /**
   * Decides whether the task reopener business rule should be run or
   * not.
   */
  runTaskReopener(): boolean;
  /**
   * Enables the user to specify their own default work state.
   * @param defaultWorkState The value to use for the default work state.
   */
  setDefaultWorkState(defaultWorkState: string): any;
}
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
  getAllowXDragLeft(): boolean;
  /**
   * Returns the boolean value of the AllowXDragRight
   * property.
   */
  getAllowXDragRight(): boolean;
  /**
   * Returns the boolean value of the AllowXMove property.
   */
  getAllowXMove(): boolean;
  /**
   * Returns the boolean value of the AllowYMove property.
   */
  getAllowYMove(): boolean;
  /**
   * Returns the boolean value of the AllowYMovePredecessor
   * property.
   */
  getAllowYMovePredecessor(): boolean;
  /**
   * Returns the name of the current inner segment class for the
   * TimelineSpan.
   */
  getInnerSegmentClass(): string;
  /**
   * Returns the time in milliseconds of the end time of the inner segment portion of the
   * TimelineSpan .
   */
  getInnerSegmentEndTimeMs(): number;
  /**
   * Returns the time in milliseconds of the start time of the inner segment portion of the
   * TimelineSpan.
   */
  getInnerSegmentStartTimeMs(): number;
  /**
   * Returns a boolean that specifies whether or not the current timeline item has been modified after initialization.
   */
  getIsChanged(): boolean;
  /**
   * Returns a string that specifies the name of the icon class to use for displaying the
   * element on the timeline if the current instance has zero duration.
   */
  getPointIconClass(): string;
  /**
   * Returns an array of all the predecessor objects associated with the current instance.
   * Each array object is a HashMap that contains a predecessor_sys_id and
   * relationship_sys_id property.
   */
  getPredecessors(): any;
  /**
   * Returns the string name of the color specified for displaying this span.
   */
  getSpanColor(): string;
  /**
   * Returns the string that specifies the text to display adjacent to the time element.
   */
  getSpanText(): string;
  /**
   * Returns the start time in milliseconds of the current TimelineSpan
   * object.
   */
  getStartTimeMs(): number;
  /**
   * Returns the sys ID of the current object.
   */
  getSysId(): string;
  /**
   * Returns the name of the table where the sys ID is referenced.
   */
  getTable(): string;
  /**
   * Returns the text/html to display in the tooltip when the TimelineSpan
   * element is being hovered over.
   */
  getTooltip(): string;
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
declare class UPSHandler {
  /**
   * Classifies and identifies the UPSs.
   */
  classifyAndIdentify(): any;
}
declare class UserSkillAnalyzer {
  constructor();
  /**
   * Analyzes user skills against the required skills and sets the number of matching
   * skills, skill level gap, and qualification that can be collected from an instance.
   * @param requiredSkillsJson List of required skills to compare with user.Each skill is listed as a JSON
   * entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param userID Sys ID from the User [sys_user] table.
   * @param isSkillLevelEnforced True if user must have a minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  analyzeUserByID(
    requiredSkillsJson: string,
    userID: string,
    isSkillLevelEnforced: boolean,
  ): string;
  /**
   * Analyzes user skills against the required skills and sets the number of matching
   * skills, skill-level gap, and qualification that can be collected from an instance.
   * @param requiredSkillsJson List of required skills to qualify the users against.Each skill is listed as
   * a JSON entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param userSkillsJson List of user skills to determine qualification for required skills.Each
   * skill is listed as a JSON entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param isSkillLevelEnforced True if user must have minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  analyzeUserBySkills(
    requiredSkillsJson: string,
    userSkillsJson: string,
    isSkillLevelEnforced: boolean,
  ): string;
}
declare class UserSkillRanking {
  constructor();
  /**
   * Provides a list of qualified users based on matching mandatory skills and levels if the
   * isSkillLevelEnforced parameter is true).
   * @param requiredSkillsJson List of required skills to qualify users.Each skill is listed as a JSON
   * entry in the following format:
   * sys_id: String. Sys ID of skill from the Skills [cmn_skill] table.
   *
   * is_mandatory: Boolean. Flag that indicates whether the skill is
   * mandatory.
   *
   * level: String. Sys ID from the Skill Levels [cmn_skill_level] table.
   *
   *
   *
   * @param usersJson List of user Sys IDs from sys_user table (in JSON format) representing users to
   * be qualified against required skills.
   * @param rankType Enables sorting qualified users based on ranking type. Possible values are
   * comparators to provide sorted list of qualified users based on number of matching
   * skills and skill level gap:
   *
   *
   *
   * NO_RANKING (default) – Used if empty value provided.
   *
   * NUM_SKILLS – Number of skills matched against required skills.
   *
   * NUM_SKILL_ MATCHING_LEVEL – Number of user skills matching the required
   * skill level.
   *
   * LEAST_SKILL_ LEVEL_GAP – Finds user skill that most closely meets minimum
   * skill level requirements.
   *
   * MOST_SKILL_ LEVEL_GAP – Finds user that least meets minimum skill level
   * requirements.
   *
   * BEST_OPTIMUM_ USER – Finds optimum user for all skill levels.
   *
   *
   *
   * @param isSkillLevelEnforced True if user must have minimum skill level for all required mandatory skills,
   * false otherwise. Default: false.
   */
  getQualifiedRankedUsers(
    requiredSkillsJson: string,
    usersJson: string,
    rankType: string,
    isSkillLevelEnforced: boolean,
  ): string;
}
declare class VMUtils {
  /**
   * Converts a correlation ID into a UUID for a virtual machine in the ServiceNow
   * system.
   * @param correlationId The correlation ID to convert
   */
  turnCorrelationIdToUuid(correlationId: string): string;
  /**
   * Converts a WMware universal unique identifier (UUID) to a format that matches the
   * original format in the ServiceNow system.
   * @param uuid The UUID to convert.
   */
  turnUuidToCorrelationId(uuid: string): string;
}
declare class WalkWorkflow {
  constructor(workflowVersion: GlideRecord);
  /**
   * Computes the full sequence for every path.
   */
  computeFullSequences(): any;
  /**
   * Computes the sequences of activities.
   */
  computeSequences(): any;
  /**
   * Outputs the internal state of this class to gs.print().
   */
  dump(): any;
  /**
   * Outputs the sequences internal to this class to
   * gs.print().
   */
  dumpSequences(): any;
  /**
   * Outputs the shortest path orders internal to this object to
   * gs.print().
   */
  dumpShortestPathOrders(): any;
  /**
   * Returns all the activities at the specified shortest path order.
   * @param order The order number the client is interested in.
   */
  getActivitiesAtOrder(order: number): string;
  /**
   * Returns the activity sequences.
   */
  getSequences(): string;
  /**
   * Walks the workflow and sets up the activity shortest path ordering.
   * @param fullSequences (Optional) If true, computes the full sequences. Default
   * is false.
   */
  walk(fullSequences?: boolean): any;
}
declare class WFActivityHandler {
  /**
   * Logs a debug message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  debug(msg: string, args: any[]): any;
  /**
   * Logs a debug message.
   * @param msg Message to send to the log.
   * @param args String to send to the log
   */
  debug(msg: string, args: string): any;
  /**
   * Generates approvals and tasks before the activity runs for a preview of upcoming
   * work.
   * @param activityId Sys_id of this running activity. Located in the Workflow Activities
   * [wf_activity] table.
   * @param order The order number associated with the task or approval.
   * @param startAtDspValue The starting time for the task or approval in GlideDateTime
   * format.
   * @param noCreateFlag Flag that indicates whether to skip creating an approval record.
   *
   * Valid values:
   * true: Do not create an approval record.
   *
   * false: Create an approval record.
   *
   *
   *
   *
   * Default: True
   */
  generate(
    activityId: string,
    order: string,
    startAtDspValue: string,
    noCreateFlag: boolean,
  ): any;
  /**
   * Logs an information message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  info(msg: string, args: any[]): any;
  /**
   * Logs an information message.
   * @param msg Message to send to the log.
   * @param args String to send to the log.
   */
  info(msg: string, args: string): any;
  /**
   * Evaluates activity variables in the script.
   * @param str String that possibly contains embeded el.
   */
  js(str: string): string;
  /**
   * Event handler for cancel event.
   */
  onCancel(): any;
  /**
   * Virtual method. Activity subclasses must override this method to perform work appropriate to the activity.
   */
  onExecute(): any;
  /**
   * Enables activities to run a script contained in an activity variable of type script.
   * @param script String containing valid Javascript.
   */
  runScript(script: string): any;
  /**
   * Sets the activity output property.
   */
  setActivityOutput(): any;
  /**
   * Sets the activity result as failed with an optional reason string.
   * @param reason (Optional) Description of the reason this activity failed.
   */
  setResultFailed(reason?: string): any;
  /**
   * Sets the result of this activity as successful.
   */
  setResultSucceeded(): any;
  /**
   * Logs a warning message.
   * @param msg Message to send to the log.
   * @param args Array of values to send to the log
   */
  warn(msg: string, args: any[]): any;
  /**
   * Logs a warning message.
   * @param msg Message to send to the log.
   * @param args String to send to the log
   */
  warn(msg: string, args: string): any;
}
declare class WindowsOSNameHelper {
  /**
   * Formats the given Windows OS name.
   * @param name The name to format
   */
  formatWindowsOSName(name: string): string;
  /**
   * Ensures that the OS choice is valid.
   * @param value The value to validate
   */
  makeOSChoiceValid(value: string): any;
  /**
   * Cleans up the specified Windows OS name by stripping out incorrect characters,
   * incorrect capitalization, extra spaces, or trailing spaces.
   * @param name The name to clean up.
   */
  osCleanupName(name: string): string;
}
declare class Workflow {
  constructor();
  /**
   * Sends the specified event (message) into the workflow context to pass along to the
   * executing activities.
   * @param contextId The context ID.
   * @param eventName The name of the event.
   */
  broadcastEvent(contextId: string, eventName: string): any;
  /**
   * Cancels all running workflows on this record by broadcasting the
   * cancel event to activities in all running workflows on this
   * record.
   * @param record GlideRecord on any table. All workflows running on this
   * record will be cancelled.
   */
  cancel(record: GlideRecord): any;
  /**
   * Cancels this running context by broadcasting a cancel event to
   * activities in this workflow context.
   * @param context GlideRecord of the running context to cancel.
   */
  cancelContext(context: GlideRecord): any;
  /**
   * Deletes all the workflows on the record.
   * @param current GlideRecord for which the caller wants to delete all
   * workflows. This can be any record on any table.
   */
  deleteWorkflow(current: GlideRecord): any;
  /**
   * Fires the named event on the input record.
   * @param eventRecord The event record.
   * @param eventName The name of the event to send to the executing workflow.
   */
  fireEvent(eventRecord: GlideRecord, eventName: string): any;
  /**
   * Fires the named event on the record specified by record ID.
   * @param eventRecordId The sys_id of the glide record.
   * @param eventName The name of the event to send to the executing workflow.
   */
  fireEventById(eventRecordId: string, eventName: string): any;
  /**
   * Returns all workflow contexts for a specified record.
   * @param record GlideRecord for which the caller wants a list of all
   * workflow contexts. This can be any record on any table for which the caller wants
   * the running workflow contexts.
   */
  getContexts(record: GlideRecord): GlideRecord;
  /**
   * Gets the estimated time for a workflow to complete.
   * @param workflowId Sys_id of the workflow (table wf_workflow) to get the estimated run
   * time.
   */
  getEstimatedDeliveryTime(workflowId: string): string;
  /**
   * Get the estimated elapsed execution time for the workflow version.
   * @param wfVersion GlideRecord on table wf_workflow_version of a specific
   * workflow version for which the caller wants the estimated during of
   * executing.
   */
  getEstimatedDeliveryTimeFromWFVersion(wfVersion: GlideRecord): string;
  /**
   * Gets the appropriate workflow return value for the input workflow ID.
   * This is either the workflow checked out by the current user or the published workflow with the most recent date.
   * @param workflowID The sys_id of the workflow (table wf_workflow)
   * @param amount amount
   * @param result True, if true
   */
  getReturnValue(workflowID: string, amount: number, result: boolean): any;
  /**
   * Gets all the currently running workflow contexts for the input record.
   * @param record GlideRecord of the record for which the caller wants a list
   * of all running workflows.
   */
  getRunningFlows(record: GlideRecord): GlideRecord;
  /**
   * Gets the appropriate workflow version for the input workflow ID.
   * This is either the workflow checked out by the current user or the published workflow with the most recent date.
   * @param workflowID The sys_id of the workflow (table wf_workflow)
   */
  getVersion(workflowID: string): any;
  /**
   * Returns the appropriate workflow version for the input workflow name.
   * @param workflowName Name of the workflow (table wf_workflow)
   */
  getVersionFromName(workflowName: string): any;
  /**
   * Returns the sys_id of the workflow associated with the specified workflow
   * name.
   * @param workflowName Name of the workflow.
   */
  getWorkflowFromName(workflowName: string): string;
  /**
   * Determines if a specified record has any workflow contexts associated to it.
   * @param record GlideRecord under scrutiny. This
   * GlideRecord can be from any table.
   */
  hasWorkflow(record: GlideRecord): boolean;
  /**
   * Recalculates the approvals and tasks for a workflow by adding new approvals and tasks,
   * while not resetting current approvals and tasks.
   * @param current GlideRecord of the record this workflow is executing. This
   * can by any record on any table.
   * @param maintainStateFlag Flag that indicates whether to maintain all approvals and tasks in their
   * current state.Valid values:
   * true: Maintain all approvals and tasks in their current state.
   *
   * false: Update all approval and task states.
   *
   *
   *
   */
  restartWorkflow(current: GlideRecord, maintainStateFlag: boolean): any;
  /**
   * Runs all workflows for a given record in a given table and its descendant tables.
   * @param record GlideRecord to run workflows against.
   * @param operation Database operation.Valid values:
   * insert
   *
   * update
   *
   * delete
   *
   *
   *
   */
  runFlows(record: GlideRecord, operation: string): any;
  /**
   * Starts a specified workflow.
   * @param workflowId The sys_id of the workflow to start. This sys_id refers to table
   * wf_workflow.
   * @param current The record to use as current in this workflow. This is normally from the
   * Table field of the workflow properties for this
   * workflow.
   * @param operation The operation to perform on current. Possible values:
   * insert, update,
   * delete.
   * @param vars Collection of variables to add to the workflow
   */
  startFlow(
    workflowId: string,
    current: GlideRecord,
    operation: string,
    vars: any[],
  ): void;
  /**
   * Helper method for business rule Auto start on context.
   * @param context GlideRecord on table wf_context of a new record (the "current" record in the
   * business rule).
   * @param operation Database operation being performed. One of insert,
   * update, delete.
   */
  startFlowFromContextInsert(context: GlideRecord, operation: string): any;
  /**
   * Used by business rule Start Workflow on table task_sla. This starts
   * a workflow and the extra arguments to this method are used by activity "Timer" to pause the
   * execution of the workflow for some duration.
   * @param workflowID The sys_id of the workflow to start. This sys_id refers to table
   * wf_workflow.
   * @param retroactiveMSecs Delay in milliseconds used by Activity Timer.
   * @param current GlideRecord of the record to use as current in this workflow. This is normally
   * from the Table field of the workflow properties for this
   * workflow
   * @param operation Database operation being performed.One of insert,
   * update, delete.
   * @param vars Collection of variables to add to the workflow.
   * @param withSchedule Schedule used by Activity Timer
   */
  startFlowRetroactive(
    workflowID: string,
    retroactiveMSecs: number,
    current: GlideRecord,
    operation: string,
    vars: any[],
    withSchedule: any,
  ): GlideRecord;
}
declare class WorkflowDuration {
  /**
   * Adds the number of seconds to the specified start date/time.
   * @param record description
   * @param amount amount
   */
  addSeconds(record: GlideRecord, amount: number): boolean;
  /**
   * Calculates the number of seconds and the due date.
   * @param record The record that contains the fields with the schedule, timezone, and date/time
   * information. This is almost always
   * activity.vars.__var_record__.
   */
  calculate(record: GlideRecord): any;
  /**
   * Calculates the number of seconds remaining to the specified end date/time.
   * @param record The record that contains the fields with the schedule, timezone, and date/time
   * information. This is almost always
   * activity.vars.__var_record__.
   */
  calculateTimeLeft(record: GlideRecord): any;
  /**
   * Returns the end date/time set by a call to
   * calculate(record).
   */
  getEndDateTime(): GlideDateTime;
  /**
   * Returns the seconds value that was set by a call to
   * calculate(record).
   */
  getSeconds(): number;
  /**
   * Returns the totalSeconds value that was set by a call to calculate(record).
   */
  getTotalSeconds(): number;
  /**
   * Sets the end date/time to use when calculating the remaining time.
   * @param dt The end date/time to use.
   */
  setEndDateTime(dt: GlideDateTime): any;
  /**
   * Sets the end date/time to use when calculating the remaining time.
   * @param dt The end date/time to use.
   */
  setEndDateTime(dt: string): any;
  /**
   * Sets the start date/time to use in the calculations.
   * @param dt The start date/time to use.
   */
  setStartDateTime(dt: GlideDateTime): any;
  /**
   * Sets the start date/time to use in the calculations.
   * @param dt The start date/time to use, in GMT.
   */
  setStartDateTime(dt: string): any;
  /**
   * Sets the used seconds compensation, where the number of seconds is
   * the number of seconds inside of any schedule.
   * @param secs The number of used seconds to set.
   */
  setUsedSecs(secs: number): any;
  /**
   * Sets the workflow schedule/timezone.
   * Used for schedule_type
   * workflow_schedule and timezone_type workflow_timezone).
   * @param schedule The schedule to use. Usually from the workflow
   * context.schedule.
   * @param timezone The timezone to use. Usually from the workflow
   * context.timezone.
   */
  setWorkflow(schedule: any, timezone: any): any;
}
declare class WorkflowModelManager {
  constructor(contextId: string);
  /**
   * Retrieves the history activity that is cached by the
   * wf_history.sys_id provided in the argument.
   * @param haRecordSysId Sys_id of the desired Activity History  [wf_history] record.
   */
  getActivityHistoryRecordById(haRecordSysId: string): any;
  /**
   * Retrieves the history activities that executed and transitioned into the one represented
   * by the sys_id in the argument.
   * @param description ActivityHistoryRecord JavaScript object.
   */
  getAllTransitionedIntoActivity(description: any): any;
  /**
   * Retrieves the history activities that executed and transitioned into the one represented
   * by the sys_id in the argument.
   * The next status is based on the wf_activity.sys_id
   * associated with the activity represented in the haRecord existing as a TO in a transition
   * associated with any ActivityHistoryRecords that executed in the workflow's history. (This
   * differs from getPreviousByTransition, which returns only TO transitions
   * that come before the haRecord in the execution sequence (by time).) The return value is a
   * collection of ActivityHistoryRecords that identify the argument haRecord.wfaId as their TO
   * activity.
   * @param haRecordSysId The sys_id of the activity history (table wf_history).
   */
  getAllTransitionedIntoActivityId(haRecordSysId: string): any;
  /**
   * This is the worker method that must be called to initialize the
   * WorkflowModelManager object.   In the process of initializing the
   * WorkflowModelManager object, getExecutedHistory() creates and populates
   * the activityHistoryRecord data object array (which is a member of the
   * WorkflowModelManager class). Most
   * WorkflowModelManager methods return a subset of the
   * activityHistoryRecord array. Your script can then call one or more of
   * the activityHistoryRecord methods to accomplish further
   * work.
   */
  getExecutedHistory(): string;
  /**
   * Gets the list of wf_history.sys_ids of all activities that
   * successfully executed and were not rolled back or skipped up to the moment the function was
   * called.
   */
  getFinalExecutedActivityIdList(): string;
  /**
   * Queries the wf_history table by context and retrieves all the activities executed in the
   * workflow given by the context set in the construction of this object.
   */
  getFinalExecutedActivityList(): any;
  /**
   * Retrieves the history activity that executed just after the one provided in the argument.
   * @param haRecord ActivityHistoryRecord JavaScript object.
   */
  getNextByExecutedOrder(haRecord: any): any;
  /**
   * Retrieves the history activity that is cached by the
   * wf_history.sys_id provided in the argument and then calls into
   * getNextByExecutedOrder() with the retrieved JavaScript object.
   * @param haRecordSysId The sys_id of the activity history (table wf_history).
   */
  getNextByExecutedOrderId(haRecordSysId: string): any;
  /**
   * Retrieves the history activity that executed just after the one identified by the sys_id
   * provided in the argument.
   * @param haRecordSysId Sys_id of the desired Activity History  [wf_history] record.
   */
  getNextByTransitionId(haRecordSysId: string): any;
  /**
   * Retrieves the history activity that executed just previous to the one provided in the
   * argument.
   * @param haRecord ActivityHistoryRecord JavaScript object
   */
  getPreviousByExecutedOrder(haRecord: any): any;
  /**
   * Retrieves the history activity cached by the wf_history.sys_id
   * provided in the argument, then calls getPreviousByExecutedOrder() with the
   * retrieved JavaScript object.
   * @param haRecordSysId Workflow history system ID (wf_history.sys_id)
   */
  getPreviousByExecutedOrderId(haRecordSysId: string): any;
  /**
   * Retrieves the history activities that executed just prior to the one provided in the
   * argument.
   * @param haRecord ActivityHistoryRecord JavaScript object.
   */
  getPreviousByTransition(haRecord: any): any;
  /**
   * Retrieves the history activities that executed just prior to the one provided in the
   * argument.
   * @param haRecordSysId Sys_id of the activity history. Located in the wf_history table.
   */
  getPreviousByTransitionId(haRecordSysId: string): any;
}
declare class WorkflowModelManagerAjax {
  /**
   * Puts the execution history into the return parameter based on the query
   * string.
   */
  getExecutedHistory(): any;
  /**
   * Returns the final execution activity list based on a query string.
   */
  getFinalExecutedActivityIdList(): any;
  /**
   * Puts the rollback activity list into the return parameter based on the query
   * string.
   */
  getRolledBackActivityIdList(): any;
}
declare class WorkflowScheduler {
  /**
   * Starts the workflow specified in current, which is a record in table
   * wf_workflow_schedule.
   */
  run(): any;
}
declare class WorkflowTimeline {
  /**
   * Generates the Ajax response for the timeline.
   */
  getitems(): any;
}
declare class XMLUtilJS {
  /**
   * Provides escape text for a given string.
   * @param text The text to format.
   */
  escapeForXMLText(text: string): string;
  /**
   * Converts a string to an XML value.
   * @param str The string to convert.
   */
  stringToValue(str: string): string;
  /**
   * Provides un-escaped XML for a given string.
   * @param text The XML text to clean up.
   */
  unescapeForXMLText(text: string): string;
  /**
   * Converts an XML value to a string.
   * @param XMLvalue The XML to convert
   */
  valueToString(XMLvalue: string): string;
}

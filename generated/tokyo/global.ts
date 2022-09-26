// @ts-nocheck
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
  getDateFromScheduleDateTime(scheduleDateTime: any): string;
  /**
   * If provided with a formatted date time string, it returns a GlideScheduleDateTime
   * object.
   * @param sdtStr Formatted ScheduleDateTime.
   * @param timeZone If provided, will be used for the generated GlideScheduleDateTime.
   */
  getSDT(sdtStr: string, timeZone: string): any;
  /**
   * Returns the time from the GlideScheduleDateTime.
   * @param scheduleDateTime A GlideScheduleDateTime representation of the date and time.
   */
  getTimeFromScheduleDateTime(scheduleDateTime: any): string;
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
declare class ui_action {
  /**
   * Gets a GlideURI object to determine the user view.
   */
  getGlideURI(): any;
  /**
   * Gets the URL of the return page in view after a UI action is complete.
   */
  getReturnURL(): string;
  /**
   * Gets the value of a URL parameter.
   * @param parameterName Name of the URL parameter name to be queried for the URL parameter
   * value.
   */
  getURLParameter(parameterName: string): string;
  /**
   * Opens a page with a GlideRecord in the user view.
   * @param gr GlideRecord of the page to be opened in the user view.
   */
  openGlideRecord(gr: GlideRecord): any;
  /**
   * Indicates whether to enable or disable pop-up windows on the page in the current
   * view.
   * @param noPop Flag indicating whether to enable or disable pop-up windows on the page:
   * true: Disables pop-up windows.
   *
   * false: Default. Enables pop-up windows.
   *
   *
   */
  setNoPop(noPop: boolean): any;
  /**
   * Sets the redirect URI for this transaction, which determines the next page the user
   * sees.
   * @param URL URL to set as the redirect. You can provide the URL as a string or a GlideRecord. If you pass the URL as a GlideRecord, this value takes the
   * focus to that record's form.
   */
  setRedirectURL(URL: any): any;
  /**
   * Sets the return URI for this transaction after a UI action is complete. You can use
   * this method to determine what page the user has in view when they return from
   * submit.
   * @param URL URI to set as the return location after a UI action is complete. You can
   * provide the URL as a string or a GlideRecord.
   */
  setReturnURL(URL: any): any;
  /**
   * Sets a URL parameter name and value.
   * @param parameterName Name of the URL parameter.
   * @param parameterValue Value of the parameter.
   */
  setURLParameter(parameterName: string, parameterValue: string): any;
}
declare class CertificateEncryption {
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
   * @param certificateID Sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param algorithm Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
   */
  getThumbPrint(certificateID: string, algorithm: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore
   * entry.
   * @param certificateID Sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Alias name for the certificate.
   * @param algorithm Algorithm to use to create the hash, such as SHA-1, SHA-256, and so on.
   */
  getThumbPrintFromKeyStore(
    certificateID: string,
    alias: string,
    algorithm: string,
  ): string;
  /**
   * Signs the data using the private key and the specified algorithm.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Private key name.
   * @param aliaspassword Password for the private key.
   * @param algorithm Algorithm to use. Must be one of the following values:
   * NONEwithRSA
   *
   * MD2withRSA
   *
   * MD5withRSA
   *
   * SHA1withRSA
   *
   * SHA224withRSA
   *
   * SHA256withRSA
   *
   * SHA384withRSA
   *
   * SHA512withRSA
   *
   * NONEwithDSA
   *
   * SHA1withDSA
   *
   * SHA224withDSA
   *
   * SHA256withDSA
   *
   * NONEwithECDSA
   *
   * SHA1withECDSA
   *
   * SHA224withECDSA
   *
   * SHA256withECDSA
   *
   * SHA384withECDSA
   *
   * SHA512withECDSA
   *
   *
   * @param datatosign Data to sign.
   */
  sign(
    certificateID: string,
    alias: string,
    aliaspassword: string,
    algorithm: string,
    datatosign: string,
  ): string;
}
declare class FlowScriptAPI {
  /**
   * Returns the context ID of the running flow.
   */
  getContextID(): string;
}
declare class GlideApplicationProperty {
  /**
   * Returns the value for the specified application property and domain sys_id.
   * @param name Name of the application property to return.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Session domain
   */
  getValue(name: string, domainSysId?: string): string;
  /**
   * Stores the specified value in the specified application property for the specified
   * domain, or the current session domain if not specified.
   * @param name Name of the application property to save.Note: If the application is not
   * global, you must prefix the name of the sys_application_property with the
   * application's scope.
   * @param value Value to store in the specified application property.
   * @param domainSysId Optional. Sys_id of the domain associated with the application
   * property.Default: Current session domain
   */
  setValue(name: string, value: string, domainSysId?: string): boolean;
}
declare class GlideCalendarDateTime {}
declare class GlideDBFunctionBuilder {
  constructor();
  /**
   * Adds the values of two or more integer fields.
   */
  add(): any;
  /**
   * Builds the database function defined by the GlideDBFunctionBuilder object.
   */
  build(): any;
  /**
   * Concatenates the values of two or more fields.
   */
  concat(): any;
  /**
   * Defines a constant value to use in the function. If used with the
   * dayofweek() method, the string defines whether to use Sunday or Monday as
   * the first day of the week.
   * @param constant A constant value used in a function. When used with the
   * dayofweek() method, the value defines whether the week starts
   * on a Sunday or Monday.
   *
   *
   * 1: Week begins on Sunday.
   *
   * 2: Week begins on Monday.
   *
   *
   *
   * This definition enables the dayofweek() method to return
   * the correct day of the week from a given date. If a value other than 1 or 2 is
   * provided, the dayofweek() method uses Sunday as the first day
   * of the week.
   */
  constant(constant: string): any;
  /**
   * Determines the duration using a given start date/time and end date/time.
   */
  datediff(): any;
  /**
   * Returns an integer representing the day of the week for a given date.
   */
  dayofweek(): number;
  /**
   * Divides the value of one integer field by another.
   */
  divide(): any;
  /**
   * Defines a field on which a SQL operation is performed.
   * @param field The field on which you are performing the SQL operation.
   */
  field(field: string): any;
  /**
   * Determines the number of code units in a field.
   */
  length(): any;
  /**
   * Multiplies the values of two integer fields.
   */
  multiply(): any;
  /**
   * Subtracts the value of one integer field from another.
   */
  subtract(): any;
}
declare class GlideDigest {
  constructor();
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getMD5Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in Base64.
   * @param inputStream The source input stream.
   */
  getMD5Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getMD5Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getMD5HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getSHA1Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA1Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getSHA1Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA1HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in Base64.
   * @param source The source string.
   */
  getSHA256Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA256Base64FromInputStream(
    inputStream: GlideScriptableInputStream,
  ): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in hexadecimal.
   * @param source The source string.
   */
  getSHA256Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA256HexFromInputStream(inputStream: GlideScriptableInputStream): string;
}
declare class GlideDuration {
  constructor();
  constructor(another: GlideDuration);
  constructor(milliseconds: number);
  constructor(displayValue: string);
  /**
   * Adds the duration of the specified GlideDuration object to the current GlideDuration
   * object.
   * @param duration GlideDuration object that contains the duration value to add to the current
   * GlideDuration object.
   */
  add(duration: GlideDuration): GlideDuration;
  /**
   * Returns the duration value in the specified format.
   * @param format Duration format.Format: Global date and time field format
   */
  getByFormat(format: string): string;
  /**
   * Returns the number of days.
   */
  getDayPart(): number;
  /**
   * Returns the display value of the duration in number of days, hours, and
   * minutes.
   */
  getDisplayValue(): string;
  /**
   * Returns the duration value in "d HH:mm:ss" format.
   */
  getDurationValue(): string;
  /**
   * Returns the rounded number of days. If the time part is more than 12 hours, the return
   * value is rounded up. Otherwise, it is rounded down.
   */
  getRoundedDayPart(): number;
  /**
   * Returns the internal date/time value of the current GlideDuration object.
   */
  getValue(): string;
  /**
   * Sets the duration display value.
   * @param asDisplayed Display duration value to set.Format: d HH:mm:ss where "d" is number of
   * days
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the internal date/time value of the GlideDuration object.
   * @param o Date and time to use as the endpoint for the calculated duration time.
   * Format: YYYY-MM-DD HH:mm:ss
   */
  setValue(o: any): any;
  /**
   * Subtracts the duration of the specified GlideDuration object to the current
   * GlideDuration object.
   * @param duration GlideDuration object that contains the duration value to subtract from the
   * current GlideDuration object.
   */
  subtract(duration: GlideDuration): GlideDuration;
}
declare class GlideElementCurrency2 {
  /**
   * Returns an FX Currency field display string, as entered by the user, from the associated
   * GlideRecord.
   */
  getAsEnteredDisplayValue(): string;
  /**
   * Returns the display value of an FX Currency field within the associated
   * GlideRecord.
   */
  getDisplayValue(): string;
  /**
   * Returns the reference currency value of an FX Currency field within the associated
   * GlideRecord.
   */
  getReferenceDisplayValue(): string;
  /**
   * Returns the session currency value of the associated FX Currency field within the
   * current GlideRecord.
   */
  getSessionDisplayValue(): string;
  /**
   * Sets the display value of an FX Currency field with the specified currency
   * value.
   * @param displayValue Value to set in the FX Currency field in the format &lt;currency
   * code&gt;;&lt;currency amount&gt;. You must format the &lt;currency
   * amount&gt; field in the user's locale.For example, if the user's locale
   * is USA/eng, the passed in &lt;currency amount&gt; would be 123.45.
   * If the user's local is FRA/fre, the passed in &lt;currency
   * amount&gt; would be 123,45.
   */
  setDisplayValue(displayValue: string): any;
}
declare class GlideElementDescriptor {
  /**
   * Returns the encryption type used for attachments on the element's table.
   */
  getAttachmentEncryptionType(): string;
  /**
   * Returns the element's encryption type.
   */
  getEncryptionType(): string;
  /**
   * Returns the element's internal data type.
   */
  getInternalType(): string;
  /**
   * Returns the element's label.
   */
  getLabel(): string;
  /**
   * Returns the element's length.
   */
  getLength(): number;
  /**
   * Returns the element's name.
   */
  getName(): string;
  /**
   * Returns the element's plural label.
   */
  getPlural(): string;
  /**
   * Returns true if an encrypted attachment has been added to the table.
   */
  hasAttachmentsEncrypted(): boolean;
  /**
   * Returns true if the element is an automatically generated or system field.
   */
  isAutoOrSysID(): boolean;
  /**
   * Returns true if the element is defined as a dropdown choice in its dictionary
   * definition.
   */
  isChoiceTable(): boolean;
  /**
   * Returns true if an element is encrypted.
   */
  isEdgeEncrypted(): boolean;
  /**
   * Determines whether the element is mandatory and must contain a value before the record
   * can be saved.
   */
  isMandatory(): boolean;
  /**
   * Returns true if the element is a virtual element.
   */
  isVirtual(): boolean;
}
declare class GlideEmailOutbound {
  constructor();
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   */
  addAddress(type: string, address: string): any;
  /**
   * Adds the address to either the cc or bcc list.
   * @param type Either cc or bcc, determines the list to which the address is added.
   * @param address The recipient's email address.
   * @param displayName The name to be shown instead of the email address.
   */
  addAddress(type: string, address: string, displayName: string): any;
  /**
   * Returns the email's subject line.
   */
  getSubject(): string;
  /**
   * Returns the email's watermark.
   */
  getWatermark(): string;
  /**
   * Sets the body of the email.
   * @param bodyText The body of the email.
   */
  setBody(bodyText: string): any;
  /**
   * Sets the sender's address.
   * @param address The sender's email address.
   */
  setFrom(address: string): any;
  /**
   * Sets the reply to address.
   * @param address The reply to email address.
   */
  setReplyTo(address: string): any;
  /**
   * Sets the email's subject line.
   * @param subject Text for the subject line.
   */
  setSubject(subject: string): any;
}
declare class GlideFilter {
  constructor(filter: string, title: string);
  /**
   * Compares a specified filter to the contents of a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param filter Encoded query string in standard Glide format.
   * See Encoded query
   * strings.To exclude null values from GlideFilter query results, add
   * ISNOTEMPTY to the query condition.
   * Note: The filter values
   * are case-sensitive. In addition, you cannot use setCaseSensitive(false) to change the change the
   * case-sensitive value.
   * @param match Optional. Flag that indicates whether all conditions must be met if the
   * filter parameter contains multiple conditions. Valid
   * values:
   *
   * true: All conditions must be met for the method to return true.
   *
   * false: Only one of the conditions must be met for the method to return
   * true.
   *
   *
   * Default: true
   */
  checkRecord(now_GR: GlideRecord, filter: string, match?: boolean): boolean;
  /**
   * Evaluates a filter against a specified GlideRecord.
   * @param now_GR GlideRecord to evaluate.
   * @param match Flag that indicates whether all filter conditions must match.
   *
   * Valid values:
   * true: All filter conditions must match.
   *
   * false: Filter condition match is not required.
   *
   *
   *
   *
   * Default: false
   */
  match(now_GR: GlideRecord, match: boolean): boolean;
  /**
   * Enables or disables case-sensitive filter results.
   * @param caseSensitive Flag that indicates whether the filter is case-sensitive.Valid values:
   * true: The filter is case-sensitive.
   *
   * false: The filter is case-insensitive.
   *
   *
   *
   * Default: true
   */
  setCaseSensitive(caseSensitive: boolean): any;
}
declare class GlideFormScratchpad {}
declare class GlideImportLog {
  constructor(importSetRun?: GlideImportSetRun, source?: string);
  /**
   * Logs a message of type Error to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  error(message: string, source?: string): any;
  /**
   * Returns a sys_id of the Import Run record associated with this Import Log.
   */
  getImportRunHistory(): string;
  /**
   * Logs a message of type Info to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  info(message: string, source?: string): any;
  /**
   * Associates the GlideImportLog object with a specific Import Set Run record.
   * @param importRunHistory The sys_id of a record from the Transform History [sys_import_set_run]
   * table.
   */
  setImportRunHistory(importRunHistory: string): any;
  /**
   * Logs a message of type Warn to the Import Log [import_log] table.
   * @param message Log message. Maximum length 4000 characters.
   * @param source Optional. Source field value attached to the Import Log
   * record that defines where in the Import Set process this message was logged from.
   * For example, Loading could represent loading step, Cleanup could represent during
   * the cleanup after the transform, and so on.
   */
  warn(message: string, source?: string): any;
}
declare class GlideImportSetRun {
  constructor(importSetID?: string);
  /**
   * Gets the sys_id of the Import Set Run associated with the transformation.
   */
  getImportSetRunSysID(): string;
}
declare class GlideImportSetTransformer {
  constructor();
  /**
   * Gets the Import Set Run object associated with a GlideImportSetTransformer
   * object.
   */
  getImportSetRun(): GlideImportSetRun;
  /**
   * Returns a Boolean value specifying whether or not there was an error during a
   * transformation.
   */
  isError(): boolean;
  /**
   * Associates an Import Set record with a specific GlideImportSetTransformer
   * object.
   * @param id The sys_id of an Import Set record from the Import Sets [sys_import_set]
   * table.
   */
  setImportSetID(id: string): any;
  /**
   * Associates an Import Set Run object with a specific GlideImportSetTransformer
   * object.
   * @param importSetRun GlideImportSetRun object representing the ImportSetRun record to track the
   * transformation history.
   */
  setImportSetRun(importSetRun: GlideImportSetRun): any;
  /**
   * Associates a GlideImportLog object with a specific GlideImportSetTransformer
   * object.
   * @param log GlideImportLog object to link to the Import Set history. Once set, any call
   * from the GlideImportLog object is associated with the Import Set run history for
   * that specific transform.
   */
  setLogger(log: GlideImportLog): any;
  /**
   * Associates a Transform Map with a specific GlideImportSetTransformer
   * object.
   * @param mapID A sys_id from the Table Transform Maps [sys_transform_map] table.
   */
  setMapID(mapID: string): any;
}
declare class GlideLocale {
  /**
   * Returns the GlideLocale object.
   */
  get(): GlideLocale;
  /**
   * Returns the decimal separator.
   */
  getDecimalSeparator(): string;
  /**
   * Returns the grouping separator.
   */
  getGroupingSeparator(): string;
}
declare class GlidePluginManager {
  /**
   * Determines if the specified plugin has been activated.
   * @param pluginID Unique plugin identifier.
   */
  isActive(pluginID: string): boolean;
}
declare class GlideQuery {
  constructor(table: string);
  /**
   * Aggregates a field using a specified aggregation function.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Field on which to perform the operation.
   */
  aggregate(aggregateType: string, field: string): GlideQuery;
  /**
   * Returns the aggregate average of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  avg(field: string): any;
  /**
   * Returns the number of records that match the query.
   */
  count(): number;
  /**
   * Deletes all records in the table specified by the preceding Where clauses.
   */
  deleteMultiple(): any;
  /**
   * Disables updating system fields, or fields with a name that starts with the
   * sys prefix, such as sys_created_on, sys_updated_on, and sys_mod_count. Only
   * applies to the specified query.
   */
  disableAutoSysFields(): GlideQuery;
  /**
   * Disables any business rules, flows, workflows, or audit records that would run or be
   * created as the result of the query.
   */
  disableWorkflow(): GlideQuery;
  /**
   * Forces a database update even when no record changes are made. For example, you can use
   * this method to force a business rule to execute.
   */
  forceUpdate(): GlideQuery;
  /**
   * Returns a single record from the query.
   * @param key Sys_id of the record to return.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  get(key: string, selectedFields?: any[]): any;
  /**
   * Returns an Optional object containing a single record based on a set of name-value
   * pairs to query by. Assumes the '=' operator for each name-value pair.
   * @param keyValues Object where the keys are the name of the fields, and the values are the values
   * to query for.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  getBy(keyValues: any, selectedFields?: any[]): any;
  /**
   * Groups the query results by a designated field or fields.
   * @param fields Field or fields to group the results by.
   */
  groupBy(fields: string): GlideQuery;
  /**
   * Filters aggregate groups so that you can display only groups of results that match a
   * specified condition.
   * @param aggregateType The type of aggregation function to perform. Options include:
   *
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Field on which to perform the operation.
   * @param operator Numeric operator to use in the operation. Options include:
   * &gt;: Greater than.
   *
   * &lt;: Less than.
   *
   * &gt;=: Greater than or equal to.
   *
   * &lt;=: Less than or equal to.
   *
   * =: Equal to.
   *
   * !=: Not equal to.
   *
   *
   *
   * @param value Number value to use in the operation.
   */
  having(
    aggregateType: string,
    field: string,
    operator: string,
    value: number,
  ): GlideQuery;
  /**
   * Inserts a record and returns an Optional object containing the record.
   * @param keyValues Object containing name-value pairs to insert into the record. Unspecified
   * fields will be null.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insert(keyValues: any, selectedFields?: any[]): any;
  /**
   * Updates an existing record, or inserts a new record if one does not already
   * exist.
   * @param changes Object containing name-value pairs to update or insert into the record.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  insertOrUpdate(changes: any, selectedFields?: any[]): any;
  /**
   * Limits the number of records returned in a query.
   * @param limit Number of records to return.
   */
  limit(limit: number): GlideQuery;
  /**
   * Returns the aggregate maximum of a given field.
   * @param field Field on which to perform the operation.
   */
  max(field: string): any;
  /**
   * Returns the aggregate minimum of a given field.
   * @param field Field on which to perform the operation.
   */
  min(field: string): any;
  /**
   * Orders the returned result in ascending order by a given field.
   * @param fields Comma-delimited fields to order the result by in ascending order.
   */
  orderBy(fields: string): GlideQuery;
  /**
   * Orders the returned result in descending order by a given field.
   * @param fieldOrAggregate If the query does not use the aggregate() method, pass the
   * field to order the results by. If the query uses the
   * aggregate() method, pass the type of aggregation function to
   * perform.
   * Options include:
   * min: Returns the smallest value of all matching
   * records.
   *
   * max: Returns the largest value of all matching
   * records.
   *
   * sum: Returns the sum of all matching records.
   *
   * avg: Returns the average of all matching records.
   *
   * count: Returns the number of number of matching
   * records.
   *
   *
   *
   * @param field Optional. Field to order the result by in descending order. Required for
   * queries using the aggregate() method.
   */
  orderByDesc(fieldOrAggregate: string, field?: string): GlideQuery;
  /**
   * Adds an OR clause to a query that returns values based on a given condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the OR clause. If you do not pass an argument, the
   * system uses the = operator. You do not need to include a placeholder value.
   * @param value Value used in the OR clause.
   */
  orWhere(
    fieldOrQuery: string,
    operator: string | undefined,
    value: any,
  ): GlideQuery;
  /**
   * Adds an OR clause that returns records that do not contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNotNull(field: string): GlideQuery;
  /**
   * Adds an OR clause to a query that returns records that contain a null value in a given
   * field.
   * @param field Field used in the query.
   */
  orWhereNull(field: string): GlideQuery;
  /**
   * Adds an encoded query to a new GlideQuery query.
   * @param table Table to query, such as task or incident.
   * @param encoded_query Encoded query to apply
   * to the records in the specified table.
   */
  parse(table: string, encoded_query: string): GlideQuery;
  /**
   * Returns the results of the query as a Stream object containing the specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of
   * fields as arguments, dot-walk to a desired value, or use a flag. For example:
   * select('first_name', 'location.city', 'company$DISPLAY');orselect(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  select(fields?: string): any;
  /**
   * Returns the result of the query as an Optional object containing specified fields.
   * @param fields Optional. Fields to display in the result. You can provide any number of fields
   * as arguments, dot-walk to a desired value, or use a flag. For example:
   * selectOne('first_name', 'location.city', 'company$DISPLAY');orselectOne(['first_name', 'location.city', 'company$DISPLAY']);Default:
   * The system always returns the sys_id.
   */
  selectOne(fields?: string): any;
  /**
   * Returns the aggregate sum of a given numeric field.
   * @param field Field on which to perform the operation.
   */
  sum(field: string): any;
  /**
   * Returns a GlideRecord object that represents the current query. Returns a
   * GlideAggregrate object if the query uses the GlideQuery.aggregate() method.
   */
  toGlideRecord(): any;
  /**
   * Updates an existing record that matches the defined conditions.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   * @param selectedFields Optional. Additional fields to return in the result. Default: The system
   * always returns the sys_id.
   */
  update(changes: any, selectedFields?: any[]): any;
  /**
   * Updates all existing records that match the defined conditions. Returns the number of
   * records updated.
   * @param changes Object containing name-value pairs to update in the record. Names must match
   * fields in the table.
   */
  updateMultiple(changes: any): any;
  /**
   * Adds a Where clause to the query that returns values based on a given
   * condition.
   * @param fieldOrQuery Field or another GlideQuery object used in the where clause. If passing a
   * field, you can dot-walk to a desired value. For example,
   * 'company.name'.
   * @param operator Optional. Operator used in the where clause. If you do not pass an argument,
   * the system uses the = operator.
   * @param value Value used in the where clause.
   */
  where(
    fieldOrQuery: string,
    operator: string | undefined,
    value: any,
  ): GlideQuery;
  /**
   * Returns records that do not contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNotNull(field: string): GlideQuery;
  /**
   * Returns records that contain a null value in a given field.
   * @param field Field used in the query.
   */
  whereNull(field: string): GlideQuery;
  /**
   * Executes the query using the GlideRecordSecure API to securely query
   * the database while honoring ACLs.
   */
  withAcls(): GlideQuery;
}
declare class GlideSchedule {
  constructor();
  constructor(sysID: string, timeZone?: string);
  /**
   * Adds a new schedule segment to the current schedule.
   * @param startDate The starting date of the new schedule segment.
   * @param offSet The time offset of the new schedule segment.
   */
  add(startDate: GlideDateTime, offSet: GlideDuration): GlideDateTime;
  /**
   * Determines the elapsed time in the schedule between two date time values using the
   * timezone of the schedule or, if that is not specified, the timezone of the session.
   * @param startDate The starting datetime.
   * @param endDate The ending datetime.
   */
  duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
  /**
   * Retrieves the schedule name.
   */
  getName(): string;
  /**
   * Determines if the specified date and time is within the current schedule.
   * @param time Date and time value to check.
   */
  isInSchedule(time: GlideDateTime): boolean;
  /**
   * Determines if the current schedule is valid. A schedule is valid if it has at least one
   * schedule span.
   */
  isValid(): boolean;
  /**
   * Loads a schedule with the schedule information.
   * @param sysID The system ID of the schedule.
   * @param timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current
   * session timezone is used for the schedule.
   * @param excludeSpanID Any span to exclude.
   */
  load(sysID: string, timeZone: string | undefined, excludeSpanID: string): any;
  /**
   * Sets the timezone for the current schedule.
   * @param timeZone The timezone.
   */
  setTimeZone(timeZone: string): any;
  /**
   * Determines how much time (in milliseconds) until start time of the next schedule
   * item.
   * @param time Time to be evaluated
   * @param timeZone Timezone
   */
  whenNext(time: GlideDateTime, timeZone: string): number;
}
declare class GlideScriptableInputStream {}
declare class GlideScriptedProcessor {
  /**
   * Redirects to the specified URL.
   * @param url Destination URL
   */
  redirect(url: string): any;
  /**
   * Encodes an object as a JSON string and writes it to the current URL.
   * @param o The object to encode to a JSON string.
   */
  writeJSON(o: any): any;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param contentType Sets the content type of the response sent to the client, if the response has
   * not been committed, and may include a character-encoding specification.
   * @param s The string to write.
   */
  writeOutput(contentType: string, s: string): any;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param s The string to write.
   */
  writeOutput(s: string): any;
}
declare class GlideSecureRandomUtil {
  /**
   * Generates a pseudo-random integer.
   */
  getSecureRandomInt(): number;
  /**
   * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value
   * that you pass into the method.
   * @param bound The bound value.
   */
  getSecureRandomIntBound(bound: number): number;
  /**
   * Generates pseudo-random long value.
   */
  getSecureRandomLong(): number;
  /**
   * Generates a random alpha-numeric String with the specified length.
   * @param length The length of the string in number of characters.
   */
  getSecureRandomString(length: number): string;
}
declare class GlideSecurityUtils {
  /**
   * Removes suspicious encoding to prevent reflected or DOM based cross site
   * scripting.
   * @param url The URL to be checked.
   */
  cleanURL(url: string): string;
  /**
   * Removes the domain address from the URL, which leaves the page name and
   * parameters.
   * @param url The URL to be turned into a relative URL.
   */
  enforceRelativeURL(url: string): string;
  /**
   * Add escape characters to a script.
   * @param script The script to have escape characters added.
   */
  escapeScript(script: string): string;
  /**
   * Check the specified URL against the system defined allow list.
   * @param url The URL to be checked against the URL allow list.
   */
  isURLWhiteListed(url: string): boolean;
}
declare class GlideServletRequest {
  /**
   * Returns the MIME type of the body of the request.
   */
  getContentType(): string;
  /**
   * Returns the header value.
   * @param name The name of the header to be retrieved.
   */
  getHeader(name: string): string;
  /**
   * Returns a comma-separated list of header names.
   */
  getHeaderNames(): any[];
  /**
   * Returns the header values.
   * @param name Names of the headers to be retrieved.
   */
  getHeaders(name: string): any[];
  /**
   * Returns the value of the parameter contained in the request URL.
   * @param name The name of the parameter to be retrieved. This can be the parameter endpoint
   * from the processor form.
   */
  getParameter(name: string): any;
  /**
   * Returns a list of URL parameters that were used in the request URI.
   */
  getParameterNames(): any[];
  /**
   * Returns the query string from the request.
   */
  getQueryString(): string;
}
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
declare class GlideSPScriptable {
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param now_GR The GlideRecord to check.
   */
  canReadRecord(now_GR: GlideRecord): boolean;
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param table Name of the table to query.
   * @param sysId Sys_id of the record to query.
   */
  canReadRecord(table: string, sysId: string): boolean;
  /**
   * Returns true if the currently logged in user has permission to view the specified
   * page.
   * @param pageID Page ID from the Pages [sp_page] table.
   */
  canSeePage(pageID: string): boolean;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   */
  getCatalogItem(sysId: string): any;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   * @param isOrdering When true, uses create roles security check. When false, uses write roles
   * security check.When users are ordering an item or have it in their cart,  check
   * using the create roles.
   * If users are not ordering, for example, somebody is
   * looking at a requested item to see the variables associated with that item, then
   * check using the write roles.
   */
  getCatalogItem(sysId: string, isOrdering: boolean): any;
  /**
   * Returns the display value of the specified field (if it exists and has a value) from
   * either the widget's sp_instance or the sp_portal
   * record.
   * @param fieldName Name of the field
   */
  getDisplayValue(fieldName: string): string;
  /**
   * Returns information about the specified field in the specified GlideRecord.
   * @param now_GR The GlideRecord to check
   * @param fieldName The field to find information for
   */
  getField(now_GR: GlideRecord, fieldName: string): any;
  /**
   * Checks the specified list of field names, and returns an array of valid field
   * names.
   * @param now_GR The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFields(now_GR: GlideRecord, field_Names: string): any[];
  /**
   * Checks the specified list of field names and returns an object of valid field
   * names.
   * @param now_GR The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFieldsObject(now_GR: GlideRecord, field_Names: string): any;
  /**
   * Return the form.
   * @param tableName The name of the table
   * @param sysId The form's sys_id
   */
  getForm(tableName: string, sysId: string): any;
  /**
   * Returns KB articles in the specified category and its subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   */
  getKBCategoryArticles(sys_id: string, limit: number): any[];
  /**
   * Returns Knowledge Base article summaries in the specified category and its
   * subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   * @param maxChars Maximum number of characters to return from the article text. For full article
   * text, set the value to -1.
   */
  getKBCategoryArticleSummaries(
    sys_id: string,
    limit: number,
    maxChars: number,
  ): any[];
  /**
   * Returns the number of articles in the defined Knowledge Base.
   * @param sys_id Sys_id of a Knowledge Base record.
   */
  getKBCount(sys_id: string): number;
  /**
   * Returns a list of the specified table's columns in the specified view.
   * @param tableName Name of the table
   * @param view The view by which to filter the columns
   */
  getListColumns(tableName: string, view: string): any;
  /**
   * Returns the (?id=) portion of the URL based on the sp_menu type.
   * @param page The page
   */
  getMenuHREF(page: GlideRecord): string;
  /**
   * Returns an array of menu items for the specified instance.
   * @param sysId sysId of the instance
   */
  getMenuItems(sysId: string): any[];
  /**
   * Returns the value of the specified parameter.
   * @param name The name of the key from the query string or post body.
   */
  getParameter(name: string): any;
  /**
   * Returns the portal record from the Service Portals [sp_portal] table.
   */
  getPortalRecord(): GlideRecord;
  /**
   * If parameters are provided, returns the GlideRecord identified by the provided table
   * and Sys ID. If no parameters are provided, returns the record identified by the current URL.
   * @param table Optional. The table of the record to return. If no parameters are included,
   * returns the table and Sys ID identified by the current URL.
   * @param sys_id Optional. The Sys ID of the record to return. If no parameters are included,
   * returns the record identified by the current URL.
   */
  getRecord(table?: string, sys_id?: string): GlideRecord;
  /**
   * Copies display values for the specified fields into the data parameter.
   * @param data The display values for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordDisplayValues(data: any, from: GlideRecord, names: string): any;
  /**
   * For the specified fields, copies the element's name, display value, and value into the
   * data parameter.
   * @param data The element's name, display value, and value for the specified fields are
   * copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordElements(data: any, from: GlideRecord, names: string): any;
  /**
   * Copies values for the specified field names from the GlideRecord into the data
   * parameter.
   * @param data The value for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordValues(data: any, from: GlideRecord, names: string): any;
  /**
   * Returns Service Catalog
   * variables associated with a record in String format.
   * @param now_GR The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariables(
    now_GR: GlideRecord,
    includeNilResponses?: boolean,
  ): string;
  /**
   * Returns an array of Service Catalog variables associated
   * with a record.
   * @param now_GR The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariablesArray(
    now_GR: GlideRecord,
    includeNilResponses?: boolean,
  ): any;
  /**
   * Gets the activity stream for the specified record. This method works on tables that
   * extend the task table.
   * @param table The table name
   * @param sysID The sys_id of the record
   */
  getStream(table: string, sysID: string): any;
  /**
   * Returns the user's initials.
   */
  getUserInitials(): string;
  /**
   * Returns the named value of the JSON request, instance, or portal.
   * @param name Name of the JSON request, instance, or portal.
   */
  getValue(name: string): any;
  /**
   * Copies values from the request or instance to the data parameter.
   * @param data Receives the parameter values.
   * @param names Comma-separated string of field names.
   */
  getValues(data: any, names: string): any;
  /**
   * Returns an array of Service Catalog variables associated
   * with the record in the URL.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getVariablesArray(includeNilResponses?: boolean): any;
  /**
   * Gets a widget by id or sys_id, executes that widget's server script using the provided
   * options, then returns the widget model.
   * @param sysID The widget sys_id or widget_id
   * @param options An object to pass to the widget's server script. Refer to this object as
   * options in your server script.Note: Any options passed into this
   * function will only be available in the embedded widget's server script on the
   * first execution of that script. Any subsequent calls into
   * the server script from the embedded widget will not contain the object properties
   * passed in.
   */
  getWidget(sysID: string, options: any): any;
  /**
   * Transforms a URL requesting a list or form in the platform UI into the URL of the
   * corresponding id=list or id=form Service Portal
   * page.
   * @param url Platform UI URL
   */
  mapUrlToSPUrl(url: string): string;
}
declare class GlideStringUtil {
  /**
   * Replaces periods with underscore characters.
   * @param sourceString Text to process.
   */
  dotToUnderBar(sourceString: string): string;
  /**
   * Removes quotes from a string.
   * @param sourceString The string to be processed.
   */
  escapeAllQuotes(sourceString: string): string;
  /**
   * Replaces problem characters with escape characters.
   * @param sourceString Text to process.
   */
  escapeForHomePage(sourceString: string): string;
  /**
   * Replaces illegal characters with their escape codes.
   * @param htmlString Text to process.
   */
  escapeHTML(htmlString: string): string;
  /**
   * Replaces non-printable characters with their printable notation.
   * @param sourceString Text to process.
   */
  escapeNonPrintable(sourceString: string): string;
  /**
   * Replaces query term separators "^" with their escape sequence "^^".
   * @param sourceString Text to process.
   */
  escapeQueryTermSeparator(sourceString: string): string;
  /**
   * Replaces quotes with escape characters by adding a backslash before each
   * quote.
   * @param sourceString Text to process.
   */
  escapeTicks(sourceString: string): string;
  /**
   * Replaces illegal HTML characters into HTML notation.
   * @param sourceString Text to process.
   */
  getHTMLValue(sourceString: string): string;
  /**
   * Extracts numeric characters from a string.
   * @param sourceString Text to process.
   */
  getNumeric(sourceString: string): string;
  /**
   * Validates whether the specified string is a valid base64 string.
   * @param sourceString Text to process.
   */
  isBase64(sourceString: string): boolean;
  /**
   * Validates whether the specified string is in valid sys_id format.
   * @param sourceString Text to process.
   */
  isEligibleSysID(sourceString: string): boolean;
  /**
   * Replaces the new line character, /n, with a break code,
   * &lt;br/&gt;.
   * @param sourceString Text to process.
   */
  newLinesToBreaks(sourceString: string): string;
  /**
   * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading,
   * trailing, and duplicate spaces.
   * @param sourceString Text to process.
   */
  normalizeWhitespace(sourceString: string): string;
  /**
   * Replaces escape characters with their respective character.
   * @param htmlString String to process.
   */
  unEscapeHTML(htmlString: string): string;
}
declare class GlideSysListControl {
  constructor(tableName: string);
  /**
   * Returns the sys_id for the control.
   */
  getControlID(): string;
  /**
   * Returns true if the edit button is not displayed.
   */
  isOmitEditButton(): boolean;
  /**
   * Returns true when the New button is not displayed.
   */
  isOmitNewButton(): boolean;
}
declare class GlideTableHierarchy {
  constructor(tableName: string);
  /**
   * Returns an array of strings containing all tables that extend the current table and
   * includes the current table.
   */
  getAllExtensions(): any[];
  /**
   * Returns the parent class.
   */
  getBase(): string;
  /**
   * Returns an array of strings containing all classes in the hierarchy of the current
   * table.
   */
  getHierarchy(): any[];
  /**
   * Returns the table's name.
   */
  getName(): string;
  /**
   * Returns the top level class in the hierarchy.
   */
  getRoot(): string;
  /**
   * Returns an array of strings containing all tables that extend the current
   * table.
   */
  getTableExtensions(): any[];
  /**
   * Returns an array of strings of the table names in the hierarchy.
   */
  getTables(): any[];
  /**
   * Returns true of this class has been extended.
   */
  hasExtensions(): boolean;
  /**
   * Returns true if this is a base class.
   */
  isBaseClass(): boolean;
  /**
   * Returns true if this table is not in a hierarchy.
   */
  isSoloClass(): boolean;
}
declare class GlideTextReader {
  constructor(inputStream: GlideScriptableInputStream);
  /**
   * Returns the character encoding of the input stream.
   */
  getEncoding(): string;
  /**
   * Returns a single line from the input stream and returns a string. Since this is working
   * off of a stream, it is not subject to the 5MB size limit.
   */
  readLine(): string;
}
declare class GlideTime {
  constructor();
  constructor(milliseconds: number);
  /**
   * Returns the time in the specified format.
   * @param format String to use to format the time.For example, if the current time is
   * 10:30:20 then:
   * hh:mm:ss = 10:30:20
   *
   * HH = 10
   *
   * HH –- ss = 10 –- 20
   *
   * hh a = 10 AM
   *
   * s:m:H ss:mm:hh = 20:30:10 20:30:10
   *
   * HH:mm:ss.SSSZ = 10:30:20.000+0000
   *
   * HH/mm/ss = 10/30/20
   *
   *
   *
   */
  getByFormat(format: string): string;
  /**
   * Gets the time in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the current user's time zone and the internal format
   * (HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Returns the hours part of the time using the local time zone.
   */
  getHourLocalTime(): number;
  /**
   * Returns the hours part of the time using the local time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayLocalTime(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayUTC(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
   */
  getHourUTC(): number;
  /**
   * Returns the number of minutes using the local time zone.
   */
  getMinutesLocalTime(): number;
  /**
   * Returns the number of minutes in the hour based on the UTC time zone.
   */
  getMinutesUTC(): number;
  /**
   * Returns the number of seconds in the current minute.
   */
  getSeconds(): number;
  /**
   * Gets the time value stored in the database by the GlideTime object in the internal
   * format, HH:mm:ss, and the system time zone.
   */
  getValue(): string;
  /**
   * Sets a time value using the current user's display format and time zone.
   * @param asDisplayed The time in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as HH:mm:ss.
   */
  setDisplayValue(asDisplayed: string): any;
  /**
   * Sets the time of the GlideTime object in the internal time zone.
   * @param o The time in hh:mm:ss format.
   */
  setValue(o: string): any;
  /**
   * Gets the duration difference between two GlideTime object values.
   * @param startTime The start value.
   * @param endTime The end value.
   */
  subtract(startTime: GlideTime, endTime: GlideTime): GlideDuration;
}
declare class GlideTransformLog {
  constructor();
  /**
   * Logs a message of type Error to localhost logs.
   * @param message Transform log message.
   */
  error(message: string): any;
  /**
   * Logs a message of type Info to localhost logs.
   * @param message Transform log message.
   */
  info(message: string): any;
  /**
   * Logs a message of type Warn to localhost logs.
   * @param message Transform log message.
   */
  warn(message: string): any;
}
declare class GlideUICompatibility {
  constructor(scopeName: string);
  /**
   * Returns the terms "block" or "allow" based upon the browser version.
   */
  getCompatibility(): string;
  /**
   * Determines if the browser is not supported.
   */
  isBlocked(): boolean;
}
declare class GlideXMLUtil {
  /**
   * Removes invalid characters from an XML string.
   * @param xmlString The string to be processed.
   */
  removeInvalidChars(xmlString: string): string;
  /**
   * Determines if the specified string is valid XML.
   * @param xmlString The string to be validated.
   * @param nsAware When true, the validation is aware of name spaces. When false, the validation
   * ignores name spaces.
   * @param forgiveUnclosed When true, the validation does not check for  tags enclosing the
   * string.
   */
  validateXML(
    xmlString: string,
    nsAware: boolean,
    forgiveUnclosed: boolean,
  ): string;
}
declare class GSLog {
  constructor();
  /**
   * Determines if debug is turned on.
   */
  debugOn(): boolean;
  /**
   * Returns the log level.
   * @param level Optional. Log level.
   */
  getLevel(level?: string): string;
  /**
   * Called by the Prototype JavaScript Framework during object creation to initialize a new
   * instance of this class. Provide the input parameters, but do not call this method
   * directly.
   * @param traceProperty System property that contains a value indicating the level at or above which
   * messages will be written to the log.
   * @param caller Name of the script calling the logger.
   */
  initialize(traceProperty: string, caller: string): any;
  /**
   * Logs a message at the specified level.
   * @param level Log level.
   * @param msg Message to write to the log.
   */
  log(level: string, msg: string): any;
  /**
   * Logs alert events.
   * @param msg Message to write to the log.
   */
  logAlert(msg: string): any;
  /**
   * Logs critical events.
   * @param msg Message to write to the log.
   */
  logCrit(msg: string): any;
  /**
   * Logs debug events.
   * @param msg Message to write to the log.
   */
  logDebug(msg: string): any;
  /**
   * Logs emergency events.
   * @param msg Message to write to the log.
   */
  logEmerg(msg: string): any;
  /**
   * Logs error events.
   * @param msg Message to write to the log.
   */
  logErr(msg: string): any;
  /**
   * Logs information events.
   * @param msg Message to write to the log.
   */
  logInfo(msg: string): any;
  /**
   * Logs notice events.
   * @param msg Message to write to the log.
   */
  logNotice(msg: string): any;
  /**
   * Logs warning events.
   * @param msg Message to write to the log.
   */
  logWarning(msg: string): any;
  /**
   * Sets the log level.
   * @param level Log level to set.
   */
  setLevel(level: string): any;
}
declare class IPAddress {
  constructor(ipAddress: string);
  /**
   * Returns the canonical (shortened/standard) form of the specified IP address by removing
   * any zero padding from the address.
   * @param ipAddress IP address to canonicalize or a scoped IPAddress object that contains the IP
   * address.
   */
  canonicalize(ipAddress: string): string;
  /**
   * Returns the expanded form of the specified IP address
   * @param ipAddress IP address to expand.
   */
  getExpanded(ipAddress: string): string;
  /**
   * Determines whether the specified IPAddress object is a link-local IP
   * address.
   */
  isLinkLocal(): boolean;
  /**
   * Determines whether the specified IPAddress object is the loopback IP
   * address.
   */
  isLocalhost(): boolean;
  /**
   * Determines whether the specified IPAddress object is a multicast IP
   * address.
   */
  isMulticast(): boolean;
  /**
   * Determines whether the specified IPAddress object is a public IP address. An IP address
   * is considered public if it is routable, and it is not a reserved address.
   */
  isPublic(): boolean;
  /**
   * Determines whether the specified IPAddress object is a reserved IP address.
   */
  isReserved(): boolean;
  /**
   * Determines whether the specified IPAddress object is a routable IP address.
   */
  isRoutable(): boolean;
  /**
   * Determines whether the passed IPAddress object is the is the same version, IPv4 or
   * IPv6, as the specified IP address.
   * @param ipAddress IP address to check against the IP address in the passed IPAddress
   * object.
   */
  isSameVersionAs(ipAddress: string): boolean;
  /**
   * Determines whether the specified IPAddress object is a unicast IP address.
   */
  isUnicast(): boolean;
  /**
   * Determines whether the specified IP address is a valid IPv4 address.
   * @param ipAddress IP address to validate.For the non-static implementation, the IP address is passed in the IPAddress class
   * reference instead of the method call.
   * For example New IPAddress("::1").isV4();.
   */
  isV4(ipAddress: string): boolean;
  /**
   * Determines whether the specified IP address is a valid IPv6 address.
   * @param ipAddress IP address to validate. For the non-static implementation, the IP address is
   * passed in the IPAddress class reference instead of the method call.
   * For
   * example New IPAddress("::1").isV6();.
   */
  isV6(ipAddress: string): boolean;
  /**
   * Determines whether the specified IP address is a valid IPv4 or IPv6
   * address.
   * @param ipAddress IP address to validate.
   */
  isValid(ipAddress: string): boolean;
  /**
   * Returns the expanded form of an IPAddress object.
   */
  toExpanded(): string;
}
declare class NotifyConferenceUtil {
  constructor();
  /**
   * Adds a participant to a specified conference call using their phone number to identify
   * the participant.
   * @param toNumber Phone number of the participant to add to the conference call.
   * @param confGR GlideRecord of the conference call to which to add the specified participant.
   * These records are located in the Notify Conference Call [notify_conference_call]
   * table.
   */
  addToConferenceByPhoneNumber(toNumber: string, confGR: GlideRecord): any;
  /**
   * Adds a participant to the conference call referenced by the passed in GlideRecord using
   * their unique user identifier.
   * @param userId Sys ID of the participant to add to the specified conference call. This
   * information is located in the User [sys_user] table.
   * @param confGR GlideRecord of the conference call to add the specified participant. These
   * records are located in the Notify Conference Call [notify_conference_call]
   * table.
   */
  addToConferenceByUserId(userId: string, confGR: GlideRecord): any;
  /**
   * Performs the specified conference call action, such as starting/ending a conference
   * call or joining, removing, muting, or unmuting participants from a conference call.
   * @param action Defines the conference call action to perform.The
   * following are the available conference call actions:
   * start: Starts the conference call identified in
   * data.confId
   *
   * end: Terminates the conference call identified in
   * data.confId
   *
   * join: Adds the participant specified in the data.items
   * array to the conference call identified in data.confId
   *
   * multiJoin: Adds the participants specified in the
   * data.items array to the conference call identified in
   * data.confId
   *
   * selfJoin: Adds the currently logged in user to the conference call (no entry
   * in data.items required.)
   *
   * kick: Removes the participant specified in the data.items
   * array from the conference call identified in
   * data.confId
   *
   * multiKick: Removes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * mute: Mutes the participant specified in the data.items
   * array on the conference call identified in data.confId
   *
   * multiMute: Mutes the participants specified in the
   * data.items array on the conference call identified in
   * data.confId
   *
   * unmute: Unmutes the participant specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   * multiUnmute: Unmutes the participants specified in the
   * data.items array from the conference call identified in
   * data.confId
   *
   *
   *
   * @param data Object that describes the conference call.
   */
  doConferenceAction(action: string, data: any): any;
  /**
   * Returns a JSON data template to use with the doConferenceAction()
   * method. Using this template automatically structures the data object so that you don't have to
   * manually create it.
   */
  getConferenceInputDataTemplate(): any;
  /**
   * Returns the capabilities of all telephony service provider drivers in the
   * instance.
   */
  getServiceProvidersCapabilities(): any;
  /**
   * Determines whether a Notify conference action is supported by a telephony service
   * provider.
   * @param action Value of the isSupported parameter returned by the
   * getServiceProvidersCapabilities() method for a specific
   * action and service provider.
   *
   * Note: Although the isSupported value may appear to be a
   * Boolean, it is actually a Number. Do not try and evaluate the capabilities as
   * Boolean values. Use this method as the associated values may be expanded in future
   * versions.
   */
  isActionSupported(action: number): boolean;
  /**
   * Removes the participant associated with the passed in GlideRecord from the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to remove from the conference call. These
   * records are located in the Notify Participant [notify_participant] table.
   */
  kickByParticipantGR(notifyParticipantGR: GlideRecord): any;
  /**
   * Mutes the participant associated with the passed in GlideRecord on the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to mute. These records are located in the
   * Notify Participant [notify_participant] table.
   */
  muteByParticipantGR(notifyParticipantGR: any): any;
  /**
   * Unmutes the participant associated with the passed in GlideRecord on the current
   * conference call.
   * @param notifyParticipantGR GlideRecord object of the participant to unmute. These records are located in
   * the Notify Participant [notify_participant] table.
   */
  unmuteByParticipantGR(notifyParticipantGR: GlideRecord): any;
}
declare class Optional {
  /**
   * Returns an empty Optional object. Use this method in an Else clause to handle a query
   * that might not return a result.
   * @param reason Optional. Reason displayed in the log when Optional.get() is
   * called on the empty Optional object.
   */
  empty(reason?: string): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to the record inside the Optional object. If the function returns true, the method
   * returns the Optional record unchanged. If the function returns false, it returns an empty
   * Optional object.
   * @param predicate Predicate function to apply to the value inside the Optional object. Must
   * return a Boolean value.
   */
  filter(predicate?: any): any;
  /**
   * Applies a function that returns an Optional object to the result of a query. Use this
   * method to perform a second query using the result of the first.
   * @param fn Function
   * to apply to the results of the query that returned the Optional
   * object.
   */
  flatMap(fn?: any): any;
  /**
   * Returns the record inside the Optional object, or throws an error if the query does not
   * return a record.
   */
  get(): any;
  /**
   * Applies a function to the record within an Optional object. If the Optional object does
   * not contain a record, the function does not execute.
   * @param fn The function to apply to the record within the Optional object.
   */
  ifPresent(fn?: any): any;
  /**
   * Returns true if the Optional object is empty.
   */
  isEmpty(): boolean;
  /**
   * Checks whether an Optional object contains a value.
   */
  isPresent(): boolean;
  /**
   * Returns a new Optional object. Instead of containing the record, the object contains a
   * function to get the record that is only called if and when requested in the code.
   * @param lazyGetFn Function that returns a single record as a result of a query. For example:
   * var userGr = new GlideRecord('sys_user');
   */
  lazy(lazyGetFn: any): any;
  /**
   * Applies a function to the result of a query.
   * @param fn Function to apply to the result of the query.
   */
  map(fn: any): any;
  /**
   * Wraps a given value in an Optional object. For example, you can wrap the result of a
   * GlideRecord query in an Optional object to use the associated methods.
   * @param value Value inside the Optional object.
   */
  of(value?: any): any;
  /**
   * Adds a default value within the Optional object if the query does not return any
   * results.
   * @param defaultValue Value within the Optional object if the query does not return any
   * results.
   */
  orElse(defaultValue?: any): any;
}
declare class PAScorecard {
  /**
   * Add a query parameter to filter the returned scores.
   * @param uuid Enter a colon-separated list of sys_id values to specify which indicators,
   * breakdowns, aggregates, and domains to query. The parameter follows this
   * format:&lt;indicator_sys_id&gt;:&lt;breakdown_sys_id&gt;:&lt;elements_filter_sys_id or
   * element_sys_ids&gt;:&lt;lvl-2 breakdown_sys_id&gt;:&lt;lvl-2 elements_filter_sys_id or
   * element_sys_ids&gt;:&lt;aggregate_sys_id&gt;;&lt;domain_sys_id&gt;
   * The parameter must begin with the sys_id of an indicator record.
   * Optionally, you can append the sys_id values of a breakdown and breakdown element
   * to group the response based on the breakdown, and the sys_id of an aggregate to
   * apply that aggregate. You can use a breakdown with an aggregate, or use only
   * one.
   * For information about obtaining the sys_id values of records, see Unique record identifier (sys_id).
   *
   * Note: If an indicator is configured to use a
   * Default time series, all Analytics Hub values for that indicator use that time series aggregation.
   * @param breakdown Sys_id of a breakdown to return chart information
   * organized as defined by the breakdown. For example, the sys_id of a priority
   * breakdown to return separate task chart information for each priority value, such as
   * the number of open incidents / Priority / 2 - High.Data type: String
   * @param breakdown_relation Specify the sys_id of a breakdown relation to break down the returned data
   * using that relation. You can view available breakdown relations by setting the
   * include_available_breakdowns parameter to
   * true.
   * @param elements_filter Specify the sys_id of an elements filter to apply that filter to the returned
   * data.
   * @param display Flag that indicates the type of indicators to
   * return.Valid values:
   * true: Return only indicators that display on the Analytics Hub.
   *
   * all: Return all indicators.
   *
   *
   *
   * Data type: String
   * Default: true
   * @param favorites Flag that indicates whether to return only indicators
   * that are favorites of the querying user.Valid values:
   * true: Return only indicators that are favorites of the querying user.
   *
   * false: Return all indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param key Flag that indicates whether to return results only for
   * key indicators.Valid values:
   * true: Return the trendline_scores element.
   *
   * false: Do not return the trendline_scores element .
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param target Flag that indicates whether to return results only for
   * indicators that have a target set on the Analytics Hub.Valid values:
   * true: Only return results for indicators that have a target set.
   *
   * false: Return results for all applicable indicators.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param contains Comma-separated list of names or descriptions to return
   * results only from indicators with a matching value. All the comma-separated list
   * items must match, or no results are returned: The list follows AND logic, not OR
   * logic.Data type: String
   * @param tags Enter an indicator group sys_id to return the indicators in that group. Do not
   * use uuid with this parameter.
   * @param per_page Maximum number of indicators each query can return on a
   * page. Data type: Number
   * Default: 10
   * Maximum: 100
   * @param page Specify the page number. For example, when querying 20 indicators in the Analytics Hub with the default per_page value (10), specify a page
   * value of 2 to retrieve the Analytics Hub for 11-20.
   * @param sortby Value to use when sorting results. Valid values:
   * bullet
   *
   * change
   *
   * changeperc
   *
   * date
   *
   * default
   *
   * direction
   *
   * duedate
   *
   * frequency
   *
   * gap
   *
   * gapperc
   *
   * group
   *
   * indicator_group
   *
   * name
   *
   * order
   *
   * target
   *
   * trend
   *
   * value
   *
   *
   *
   * Data type: String
   * Default: value
   * @param sortdir Sort direction.Valid values:
   * asc: Denotes ascending
   *
   * des: Denotes descending
   *
   *
   *
   * Data type: String
   * Default: Descending
   * @param display_value Data retrieval operation for reference and choice fields.Based on this
   * value, the display value and/or the actual value in the database are retrieved.
   * true returns display values for all of the fields.
   *
   * false returns actual values from the database. If a value
   * is not specified, this parameter defaults to false.
   *
   * all returns both actual and display values.
   *
   *
   *
   * @param exclude_reference_link Flag that indicates whether to hide additional
   * information provided for reference fields, such as the URI to the reference
   * resource.Valid values:
   * true: Hide additional information provided for reference fields.
   *
   * false: Do not hide additional information provided for reference
   * fields.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_scores Flag that indicates whether to
   * return indicator scores for the entire time range selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only
   * the most recent score value.To constrain the date range of the scores that are returned, combine this
   * parameter with the from and to
   * parameters.
   * @param from Earliest date to return scores
   * from. Only scores from this date or later are returned. This parameter requires that include_scores is set to
   * true.
   * @param to Latest date from which to return
   * scores. Only scores from this date or earlier are returned.This parameter requires that include_scores is set to
   * true.
   * @param step Numeric value to skip scores, based on the indicator
   * frequency. For example, specify a value of 3 to return only scores from every third
   * day for a daily indicator, or from every third week for a weekly indicator. Data
   * type: Number
   * @param limit Maximum number of scores to return.Data type:
   * Number
   * @param include_available_breakdowns Flag that indicates whether to return all available
   * breakdowns for an indicator.Valid values:
   * true: Return all available breakdowns for an indicator.
   *
   * false: Return no breakdowns.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_available_aggregates Flag that indicates whether to return all possible
   * aggregates for an indicator, including aggregates that have already been
   * applied.Valid values:
   * true: Return all possible aggregates for an indicator, including aggregates
   * that have already been applied.
   *
   * false: Return no aggregates.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_realtime Flag that indicates whether to return the
   * realtime_enabled element which indicates if real-time scores are enabled for the
   * indicator, and the realtime_value element which contains the real-time score value.
   * This parameter is not supported for formula indicators.Valid values:
   * true: Return the realtime_enabled element.
   *
   * false: Do not return the realtime_enabled element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_target_color_scheme Flag that indicates whether to return the
   * target_color_scheme element that contains the minimum and maximum values, and the
   * color of each section of the target color scheme for the Analytics Hub.Valid values:
   * true: Return the target_color_scheme element.
   *
   * false: Do not return the target_color_scheme element.
   *
   *
   *
   * Data type: Boolean
   * Default: false
   * @param include_forecast_scores Flag that indicates whether
   * to return the forecast_scores element that contains an array of date-value pairs
   * that define the forecast data for the Analytics Hub.This paramater requires that the include_scores
   * parameter is also set to true.
   * @param include_trendline_scores Flag that indicates whether
   * to return the trendline_scores element that contains an array of date-value pairs
   * that define the Analytics Hub trendline.This paramater requires that the include_scores
   * parameter is also set to true.
   */
  addParam(
    uuid: string | undefined,
    breakdown: string,
    breakdown_relation: string,
    elements_filter: string,
    display: string,
    favorites: string,
    key: string,
    target: string,
    contains: string,
    tags: string,
    per_page: string,
    page: string,
    sortby: string,
    sortdir: string,
    display_value: string,
    exclude_reference_link: string,
    include_scores: string,
    from: string,
    to: string,
    step: string,
    limit: string,
    include_available_breakdowns: string,
    include_available_aggregates: string,
    include_realtime: string,
    include_target_color_scheme: string,
    include_forecast_scores: string,
    include_trendline_scores: string,
  ): any;
  /**
   * Perform a query based on the specified parameters and return the results as an
   * object.
   */
  query(): any;
  /**
   * Get the last query result as an object.
   */
  result(): any;
}
declare class PASnapshot {
  /**
   * Compare records in snapshots for a specified indicator at multiple dates, such as to
   * identify records included in one snapshot but not the other.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the first snapshot, but not the second
   *
   * movedout: records that are in the second snapshot, but not the first
   *
   *
   */
  getCompareIDs(
    sys_id: string,
    date1: number,
    date2: number,
    type: string,
  ): string;
  /**
   * Get the query used to compare records in snapshots for a specified indicator at
   * multiple dates.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the second snapshot, but not the first
   *
   * movedout: records that are in the first snapshot, but not the second
   *
   *
   */
  getCompareQuery(
    sys_id: string,
    date1: number,
    date2: number,
    type: string,
  ): string;
  /**
   * Get the sys_id values for all records contained in the snapshot for a specified
   * indicator at the specified date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getIDs(sys_id: string, date: number): string;
  /**
   * Get the query used to generate the snapshot for a specified indicator at the specified
   * date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getQuery(sys_id: string, date: number): string;
}
declare class ScopedDCManager {
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
declare class SPScriptedFacet {
  /**
   * Adds facet items or mapped queries to a facets object.
   * @param label The display label for the facet item or mapped query.
   * @param valueObj The facet item or mapped query for the facet. Can only contain types String,
   * Number, Boolean, and Double.
   */
  addFacetItem(label: string, valueObj: any): any;
}
declare class SPScriptedFacetService {
  /**
   * Creates a single choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createFacet(label: string, id: string): any;
  /**
   * Creates a multi choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createMultiChoiceFacet(label: string, id: string): any;
}
declare class Stream {
  constructor(nextFn: any);
  /**
   * Returns results in batches of arrays, each containing the number of records passed to
   * the method.
   * @param count Number of records in each array returned from the stream.
   */
  chunk(count: number): any;
  /**
   * Applies a predicate function to every item in the Stream object. If the predicate
   * returns true for every item in the stream, the method returns true. If the predicate returns
   * false for any item in the stream, the method returns false.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a boolean.
   */
  every(predicate: any): boolean;
  /**
   * Applies a predicate function to each item in the Stream object. If the predicate
   * returns true, the method returns the stream. If the predicate returns false, it returns an empty
   * Stream object.
   * @param predicate Predicate function to apply to every record or item inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  filter(predicate: any): any;
  /**
   * Returns the first record or item in the Stream object that matches the predicate
   * function. If no predicate function is provided, then the method returns the first record or item
   * in the Stream.
   * @param predicate Optional. Predicate function to apply to the items inside the Stream object.
   * The function must take each item in the stream as input and return a
   * boolean.
   */
  find(predicate?: any): any;
  /**
   * Applies a function to every item in a stream. Returns another stream that you can
   * iterate over.
   * @param fn Function to apply to the result of the query that returns a Stream object.
   */
  flatMap(fn: any): any;
  /**
   * Applies the specified function to each record or item in the stream.
   * @param fn Function to apply to each item in the stream.
   */
  forEach(fn: any): any;
  /**
   * Returns a Stream object that contains the values from the provided array.
   * @param arr Array of values to create the stream from.
   */
  fromArray(arr: any[]): any;
  /**
   * Limits the number of results returned by the stream.
   * @param count Number of records to return.
   */
  limit(count: number): any;
  /**
   * Applies a function to each item in a stream and returns the updated Stream
   * object.
   * @param fn Function to apply to the result of the query that takes the each item in the
   * stream as input.
   */
  map(fn: any): any;
  /**
   * Executes a reducer function on each item in the stream, resulting in single output
   * value.
   * @param reducerFn Function to apply to each item in the stream that reduces the stream to a
   * single value. This function must take two arguments:
   *
   * acc: Accumulator that accumulates all values returned by
   * the function.
   *
   * cur: Current item being accumulated in the array.
   *
   *
   *
   * @param initialValue Value passed to the function as the initial value.
   */
  reduce(reducerFn: any, initialValue: any): any;
  /**
   * Applies a predicate function, a function that takes a single value and returns true or
   * false, to each item in the stream. If the predicate returns true for any item in the stream, the
   * method returns true.
   * @param predicate Predicate function to apply to the items inside the Stream object. Must return
   * a Boolean value.
   */
  some(predicate: any): boolean;
  /**
   * Returns an array containing the given number of items from the stream.
   * @param count The maximum number of items from the stream to return in the array.
   */
  toArray(count: number): any[];
}
declare class TemplatePrinter {
  /**
   * Prints the string to the email body.
   * @param string The string to print
   */
  print(string: string): any;
  /**
   * Adds non-breaking spaces to the email body.
   * @param spaces The number of non-breaking spaces to output to the email body.
   */
  space(spaces: number): any;
}
declare class v_query {
  /**
   * Gets an encoded query string for the specified field.
   * @param field Name of the field.
   */
  getCondition(field: string): string;
  /**
   * Returns the query against a remote table as an encoded query string
   */
  getEncodedQuery(): string;
  /**
   * Gets the value of a field in an equality query condition.
   * @param field Name of the field to be queried.
   */
  getParameter(field: string): string;
  /**
   * Returns the sys_id value in a get query.
   */
  getSysId(): string;
  /**
   * Gets a text search query parameter.
   */
  getTextSearch(): string;
  /**
   * Determines if the query is a get query, that is, a query that retrieves a record by
   * sys_id.
   */
  isGet(): boolean;
  /**
   * Indicates if the query contains a text query parameter.
   */
  isTextSearch(): boolean;
  /**
   * Sets the last error message in the GlideRecord.
   * @param message Error message.
   */
  setLastErrorMessage(message: string): any;
}
declare class v_table {
  /**
   * Adds rows to the remote table.
   * @param row JavaScript object containing field name and value map in which the key is the
   * field name, for example, {number: "INC0001", sys_id:
   * "a34"}.{ "&lt;field name&gt;": "value" }
   *
   */
  addRow(row: any): boolean;
}
declare class XMLDocument2 {
  constructor(inputStream: GlideScriptableInputStream);
  constructor();
  /**
   * Creates and adds an element node to the current node. The element name is the string
   * passed in as a parameter. The new element has no text child nodes.
   * @param name The new element's name.
   */
  createElement(name: string): any;
  /**
   * Creates and adds an element node with a text child node to the current
   * node.
   * @param name Name of the element to add.
   * @param value Element's text value.
   */
  createElementWithTextValue(name: string, value: string): any;
  /**
   * Gets the document element node of the XMLdocument2 object. The document element node is
   * the root node.
   */
  getDocumentElement(): any;
  /**
   * Gets the first node in the specified xPath.
   * @param xPath The xPath to obtain the node from.
   */
  getFirstNode(xPath: string): any;
  /**
   * Gets the node after the specified node.
   * @param current The current node.
   */
  getNextNode(current: any): any;
  /**
   * Gets the node specified in the xPath.
   * @param xPath xPath of the node to obtain.
   */
  getNode(xPath: string): any;
  /**
   * Gets all the text child nodes from the node referenced in the specified
   * XPath.
   * @param xPath XPath of the text to obtain.
   */
  getNodeText(xPath: string): string;
  /**
   * Parses the XML string and loads it into the XMLDocument2 object.
   * @param xmlDoc The document to parse.
   */
  parseXML(xmlDoc: string): boolean;
  /**
   * Makes the node passed in as a parameter the current node.
   * @param element The element node to set as the current node.
   */
  setCurrentElement(element: any): any;
  /**
   * When set to true, the XMLDocument2 object processes the document with XML
   * namespaces.
   * @param aware When true, the XMLDocument2 object processes the document with XML namespaces.
   */
  setNamespaceAware(aware: boolean): any;
  /**
   * Returns a string containing the XML.
   */
  toString(): string;
}
declare class XMLNode {
  /**
   * Gets the value of the attribute.
   * @param attribute Name of the attribute.
   */
  getAttribute(attribute: string): string;
  /**
   * Returns an object containing the node's attributes as properties with
   * values.
   */
  getAttributes(): any;
  /**
   * Gets a XMLNodeIterator object that can be used to walk through the list of child
   * nodes.
   */
  getChildNodeIterator(): any;
  /**
   * Gets the node's first child node.
   */
  getFirstChild(): any;
  /**
   * Gets the node's last child node.
   */
  getLastChild(): any;
  /**
   * Gets the node's name. A node's name is determined by the node type. A document-element
   * node's name is #document. A text node's name is #text. An element node's name is the element's
   * name.
   */
  getNodeName(): string;
  /**
   * Gets the node's value. A node's value is determined by the node type. Element and
   * document-element nodes return null.
   */
  getNodeValue(): string;
  /**
   * Gets the text content of the current node. The text content of a node consists of all
   * the node's child text nodes
   */
  getTextContent(): string;
  /**
   * Determines if the node has the specified attribute.
   * @param attribute The name of the attribute to check.
   */
  hasAttribute(attribute: string): boolean;
  /**
   * Returns the string value of the current node.
   */
  toString(): string;
}
declare class XMLNodeIterator {
  /**
   * Returns true if the iteration has more elements.
   */
  hasNext(): boolean;
  /**
   * Gets the next element in the iteration. The returned element may be a #text node for
   * the spaces/tabs if XML is "pretty formatted".
   */
  next(): any;
}
declare namespace sn_agent {
  export class AccAgentsAPI {
    constructor();
    /**
     * Checks the status of a grab log request.
     * @param requestId Sys_id of a request in the Agent Client
     * Collector Requests [sn_agent_request] table.
     */
    checkGrabLogRequestProgress(requestId: string): any;
    /**
     * Gets the information of a specified agent.
     * @param agentID Unique ID of an agent listed in the Agent ID
     * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
     */
    getAgent(agentID: string): any;
    /**
     * Gets a list of agents with related information.
     * @param encodedQuery Encoded query string in standard Glide format.
     * See Encoded query
     * strings.
     * @param limit Optional. Restricts results to a maximum number of agents. Use null or
     * undefined for both if they are not required.Default/Max: 20,000
     */
    getAgentsList(encodedQuery: string, limit?: number): any;
    /**
     * Restarts a specified agent with alive/up status.
     * @param agentID Unique ID of an agent listed in the Agent ID
     * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
     */
    restartAgent(agentID: string): string;
    /**
     * Runs a discovery check to locate CIs related to an agent. The
     * specified agent must be in alive/up status.
     * @param agentID Unique ID of an agent listed in the Agent ID
     * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
     */
    runDiscovery(agentID: string): string;
    /**
     * Set the given data collection status (true/false if enabled or not) for a specified
     * agent.
     * @param agentID Unique ID of an agent listed in the Agent ID
     * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
     * @param status Flag that indicates whether data collection is enabled for the agent.
     *
     * Valid values:
     * true: Enables data collection for this agent.
     *
     * false: Disables data collection for this agent.
     *
     *
     *
     *
     * Default: true
     */
    setDataCollectionStatus(agentID: string, status: boolean): string;
    /**
     * Requests the log of a specified agent with alive/up
     * status.
     * @param agentID Unique ID of an agent listed in the Agent ID
     * column of the Agent Client Collectors [sn_agent_cmdb_ci_agent] table.
     */
    submitGrabLogRequest(agentID: string): any;
  }
  export class AccCheckDefsAPI {
    /**
     * Gets a specified check definition with
     * details.
     * @param checkDefId Sys_id of the check definition listed
     * in the Check Definitions [sn_agent_check_def] table.
     * @param withParams Flag that indicates whether existing check
     * parameter details are returned. Information for each standard and secure check
     * parameter is included in a JSON object.Valid values:
     * true: Return check parameter details.
     *
     * false: Do not return check parameter details.
     *
     *
     *
     * Default: False
     */
    getCheck(checkDefId: string, withParams: boolean): any;
    /**
     * Gets a list of check definitions with
     * details.
     * @param encodedQuery An encoded query
     * string to
     * filter the check definition result list. Use null for an unfiltered list of check
     * definitions in the system.
     * @param limit Limits the number of returned records. Set to
     * null to use the default value.Default: 20,000
     * @param withParams Flag that indicates whether existing check
     * parameter details are returned. Information for each standard and secure check
     * parameter is included in a JSON object.Valid values:
     * true: Return check parameter details.
     *
     * false: Do not return check parameter details.
     *
     *
     *
     * Default: False
     */
    getChecksList(
      encodedQuery: string,
      limit: number,
      withParams: boolean,
    ): any;
    /**
     * Enables changing one or more field values of a
     * specified check definition.
     * @param checkDefId Sys_id of the check definition listed
     * in the Check Definitions [sn_agent_check_def] table.
     * @param updateJson Map of check definition fields to be updated to their new values. Refer to the
     * data dictionary for a comprehensive list of Check Definition fields and
     * types.{
     * "background": Boolean,
     * "check_group": "String",
     * "check_type": "String",
     * "command": "String",
     * "name": "String",
     * "plugins": [Array],
     * "proxy_valid": Boolean,
     * "timeout": Number
     * }
     */
    updateCheck(checkDefId: string, updateJson: any): any;
    /**
     * Enables changing one or more field values of a
     * specified check parameter.
     * @param checkDefParamId Sys_id of the check parameter listed in the Check Parameter Definitions
     * [sn_agent_check_param_def] table.
     * @param updateJson Map of check parameter fields to be updated to their new values.  Refer to the
     * data dictionary for a comprehensive list of Check Secure Parameter Definition fields
     * and types.{
     * "active": Boolean,
     * "default_value": "String",
     * "mandatory": Boolean,
     * "name": "String"
     * }
     */
    updateCheckParam(checkDefParamId: string, updateJson: any): any;
    /**
     * Enables changing one or more field values of a
     * specified check secure parameter.
     * @param checkDefSecureParamId Sys_id of the secure parameter listed in the Check Secure Parameter Definitions
     * [sn_agent_check_secure_param_def] table.
     * @param updateJson Map of check secure parameter fields to be updated to their new values. Refer
     * to the data dictionary for a comprehensive list of Check Secure Parameter Definition
     * fields and types.{
     * "active": Boolean,
     * "name": "String",
     * "order": Number
     * }
     */
    updateCheckSecureParam(checkDefSecureParamId: string, updateJson: any): any;
  }
  export class AgentNowHandler {
    constructor();
    /**
     * Gets status of the request with the given
     * ID.
     * @param requestId A check request ID generated by calling the runCheckForCis()
     * method.
     */
    getRequestStatus(requestId: string): any;
    /**
     * Gets the test check status of the given
     * test result.
     * @param testResultId A test result ID generated by creating a test check request.
     */
    getTestResultStatus(testResultId: string): any;
    /**
     * Runs a check against the given
     * configuration item.
     * @param cis GlideRecord of any CMDB table (any application, host, or agent) that the check
     * is working against.
     * @param check Contains the check ID and optional check parameters. {
     * "checkDefId": "String",
     * "params": Object
     * }
     * @param priority Priority of
     * the request to be set on the ECC queue.Possible values:
     * 0: interactive
     *
     * 1: expedited
     *
     * 2: standard
     *
     *
     *
     * @param timeout Value of the timeout for the request in
     * seconds.
     */
    runCheckForCis(
      cis: GlideRecord,
      check: any | undefined,
      priority: number,
      timeout: number,
    ): string;
    /**
     * Stops a background
     * check.
     * @param requestId The ID of a background check request generated by calling the
     * runCheckForCis() method.
     */
    stopBackgroundCheck(requestId: string): any;
  }
  export class CheckDefinitionTestBuilder {
    constructor();
    /**
     * Builds the test check request with the arguments
     * set.
     */
    build(): any;
    /**
     * Sets the sys_id of the check definition to
     * test.
     * @param checkId Sys_id of the check definition listed
     * in the Check Definitions [sn_agent_check_def] table.
     */
    withCheckId(checkId: string): any;
    /**
     * Sets the sys_id of the configuration item to run the
     * test against.
     * @param ciId Sys_id of a CMDB Configuration Item.
     */
    withCiId(ciId: string): any;
    /**
     * Sets the credentials alias sys_id to use during
     * the test.
     * @param credentialsAliasId Sys_id of a credentials record.
     */
    withCredentialsAliasId(credentialsAliasId: string): any;
    /**
     * Sets the credentials alias name to use during the
     * test. If the given value matches the name of multiple credentials aliases records, then one
     * of them is chosen randomly.
     * @param credentialsAliasName Name of a credentials alias.
     */
    withCredentialsAliasName(credentialsAliasName: string): any;
    /**
     * Sets the credentials sys_id to use during the
     * test.
     * @param credentialsId Sys_id of a credentials record.
     */
    withCredentialsId(credentialsId: string): any;
    /**
     * Sets the credentials name to use during the test. If
     * the given value is the name of several credentials records, then one of them is chosen
     * randomly.
     * @param credentialsName Name of the credentials record.
     */
    withCredentialsName(credentialsName: string): any;
  }
  export class CheckInstanceTestBuilder {
    constructor();
    /**
     * Builds the test check request with the arguments
     * set.
     */
    build(): any;
    /**
     * Sets the sys_id of the check definition to
     * test.
     * @param checkId Sys_id of the check definition listed
     * in the Check Definitions [sn_agent_check_def] table.
     */
    withCheckId(checkId: string): any;
    /**
     * Sets the sys_id of the configuration item to run the
     * test against.
     * @param ciId Sys_id of a CMDB Configuration Item.
     */
    withCiId(ciId: string): any;
    /**
     * Sets the credentials alias sys_id to use during
     * the test.
     * @param credentialsAliasId Sys_id of a credentials alias record.
     */
    withCredentialsAliasId(credentialsAliasId: string): any;
    /**
     * Sets the credentials alias name to use during the
     * test. If the given value matches the name of multiple credentials aliases records, then one
     * of them is chosen randomly.
     * @param credentialsAliasName Name of a credentials alias.
     */
    withCredentialsAliasName(credentialsAliasName: string): any;
    /**
     * Sets the credentials sys_id to use during the
     * test.
     * @param credentialsId Sys_id of a credentials record.
     */
    withCredentialsId(credentialsId: string): any;
    /**
     * Sets the credentials name to use during the test. If
     * the given value is the name of several credentials records, then one of them is chosen
     * randomly.
     * @param credentialsName Name of the credentials record.
     */
    withCredentialsName(credentialsName: string): any;
    /**
     * Sets the agent to run the test. Allowed only in case the tested check instance and
     * policy are proxy.
     * @param agentId Unique ID of an agent proxy to run this check. This value
     * is listed in the Agent ID column of the Agent Client Collectors [sn_agent_cmdb_ci_agent]
     * table.
     */
    withProxyAgentId(agentId: string): any;
  }
}
declare namespace sn_ais {
  export class GeniusResultAnswer {
    /**
     * Adds a set of arbitrary key-value pair fields to a Genius Result
     * Script answer. You can utilize any public Now Platform API to
     * generate these fields.
     * @param map Defines an arbitrary set of key-value pair fields for addition to the Genius
     * Result Script answer. All field values must be Strings.
     *
     * {
     * "fieldName1": String,
     * "fieldName2": String
     * }
     */
    addDataMap(map: any): boolean;
    /**
     * Adds terms to the search query defined for a Genius Result Search
     * answer.
     * @param searchPhrases Array of arbitrary Strings to add as terms for the search query made by the
     * Genius Result Search answer. Search treats these terms as if
     * separated by the OR operator.
     *
     * Example:[
     * "Term": String,
     * "Quoted phrase": String
     * ]
     */
    addSearchPhrases(searchPhrases: any[]): boolean;
    /**
     * Sets and encodes the search query for a Genius Result Search
     * answer.
     * @param query Query to use for the search issued by the Genius Result
     * Search answer.
     */
    setEncodedQuery(query: string): boolean;
    /**
     * Limits the maximum number of search results returned for a Genius Result
     * Search answer. By default, the search query returns up to three
     * results.
     * @param searchLimit Positive integer value for the maximum number of search results to return for a
     * Genius Result Search answer. Values above 3 have no
     * effect.
     *
     * Default: 3
     */
    setSearchLimit(searchLimit: number): boolean;
    /**
     * Specifies terms for the search query defined for a Genius Result
     * Search answer.
     * @param searchPhrase Terms to use for the search query made by the Genius Result
     * Search answer.
     *
     * If you want to retain the original search query terms submitted by the user, set
     * this parameter to the String value returned by the
     * GeniusResultContext.getOriginalSearchPhrase() method.
     */
    setSearchPhrase(searchPhrase: string): boolean;
    /**
     * Limits the search query defined for a Genius Result Search answer
     * to a specific table. The query only returns search results from the specified table as Genius
     * Result answer cards.
     * @param table Now Platform table name. Only indexed records on this table are
     * included in results for the Genius Result Search
     * answer.
     */
    setTable(table: string): boolean;
    /**
     * Specifies whether to perform typo handling auto-correction (spell checking) for a
     * search query defined in a Genius Result Search answer.
     * @param spellCheck Flag that indicates whether to perform typo handling auto-correction for the search
     * query defined in a Genius Result Search answer.
     *
     * Valid values:
     * true: Perform typo handling auto-correction for the search query.
     *
     * false: Bypass typo handling auto-correction for the search query.
     *
     *
     *
     *
     * Default: true
     */
    spellCheck(spellCheck: boolean): any;
  }
  export class GeniusResultContext {
    /**
     * Retrieves the user's original search query terms from the search query. You can use
     * these terms to populate Genius Result answers using GeniusResultAnswer API
     * methods.
     */
    getOriginalSearchPhrase(): string;
    /**
     * Retrieves NLU model prediction results for the search
     * query.
     */
    getPredictionResult(): any;
  }
}
declare namespace sn_auth {
  export class AuthCredential {
    constructor(authCredential?: any);
    /**
     * Returns the value of an AuthCredential attribute.
     * @param key Key of the attribute to return the value for. If you created an empty
     * AuthCredential object, you must use the setAttribute()
     * method to add properties to the object. If you used a credential record
     * to instantiate the AuthCredential object, pass a field name from
     * the Credential [discovery_credentials] table to access the value.
     */
    getAttribute(key: string): any;
    /**
     * Sets an attribute for an AuthCredential object.
     * @param key Name of the attribute to set. If you created an empty
     * AuthCredential object, you must use the this method to add
     * properties to the object. If you used a credential record to instantiate the
     * AuthCredential object, pass a field name from the Credential
     * [discovery_credentials] table to set the value.
     * @param value Value of the attribute.
     */
    setAttribute(key: string, value: string): any;
  }
  export class GlideOAuthClient {
    /**
     * Retrieves the access and refresh tokens for the client.
     * @param requestID Request ID from the OAuth Requestor Profile [oauth_requestor_profile] table,
     * which references the OAuth Entity Profile [oauth_entity_profile] table.
     * @param oauthProfileID OAuth profile ID from the OAuth Entity Profile [oauth_entity_profile]
     * table.
     */
    getToken(requestID: string, oauthProfileID: string): GlideOAuthToken;
    /**
     * Retrieves the token for the client, with the request parameters encoded in JSON
     * format.
     * @param clientName The client name.
     * @param jsonString The JSON string for the client.
     */
    requestToken(
      clientName: string,
      jsonString: string,
    ): GlideOAuthClientResponse;
    /**
     * Retrieves the token for the client, with the client name and the request set into a
     * GlideOAuthClientResponse object.
     * @param clientName The client name.
     * @param request The request.
     */
    requestTokenByRequest(
      clientName: string,
      request: GlideOAuthClientRequest,
    ): GlideOAuthClientResponse;
    /**
     * Revokes the access or refresh token for the client, with the request and optional
     * header parameters set into a GlideOAuthClientRequest object.
     * @param clientName The client name.
     * @param accessToken The access token.
     * @param refreshToken The refresh token.
     * @param request The request.
     */
    revokeToken(
      clientName: string,
      accessToken: string,
      refreshToken: string,
      request: GlideOAuthClientRequest,
    ): GlideOAuthClientResponse;
  }
  export class GlideOAuthClientRequest {
    /**
     * Retrieves the grant type.
     */
    getGrantType(): string;
    /**
     * Retrieves the HTTP headers for the string you provide.
     * @param name The name of the parameter.
     */
    getHeader(name: string): any;
    /**
     * Retrieves the HTTP headers.
     */
    getHeaders(): any;
    /**
     * Retrieves the parameters for the parameter name you provide.
     * @param name The parameter name for which you want the parameters.
     */
    getParameter(name: string): string;
    /**
     * Retrieves the password.
     */
    getPassword(): string;
    /**
     * Retrieves the refresh token.
     */
    getRefreshToken(): string;
    /**
     * Retrieves the scope.
     */
    getScope(): string;
    /**
     * Retrieves the user name.
     */
    getUserName(): string;
    /**
     * Sets the grant type for the string you provide.
     * @param name The grant type.
     */
    setGrantType(name: string): any;
    /**
     * Retrieves the HTTP headers for the string you provide.
     * @param name The name of the parameter.
     * @param value The value of the parameter.
     */
    setHead(name: string, value: string): any;
    /**
     * Sets the parameters for the name:value pair of strings you provide.
     * @param name The parameter name for which you want the parameters.
     * @param value The value of the parameter.
     */
    setParameter(name: string, value: string): any;
    /**
     * Sets the password with the string you provide.
     * @param password The user name.
     */
    setPassword(password: string): any;
    /**
     * Sets the refresh token with the string you provide.
     * @param refreshToken The refresh token.
     */
    setRefreshToken(refreshToken: string): any;
    /**
     * Sets the scope for the string you provide.
     * @param scope The scope.
     */
    setScope(scope: string): any;
    /**
     * Sets the user name with the string you provide.
     * @param userName The user name.
     */
    setUserName(userName: string): any;
  }
  export class GlideOAuthClientResponse {
    /**
     * Retrieves all of the response information, including instance information.
     */
    getBody(): string;
    /**
     * Retrieves the HTTP response content header from an external OAuth provider.
     */
    getContentType(): string;
    /**
     * Retrieves the error message if authentication is not successful.
     */
    getErrorMessage(): string;
    /**
     * Retrieves the HTTP response code from the external OAuth provider.
     */
    getResponseCode(): string;
    /**
     * Retrieves the error message if authentication is not successful.
     */
    getResponseParameters(): any;
    /**
     * Retrieves the refresh token.
     */
    getToken(): GlideOAuthToken;
  }
  export class GlideOAuthToken {
    /**
     * Retrieves the access token associated with the GlideOAuthToken object.
     */
    getAccessToken(): string;
    /**
     * Deprecated. Retrieves the sys_id of the token ID associated with the GlideOAuthToken
     * object.
     */
    getAccessTokenSysID(): string;
    /**
     * Retrieves the lifespan of the access token associated with the GlideOAuthToken
     * object.
     */
    getExpiresIn(): number;
    /**
     * Refreshes the token associated with the GlideOAuthToken object.
     */
    getRefreshToken(): string;
    /**
     * Deprecated. Retrieves the sys_id of the refresh token.
     */
    getRefreshTokenSysID(): string;
    /**
     * Retrieves the token scope, which is the amount of access granted by the access
     * token.
     */
    getScope(): string;
  }
  export class HttpRequestAuthedData {
    constructor();
    /**
     * Adds a header to the HttpRequestAuthedData object.
     * @param key Name of the HTTP header.
     * @param value Value of the HTTP Header.
     */
    addHeader(key: string, value: string): any;
    /**
     * Adds a query parameter to the HttpRequestAuthedData object.
     * @param key Name of the query parameter.
     * @param value Value of the query parameter.
     */
    addQueryParam(key: string, value: string): any;
    /**
     * Returns the credential value that was included when the request was signed.
     */
    getCredentialValue(): string;
    /**
     * Returns whether the signature is applied to the request in the header, as a query
     * parameter, or as a credential value.
     */
    getDirective(): string;
    /**
     * Returns an object containing the headers that were included when the request was
     * signed.
     */
    getHeaderMap(): any;
    /**
     * Returns an object containing the query parameters included when the request was
     * signed.
     */
    getQueryMap(): any;
    /**
     * Returns the status of the request signing.
     */
    getStatus(): string;
    /**
     * Returns a detailed message about the request signing. If the request signing fails,
     * this method returns the error message.
     */
    getStatusMessage(): string;
    /**
     * Sets a credential value for the HttpRequestAuthedData object.
     * @param credential_value Text of the credential value.
     */
    setCredentialValue(credential_value: string): any;
    /**
     * Defines whether to apply the signature to the signed request in the header, as a query
     * parameter, or as a credential value.
     * @param directive Whether to apply the signature to the header, query parameter, or credential
     * value of the signed request. Values include:
     *
     * query: Applies signature as a query parameter.
     *
     * header: Applies signature to the request header.
     *
     * credential_value:
     * Applies signature to the credential value.
     *
     *
     */
    setDirective(directive: string): any;
    /**
     * Sets the status of the request signing.
     * @param status The status of the request signing. Possible values:
     *
     * success: The system successfully signed the request.
     *
     * fail: The system failed to sign the request.
     *
     * skipped: The system skipped signing because the information
     * was incomplete.
     *
     *
     */
    setStatus(status: string): any;
    /**
     * Sets a status message for the request signing.
     * @param statusMessage Message to set for the request signing status.
     */
    setStatusMessage(statusMessage: string): any;
  }
  export class HttpRequestData {
    constructor();
    /**
     * Adds a header to the HttpRequestData object.
     * @param key Name of the HTTP header.
     * @param value Value of the HTTP Header.
     */
    addHeader(key: string, value: string): any;
    /**
     * Adds a query parameter to the HttpRequestData object.
     * @param key Name of the query parameter.
     * @param value Value of the query parameter.
     */
    addQueryParam(key: string, value: string): any;
    /**
     * Removes a header from the HttpRequestData object.
     * @param key Name of the HTTP header to remove.
     */
    deleteHeader(key: string): any;
    /**
     * Returns the sys_id of the Connection & Credential alias associated with the Integration Hub REST step.
     */
    getConnectionAliasID(): string;
    /**
     * Returns the value of a connection attribute associated with the Connection &
     * Credential alias associated with Integration Hub REST step.
     * @param name Name of the connection attribute.
     */
    getConnectionExtendedAttribute(name: string): string;
    /**
     * Returns the content of the request in the HttpRequestData object.
     */
    getContent(): string;
    /**
     * Returns the date when the request was signed.
     */
    getDate(): number;
    /**
     * Returns whether the signature is applied to the request in the header or as a query
     * parameter.
     */
    getDirective(): string;
    /**
     * Returns the endpoint set for the request.
     */
    getEndpoint(): string;
    /**
     * Returns the time in seconds before the signature expires starting when the request was
     * signed using the generateAuth() method in the
     * RequestAuthAPI class.
     */
    getExpiry(): number;
    /**
     * Returns the value associated with the given HTTP header.
     * @param key Name of HTTP header.
     */
    getHeader(key: string): string;
    /**
     * Returns an object containing the headers included in the request.
     */
    getHeaderMap(): any;
    /**
     * Returns the host used in the request.
     */
    getHost(): string;
    /**
     * Returns the HTTP method used in the request.
     */
    getHttpMethod(): string;
    /**
     * Returns the value of the specified query parameter.
     * @param key Name of the query parameter to get the value of.
     */
    getQueryParam(key: string): string;
    /**
     * Returns an object containing the query parameters included in the request.
     */
    getQueryParamMap(): any;
    /**
     * Returns the region for the request that will be used in signing.
     */
    getRegion(): string;
    /**
     * Returns the service defined in the request.
     */
    getService(): string;
    /**
     * Defines the content to send in the request.
     * @param content Content to send in the request.
     */
    setContent(content: string): any;
    /**
     * Defines the date of the request used for signing.
     * @param date The difference between January 1, 1970 UTC and the date used to sign the
     * request.Unit: Milliseconds
     */
    setDate(date: number): any;
    /**
     * Defines whether to apply the signature to the request in a header or as a query
     * parameter.
     * @param directive Whether to apply the signature to the header or as a query parameter. Values
     * include:
     *
     * query: Applies signature as a query parameter.
     *
     * header: Applies signature to the request header.
     *
     *
     * Default: header
     */
    setDirective(directive: string): any;
    /**
     * Defines the endpoint to send the request to.
     * @param endpoint Endpoint to send the request to. The endpoint can include query parameters,
     * path, and version.
     */
    setEndpoint(endpoint: string): any;
    /**
     * Sets the amount of time before the signature expires starting when the request is
     * signed using the generateAuth() method in the
     * RequestAuthAPI class.
     * @param expiry Amount of time before the signature expires.Unit: Seconds
     */
    setExpiry(expiry: number): any;
    /**
     * Defines the host used in the request.
     * @param host Name of the HTTP request host.
     */
    setHost(host: string): any;
    /**
     * Sets the HTTP method to use in the request.
     * @param httpMethod HTTP method to use in the request.
     */
    setHttpMethod(httpMethod: string): any;
    /**
     * Defines the region to use for the request in signing.
     * @param region The region to use to sign the request. Available values are determined by the
     * third-party API's requirements.
     */
    setRegion(region: string): any;
    /**
     * Defines the service for the request.
     * @param service The service for the request.
     */
    setService(service: string): any;
  }
  export class RequestAuthAPI {
    constructor(data: any, credential: any);
    /**
     * Signs the HttpRequestData object and returns an HttpRequestAuthedData object to use to
     * send in the REST request.
     */
    generateAuth(): any;
    /**
     * Returns the credential record used to sign the request.
     */
    getAuthCredential(): any;
    /**
     * Returns the HttpRequestData object that was used to instantiate the
     * RequestAuthAPI class.
     */
    getHttpRequestData(): any;
    /**
     * Generates a temporary, limited privilege token that you can use to provide trusted
     * users with temporary security credentials to control third-party resources.
     */
    resetAuthCredential(): any;
  }
  export class SCIM2Client {
    /**
     * Deletes a specified resource from an external service provider system.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param providerResourceId Required. Unique identifier of the associated resource on the external service
     * provider system.
     */
    executeDelete(
      provider: string,
      resourceName: string,
      providerResourceId: string,
    ): any;
    /**
     * Returns all resources from a specified external provider system that match the passed
     * criteria.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param queryParams Required. SCIM compliant query parameters passed to the external SCIM service
     * provider endpoint.For additional information on the available query parameters and
     * their associated format, refer to the following sections in the Internet Engineering
     * Task Force document: System for Cross-domain Identity Management: Protocol
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.3
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.5
     *
     *
     *
     */
    executeGet(
      provider: string,
      resourceName: string,
      queryParams: string,
    ): any;
    /**
     * Returns a resource from the external provider system with the specified unique resource
     * ID.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param providerResourceId Required. Unique identifier of the associated resource on the external service
     * provider system.
     * @param queryParams Required. SCIM compliant query parameters passed to the external SCIM service
     * provider endpoint.For additional information on the available query parameters and
     * their associated format, refer to the following sections in the Internet Engineering
     * Task Force document: System for Cross-domain Identity Management: Protocol
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.4
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.3
     *
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.5
     *
     *
     *
     */
    executeGetById(
      provider: string,
      providerResourceId: string,
      queryParams: string,
    ): any;
    /**
     * Creates or updates a resource in an external service provider system for a specified
     * sys_id.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
     * instance (the client). This value is located in the primary_table field in the SCIM
     * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
     */
    provision(provider: string, resourceName: string, resourceId: string): any;
    /**
     * Creates a new resource in an external service provider system for a specified
     * sys_id.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
     * instance (the client). This value is located in the primary_table field in the SCIM
     * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
     */
    provisionNew(
      provider: string,
      resourceName: string,
      resourceId: string,
    ): any;
  }
  export class SCIM2ClientUtil {
    /**
     * Returns the unique identifier of a specified resource from a specified external
     * provider system for a unique resource ID in a ServiceNow instance using a
     * filter expression to describe the desired
     * resource.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param filter Required. Filter expression to apply to the return results.For additional
     * information on the available filter parameters and their associated format, refer to
     * the following section in the Internet Engineering Task Force document: System for
     * Cross-domain Identity Management: Protocol
     * https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2
     */
    getProviderIdByFilter(
      provider: string,
      resourceName: string,
      filter: string,
    ): string;
    /**
     * Returns the unique identifier of a specified resource from a specified external
     * provider system for a unique resource ID in a ServiceNow
     * instance.
     * @param provider Required. Name of the configured SCIM service provider. The service provider name
     * is defined in the name field of the SCIM Provider [sys_scim_provider] table.
     * @param resourceName Required. Name of the resource type, such as User or Group. This value is located
     * in the resource_name field in the SCIM Provider Resource Mapping
     * [sys_scim_provider_resource_mapping] table.
     * @param resourceId Required. Sys_id of the resource saved in the ServiceNow
     * instance (the client). This value is located in the primary_table field in the SCIM
     * Provider Resource Mapping [sys_scim_provider_resource_mapping] table.
     */
    getProviderIdByResourceId(
      provider: string,
      resourceName: string,
      resourceId: string,
    ): string;
  }
}
declare namespace sn_cc {
  export class ConnectionInfo {
    /**
     * Returns the value of a ConnectionInfo attribute with the specified
     * property name.
     * @param name Name of a ConnectionInfo object property.
     */
    getAttribute(name: string): string;
    /**
     * Returns the value of credential attributes for a specified connection.
     */
    getCredentialAttribute(): any;
    /**
     * Returns the connection attributes as a collection of key-value pairs.
     */
    getDataMap(): any;
    /**
     * Returns the extended attributes as a collection of key-value pairs.
     */
    getExtendedAttributes(): any;
  }
  export class ConnectionInfoProvider {
    constructor();
    /**
     * Retrieves a ConnectionInfo object identified by the given aliasID in the current
     * domain.
     * @param aliasID Sys_id of a connection alias.
     */
    getConnectionInfo(aliasID: string): any;
    /**
     * Retrieves a ConnectionInfo object identified by the given aliasID for a specific
     * domain.
     * @param aliasID Sys_id of a connection alias.
     * @param domainID Sys_id of a domain or global.
     */
    getConnectionInfoByDomain(aliasID: string, domainID: string): any;
  }
  export class StandardCredentialsProvider {
    constructor();
    /**
     * Returns the credential record object identified by the specified sys_id.
     * @param sys_id Sys_id of the credential record. Located in the Credentials
     * [discovery_credentials] table.
     */
    getCredentialByID(sys_id: string): any;
    /**
     * Returns an array of all credentials that match the specified types and
     * tags.
     * @param tags Optional. Comma-separated list of tag names. For example, "ssh,
     * jdbc".Examples of valid calls:
     * var credentials = provider.getCredentials(null,
     * null);
     *
     *
     * var credentials = provider.getCredentials(["ssh"], "");
     *
     *
     * var credentials = provider.getCredentials(new ArrayList&lt;String&gt;(),
     * "ssh,admin");
     *
     *
     *
     * @param types Optional. Credential type names. For example, ["ssh", "windows"]Note: If
     * types is null or empty, any match returns a credential. If
     * types is specified, the credentials whose type matches one
     * of the types is returned.
     */
    getCredentials(tags?: string, types?: any[]): any;
  }
}
declare namespace sn_chg_score {
  export class ChangeSuccess {
    /**
     * Returns the value specified in the system property
     * com.snc.change_management.success_score.entry_level_score.
     */
    getEntryLevelTeamScore(): number;
    /**
     * Returns the value specified in the system property
     * com.snc.change_management.success_score.maximum_score.
     */
    getMaximumPermittedTeamScore(): string;
    /**
     * Returns the value specified in the system property
     * com.snc.change_management.success_score.minimum_score.
     */
    getMinimumPermittedTeamScore(): string;
    /**
     * Returns the latest model success score based on the specified change request
     * GlideRecord.
     * @param chgGr Change request GlideRecord for which to return the model success score.
     */
    getModelScoreForChange(chgGr: any): void;
    /**
     * Returns the latest model success score for the specified model sys_id.
     * @param sys_id Sys_id of the group for which to return the model success score. Located in the
     * User Group [sys_user_grou]
     * table.
     * @param domain_id Optional. Sys_id of a domain to use when querying Performance Analytics for the
     * model success score.
     */
    getModelScoreForModelId(sys_id: string, domain_id?: string): void;
    /**
     * Returns the latest change team success score (original change success score based on
     * group), model success score, and type success score based on the specified change request
     * GlideRecord.
     * @param chgGr Change request GlideRecord.
     */
    getScoresForChange(chgGr: any): any;
    /**
     * Returns the latest change team success score (original change success score based on
     * group) based on the specified change request GlideRecord.
     * @param chgGr Change request GlideRecord for which to return the change team success
     * score.
     */
    getTeamScoreForChange(chgGr: any): any;
    /**
     * Returns the latest change team success score (original change success score based on
     * group) for the specified group.
     * @param sys_id Sys_id of the group for which to return the change team success score. Located
     * in the User Group [sys_user_group] table.
     * @param domain_id Optional.
     * Sys_id of a domain to use when querying Performance Analytics for the
     * team success score.
     */
    getTeamScoreForGroupId(sys_id: string, domain_id?: string): any;
    /**
     * Returns the latest type success score based on the specified change request
     * GlideRecord.
     * @param chgGr Change request GlideRecord for which to return the type success score.
     */
    getTypeScoreForChange(chgGr: any): any;
    /**
     * Returns the latest type success score for the specified change type.
     * @param type Type of change request for which to return the type success score, such as
     * "emergency".
     * @param domain_id Optional. Sys_id of a domain to use when querying Performance Analytics for the
     * type success score.
     */
    getTypeScoreForType(type: string, domain_id?: string): any;
    /**
     * Controls whether the associated method returns the details of the Performance Analytics
     * (PA) indicators used to generate each of the different types of scores (team, model and type).
     * By default, this information is not returned.
     * @param toggle Flag that indicates whether to include the details of the PA
     * indicators.Valid values:
     * true: Return the details of the PA indicators.
     *
     * false: Do not return the details of the PA indicators.
     *
     *
     *
     * Default: false
     */
    withIndicatorScores(toggle: boolean): any;
    /**
     * Only valid when called with the getScoresForChange() method.
     * Controls whether the getScoresForChange() method returns the model score. By
     * default the model score is returned.
     * @param toggle Flag that indicates whether to include the model success score.
     *
     * Valid values:
     * true: Return the model success score.
     *
     * false: Do not return the model success score.
     *
     *
     *
     *
     * Default: true
     */
    withModelScore(toggle: boolean): any;
    /**
     * Controls whether the method validates the user calling the associated method, ensuring
     * that they have the rights to read the requested content.
     * @param toggle Flag that indicates whether to validate the user calling the associated
     * method.Valid values:
     * true: Validate the user calling the associated method.
     *
     * false: Do not validate the user calling the associated method.
     *
     *
     *
     * Default: true
     */
    withSecurity(toggle: boolean): any;
    /**
     * Only valid when called with the getScoresForChange() method.
     * Controls whether the getScoresForChange() method returns the team score. By
     * default the team score is returned.
     * @param toggle Flag that indicates whether to include the team success score.Valid
     * values:
     * true: Return the team success score.
     *
     * false: Do not return the team success score.
     *
     *
     *
     * Default: true
     */
    withTeamScore(toggle: boolean): any;
    /**
     * Controls whether the associated method returns the details for all change success score
     * rating records. By default, this information is not returned.
     * @param toggle Flag that indicates whether to include the details for all team success score
     * rating records.Valid values:
     * true: Return the details for all change success score rating records.
     *
     * false: Do not return the details for all change success score rating
     * records.
     *
     *
     *
     * Default: false
     */
    withTeamScoreRatings(toggle: boolean): any;
    /**
     * Only valid when called with the getScoresForChange() method.
     * Controls whether the getScoresForChange() method returns the type score. By
     * default the type score is returned.
     * @param toggle Flag that indicates whether to include the type success score.Valid
     * values:
     * true: Return the type success score.
     *
     * false: Do not return the type success score.
     *
     *
     *
     * Default: true
     */
    withTypeScore(toggle: boolean): any;
  }
}
declare namespace sn_clotho {
  export class Client {
    constructor();
    /**
     * Accumulates metric values at specified timestamp and saves the
     * result to the database rather than overwriting the value.
     * @param now_GR Name of the series GlideRecord from which to obtain the accumulated
     * value.See also: getSeries()
     * @param default_value Optional. Default value for accumulation at a given
     * timestamp. Used only during the first call to accumulate if a value is unavailable
     * for a given timestamp.A use case could be accumulating a watts
     * metric for a total_power. You want to accumulate watts for a router connected to an
     * outlet without a power meter to measure it. If you know the consumption value and it
     * is constant), you can use the constant value as a default value to accumulate
     * total_power. For example, you would use 20 if the router is constantly plugged in
     * and consumes 20 Watts.
     * The timestamp value can be provided using the DataBuilder API.
     * Default: 0
     */
    accumulate(now_GR: GlideRecord, default_value?: number): any;
    /**
     * Remove a specified metric from a specified table in the MetricBase
     * database
     * @param tableName The name of the table whose specified metric is to be deleted.
     * @param metricName The name of the metric.
     */
    deleteMetric(tableName: string, metricName: string): any;
    /**
     * Remove the data in the MetricBase database associated with
     * the specified metric in the specified GlideRecord. Use this method for removing test data.
     * @param now_GR The records whose time series data for the specified metric is to be
     * deleted.
     * @param metric The name of the metric.
     */
    deleteSeries(now_GR: GlideRecord, metric: string): any;
    /**
     * Get all series from a specific dimension.
     * @param now_GR The record from which to obtain the series.
     * @param metric The name of the metric.
     * @param lastUpdateBefore Optional. Date in the future representing the end of the period to be
     * evaluated.
     */
    getSeries(
      now_GR: GlideRecord,
      metric: string,
      lastUpdateBefore?: GlideDateTime,
    ): any[];
    /**
     * Saves metric data to the MetricBase database.
     * @param metricData One of the following:
     * DataBuilder object containing metric data.
     *
     * Array of DataBuilder objects containing metric data.
     *
     *
     */
    put(metricData: any): any;
  }
  export class Data {
    /**
     * Returns the end time for data in the Data object.
     */
    getEnd(): GlideDateTime;
    /**
     * Returns the label assigned by the
     * sn_clotho.ClothoTransform.label() method.
     */
    getLabel(): string;
    /**
     * Returns the name of the metric of the data series. Returns null when the data object is
     * associated with multiple data series.
     */
    getMetricName(): string;
    /**
     * Returns the time period in milliseconds.
     */
    getPeriod(): number;
    /**
     * Returns the start time for data in the Data object.
     */
    getStart(): GlideDateTime;
    /**
     * Returns the subject of the data series. Returns null when the data object is associated
     * with multiple data series.
     */
    getSubject(): string;
    /**
     * Returns the name of the table assigned in the DataSelector class constructor. Returns
     * null when the data object is associated with multiple data series.
     */
    getTableName(): string;
    /**
     * Returns an array of values.
     */
    getValues(): any[];
    /**
     * Returns the number of values in the Data object.
     */
    size(): number;
  }
  export class DataBuilder {
    constructor(glideRecord: any, subject: string, metric: string);
    /**
     * Add a series of data points to the DataBuilder object. Each data point is a time stamp
     * and a value.
     * @param start The time stamp for the first data point. Subsequent time stamps are calculated
     * using the retention policy collection period.
     * @param value An array of numbers.
     */
    add(start: GlideDateTime, value: any[]): any;
    /**
     * Add a series of data points to the DataBuilder object. Each data point is a time stamp
     * and a value.
     * @param start The time stamp for the data point.
     * @param value The value of the data point.
     */
    add(start: GlideDateTime, value: number): any;
  }
  export class MetricInfo {
    constructor(table: string, metric: string);
    /**
     * Gets the retention policy schedules of the specified metric.
     */
    getRetentionSchedulesInMinutes(): any;
    /**
     * Indicates whether the specified metric is mapped to the table defined in a
     * MetricInfo object.
     */
    isValid(): boolean;
  }
  export class Transformer {
    constructor(sourceRecords: GlideRecord);
    /**
     * Run the transform.
     * @param start The beginning of the period to be evaluated.
     * @param end The end of the period to be evaluated.
     */
    execute(start: GlideDateTime, end: GlideDateTime): any;
    /**
     * Specify a field to be used to group the data.
     * @param field A field in the table to be used to group the transform results.
     */
    groupBy(field: string): any;
    /**
     * Specify the metric field to be used in the transform.
     * @param metricName Name of the metric field.
     */
    metric(metricName: string): any;
  }
  export class TransformPart {
    /**
     * Add the specified number to the value in each time stamp.
     * @param constant The number to add to the value in each time stamp.
     */
    add(constant: number): any;
    /**
     * Aggregate the selected metric series into one series containing the average value for
     * each time stamp.
     */
    avg(): any;
    /**
     * Create a result set that for each time stamp returns specified number of bottom values.
     * This method results in 'count' number of series. Each value retains the label of its source
     * series.
     * @param count The number of series to return. The series are labeled 0 to count - 1.
     */
    bottom(count: number): any;
    /**
     * Replace the value in any time stamp that is greater than the specified value with the
     * specified value.
     * @param ceiling The maximum allowed value for any time stamp.
     */
    ceil(ceiling: number): any;
    /**
     * Mark this transform for collection.
     */
    collect(): any;
    /**
     * Aggregate the selected metric series into one series containing the number of values
     * for each time stamp.
     */
    count(): any;
    /**
     * Divide the value in each time stamp by the specified number.
     * @param constant The number by which to divide the value of each time stamp.
     */
    div(constant: number): any;
    /**
     * Create a series using the specified aggregator for the specified time.
     * @param aggregator Can be:
     * AVG
     *
     * CHISQUARE
     *
     * LAST
     *
     * MAX
     *
     * MEDIAN
     *
     * MIN
     *
     * STDDEV
     *
     *
     * For definitions of these options, see MetricBase
     * transforms.
     * @param duration Time period for the series.
     */
    filter(aggregator: any, duration: any): any;
    /**
     * Replace the value in any time stamp that is less than the specified value with the
     * specified value.
     * @param floor The minimum value for any time stamp.
     */
    floor(floor: number): any;
    /**
     * Create series made up of the value that the specified percentage of values is below.
     * Returns a series for each fraction in the specified array.
     * @param fractions The fractions to use on the input series.
     */
    fractiles(fractions: any[]): any;
    /**
     * Return the part of the result relevant to this transform.
     */
    getResult(): any;
    /**
     * Specify a field by which to group data. To specify multiple fields, run successive
     * calls individually.
     * @param field Name of a field in the table by which to group the transform results.
     */
    groupBy(field: string): any;
    /**
     * Create a data value for a NaN data item by interpolating from adjacent data values.
     * @param count Specifies the number of data samples in each direction to check for a non NaN
     * value. If if a non NaN value is not found, NaN is used.
     */
    interpolate(count: any): any;
    /**
     * Perform an Interquartile range transform.
     */
    iqr(): any;
    /**
     * Add a label for the resulting series.
     * @param label The label for the transform results.
     */
    label(label: string): any;
    /**
     * Returns at most the specified number of values, starting at the most recent non-NaN
     * value.
     * @param count A number of time stamps.
     */
    limit(count: any): any;
    /**
     * Run a logarithm on the value in each time stamp where the result is the log of the
     * specified base for the time stamp value.
     * @param base The base for the logarithm calculation.
     */
    log(base: number): any;
    /**
     * Returns a series with the maximum value for each time stamp.
     */
    max(): any;
    /**
     * Create a series containing the median of values for each time stamp across a set of
     * series.
     */
    median(): any;
    /**
     * Specify the metric field to be used in the transform.
     * @param metric Name of the metric field.
     */
    metric(metric: string): any;
    /**
     * Returns a series with the minimum value for each time stamp.
     */
    min(): any;
    /**
     * Multiply the value in each time stamp by the specified number.
     * @param constant The number by which to multiply the value of each time stamp.
     */
    mul(constant: number): any;
    /**
     * Partition the series into intervals of the same duration.
     * @param aggregator The aggregator to use. Can be min, max, avg, or last.
     * @param duration The interval length.
     * @param base The zero offset for partitioning. For example, if you partition by day (24h),
     * then set the base to Monday at midnight in your time zone. If you partition by 30
     * days, then set the base to  1st day of the most recent month.
     */
    partition(
      aggregator: string,
      duration: GlideDateTime,
      base: GlideDateTime,
    ): any;
    /**
     * Specify the number of data points to include in the result.
     * @param count The number of samples to include in the result.
     */
    resample(count: number): any;
    /**
     * Specify the number of data points to include in the result.
     * @param min The minimum number of samples to include in the result. If not enough samples
     * are available, interpolation is used to create samples.
     * @param max The maximum number of samples to include in the result.
     */
    resample(min: number, max: number): any;
    /**
     * Specify the number of data points to include in the result.
     * @param aggregator Can be LAST, AVG, MIN, or MAX.
     * @param duration The time period for the result set.
     */
    resample(aggregator: string, duration: GlideDuration): any;
    /**
     * Specify the number of data points to include in the result.
     * @param aggregator Can be LAST, AVG, MIN, or MAX.
     * @param numValues The number of samples to include in the result set.When the number of values
     * requested is greater than the number of values in the data for the requested time
     * period, interpolate() is used to add values between existing
     * points to reach the requested number of values.
     */
    resample(aggregator: string, numValues: number): any;
    /**
     * Round the value in each time stamp to the specified precision.
     * @param precision The value to be used in the rounding calculation.
     */
    round(precision: number): any;
    /**
     * Create a series containing the standard deviation of values for each time stamp across
     * a set of series.
     */
    stddev(): any;
    /**
     * Subtract the specified number from the value in each time stamp.
     * @param constant The number to subtract from the value in each time stamp.
     */
    sub(constant: any): any;
    /**
     * Aggregate the selected metric series into one series containing the sum of all values
     * for each time stamp.
     */
    sum(): any;
    /**
     * Create a result set that for each time stamp returns the specified number of top
     * values. This method results in 'count' number of series. Each value retains the label of its
     * source series.
     * @param count The number of series to return. The series are labeled 0 to count - 1.
     */
    top(count: number): any;
  }
  export class TransformResult {
    /**
     * Returns an array of Data objects. Returns an error if no group was specified for the
     * transform.
     */
    byGroup(): any[];
    /**
     * Returns the transformed data with the specified label.
     * @param label The label that identifies the data to be retrieved.
     */
    getByLabel(label: string): any;
    /**
     * Returns a single Data object, or null if the result is empty.
     */
    getData(): any;
    /**
     * Returns the transformed data as an array. This method turns a Data object into an
     * array.
     */
    toArray(): any[];
  }
}
declare namespace sn_cmdb {
  export class IdentificationEngine {
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
}
declare namespace sn_cmdbgroup {
  export class CMDBGroupAPI {
    /**
     * Returns all configuration items (CIs) for the specified group. The results include all
     * manual CIs and the list of CIs from the query builder's saved query.
     * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
     * @param requireCompleteSet Optional, but must be passed if
     * requireAllQueryNodesCis is passed. Flag that indicates
     * whether an empty string is returned if any CIs are filtered out by access control
     * list (ACL) restrictions.
     * Valid values:
     * true: Return empty string.
     *
     * false: Don't return value.
     *
     *
     *
     * Default: false
     * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
     * return CIs from all CMDB classes of the query. Valid values:
     * true: Return CIs from all columns.
     *
     * false: Only return CIs from the starting node of the query builder query.
     *
     *
     *
     * Default: false
     */
    getAllCI(
      groupId: string,
      requireCompleteSet?: boolean,
      requireAllQueryNodesCis?: boolean,
    ): any;
    /**
     * Returns all configuration items (CIs) returned from all saved query builders' query IDs
     * for the specified group.
     * @param groupId Sys_id of the Configuration Management Database (CMDB) group.
     * @param requireCompleteSet Optional, but must be passed if
     * requireAllQueryNodesCis is passed. Flag that indicates
     * whether an empty string is returned if any CIs are filtered out by access control
     * list (ACL) restrictions.
     * Valid values:
     * true: Return empty string.
     *
     * false: Don't return value.
     *
     *
     *
     * Default: false
     * @param requireAllQueryNodesCis Optional. Flag that indicates whether to
     * return CIs from all CMDB classes of the query. Valid values:
     * true: Return CIs from all columns.
     *
     * false: Only return CIs from the starting node of the query builder query.
     *
     *
     *
     * Default: false
     */
    getAllCIFromQueryBuilder(
      groupId: string,
      requireCompleteSet?: boolean,
      requireAllQueryNodesCis?: boolean,
    ): any;
    /**
     * Returns the CMDB group's manual CI list.
     * @param groupId The sysId of the CMDB group.
     * @param requireCompleteSet When true, returns an error string if any CIs are filtered out by ACL
     * restrictions.
     */
    getManualCIList(groupId: string, requireCompleteSet: boolean): string;
    /**
     * Returns the query builder's query IDs for the specified CMDB group.
     * @param groupId The sysId of the CMDB group.
     * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
     * restrictions.
     */
    getSavedQueryIdList(groupId: string, requireCompleteSet: boolean): string;
    /**
     * Sets the manual CI list for the specified group. The existing manual CI list is
     * overwritten. CI sysIds not found in the cmdb_ci table are ignored.
     * @param groupId The sysId of the CMDB group.
     * @param ciSysIds Comma separated list of CI sysIds.
     */
    setManualCIList(groupId: string, ciSysIds: string): string;
    /**
     * Sets the saved query ID list for the specified group. The existing query ID list is
     * overwritten. Query sysIds not found in the qb_saved_query table are ignored.
     * @param groupId The sysId of the CMDB group.
     * @param queryIds Comma separated list of saved query sysIds.
     */
    setSavedQueryIdList(groupId: string, queryIds: string): string;
  }
}
declare namespace sn_connect {
  export class Conversation {
    /**
     * Add a user to a conversation.
     * @param sysID Sys_ID of the user you want to add to a conversation.
     */
    addSubscriber(sysID: string): any;
    /**
     * Create a Connect
     * conversation.
     * @param name Create a conversation with a specific name.
     * @param type Include a specific conversation type. The type is determined by the type choice
     * list. The base system includes the following type options:
     * connect
     *
     * support
     *
     * group
     *
     * peer
     *
     * qanda
     *
     * team
     *
     *
     */
    create(name: string, type: string): any;
    /**
     * Get an existing Connect conversation by sys_id.
     * @param sysID The sys_id of the conversation record.
     */
    get(sysID: string): any;
    /**
     * Remove a user from a conversation.
     * @param SysID The sys_id of the user you want to remove from a conversation.
     */
    removeSubscriber(SysID: string): any;
    /**
     * Send a message to a conversation.
     * @param Body The main text of the message.
     * @param Field The field you want the message to appear as. Only use this option if adding a
     * message to a record conversation. Choose from work_notes, comments, or system. Using
     * the field system treats the message as a system message.
     */
    sendMessage(Body: string, Field: string): any;
  }
  export class Queue {
    /**
     * Retrieves a specified chat queue.
     * @param SysID Sys_id of a queue from the Chat Queue [chat_queue] table.
     */
    get(SysID: string): any;
    /**
     * Adds the current user to an existing Connect Support chat queue and
     * posts the specified question.
     * @param Question Question to add to the chat queue.
     */
    join(Question: string): any;
  }
}
declare namespace sn_cs {
  export class VoiceTranscriptObject {
    /**
     * Saves third-party voice conversation transcript data to tables within a ServiceNow instance that is then accessible through Customer Service Management (CSM).
     * @param voiceConversationJson JSON that represents the voice conversation to store. This JSON is sent by
     * another ServiceNow plugin, such as OpenFrame. Third-party
     * vendors, such as Amazon, send the JSON to the plugin. The associated plugin parses
     * out the voice conversation and sends the JSON in the required format to Virtual Agent.For example, the following is an example of an
     * AmazonConnect conversation:
     * {
     * "interactionId":"bgr09b5a-7308-47b2-jy97-737de9f45d19",
     * "source":"AmazonConnect",
     * "conversationStarted":"2021-08-06 15:07:51",
     * "transcript":[
     * {
     * "isEvent":"False",
     * "isInternalMessage":"False",
     * "beginOffsetMillis":2650,
     * "content":"This is John. How can I help you? Yeah,",
     * "endOffsetMillis":9380,
     * "id":"954c4edc-31a8-48b0-8f6e-7fa0c4ca00a8",
     * "participantId":"AGENT",
     * "Sentiment":"NEUTRAL",
     * "loudnessScore":"null,null",
     * "attributes": [{
     * "key":"key1",
     * "value":"value1"
     * },{
     * "key":"key2",
     * "value":"value2"
     * }]
     * },
     * {
     * "isEvent":"False",
     * "isInternalMessage":"False",
     * "beginOffsetMillis":9120,
     * "content":"Uh, yes, John. I'm a little very frustrated right now.",
     * "endOffsetMillis":22900,
     * "id":"18bcf19c-4a9b-4af1-9bd7-7bfb5ba53b9f",
     * "participantId":"CUSTOMER",
     * "sentiment":"NEGATIVE",
     * "loudnessScore":"null,null",
     * "attributes": [{
     * "key":"key1",
     * "value":"value1"
     * },{
     * "key":"key2",
     * "value":"value2"
     * } ]
     * },
     * {
     * "isEvent":"True",
     * "isInternalMessage":"True",
     * "beginOffsetMillis":23590,
     * "content":"Agent asked for help in chat",
     * "endOffsetMillis":30610,
     * "id":"ab09b3b6-23fd-4e41-be05-6b2b53c19059",
     * "participantId":"CUSTOMER",
     * "sentiment":"NEUTRAL",
     * "loudnessScore":"null,null,null,null",
     * "attributes": []
     * }
     * ]
     * }
     */
    saveVoiceConversationTranscript(voiceConversationJson: string): string;
  }
}
declare namespace sn_cti_core {
  export class CTIOperationRequest {
    constructor(origin?: string);
    /**
     * Returns the authentication token set on the associated CTIOperationRequest
     * object.
     */
    getAuthToken(): string;
    /**
     * Returns the interaction GlideRecord associated with the operation request.
     */
    getInteractionRecord(): GlideRecord;
    /**
     * Returns the sys_id of the interaction record associated with the current
     * CTIOperationRequest object.
     */
    getInteractionSysId(): string;
    /**
     * Returns the ISO 639.1 language code that was set on the current CTIOperationRequest
     * object.
     */
    getLanguage(): string;
    /**
     * Returns the major version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationRequest object.
     */
    getMajorVersion(): number;
    /**
     * Returns the minor version of the computer telephony integrator (CTI) software
     * associated with a CTIOperationRequest object.
     */
    getMinorVersion(): number;
    /**
     * Returns the name of the operation that the computer telephony integration (CTI)
     * provider is requesting to execute.
     */
    getOperationName(): string;
    /**
     * Returns the substep operation handler name set on the current CTIOperationRequest
     * object.
     */
    getOperationSubStepName(): string;
    /**
     * Returns the value of a specified key previously set on the current CTIOperationRequest
     * object.
     * @param key The name of the key value to return.
     */
    getParameter(key: string): string;
    /**
     * Returns the key-value pairs for all parameters that were previously set on the current
     * CTIOperationRequest object.
     */
    getParameters(): any;
    /**
     * Returns the value of a specified session attribute key set on the current
     * CTIOperationRequest object.
     * @param key The name of the key value to return.
     */
    getSessionAttribute(key: string): string;
    /**
     * Returns a key-value pair map of all session attributes set on the current
     * CTIOperationRequest object.
     */
    getSessionAttributes(): any;
    /**
     * Returns the handling behavior for a subsep when a substep's operation handler is not
     * found.
     */
    getSubStepNotFoundBehaviour(): any;
    /**
     * Sets an authentication token on the current CTIOperationRequest object.
     * @param id The authentication token for the associated ServiceNow
     * Voice user.
     */
    setAuthToken(id: string): any;
    /**
     * Sets the sys_id of the interaction record associated with the operation request on the
     * current CTIOperationRequest object.
     * @param sys_id The sys_id of the interaction record to associate with the request.
     */
    setInteractionSysId(sys_id: string): any;
    /**
     * Sets the ISO 639.1 language code to use when processing the associated operation on a
     * CTIOperationRequest object.
     * @param languageCode The ISO 639.1 language code to use when processing the associated
     * operation.
     */
    setLanguage(languageCode: string): any;
    /**
     * Sets the major version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationRequest object.
     * @param majorVersion Major version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 1.
     */
    setMajorVersion(majorVersion: number): any;
    /**
     * Sets the minor version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationRequest object.
     * @param minorVersion Minor version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 0.
     */
    setMinorVersion(minorVersion: number): any;
    /**
     * Sets the name of the operation that the computer telephony integration (CTI) provider
     * is attempting to execute on the current CTIOperationRequest object.
     * @param name The name of the operation that the CTI provider is currently attempting to
     * execute. This name must be the same as the name of the operation handler to use
     * to process the request. If it is not, an error is thrown. You can locate the
     * available operation handlers in the Operation Handler [sn_cti_operation_handler]
     * table.
     */
    setOperationName(name: string): any;
    /**
     * Sets the operation substep name on the current CTIOperationRequest object.
     * @param name The name of the substep that the CTI provider is trying to execute.
     */
    setOperationSubStepName(name: string): any;
    /**
     * Sets the specified key-value pair on the parameter object of the current
     * CTIOperationRequest object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setParameter(key: string, value: any): any;
    /**
     * Sets the specified session attribute key-value pair on the current CTIOperationRequest
     * object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setSessionAttribute(key: string, value: any): any;
    /**
     * Sets the behavior to perform if the current substep's operation handler is not
     * found.
     * @param behaviour Behavior to use if a handling behavior is not specified for the substep. This
     * must be a behavior defined on the CTIOperationRequest.OperationNotFoundBehaviours
     * object.Possible values:
     * ThrowError: Throw an error.
     *
     * PassThrough: Do not perform any further processing on the request, just
     * return.
     *
     * RouteToOperation: Use the parent operation handler
     * &lt;operation_name&gt;.
     *
     *
     *
     */
    setSubStepNotFoundBehaviour(behaviour: any): any;
  }
  export class CTIOperationResponse {
    constructor();
    /**
     * Returns the authentication token that was set on the CTIOperationResponse
     * object.
     */
    getAuthToken(): string;
    /**
     * Returns the error object associated with the current CTIOperationResponse
     * object.
     */
    getError(): any;
    /**
     * Returns the sys_id of the interaction record associated with the call session that was
     * set on the CTIOperationResponse object.
     */
    getInteractionSysId(): string;
    /**
     * Returns the major version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationResponse object.
     */
    getMajorVersion(): number;
    /**
     * Returns the message string set on the current CTIOperationResponse object.
     */
    getMessage(): string;
    /**
     * Returns the minor version of the computer telephony integrator (CTI) software set on
     * the current CTIOperationResponse object.
     */
    getMinorVersion(): number;
    /**
     * Returns the value of a specified key previously set on the current CTIOperationResponse
     * object.
     * @param key The name of the key value to return.
     */
    getParameter(key: string): string;
    /**
     * Returns the key-value pairs for all parameters that were previously set on the current
     * CTIOperationResponse object.
     */
    getParameters(): any;
    /**
     * Returns the value for a specified session attribute key set on the current
     * CTIOperationResponse object.
     * @param key The name of the key value to return.
     */
    getSessionAttribute(key: string): string;
    /**
     * Returns the key-value pairs for all session attributes that were previously set on the
     * current CTIOperationResponse object.
     */
    getSessionAttributes(): any;
    /**
     * Returns the status code set on the current CTIOperationResponse object.
     */
    getStatusCode(): number;
    /**
     * Sets an authentication token on the current CTIOperationResponse object.
     */
    setAuthToken(): string;
    /**
     * Sets the error object in the current CTIOperationResponse object.
     * @param error Information about the error that was detected while processing the requested
     * operation. The format of this object is determined by the CTI provider.
     */
    setError(error: any): any;
    /**
     * Sets the sys_id of the interaction record associated with the operation request on the
     * current CTIOperationResponse object.
     * @param sys_id The sys_id to set for the current interaction.
     */
    setInteractionSysId(sys_id: string): any;
    /**
     * Sets the major version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationResponse object.
     * @param majorVersion Major version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 1.
     */
    setMajorVersion(majorVersion: number): any;
    /**
     * Sets a text message on the current CTIOperationResponse object.
     * @param message Message text
     */
    setMessage(message: string): any;
    /**
     * Sets the minor version of the computer telephony integrator (CTI) provider software
     * making the request on the associated CTIOperationResponse object.
     * @param minorVersion Minor version of the CTI provider software making the operation request.If
     * this value was not previously set, returns
     * 0.
     */
    setMinorVersion(minorVersion: number): any;
    /**
     * Sets the specified key-value pair on the associated CTIOperationResponse
     * object.
     * @param key Name of the key under which to store the associated value.
     * @param value Value to store for the key.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setParameter(key: string, value: any): any;
    /**
     * Sets the specified session attribute key-value pair on the associated
     * CTIOperationResponse object.
     * @param key Name of the session attribute key under which to set the associated
     * value.
     * @param value Value to set.Valid data types:
     * string
     *
     * int
     *
     * float
     *
     * number
     *
     * boolean
     *
     * date
     *
     * object
     *
     *
     *
     */
    setSessionAttribute(key: string, value: any): any;
    /**
     * Sets the status code of the current operation request on the CTIOperationResponse
     * object.
     * @param statusCode Integer that uniquely identifies the status of the requested operation.
     */
    setStatusCode(statusCode: number): any;
  }
}
declare namespace sn_currency {
  export class GlideCurrencyConfig {
    constructor();
    constructor(ed: GlideElementDescriptor);
    /**
     * Returns the aggregation source value for an FX Currency field.
     */
    getAggregationSource(): string;
    /**
     * Returns the field used as the source of the date and time for the currency conversion.
     */
    getConversionDateSource(): string;
    /**
     * Returns the number of digits to display for an FX Currency field.
     */
    getDisplayDigits(): number;
    /**
     * Returns the currency code used to convert the FX Currency value when it appears in
     * lists and reports.
     */
    getDisplayValue(): string;
    /**
     * Returns the rate table field used as a rate table filter for an FX Currency
     * field.
     */
    getRateFilterRateTableField(): string;
    /**
     * Returns the target table field used to filter the rate table records for an FX Currency
     * field.
     */
    getRateFilterTargetTableField(): string;
    /**
     * Returns the rate table used to convert currency for an FX Currency field.
     */
    getRateTable(): string;
    /**
     * Returns the reference currency for an FX Currency field.
     */
    getReferenceCurrency(): string;
    /**
     * Returns the reference currency source for an FX Currency field.
     */
    getReferenceCurrencySource(): string;
  }
  export class GlideCurrencyConverter {
    constructor();
    constructor(from: string, to: string);
    /**
     * Executes the currency converter.
     */
    convert(): any;
    /**
     * Sets the amount of currency to convert.
     * @param amount Currency amount to convert. This value must be unformatted except for a decimal
     * point to denote fractional currency. For example, 1234.56 is valid, 1,234.56 is
     * invalid.
     */
    setAmount(amount: string): any;
    /**
     * Sets the currency conversion date and time.
     * @param date Date/time for which to calculate the currency conversion. This value determines
     * the rate that is used in the conversion.
     */
    setDateTime(date: GlideDateTime): any;
    /**
     * Sets the country code of the source currency.
     * @param from Three-letter ISO 3166 country code of the source currency.
     */
    setFromCurrency(from: string): any;
    /**
     * Defines the rate table to use in the currency conversion.
     * @param rateTable Name of the rate table to use in the currency conversion.
     */
    setRateTable(rateTable: string): any;
    /**
     * Sets the country code of the destination currency.
     * @param to Three-letter ISO 3166 country code of the source currency.
     */
    setToCurrency(to: string): any;
  }
  export class GlideCurrencyExchangeValue {
    /**
     * Returns the currency amount after the conversion.
     */
    getAmount(): number;
    /**
     * Returns the converted to currency type.
     */
    getCurrency(): string;
    /**
     * Returns the original, pre-conversion currency type.
     */
    getOriginalCurrency(): string;
    /**
     * Returns the original, pre-conversion amount.
     */
    getOriginalValue(): number;
    /**
     * Returns the exchange rate used during the conversion.
     */
    getRate(): number;
    /**
     * Returns the sys_id of the record in the rate table used in the currency conversion.
     */
    getRateSysId(): string;
  }
  export class GlideCurrencyFormatter {
    constructor(formatString?: string);
    /**
     * Formats a specified currency value using the specified currency code.
     * @param value Currency amount to format. The amount can only contain a decimal point to
     * denote the fractional amount, commas are not supported. Valid values: 123.45 or
     * 2436.23
     * Invalid values 123,45 or 2,134.56
     * @param currencyCode Three-letter ISO currency code to use when formatting the currency.
     */
    format(value: string, currencyCode: string): string;
    /**
     * Sets the default language and country, which constitutes the locale, for the currency
     * formatter.
     * @param language Two-letter ISO 639 language code, such as en, sp, and fr.
     * @param country Two-letter ISO 3166 country code, such as US, ES, and FR.
     */
    setLocale(language: string, country: string): any;
    /**
     * Sets the maximum number of digits to the right of the decimal point/decimal comma to
     * return.
     * @param maxFractionDigits Maximum number of fraction digits to return. If this value is set to something
     * less than the minFractionDigits value, it is overridden by
     * minFractionDigits.
     */
    setMaxFractionDigits(maxFractionDigits: number): any;
    /**
     * Sets the minimum number of fraction digits (right of the decimal point/decimal comma)
     * to return.
     * @param minFractionDigits Minimum number of fraction digits to return.
     */
    setMinFractionDigits(minFractionDigits: number): any;
  }
  export class GlideCurrencyParser {
    constructor();
    /**
     * Parses a specified string into a GlideCurrencyValue object to obtain locale-based
     * currency formatting.
     * @param value String to parse. You can prepend this string with the ISO currency code to use
     * when parsing the string (semicolon separated). If the currency code is not set prior
     * to calling the parse() method, it defaults to the current session
     * currency code.This method supports both decimal point and decimal comma
     * notation.
     * For example: "123.45", "USD;123.45", "123,45",
     * "EUR;123,45"
     */
    parse(value: string): GlideCurrencyValue;
    /**
     * Sets the currency code for the associated GlideCurrencyParser object.
     * @param currencyCode Three-letter ISO currency code to use as the default in the associated
     * GlideCurrencyParser object.
     */
    setDefaultCurrencyCode(currencyCode: string): any;
    /**
     * Sets the default language and country codes, which constitute the locale, on the
     * associated GlideCurrencyParser object.
     * @param language Three-letter ISO 639 language code, such as eng, spa, and fre.
     * @param country Three-letter ISO 3166 country code, such as USA, ESP, and FRA.
     */
    setLocale(language: string, country: string): any;
  }
  export class GlideCurrencyValue {
    /**
     * Returns the currency amount originally passed into the associated
     * GlideCurrencyParser.parse() call.
     */
    getAmount(): string;
    /**
     * Returns the currency code used to parse the currency in the associated
     * GlideCurrencyParser.parse() call.
     */
    getCurrencyCode(): string;
  }
}
declare namespace sn_devops {
  export class DevOpsOrchestrationToolIntegrationHandler {
    /**
     * Returns the value of the orchestrationTaskName parameter from the
     * payload for POST /devops/tool/{capability}.
     * @param payload Payload containing data from the custom tool accepted by POST
     * /devops/tool/{capability}, where capability is
     * orchestration.
     */
    getNativeIdForOrchestrationTask(payload: any): string;
    /**
     * Checks if this handler is valid for the specified tool.
     * @param toolName Name of the tool. Located in the Tool Name field in the
     * DevOps Tool Integration [sn_devops_tool_integration] table.
     */
    handleTool(toolName: string): boolean;
  }
}
declare namespace sn_discovery {
  export class DiscoveryAPI {
    /**
     * Discovers a specified IPv4 address.
     * @param application Optional. Application configured for the MID Server.To define a
     * source parameter but not an
     * application parameter, use "NULL" as the place
     * holder.
     * Default: Discovery
     * @param ipAddress IP address to discover.
     * @param source Optional. Source of the Discovery. This same value appears in the optional
     * Source field in the Discovery Status record, which
     * indicates how the Discovery was triggered. Default: Discovery_API
     */
    discoverIpAddress(
      application: string | undefined,
      ipAddress: string,
      source?: string,
    ): string;
    /**
     * Used to return a summary of a configuration item's Discovery status given the specific
     * status sys_id and IPv4 address.
     * @param ipAddress The IPv4 address that was scanned.
     * @param discoveryStatusSysId The sys_id of the Discovery status record for the IP address that was
     * scanned.
     */
    reportCiIpAddressStatus(
      ipAddress: string,
      discoveryStatusSysId: string,
    ): any[];
    /**
     * Used to return a summary of a CI Discovery status given a specific Discovery Status
     * sys_id.
     * @param sys_id The sys_id of a Discovery status record.
     */
    reportCiStatus(sys_id: string): any[];
  }
  export class ReportCiStatusOutputJS {
    /**
     * Used to return the state of the scanned CI.
     */
    getCiOperationStatus(): string;
    /**
     * Used to return the value in the cmdb_ci field from the discovery_device_history table
     * for the CI being scanned.
     */
    getCmdbCI(): string;
    /**
     * Used to return the value from the State field in the Discovery
     * Status [discovery_status] table.
     */
    getDiscoveryState(): string;
    /**
     * Used to return the value from the source field in the discovery_device_history table
     * for the CI being scanned.
     */
    getIpAddress(): string;
    /**
     * Used to return the value from the issues field in the discovery_device_history table
     * for the CI being scanned.
     */
    getIssues(): number;
    /**
     * Used to return the value from the issues_link field in the discovery_device_history
     * table for the CI being scanned.
     */
    getIssuesLink(): string;
    /**
     * Used to serialized the ReportCiStatusOutputJS object.
     */
    toJson(): string;
  }
}
declare namespace sn_doc_services {
  export class DocumentListEntryService {
    constructor();
    /**
     * Adds a document template entry to a document list.
     * @param entry One or more properties representing fields of a document list entry
     * object.
     */
    createDocumentListEntry(entry: any): any;
    /**
     * Removes a document list entry from the Document List Entries [ds_document_list_entry]
     * table.
     * @param listEntryId Sys_id of a document list record in the Document List Entries
     * [ds_document_list_entry] table.
     */
    deleteDocumentListEntry(listEntryId: string): any;
    /**
     * Updates the field values of an existing document list entry.
     * @param listEntryId Sys_id of a document list record in the Document List Entries
     * [ds_document_list_entry] table.
     * @param entry One or more properties representing fields of a document list entry
     * object.
     */
    updateDocumentListEntry(listEntryId: string, entry: any): any;
  }
  export class DocumentListService {
    constructor();
    /**
     * Creates a document list in the Document Lists [ds_document_lists] table.
     * @param doc One or more properties representing fields of a new record. The name property
     * is required and can be set using the SystemDocumentList
     * constructor or name() method.
     */
    createDocumentList(doc: any): any;
    /**
     * Creates documents from a list of document templates.
     * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
     * table.
     * @param tableName Name of the table containing the record on which add a list of document
     * template references.
     * @param tableSysId Sys_id
     * of the record containing the content from which to add a list of document template
     * references.
     */
    createDocumentsFromList(
      listSysId: string,
      tableName: string,
      tableSysId: string,
    ): any;
    /**
     * Removes a document record from the Document Lists [ds_document_lists] table.
     * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
     * table.
     */
    deleteDocumentList(listSysId: string): any;
    /**
     * Updates the field values of an existing document list.
     * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
     * table.
     * @param doc One or more properties representing document list fields to be updated.
     */
    updateDocumentList(listSysId: string, doc: any): any;
  }
  export class DocumentReferenceService {
    constructor();
    /**
     * Adds a document reference to a target table record.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table.
     * @param targetTable Name of the target table on which to provide a document reference.
     * @param tableSysId Sys_id of the target table record to which the document reference is to be
     * added.
     */
    addDocumentReference(
      docSysId: string,
      targetTable: string,
      tableSysId: string,
    ): any;
    /**
     * Removes a document reference from the Document References [ds_document_reference]
     * table.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table.
     * @param targetTable Name of the table containing the document reference. This information is listed
     * with the document in the Document References [ds_document_reference] table.
     * @param tableSysId Sys_id of the record from which the document is referenced. You can find
     * related information listed with the document in the Document References
     * [ds_document_reference] table.
     */
    removeDocumentReference(
      docSysId: string,
      targetTable: string,
      tableSysId: string,
    ): any;
  }
  export class DocumentService {
    constructor();
    /**
     * Creates a document record in the Documents [ds_document] table.
     * @param doc One or more properties representing fields of a new record. The name property
     * is required and can be set using the SystemDocument constructor
     * or name() method.
     */
    createDocument(doc: any): any;
    /**
     * Removes a document record from the Documents [ds_document] table.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table.
     */
    deleteDocument(docSysId: string): any;
    /**
     * Updates the field values of an existing document record.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table.
     * @param doc One or more properties representing document fields to be updated.
     */
    updateDocument(docSysId: string, doc: any): any;
  }
  export class DocumentVersionService {
    constructor();
    /**
     * Creates a document version record in the Versions [ds_document_version]
     * table.
     * @param docVersion One or more properties representing fields of a document version.
     */
    createDocumentVersion(docVersion: any): any;
    /**
     * Deletes a document version.
     * @param docVersionSysId Sys_id of a document version in the Versions [ds_document_version]
     * table.
     */
    deleteDocumentVersion(docVersionSysId: string): any;
  }
  export class SystemDocument {
    constructor(docName: string);
    /**
     * Sets the Audience field of a document record to specify external or internal
     * availability. Represents the Audience field in a Document Management
     * form.
     * @param audience String representing the intended audience of the document.Possible
     * values:
     * external
     *
     * internal
     *
     *
     * Default: internal
     */
    audience(audience: string): any;
    /**
     * Sets the Classification field of a document record to identify the level of information
     * sensitivity. Represents the Classification field in a Document Management
     * form.
     * @param classification Classification of the document.Possible values:
     * confidential
     *
     * public
     *
     * restricted
     *
     *
     * Default: public
     */
    classification(classification: string): string;
    /**
     * Sets the template from which to generate a document. When the document is
     * generated, the specified template is listed in the Created From Template field in the Documents
     * [ds_document_list] table.
     * @param docTemplate Sys_id of a document listed in the Documents [ds_document_list] table. The
     * document must have the Template checkbox selected (true). See also DocumentVersionService API.
     */
    createdFromTemplate(docTemplate: string): any;
    /**
     * Sets the Department field of a document record.
     * @param docDept Sys_id of a department listed in the Departments [cmn_department]
     * table.
     */
    department(docDept: string): any;
    /**
     * Sets the Description field of a document record.
     * @param description Description of the document.
     */
    description(description: string): any;
    /**
     * Sets the Name field of a document record.
     * @param docName Name of the document.
     */
    name(docName: string): any;
    /**
     * Sets the Owner field of a document record.
     * @param owner Sys_id of a user listed in the Users [sys_user] table. Role required:
     * admin
     * Default: Current user
     */
    owner(owner: string): any;
    /**
     * Sets the Reviewers field of a document record.
     * @param reviewers List of one or more document reviewers by sys_id. The reviewer must be a user
     * listed in the Users [sys_user] table.
     */
    reviewers(reviewers: string): any;
    /**
     * Sets the State field of a document record.
     * @param state State of the document representing where the document is in the
     * workflow.Valid values:
     * draft
     *
     * submit
     *
     * review
     *
     * complete
     *
     *
     * Default: draft
     */
    state(state: string): any;
    /**
     * Specifies whether a document record is a template.
     * @param template Flag that specifies whether a document record is a template.
     *
     * Valid values:
     * true: The default version of this document is a template.
     *
     * false: This document is not a template.
     *
     *
     *
     *
     * Default: false
     */
    template(template: boolean): any;
    /**
     * Sets the Type field of a document record.
     * @param docType Type of document.Valid values:
     * contract
     *
     * guideline
     *
     * policy
     *
     * procedure
     *
     *
     * Default: None
     */
    type(docType: string): any;
  }
  export class SystemDocumentList {
    constructor(docListName: string);
    /**
     * Sets the Description field of a new document list record.
     * @param description Description of the document list.
     */
    description(description: string): any;
    /**
     * Sets the Name field of a document list record.
     * @param docListName Name of the document list.
     */
    name(docListName: string): any;
  }
  export class SystemDocumentListEntry {
    constructor(listSysId: string);
    /**
     * Sets the Description field of a document list entry record.
     * @param description Description of the document list entry.
     */
    description(description: string): any;
    /**
     * Specifies the document template to add to a document list.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table. The document specified must be a template and have a version.
     */
    document(docSysId: string): any;
    /**
     * Specifies the document list in which to add a document.
     * @param listSysId Sys_id of a document list record in the Document Lists [ds_document_lists]
     * table.
     */
    documentList(listSysId: string): any;
  }
  export class SystemDocumentVersion {
    constructor(docSysId: string);
    /**
     * Specifies the document record for this version.
     * @param docSysId Sys_id of a document record in the Documents [ds_document]
     * table.
     */
    document(docSysId: string): any;
    /**
     * Sets the Type field of a document version.
     * @param docType Document source type.Valid values:
     * url
     *
     * attachment
     *
     *
     * Default: attachment
     * Note: An attachment can currently only be added in the
     * Document Versions [ds_document_version] table UI and not with the
     * API.
     */
    type(docType: string): any;
    /**
     * Sets the URL of a document version.
     * @param url URL of the source document for this version.
     */
    url(url: string): any;
    /**
     * Sets the number of a document version.
     * @param versionNumber Version number for this document.
     */
    versionNumber(versionNumber: number): any;
  }
}
declare namespace sn_dt {
  export class DecisionTableAPI {
    constructor();
    /**
     * Returns all decision tables from the Decision Tables [sys_decision] table.
     */
    getAll(): any;
    /**
     * Returns the answers associated with the specified decision table. An answer is a record
     * on any table associated with a Decision [sys_decision_question] record.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getAnswers(decisionID: string): any;
    /**
     * Evaluates a decision table based on the provided inputs and returns an answer. If no
     * inputs are provided, returns the first default answer found.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     * @param inputs Optional. Input values for the Decision Inputs [sys_decision_input] table
     * associated with the provided decision table. Use the value of the Column
     * name field as the key. The data type of the value must match the
     * Decision Input Type field.  If no inputs are provided,
     * returns the first default answer found.
     */
    getDecision(decisionID: string, inputs?: any): GlideRecord;
    /**
     * Evaluates a decision table based on the provided inputs and returns all correctly
     * evaluated answers. If no inputs are provided, returns all default answers.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     * @param inputs Optional. Input values for the Decision Inputs  [sys_decision_input] table
     * associated with the provided decision table. If no inputs are provided, returns all
     * default answers.
     */
    getDecisions(decisionID: string, inputs?: any): any[];
    /**
     * Returns a single decision table from the Decision Tables [sys_decision]
     * table.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getDecisionTable(decisionID: string): any;
    /**
     * Returns the decision inputs from the Decision Inputs [sys_decision_input] table
     * associated with the passed in decision table.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getInputs(decisionID: string): any;
    /**
     * Returns the decisions from the Decision [sys_decision_question] table associated with
     * the passed in decision table.
     * @param decisionID Sys_id of the Decision Table record from the
     * Decision Tables [sys_decision] table.
     */
    getQuestions(decisionID: string): any;
  }
}
declare namespace sn_dt_api {
  export class DynamicTranslation {
    /**
     * Detects the language of the passed in text.
     * @param text Text to use to detect the language.
     * @param parms Optional. JSON object that contains additional translation parameters.
     */
    getDetectedLanguage(text: string, parms?: any): any;
    /**
     * Detects the languages of the passed in text strings.
     * @param texts List of text strings to use to detect the
     * language(s).
     * @param parms Optional. JSON object that contains additional
     * translation
     * parameters."parms": {
     * "translator": "String"
     * }
     */
    getDetectedLanguages(texts: any[], parms?: any): any;
    /**
     * Translates the passed in text to one or more languages.
     * @param textToTranslate Text to translate.
     * @param parms Optional. JSON object that contains additional
     * translation
     * parameters."parms": {
     * "additionalParameters": {Object},
     * "sourceLanguage": "String",
     * "targetLanguages": [Array],
     * "translator": "String"
     * }
     */
    getTranslation(textToTranslate: string, parms?: any): any;
    /**
     * Translates the passed in text strings to one or more languages.
     * @param texts List of text stings to translate.
     * @param parms Optional. JSON object that contains additional
     * translation
     * parameters."parms": {
     * "additionalParameters": {Object},
     * "sourceLanguage": "String",
     * "targetLanguages": [Array],
     * "translator": "String"
     * }
     */
    getTranslations(texts: any[], parms?: any): any;
    /**
     * Determines whether the various methods in the
     * DynamicTranslation API are enabled for a translation
     * service.
     * @param translator Optional. Translation service to use to verify whether
     * the methods are active. Translation services are configured under the Translator
     * Configuration menu.Possible values - not case-sensitive:
     *
     * Google
     *
     * Microsoft
     *
     * IBM
     *
     * &lt;custom&gt;
     *
     *
     * Note: To use custom translation services you must first configure the translation
     * service in your instance. For details, see Integrate with a translation
     * service provider.
     * Default: Default translation
     * service.
     */
    isEnabled(translator?: string): any;
  }
}
declare namespace sn_fd {
  export class Flow {
    /**
     * Ignores the trigger and runs an activated flow asynchronously.
     * @param flowInputs Name-value pairs in &lt;String, Object&gt; format that define
     * record-based flow inputs.To call a flow with a record-based trigger, use the
     * format:var flowInputs = {};
     * flowInputs['current'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();
     * The
     * GlideRecord object must be named 'current'.
     * To call a flow with a Service Catalog
     * trigger, use the
     * format:var flowInputs = {};
     * flowInputs['request_item'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();
     * The
     * GlideRecord object must be named 'request_item'.
     */
    startAsync(flowInputs: any): any;
  }
  export class FlowAPI {
    /**
     * Cancels a paused or running flow, subflow, or action.
     * @param contextId Sys_id of the execution details record for the flow, subflow, or action. Access
     * the execution details by navigating to the Flow Executions tab in Flow Designer, or pass the sys_id of the context record returned by the
     * startFlow(), startSubflow(), or
     * startAction() methods.
     * @param reason Optional. Reason for canceling the flow, subflow, or action. Appears in the
     * Message field of the Flow engine log entries [sys_flow_log]
     * table.
     */
    cancel(contextId: string, reason?: string): any;
    /**
     * Runs an action from a server-side script synchronously.
     * @param name The scope and name of the action to be executed, for example
     * global.action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeAction(name: string, inputs: any, timeout?: number): any;
    /**
     * Run an action from a server-side script synchronously from the current user session
     * without creating execution details or other related records. Improve performance by eliminating
     * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the action to execute. For example,
     * global.action_name. Locate the Internal
     * name field in the list of Flow Designer
     * actions.
     * @param inputs Name-value pairs that define action inputs. You can find the available action
     * inputs and required data types under Inputs in the action outline. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeActionQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs a Data Stream action synchronously from a server-side script and returns a
     * ScriptableDataStream object.
     * @param name The scope and name of the Data Stream action to execute. For example,
     * global.data_stream_action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label. If the action does not have any inputs, do not include this
     * parameter.
     * @param timeout Optional. Amount of time before the action times out. After the timeout
     * expires, an exception is thrown. The timeout only applies to the
     * executeDataStreamAction method, not to methods in the
     * ScriptableDataStream class.Default: 30000, specified by the
     * com.glide.hub.flow_api.default_execution_time system
     * property
     * Unit: Milliseconds
     */
    executeDataStreamAction(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs a flow from a server-side script synchronously.
     * @param name The scope and name of the flow to be executed, for example
     * global.flow_name.
     * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeFlow(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs a flow, subflow, action, or Data
     * Stream action from a server-side script synchronously or asynchronously without
     * creating execution details or other related records. Improves performance by
     * eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer
     * flows.
     * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
     * inputs and required data types in the Trigger section of the flow. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeFlowQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Runs an subflow from a server-side script synchronously.
     * @param name The scope and name of the subflow to be executed, for example
     * global.subflow_name.
     * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
     * label.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeSubflow(name: string, inputs: any, timeout?: number): any;
    /**
     * Run a subflow from a server-side script synchronously from the current user session
     * without creating execution details or other related records. Improve performance by eliminating
     * record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the subflow to execute. For example,
     * global.subflow_name. Locate the Internal
     * name field in the list of Flow Designer
     * subflows.
     * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
     * inputs and required data types under Inputs in the subflow. Use the input name, not
     * the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     * @param timeout Optional. Timeout in milliseconds. This value overrides the 30
     * second default timeout specified by the
     * com.glide.hub.flow_api.default_execution_time system property. After
     * the timeout expires, an exception is thrown.
     */
    executeSubflowQuick(name: string, inputs: any, timeout?: number): any;
    /**
     * Returns the outputs of a completed action or subflow.
     * @param contextId The sys_id of the action or subflow whose outputs you want to get.
     */
    getOutputs(contextId: string): any;
    /**
     * Returns a ScriptableFlowRunner builder object for a flow or action
     * that you want to run.
     */
    getRunner(): any;
    /**
     * Checks if a flow within a give scope contains any Ask for Approval actions.
     * @param scopedFlowName Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer flows.
     */
    hasApprovals(scopedFlowName: string): string;
    /**
     * Builds password2 values inside a script step.
     * @param password Encrypted password2 value.
     */
    setEncryptedOutput(password: string): string;
    /**
     * Runs an action from a server-side script asynchronously.
     * @param name The scope and name of the action to be executed, for example
     * global.action_name.
     * @param inputs Name-value pairs that define action inputs. Use the input name, not the input
     * label.
     */
    startAction(name: string, inputs: any): string;
    /**
     * Runs an action from a server-side script asynchronously without creating execution
     * details or other related records. Improve performance by eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the action to execute. For example,
     * global.action_name. Locate the Internal
     * name field in the list of Flow Designer
     * actions.
     * @param inputs Name-value pairs that define action inputs. You can find the available action
     * inputs and required data types under Inputs in the action outline. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startActionQuick(name: string, inputs: any): any;
    /**
     * Runs a flow from a server-side script.
     * @param name The scope and name of the flow to be executed, for example
     * global.flow_name.
     * @param inputs Name-value pairs that define trigger inputs. Use the input name, not the input
     * label.
     */
    startFlow(name: string, inputs: any): string;
    /**
     * Runs a flow from a server-side script asynchronously without creating execution details
     * or other related records. Improve performance by eliminating record-keeping overhead. Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the flow to execute. For example,
     * global.flow_name. Locate the Internal name
     * field in the list of Flow Designer
     * flows.
     * @param inputs Name-value pairs that define trigger inputs. You can find the available trigger
     * inputs and required data types in the Trigger section of the flow. Use the input
     * name, not the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startFlowQuick(name: string, inputs: any): any;
    /**
     * Runs a subflow from a server-side script.
     * @param name The scope and name of the subflow to be executed, for example
     * global.subflow_name.
     * @param inputs Name-value pairs that define subflow inputs. Use the input name, not the input
     * label.
     */
    startSubflow(name: string, inputs: any): string;
    /**
     * Runs a subflow from a server-side script asynchronously without creating execution
     * details or other related records. Improve performance by eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     * @param name Scope and internal name of the subflow to execute. For example,
     * global.subflow_name. Locate the Internal
     * name field in the list of Flow Designer
     * subflows.
     * @param inputs Name-value pairs that define subflow inputs. You can find the available subflow
     * inputs and required data types under Inputs in the subflow. Use the input name, not
     * the input label. For example,
     * {'table':'incident','sys_id':'a39d8e3cf0212300964feeefe80ff0ed'}.
     */
    startSubflowQuick(name: string, inputs: any): any;
  }
  export class ScriptableDataStream {
    /**
     * Closes the connection to a data stream. Always call this method after performing any
     * desired operations on a data stream.
     */
    close(): any;
    /**
     * Returns the current index of an item in a data stream.
     */
    getItemIndex(): number;
    /**
     * Returns the current index of an item within the current page in a data
     * stream.
     */
    getItemInPageIndex(): number;
    /**
     * Returns the current index of a page in a data stream.
     */
    getPageIndex(): number;
    /**
     * Returns true if there are more items in the data stream.
     */
    hasNext(): boolean;
    /**
     * Returns the next item in a data stream.
     */
    next(): any;
  }
  export class ScriptableFlowRunner {
    /**
     * Identifies the scope and name of the action to execute.
     * @param scopedActionName Scope and name of the action to execute. For example,
     * global.actionName.
     */
    action(scopedActionName: string): any;
    /**
     * Adds a single input. If the name passed as an argument already exists as a separate
     * input, the new value replaces the pre-existing value.
     * @param name The name of the input for the flow, subflow, or action.
     * @param value The value of the input for the flow, subflow, or action.
     */
    addInput(name: string, value: any): any;
    /**
     * Identifies the scope and name of the data stream action to execute.
     * @param scopedDatastreamName Scope and name of the Data Stream action to execute. For example,
     * global.dataStreamActionName.
     */
    datastream(scopedDatastreamName: string): any;
    /**
     * Identifies the scope and name of the flow to execute.
     * @param scopedFlowName Scope and name of the flow to execute. For example,
     * global.flowName.
     */
    flow(scopedFlowName: string): any;
    /**
     * Runs the flow, subflow, or action asynchronously. Once the flow object starts running,
     * script execution resumes immediately.
     */
    inBackground(): any;
    /**
     * Runs the flow, subflow, or action in the specified domain. Checks to ensure the domain
     * exists and is available.
     * @param domainId The sys_id or name for the domain of execution for the flow.
     */
    inDomain(domainId: string): any;
    /**
     * Runs the flow, subflow, or action synchronously. Script execution pauses while the flow
     * object is running.
     */
    inForeground(): any;
    /**
     * Runs a flow, subflow, action, or Data
     * Stream action from a server-side script synchronously or asynchronously without
     * creating execution details or other related records. Improves performance by
     * eliminating record-keeping overhead.
     * Use this API to increase the speed of high-volume processing, for
     * example multiple executions per second, in a production environment.
     */
    quick(): any;
    /**
     * Runs the flow, subflow, or action with the specified parameters.
     */
    run(): any;
    /**
     * Identifies the scope and name of the subflow to execute.
     * @param scopedSubflowName Scope and name of the subflow to execute. For example,
     * global.subflowName.
     */
    subflow(scopedSubflowName: string): any;
    /**
     * Sets a timeout for a flow, subflow, or action execution.
     * @param timeout Timeout in milliseconds.
     */
    timeout(timeout: number): any;
    /**
     * Overrides the Connections and Credentials alias associated with the flow,
     * action, or subflow. You can override the default parent alias with any of its child
     * aliases.
     * @param parentAliasSysID The sys_id of the parent alias, the alias you want to override.
     * @param overrideAliasSysID The sys_id of the child alias, the alias you want to use when running the flow,
     * subflow, or action.
     */
    withConnectionAliasOverride(
      parentAliasSysID: string,
      overrideAliasSysID: string,
    ): any;
    /**
     * Adds a collection of inputs. If a name in one of the name-value pairs already exists,
     * the new value replaces the pre-existing value.
     * @param inputs Map object containing the name-value pairs that define inputs for the flow,
     * subflow, or action.
     */
    withInputs(inputs: any): any;
  }
  export class ScriptableFlowRunnerResult {
    /**
     * Returns information about the executed flow, subflow, or action, including the context
     * ID, domain ID, and execution outputs.
     */
    debug(): string;
    /**
     * Returns the context ID of the flow, subflow, or action.
     */
    getContextId(): string;
    /**
     * Returns the stream of data from a data stream action.
     */
    getDataStream(): any;
    /**
     * Returns the date and time when a Flow Designer action, flow, or subflow
     * ran as a GlideDateTime object.
     */
    getDate(): GlideDateTime;
    /**
     * Returns the sys_id of the domain that the Flow Designer action, flow, or
     * subflow ran in.
     */
    getDomainId(): string;
    /**
     * Returns the scope and internal name of the Flow Designer action, flow,
     * or subflow run.
     */
    getFlowObjectName(): string;
    /**
     * Returns the type of Flow Designer object run.
     */
    getFlowObjectType(): any;
    /**
     * Returns the outputs of a completed Flow Designer action, flow, or
     * subflow.
     */
    getOutputs(): any;
  }
  export class Subflow {
    /**
     * Runs a published subflow asynchronously.
     * @param inputs Name-value pairs that define subflow inputs. If a subflow includes mandatory
     * inputs, they must be included. For inputs of Reference or Document ID field types,
     * use a GlideRecord object as the value.
     */
    startAsync(inputs: any): any;
  }
}
declare namespace sn_hr_core {
  export class hr_Utils {
    constructor();
    /**
     * Gets the Sys ID of the active primary job for a provided user.
     * @param userID Sys ID of the HR user from the User [sys_user] table assigned an active or
     * future job in which Primary is true.
     */
    getPrimaryJob(userID: string): string;
    /**
     * Switches the primary job of a user.
     * @param userId Sys ID of HR user from the Users [sys_user] table.
     * @param jobId Job Sys ID from the Jobs [sn_hr_core_job] table.
     */
    switchPrimaryJob(userId: string, jobId: string): string;
  }
}
declare namespace sn_hr_le {
  export class hr_ActivitySet {
    constructor();
    /**
     * Creates a lifecycle event case based on a specified HR service.
     * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table to be
     * assigned to the lifecycle event case.
     * @param caseValues Key-value pairs containing a value for each case field.
     */
    createLECaseByService(hrService: string, caseValues: any): string;
    /**
     * Checks for a case matching the specified combination of subject person user, HR
     * service, and job.
     * @param spUser Sys ID of subject person user in the Users [sys_user] table.
     * @param hrService Sys ID of HR service in the HR Services [sn_hr_core_service] table.
     * @param jobId Sys ID of subject user's job title in the HR Services [sn_hr_core_service]
     * table.
     */
    hasActiveCaseByService(
      spUser: string,
      hrService: string,
      jobId: string,
    ): boolean;
  }
  export class hr_ActivityUtils {
    /**
     * Creates a case from a record producer and service. This method is intended to be called
     * as-is to create a producer and does not require supplying data.
     * @param current GlideRecord for case to be created.
     * @param producer Comma-separated key value pair containing data as questions and answers that
     * are automatically provided when a user submits an answer to a record producer
     * question.
     */
    createCaseFromProducer(current: GlideRecord, producer: any): any;
  }
}
declare namespace sn_hw {
  export class HistoryWalker {
    constructor(tableName: string, sydId: string);
    constructor(tableName: string, sydId: string, useAudit: boolean);
    /**
     * Gets the update number of the current walked glide record.
     */
    getUpdateNumber(): number;
    /**
     * Gets the record filled with the history/audit data after walking to an update
     * number.
     */
    getWalkedRecord(): GlideRecord;
    /**
     * Returns a copy of the record filled with the history/audit data after walking to an
     * update number.
     */
    getWalkedRecordCopy(): GlideRecord;
    /**
     * Specifies if the record-level read access is applied on the record when retrieving from
     * the database.
     */
    isFieldLevelSecurity(): boolean;
    /**
     * Specifies if the record-level read access is applied on the record when retrieving from
     * the database.
     */
    isRecordLevelSecurity(): boolean;
    /**
     * Specifies if any of the methods that walk the record from one update to another,
     * support the “changes” data for each element.
     */
    isWithChanges(): boolean;
    /**
     * Specifies if journal type fields are populated from the historical values.
     */
    isWithJournalFields(): boolean;
    /**
     * Specifies if values are set for variables that are recorded in the history.
     */
    isWithVariables(): boolean;
    /**
     * Sets the field-level read access on each element before setting the historical value of
     * that element in the GlideRecord. If the field-level security is enabled, it prevents the API to
     * populate the fields of the walked record that the user of the API does not have access
     * to.
     * @param fieldLevelSecurity If set to true, field-level security is enabled. The default value is
     * true.
     */
    setFieldLevelSecurity(fieldLevelSecurity: boolean): any;
    /**
     * Sets the record-level read access on the record when retrieving from the database. The
     * record-level security prevents the API to retrieve the walked record if the user of the API does
     * not have access to the GlideRecord.
     * @param recordLevelSecurity If set to true, record-level read access security is enabled. The default value
     * is true.
     */
    setRecordLevelSecurity(recordLevelSecurity: boolean): any;
    /**
     * Sets the “changes” data support for each element for a method that walks the record
     * from one update to another.
     * @param withChanges If set to true, the “changes” data is supported for each element. The default
     * value is true.
     */
    setWithChanges(withChanges: boolean): any;
    /**
     * Specifies if journal type fields are populated from the historical values.
     * @param withJournalFields If set to true, include journal-type fields. Th default value is false.
     */
    setWithJournalFields(withJournalFields: boolean): any;
    /**
     * Specifies if variables are populated from the historical values.
     * @param withVariables If set to true, values are populated for variables. The default value is
     * false.
     */
    setWithVariables(withVariables: boolean): any;
    /**
     * Applies the appropriate history/audit data to get a walked GlideRecord to the state
     * when it was one update number backward. If the previous update count is missing from the
     * history/audit data, it will walk to the previous available update count.
     */
    walkBackward(): boolean;
    /**
     * Applies the appropriate history/audit data to get a walked GlideRecord to the state
     * when it was one update number forward. If next update count is missing from the history/audit
     * data, it will walk to the next available update count.
     */
    walkForward(): boolean;
    /**
     * Applies the appropriate history/audit data to get a GlideRecord to the state it was in
     * a specific update count. Use getWalkedRecord() or getWalkedRecordCopy() after walking to an
     * update number to retrieve the “walked” GlideRecord.
     * @param updateCount The update number to walk to.
     */
    walkTo(updateCount: number): boolean;
  }
}
declare namespace sn_ih {
  export class XMLStreamingAPI {
    /**
     * Closes the XMLStreamingAPI object. You must call this method to close the stream after
     * building your XML document.
     */
    close(): any;
    /**
     * Ends pretty print XML formatting.
     */
    disablePrettyPrint(): any;
    /**
     * Adds pretty print formatting to an XML element or tree of elements.
     */
    enablePrettyPrint(): any;
    /**
     * Ends the structure of your XML document.
     */
    endDocument(): any;
    /**
     * Adds a closing tag to an XML element.
     */
    endElement(): any;
    /**
     * Returns the XML document as a
     * string.
     */
    getXMLString(): string;
    /**
     * Begins building an XML document.
     * @param rootElement Optional. Root element, or top-level parent element, for your XML
     * document.
     * @param namespaceDefinitionMap Optional. Map of keys and values for the namespaces and their associated values
     * in a subsequent list of elements. For example:
     * {
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     */
    startDocument(rootElement?: string, namespaceDefinitionMap?: any): any;
    /**
     * Adds a starting tag for an XML element.
     * @param name Name of the XML element.
     * @param namespaceMap Optional. Map of keys and values for the namespaces and their associated values
     * in a subsequent list of elements. For
     * example:{
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     * @param attributeMap Optional. Map of keys and values for the attributes and their associated values
     * in a subsequent list of elements.
     * @param prefix Optional. Prefix for the XML element.
     */
    startElement(
      name: string,
      namespaceMap?: any,
      attributeMap?: any,
      prefix?: string,
    ): any;
    /**
     * Adds a list of nested elements with predefined text to your streaming XML
     * document.
     * @param elementName Name of the XML element associated with each string listed in the
     * data
     * array.
     * @param data List of values to assign to each element nested inside
     * wrappingElement.
     * @param wrappingElement Parent element containing each
     * elementName.
     */
    writeArray(elementName: string, data: any[], wrappingElement: string): any;
    /**
     * Adds an attribute to an element in your XML document.
     * @param name Name of the XML element's attribute.
     * @param value Value for the XML element's attribute.
     */
    writeAttribute(name: string, value: string): any;
    /**
     * Adds attributes to an element in your XML document.
     * @param attributeMap Map of keys and values containing attribute names and values to associate with
     * the XML element. For
     * example:{
     * 'attributeOne':'attributeValue',
     * 'attributeTwo':'attributeValue'
     * }
     */
    writeAttributes(attributeMap: any): any;
    /**
     * Adds CDATA to your XML document.
     * @param data Value to include after the CDATA keyword in your CDATA element.
     */
    writeCData(data: string): any;
    /**
     * Adds a CDATA element to your XML document.
     * @param name Name of the CDATA element.
     * @param data Optional. Type of data to parse the CDATA element
     * as.
     * @param prefix Optional. Map of child elements and values that the CDATA element includes. For
     * example:
     * {
     * 'prefixOne':'prefixValue',
     * 'prefixTwo':'prefixValue'
     * }You
     * must associate an XML element's prefix with a namespace using writeNamespace().
     */
    writeCDataElement(name: string, data?: string, prefix?: any): any;
    /**
     * Adds text to your XML document.
     * @param text Text to add to a section of your XML document.
     */
    writeCharacters(text: string): any;
    /**
     * Adds a comment to your XML document.
     * @param comment Comment text to include.
     */
    writeComment(comment: string): any;
    /**
     * Adds a document type definition to your XML document.
     * @param dtd Name of a valid XML document type definition.
     */
    writeDtd(dtd: string): any;
    /**
     * Adds a namespace to an element in your XML document.
     * @param prefix Prefix for the XML namespace.
     * @param namespaceURI Optional. URI for the namespace.
     */
    writeNamespace(prefix: string, namespaceURI?: string): any;
    /**
     * Adds namespaces to the
     * root
     * element in your XML document.
     * @param namespaceMap Map of keys and values containing namespace prefixes and URIs to associate with
     * the root element of the
     * XML
     * document. For example:
     * {
     * 'namespaceOne':'namespaceValue',
     * 'namespaceTwo':'namespaceValue'
     * }
     */
    writeNamespaces(namespaceMap: any): any;
    /**
     * Adds a single XML element to your XML document.
     * @param name Name of the XML element.
     * @param text Value for the XML element.
     * @param prefix Optional. Map of prefixes and values associated with the XML element. For
     * example:
     * {
     * 'prefixOne':'prefixValue',
     * 'prefixTwo':'prefixValue'
     * }You
     * must associate an XML element's prefix with a namespace using writeNamespace().
     */
    writeTextElement(name: string, text: string, prefix?: any): any;
  }
  export class XMLStreamingBuilder {
    constructor();
    /**
     * Returns an XMLStreamingAPI object.
     */
    build(): any;
    /**
     * Sets a
     * time when the attachment expires. Must also call the
     * withAttachment() method.
     * @param expiresAt Object that is set when the attachment expires.
     *
     * Minimum value: 7200 seconds, or two hours, from the time the attachment is
     * created. This is the default value if you don't call the
     * expiresAt() method.
     *
     * Maximum value: 172800 seconds, or 48 hours, from the time the attachment is
     * created.
     *
     *
     *
     */
    expiresAt(expiresAt: GlideDateTime): any;
    /**
     * Creates an XML document as an attachment and stores it in the Streaming Attachments
     * [streaming_attachment] table. If you don't call this method, the API creates the XML document as
     * a string.
     */
    withAttachment(): any;
  }
}
declare namespace sn_ih_kafka {
  export class Producer {
    /**
     * Sends the specified message to the specified Kafka topic.
     * @param topic Name of the topic to send the message to. A topic stores messages of the same
     * type. For example, a topic named Payments might store messages about recent
     * payments.
     * @param key Name of the key for a specific partition. Topics can be partitioned. Messages
     * with the same key are stored in the same partition. For example, payment messages
     * with a key of June would all be stored in the same partition of the Payments
     * topic.
     * @param message Message text.
     * @param isSync Flag that indicates whether to require the flow to wait for the step to
     * complete before continuing.Valid values:
     * true: Wait for the step to complete before continuing the associated
     * flow.
     *
     * false: Do not wait for the step to complete before continuing the associated
     * flow.
     *
     *
     *
     */
    send(topic: string, key: string, message: string, isSync: boolean): any;
  }
}
declare namespace sn_impex {
  export class CSVParser {
    /**
     * Parses passed in CSV formatted content into an array.
     * @param csvLine CSV content to parse.
     * @param delimiter Optional. Character used to delineate the fields in the source CSV
     * content.Default: Comma ','
     * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
     * Default: Double quote '"'
     */
    parseLineToArray(
      csvLine: string,
      delimiter?: string,
      quoteCharacter?: string,
    ): any[];
    /**
     * Parses passed in CSV formatted content into an object.
     * @param csvLine CSV content to parse.
     * @param headers Headers associated with the CSV content. These headers must be specified in the
     * same order as the corresponding content in csvLine. For
     * example, var headers = ['first_name', 'last_name',
     * 'address'];
     * @param delimiter Optional. Character used to delineate the fields in the source CSV
     * content.Default: Comma ','
     * @param quoteCharacter Optional. Character used as the quote character in the source CSV content.
     * Default: Double quote '"'
     */
    parseLineToObject(
      csvLine: string,
      headers: any[],
      delimiter?: string,
      quoteCharacter?: string,
    ): any;
  }
  export class GlideExcelParser {
    constructor();
    /**
     * Close the connection to the input stream and release the document.
     */
    close(): any;
    /**
     * Returns a list of column headers from the parsed document.
     */
    getColumnHeaders(): any[];
    /**
     * Returns the error message when the parse() method fails.
     */
    getErrorMessage(): string;
    /**
     * Get the current row values and headers.
     */
    getRow(): any;
    /**
     * Gets a list of all worksheet names in an Excel workbook.
     */
    getSheetNames(): any[];
    /**
     * Gets table column types and max character length from a spreadsheet or CSV
     * attachment.
     */
    getTableInfo(): any;
    /**
     * Moves to the next row.
     */
    next(): boolean;
    /**
     * Parses an XLSX-formatted Excel document.
     * @param inputStream Excel
     * document provided as an input stream. Note: Do not set this value
     * if using the setSource() method to parse
     * the same source multiple times.
     */
    parse(inputStream: GlideScriptableInputStream): boolean;
    /**
     * Set the number of the header row to be retrieved.
     * @param headerRowNumber The header row to be retrieved.
     */
    setHeaderRowNumber(headerRowNumber: number): any;
    /**
     * Return an empty value instead of null when an Excel cell is not present.
     * @param empty When true, cells that are not present return an empty value. When false, cells
     * that are not present return null.
     */
    setNullToEmpty(empty: boolean): any;
    /**
     * Set the name of the sheet to be retrieved.
     * @param sheetName The name of the sheet to be retrieved.
     */
    setSheetName(sheetName: string): any;
    /**
     * Set the number of the Excel sheet to be retrieved.
     * @param sheetNumber The Excel sheet number to retrieve.
     */
    setSheetNumber(sheetNumber: number): any;
    /**
     * Defines an input source for parsing multiple times or parsing each worksheet in an
     * Excel file.
     * @param inputStream Excel document provided as an input stream.
     */
    setSource(inputStream: GlideScriptableInputStream): any;
  }
  export class GlideImportSetTable {
    constructor(tableLabel: string);
    /**
     * Creates a GlideDateTime column.
     * @param columnLabel Label of the GlideDateTime column to create in the Import Set table.
     */
    addDateTimeColumn(columnLabel: string): any;
    /**
     * Creates a string column.
     * @param columnLabel Label of the string column to create in the Import Set table.
     * @param length Optional. Maximum column length. Default: 40 characters
     */
    addStringColumn(columnLabel: string, length?: number): any;
    /**
     * Creates the Import Set table.
     */
    create(): any;
  }
  export class GlideImportSetTransformMap {
    constructor(
      transformMapName: string,
      importSetTableName: string,
      targetTableName: string,
    );
    /**
     * Add a GlideDateTime transform entry to a transform map.
     * @param targetColumn Target column from target table to transform
     * to.
     * @param coalesce Optional. Flag that indicates whether to insert the
     * record into the target table
     * true: If true and target table contains a record with the same value in this
     * field, the record is updated, that is, not inserted.
     *
     * false: Default. Record is inserted into the target table.
     *
     *
     *
     * @param sourceColumn Source column from Import Set table to
     * transform from.
     * @param dateTimeFormat Optional. GlideDateTime format of the transform, for example, yyyy-MM-dd
     * HH:mm:ss. If empty, the default value is the system date time format.
     */
    addDateTimeTransformEntry(
      targetColumn: string,
      coalesce: boolean | undefined,
      sourceColumn: string,
      dateTimeFormat?: string,
    ): any;
    /**
     * Adds a string transform entry to a transform map.
     * @param targetColumn Source column from Import Set table to
     * transform from.
     * @param coalesce Target column from target table to transform
     * to.
     * @param sourceColumn Optional. Flag that indicates whether to insert the
     * record into the target table
     * true: If true and target table contains a record with the same value in this
     * field, the record is updated, that is, not inserted.
     *
     * false: Default. Record is inserted into the target table.
     *
     *
     *
     */
    addTransformEntry(
      targetColumn: string,
      coalesce: string,
      sourceColumn?: boolean,
    ): any;
    /**
     * Creates a new transform map.
     */
    create(): string;
  }
  export class RTETransformer {
    constructor(
      transformDefinitionId: string,
      verboseLogging: boolean,
      source: string,
      batchSize: number,
    );
    /**
     * Transforms and stores an array of messages into a record in the associated ServiceNow instance based on a provided extract, transform, and load (ETL)
     * definition.
     * @param message Stringified JSON objects representing the records to transform based on the ETL
     * definition.For example, if you want to transform a single user with the data
     * active, email, first name, and last name to the sys_user table, the message would
     * look similar to this: [
     * {
     * "active”:”true”,
     * "email”:”example@servicenow.com”,
     * "first_name”:”Jane”,
     * "last_name”:”Doe”
     * }
     * ]
     * Note: The field names must match the field/path of the source entity
     * fields.
     *
     */
    transform(message: any[]): any;
  }
}
declare namespace sn_instance_scan {
  export class Findings {
    /**
     * Increases the count of the current finding.
     */
    increment(): any;
    /**
     * If the current finding is from a linter check, this method increments the current
     * finding count and simultaneously passes the linter node object to the finding.
     * @param node Node object from the linter check.
     */
    incrementWithNode(node: any): any;
    /**
     * Sets the source of the current finding based on the provided GlideRecord.
     * @param source The record to set as the source record for the current finding. This value is
     * added as a reference in the Source field of the Scan Findings [scan_finding]
     * table.
     */
    setCurrentSource(source: GlideRecord): any;
  }
  export class LinterCheckAstNode {
    /**
     * Retrieves the string value of a name node type. A name node represents a simple
     * identifier that is not a keyword, such as a function or variable name.
     */
    getNameIdentifier(): string;
    /**
     * Gets the parent node object of the accessed node.
     */
    getParent(): any;
    /**
     * Gets the type of the accessed node.
     */
    getTypeName(): string;
    /**
     * Accesses each node in the subtree starting from this node and executes a given callback
     * function on each node.
     * @param callbackFunction Callback function to be executed on each node in the subtree of this node. This
     * callback function takes a node as a parameter which is the node to be
     * visited.
     */
    visit(callbackFunction: any): any;
  }
}
declare namespace sn_interaction {
  export class Interaction {
    /**
     * Accept a new interaction.
     */
    accept(): boolean;
    /**
     * Create an interaction.
     * @param options Field values for an interaction record. The channel field with the channel
     * sys_id and channel metadata are required. If a queue is not included in the
     * parameter, the system returns Interaction b2c0a3af202a1300964f959e0488de75
     * has no queue specified... running queue matching rules.
     */
    create(options: any): any;
    /**
     * Get an interaction record.
     * @param interaction Interaction record from the interaction table [interaction] that is retrieved
     * from the system.
     */
    getInteraction(interaction: GlideRecord): any;
    /**
     * Transfer an interaction record to an agent using the sys_id for the agent.
     * @param SysID The sys_id of the user you want to transfer an interaction record to.
     */
    transferToAgent(SysID: string): any;
    /**
     * Transfer an interaction record to an interaction queue.
     * @param SysID The sys_id of the interaction queue you want to transfer the interaction record
     * to.
     */
    transferToQueue(SysID: string): any;
  }
  export class InteractionQueue {
    /**
     * Assign the next interaction in a queue to the current user.
     */
    acceptNext(): any;
    /**
     * Get an existing interaction queue by sys_id.
     * @param queue Queue from the interaction_queue table.
     */
    get(queue: GlideRecord): any;
    /**
     * Returns a list of agents who are online and assigned to a particular queue.
     */
    getAvailableAgents(): any[];
    /**
     * Check if a user is an agent for a queue.
     * @param queue Sys ID for a queue in the interaction_queue table.
     */
    isAgentFor(queue: GlideRecord): boolean;
    /**
     * Find out whether the queue is in schedule.
     */
    isInSchedule(): any;
  }
}
declare namespace sn_kmf_ns {
  export class KMFCryptoOperation {
    constructor(cryptoModuleName: string, operationName: string);
    /**
     * Performs the cryptographic operation defined by the current KMFCryptoOperation object
     * on the supplied data and returns the result.
     * @param data Required except if the withSysId() builder method has
     * previously been called on the associated KMFCryptoOperation object. Input data on
     * which to perform the cryptographic operation.
     */
    doOperation(data: any): any;
    /**
     * Sets the additional input needed to perform the cryptographic operation.
     * @param additionalInput Optional, except for Asymmetric Decryption operations when using EC-IES.
     * Additional input data needed to perform the cryptographic operation specified in the
     * KMFCryptoOperation object.Supported string formats:
     * FORMATTED: Formatted to the Key Management Framework (KMF)
     * specifications.
     *
     * KMFBASE64: Base64 encoded.
     *
     *
     *
     * KMFEncryptionPayload object
     * format:
     * {
     * "ciphertext": String,
     * "derivation_secret": String,
     * "ephemeral_key": String,
     * "ephemeral_key_format": String,
     * "signature": String
     * }
     */
    withAdditionalInput(additionalInput?: string): any;
    /**
     * Sets the algorithm associated with the key material to wrap.
     * @param algorithm Algorithm to use.Valid values:
     * AES: Symmetric key type
     *
     * EC: Asymmetric key type
     *
     * HMAC: Symmetric key type
     *
     * RSA: Asymmetric key type
     *
     *
     *
     */
    withAlgorithm(algorithm: string): any;
    /**
     * Sets the data format for the input data on which the cryptographic operation will be
     * performed. Uses the specified format when decoding the data.
     * @param inputFormat Format of the input data.Valid values:
     * FORMATTED: Formatted to the Key Management Framework (KMF)
     * specifications.
     *
     * KMFBASE64: Base64 encoded.
     *
     * KMFNONE: No encoding.
     *
     *
     *
     * Default: Value determined by the operation specified when the
     * KMFCryptoOperation object was instantiated. For more information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
     */
    withInputFormat(inputFormat: string): any;
    /**
     * Sets the data format of the output data that is returned by the cryptographic
     * operation. Uses the specified format when encoding the data.
     * @param outputFormat Format of the output data.Valid values:
     * FORMATTED: Formatted to the Key Management Framework (KMF)
     * specifications.
     *
     * KMFBASE64: Base64 encoded.
     *
     * KMFNONE: No decoding. Only supported for MAC_VERIFICATION and
     * SIGNATURE_VERIFICATION.
     *
     *
     *
     * Default if this method is not called: Value determined by the
     * operation specified when the KMFCryptoOperation object was instantiated. For more
     * information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
     */
    withOutputFormat(outputFormat: string): any;
    /**
     * Sets the data type for the output data returned after the cryptographic operation is
     * performed.
     * @param outputType Type of output data.Not all output types are applicable to all operations.
     * For an unsupported type, an exception is thrown.
     * Valid values (not case-sensitive):
     * String: Not valid for MAC_VERIFICATION or
     * SIGNATURE_VERIFICATION operations.
     *
     * Boolean: Only valid for MAC_VERIFICATION or
     * SIGNATURE_VERIFICATION operations.
     *
     * Payload: Only valid for the ASYMMETRIC_ENCRYPTION
     * operation. Use this output type for EC-IES.
     *
     *
     *
     *
     * Note: When specifying an output of Payload, the output of
     * the doOperation() method is a KMFEncryptionPayload object.
     * For more information on the structure of this object, see withAdditionalInput().
     *
     * Default: Value determined by the operation, specified when the
     * KMFCryptoOperation object was instantiated. For more information, see KMFCryptoOperation - KMFCryptoOperation(String cryptoModuleName, String operationName).
     */
    withOutputType(outputType: string): any;
    /**
     * Sets the sys_id of the key to wrap on the KMFCryptoOperation object. Applicable to
     * symmetric and asymmetric wrapping of keys.
     * @param sysId Sys_id of the key to wrap. Located in the Module Key [sys_kmf_module_key]
     * table.
     */
    withSysId(sysId: string): any;
  }
}
declare namespace sn_nlp_sentiment {
  export class SentimentAnalyser {
    constructor();
    constructor(configGR: GlideRecord);
    /**
     * Performs sentiment analysis on the specified text.
     * @param inputText Text on which sentiment analysis should be performed.
     */
    analyze(inputText: string): any;
    /**
     * Performs sentiment analysis on an array of strings.
     * @param inputTextArray Array of text (string) on which to perform sentiment analysis.
     */
    analyzeMultiple(inputTextArray: any[]): any;
    /**
     * Performs sentiment analysis on an array of strings in the specified
     * language.
     * @param inputTextArray Array of text (string) on which to perform sentiment analysis.
     * @param language Language for the input text. This can very for different sentiment
     * services.
     */
    analyzeMultipleWithLanguage(inputTextArray: any[], language: string): any;
    /**
     * Performs sentiment analysis on a specified text and language.
     * @param inputText Text on which to perform sentiment analysis.
     * @param language Language for the input text. This can very for different sentiment
     * services.
     */
    analyzeWithLanguage(inputText: string, language: string): any;
    /**
     * Returns the GlideRecord of the specified connector configuration.
     * @param connectorName Name of the connector configuration.
     */
    getConnectorByName(connectorName: string): GlideRecord;
    /**
     * Returns the GlideRecord of the default connector configuration.
     */
    getDefaultConnector(): GlideRecord;
  }
}
declare namespace sn_notification {
  export class Messaging {
    /**
     * Sends a custom message to a third-party application in response to a messaging event.
     * For example, you can send a custom welcome message to a Slack channel when the Now Actions
     * application installs.
     * @param messagingApplication Third-party application to send a message to from the Messaging Entities
     * [messaging_application] table.
     * @param recipient Recipient of the message. When the instance receives an inbound message, you
     * can send a response to a Slack channel, Team, or individual user ID found in the
     * inbound payload.
     * @param messagingContent Message content to send from the Messaging Contents [messaging_content] table.
     * @param target Record used to define dynamic field values in the message. Table must match the
     * Target table field in the Messaging Contents record. If the
     * Messaging Contents record does not use a target table, set the value to null.
     */
    send(
      messagingApplication: GlideRecord,
      recipient: string,
      messagingContent: GlideRecord,
      target: GlideRecord,
    ): any;
  }
  export class PreferenceDestination {
    /**
     * Returns the channel that is used to send notifications to the destination.
     */
    getChannel(): GlideRecord;
    /**
     * Returns the identifier for the destination.
     */
    getDeliverTo(): string;
    /**
     * Returns the type of destination, such as personal email or work email.
     */
    getDestinationType(): GlideRecord;
    /**
     * Checks if the destination has permission to receive a notification.
     * @param notification Optional. Specify a notification to check if the destination has permission to
     * receive that notification. An exception is thrown if the notification doesn't exist
     * or if the notification isn't readable by the destination's user. If no notification
     * is specified, this method checks if the destination has permission to receive any
     * notifications.
     */
    isActive(notification?: GlideRecord): boolean;
    /**
     * Checks if a notification overrides a user's preferences for the
     * destination.
     * @param notification Specify
     * a notification to check if it overrides user preferences for the destination. The
     * notification should be a GlideRecord from the Notification [sys_notification]
     * table.
     */
    isOverriden(notification: GlideRecord): boolean;
    /**
     * Sets the user preference for a destination to receive or not receive
     * notifications.
     * @param notification Optional. If a notification is specified, the user preference is set for the
     * destination to receive or not receive that notification. The notification should be
     * a GlideRecord from the Notification [sys_notification] table. If no notification is
     * specified, the user preference is set for the destination to receive or not receive
     * all notifications.
     * @param active Flag that indicates whether the destination has permission to receive a
     * notification.
     *
     * Valid values:
     * true: The destination has permission receive a notification.
     *
     * false: The destination doesn't have permission to receive a
     * notification.
     *
     *
     *
     */
    setActive(notification: GlideRecord | undefined, active: boolean): any;
  }
  export class Preferences {
    constructor(recipient: GlideRecord);
    /**
     * Returns a user's notification destinations.
     */
    getDestinations(): any[];
    /**
     * Returns a user's notification destinations that use a specified channel.
     * @param channel GlideRecord from the Notification Channel [sys_notification_channel] table for
     * the
     * channel you want to filter
     * on.
     */
    getDestinationsByChannel(channel: GlideRecord): any[];
  }
}
declare namespace sn_notify {
  export class Notify {
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
     * [notify_call] table which identifies the conference call record. This record is
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
     * @param callRecord GlideRecord object on the Notify Call [notify_call] table with the held call
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
    getAvailableClients(notifyNumber: string): any[];
    /**
     * Returns all phone numbers and short codes available to Notify.
     */
    getPhoneNumbers(): any;
    /**
     * Returns all short codes available to Notify.
     */
    getShortCodes(): any;
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
     * Performs one or more activities on an active Notify phone call.
     * @param callRecord Notify Call [notify_call] record of the call for which to apply the
     * actions.
     * @param notifyAction NotifyAction object describing one or more activities to perform on the
     * call.
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
     * @param notifyPhoneNumber Phone number from which the SMS message is being sent.
     * @param toPhoneNumbers Comma separated list phone numbers to which to send the SMS message.Format:
     * E.164-compliant
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
     * @param messageBody SMS text message.
     * @param source Source record that prompted this SMS message, such as an incident.
     */
    sendSMS(
      notifyPhoneNumber: any,
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
  export class NotifyPhoneNumber {
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
     * Determines if the Notify phone number supports conference calls.
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
}
declare namespace sn_pad {
  export class PDAutomationProvider {
    /**
     * Adds a specified optional activity to a process to be run relative to another activity
     * during process execution.
     * @param contextID Sys_id of the activity execution in which to
     * add the optional activity. To access, click the process listed in the Process
     * Executions [sys_pd_context] table. The execution selected must be in a state of
     * In Progress.
     * @param activityId Sys_id of the optional activity listed in the
     * Activities [sys_pd_activity] table.
     * Note: To create an optional activity, it must have
     * the Start rule set to Manual in
     * the Activities [sys_pd_activity] table.
     *
     * @param where Indicates where to place the activity in the
     * process.Valid values:
     * AFTER –
     * Execute this activity after the relative activity context.
     *
     * WITH –
     * Execute the activity at the same time as another relative
     * activity context.
     *
     *
     *
     * @param relativeToId ID of the relative activity context that the optional activity will run after
     * or with. Listed in the Activity Context [sys_pd_activity_context] table.
     */
    addOptionalActivityRelativeToActivityContext(
      contextID: string | undefined,
      activityId: string | undefined,
      where: string,
      relativeToId?: string,
    ): any[];
    /**
     * Assigns an optional activity to a lane to run during that lane’s execution
     * context.
     * @param contextID Sys_id of the activity execution in which to
     * add the optional activity. To access, click the process listed in the Process
     * Executions [sys_pd_context] table. The execution selected must be in a state of
     * In Progress.
     * @param activityId Sys_id of the optional activity listed in the
     * Activities [sys_pd_activity] table.
     * Note: To create an optional activity, it must have
     * the Start rule set to Manual in
     * the Activities [sys_pd_activity] table.
     *
     * @param where Indicates where to place the activity in the
     * process.Valid values:
     * LAST –
     * Execute as the final activity in a lane context.
     *
     * NEXT –
     * Execute in the next activity in a lane context.
     *
     *
     *
     * @param relativeToId ID of the relative lane context in which the optional activity is to run.
     * Listed in the Lane Context [sys_pd_lane_context] table.
     */
    addOptionalActivityRelativeToLaneContext(
      contextID: string | undefined,
      activityId: string | undefined,
      where: string,
      relativeToId?: string,
    ): any[];
  }
}
declare namespace sn_pdfgeneratorutils {
  export class Cell {
    constructor(rowspan: number, colspan: number);
    /**
     * Adds an image to a table cell.
     * @param image Image to add to a table cell.
     */
    addImage(image: any): any;
    /**
     * Adds text to a table cell.
     * @param paragraph Text to add to a table cell.
     */
    addParagraph(paragraph: any): any;
    /**
     * Applies a predefined style to table cells.
     * @param style Style to apply to this element.
     */
    addStyle(style: any): any;
    /**
     * Adds a table to a cell.
     * @param table Table to add to a cell.
     */
    addTable(table: any): any;
    /**
     * Gets the number of the column in which the cell is located.
     */
    getColumn(): number;
    /**
     * Gets the number of rows in which the cell is located.
     */
    getRow(): number;
    /**
     * Specifies a background color for the cell.
     * @param color Background color.
     */
    setBackGroundColor(color: any): any;
    /**
     * Sets a border for all four edges of a cell.
     * @param width Cell border width in points.
     */
    setBorder(width: number): any;
    /**
     * Sets a border for the lower limit of a cell.
     * @param width Cell border width in points.
     */
    setBorderBottom(width: number): any;
    /**
     * Sets a border for the left limit of a cell.
     * @param width Cell border width in points.
     */
    setBorderLeft(width: number): any;
    /**
     * Sets a border for the right limit of a cell.
     * @param width Cell border width in points.
     */
    setBorderRight(width: number): any;
    /**
     * Sets a border for the upper limit of a cell.
     * @param width Cell border width in points.
     */
    setBorderTop(width: number): any;
    /**
     * Sets a colored border for all four edges of a cell.
     * @param color Cell border color.
     * @param width Cell border width in points.
     */
    setColoredBorder(color: any, width: number): any;
    /**
     * Sets a colored border for the lower limit of a cell.
     * @param color Cell border color.
     * @param width Cell border width in points.
     */
    setColoredBorderBottom(color: any, width: number): any;
    /**
     * Sets a colored border for the left limit of a cell.
     * @param color Cell border color.
     * @param width Cell border width in points.
     */
    setColoredBorderLeft(color: any, width: number): any;
    /**
     * Sets a colored border for the right limit of a cell.
     * @param color Cell border color.
     * @param width Cell border width in points.
     */
    setColoredBorderRight(color: any, width: number): any;
    /**
     * Sets a colored border for the upper limit of a cell.
     * @param color Cell border color.
     * @param width Cell border width in points.
     */
    setColoredBorderTop(color: any, width: number): any;
    /**
     * Sets the height of a cell.
     * @param value Cell height in points.
     */
    setHeight(value: number): any;
    /**
     * Sets the horizontal alignment for this cell.
     * @param alignment Horizontal alignment setting.Valid
     * values:
     * center: Align contents to the center.
     *
     * left: Align contents to the left.
     *
     * right: Align contents to the right.
     *
     *
     *
     */
    setHorizontalAlignment(alignment: string): any;
    /**
     * Sets the maximum height of a cell.
     * @param value Maximum cell height in points.
     */
    setMaxHeight(value: number): any;
    /**
     * Sets the maximum width of a cell.
     * @param value Maximum cell width in points.
     */
    setMaxWidth(value: number): any;
    /**
     * Sets the minimum height of a cell.
     * @param value Minimum cell height in points.
     */
    setMinHeight(value: number): any;
    /**
     * Sets the minimum width of a cell.
     * @param value Minimum cell width in points.
     */
    setMinWidth(value: number): any;
    /**
     * Sets the opacity of cell content, borders, and background.
     * @param opacity Float decimal value from 0 through 1, in which 0 is transparent and 1 is fully
     * opaque.Default: 0
     */
    setOpacity(opacity: number): any;
    /**
     * Sets the padding of all four sides of a cell to the same width.
     * @param padding Padding width in points as a decimal value.
     */
    setPadding(padding: number): any;
    /**
     * Sets the value of the bottom padding width of a cell.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingBottom(padding: number): any;
    /**
     * Sets the value of the left padding width of a cell.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingLeft(padding: number): any;
    /**
     * Sets the value of the right padding width of a cell.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingRight(padding: number): any;
    /**
     * Sets the value of the top padding width of a cell.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingTop(padding: number): any;
    /**
     * Sets the text alignment of this cell.
     * @param alignment Text alignment position.Valid values:
     * text-center: Aligns text to the center.
     *
     * text-justified: Modifies the space between characters to completely fill
     * text between the left and right sides. The final line is left-aligned.
     *
     * text-justified-all: Justifies text alignment including the final line.
     *
     * text-left: Align text to the left.
     *
     * text-right: Align text to the right.
     *
     *
     *
     */
    setTextAlignment(alignment: string): any;
    /**
     * Sets the vertical alignment for this cell.
     * @param alignment Vertical alignment setting.Valid values:
     * bottom: Aligns contents to the bottom.
     *
     * mid: Aligns contents to the center.
     *
     * top: Aligns contents to the top.
     *
     *
     *
     */
    setVerticalAlignment(alignment: string): any;
  }
  export class Color {
    constructor(colors: any[]);
    /**
     * Indicates whether the values of two different color objects match.
     * @param color Color object to check for a match.
     */
    equals(color: any): boolean;
    /**
     * Returns a black, gray, or white color object.
     * @param grayScale Decimal value in the range 0 through 1, in which 0 is black and 1 is
     * white.
     */
    getGrayColor(grayScale: number): any;
    /**
     * Creates color with given values and enables you to change the values of an existing
     * color. Each of the values must be from 0 through 1.
     * @param colors Three numbers indicating RGB values using
     * a decimal value from 0 through 1. For example, in [0.1, 0.9, 0.5],
     * the value of the first position is red, second is green, and third is blue. Also,
     * [0, 0, 0] is solid black, [0.5, 0.5, 0.5] is
     * solid gray, and [1, 1, 1] is solid white.
     */
    setColorValue(colors: any[]): any;
    /**
     * Sets the level of color opacity.
     * @param color Floating decimal value from 0 through 1, in which 0 is fully transparent and 1
     * is fully opaque.
     */
    setOpacity(color: any): any;
  }
  export class Document {
    constructor(pageSize: any);
    /**
     * Adds a page to the document by terminating the
     * current page and creating a new one.
     */
    addAndStartNewPage(): any;
    /**
     * Adds a name to the author field in PDF document properties.
     * @param author Name of the document's author.
     */
    addAuthor(author: string): any;
    /**
     * Adds an image to a document.
     * @param image Image to add to a document.
     */
    addImage(image: any): any;
    /**
     * Adds a new empty line to the document.
     */
    addNewLine(): any;
    /**
     * Adds a new blank page to the
     * document. Use to force a page break to start a new chapter or section in your
     * document.
     */
    addNewPage(): any;
    /**
     * Adds a new page at the specified index of the
     * document. For example, setting the index to 6 inserts a page six or inserts the page at
     * the position of the existing page six in a document. The original page six becomes page
     * seven.
     * @param index Position at which to insert a new page.
     */
    addNewPageAtIndex(index: number): any;
    /**
     * Adds a paragraph to a document.
     * @param paragraph Block of text provided as a paragraph object.
     */
    addParagraph(paragraph: any): any;
    /**
     * Adds a table to a document.
     * @param table Table to be inserted into the document.
     */
    addTable(table: any): any;
    /**
     * Closes a document.
     */
    close(): any;
    /**
     * Creates a document with the specified page size.
     * @param pageSize Document page size.
     */
    createDocument(pageSize: any): any;
    /**
     * Gets the number of pages in the document.
     */
    getPageCount(): number;
    /**
     * Gets the default page size of the document.
     */
    getPageSize(): string;
    /**
     * Indicates whether a document is closed or open.
     */
    isClosed(): any;
    /**
     * Attaches the document file to the specified target table.
     * @param tableName Name of the table on which to attach the document.
     * @param tableSysId Sys_id of the record on which to attach the document.
     * @param fileName Name of the document to attach.
     */
    saveAsAttachment(
      tableName: string,
      tableSysId: string,
      fileName: string,
    ): string;
    /**
     * Sets the base text flow direction to reorder from based on character
     * recognition
     * @param direction Text flow direction.Valid values:
     * LEFT_TO_RIGHT: Order text flow left to right. The text direction is only
     * reordered if left-to-right language characters are detected.
     *
     * RIGHT_TO_LEFT: Order text flow right to left. The text direction is only
     * reordered if right-to-left language characters are detected.
     *
     *
     *
     * Default: LEFT_TO_RIGHT
     */
    setBaseDirection(direction: string): any;
    /**
     * Sets the page margin sizes in the document.
     * @param topMargin Height of the top margin in points.
     * @param rightMargin Width of the right margin in points.
     * @param bottomMargin Height of the bottom margin in points.
     * @param leftMargin Width of the left margin in points.
     */
    setMargins(
      topMargin: number,
      rightMargin: number,
      bottomMargin: number,
      leftMargin: number,
    ): any;
  }
  export class Image {
    constructor(attachmentSysId: string);
    /**
     * Scales an image to absolute width and height sizes. This setting does not preserve the
     * width-height ratio of the image and might result in undesired stretching if settings are not
     * precise.
     * @param width Image width in points.
     * @param height Image height in points.
     */
    scaleAbsolute(width: number, height: number): any;
    /**
     * Scales an image to an absolute size while preserving the width-height
     * ratio.
     * @param width Maximum image width in points.
     * @param height Maximum image height in points.
     */
    scaleToFit(width: number, height: number): any;
    /**
     * Enables scaling width and height to a page or cell while retaining
     * dimensions.
     * @param value Flag that indicates whether to automatically scale an image.
     *
     * Valid values:
     * true: Automatically scales the image
     *
     * false: Image does not scale
     *
     *
     *
     *
     * Default: false
     */
    setAutoScale(value: boolean): any;
    /**
     * Sets a border on a PDF in the specified color.
     * @param color Image border color.
     * @param width Width of the border in points.
     */
    setColoredBorder(color: any, width: number): any;
    /**
     * Sets the horizontal alignment of the image.
     * @param alignment Positions image alignment on a page or block element.Valid values:
     * Center
     *
     * Left
     *
     * Right
     *
     *
     *
     * Default: Left
     */
    setHorizontalAlignment(alignment: string): any;
    /**
     * Sets an image to have no border.
     */
    setNoBorder(): any;
  }
  export class Line {
    constructor();
    /**
     * Places a line on a document page.
     * @param Document Name of the document object.
     * @param pageNo Page number on which you want to place the line.
     * @param xPos X-coordinate area of the page on which to place the line.
     * @param yPos Y-coordinate area of the page on which to place the line.
     * @param width Width area of the page in which you want to draw the line. Values are in
     * points.
     * @param lineWidth Optional. Value of line thickness in points.Default: 1
     */
    drawLine(
      Document: any,
      pageNo: number,
      xPos: number,
      yPos: number,
      width: number,
      lineWidth?: number,
    ): any;
    /**
     * Sets the color of a line.
     * @param color Line color.
     */
    setColor(color: any): any;
  }
  export class Paragraph {
    constructor(text: string);
    /**
     * Adds an empty line after a paragraph in a document.
     */
    addNewLine(): any;
    /**
     * Adds a paragraph. You can use this method to create a block of paragraphs with
     * automatic line breaks.
     * @param paragraph Paragraph object.
     */
    addParagraph(paragraph: any): any;
    /**
     * Adds a string of text to a paragraph. This method does not automatically insert a space
     * preceding the content.
     * @param content Information to include in a paragraph.
     */
    addString(content: string): any;
    /**
     * Applies a predefined style to paragraph text.
     * @param style Style to apply to this element.
     */
    addStyle(style: any): any;
    /**
     * Sets a paragraph element to a fixed position on the page.
     * @param left Indentation from the left side of the PDF page in points.
     * @param bottom Position from the bottom of the PDF page in points.
     * @param width Width of the paragraph element in points. This value determines the length at
     * which the line breaks.
     */
    setFixedPosition(left: number, bottom: number, width: number): any;
    /**
     * Sets each paragraph margin.
     * @param margin Value of the top, right, bottom, and left margins in points.
     */
    setMargin(margin: number): any;
    /**
     * Sets the bottom margin of a paragraph.
     * @param margin Height of the bottom margin in points.
     */
    setMarginBottom(margin: number): any;
    /**
     * Sets the left margin of a paragraph.
     * @param leftMargin Width of the left margin in points.
     */
    setMarginLeft(leftMargin: number): any;
    /**
     * Sets the right margin of a paragraph.
     * @param margin Width of the right margin in points.
     */
    setMarginRight(margin: number): any;
    /**
     * Sets a size for each paragraph margin.
     * @param topMargin Height of the top margin in points.
     * @param rightMargin Width of the right margin in points.
     * @param bottomMargin Height of the bottom margin in points.
     * @param leftMargin Width of the left margin in points.
     */
    setMargins(
      topMargin: number,
      rightMargin: number,
      bottomMargin: number,
      leftMargin: number,
    ): any;
    /**
     * Sets the top margin of a paragraph.
     * @param margin Height of the top margin in points.
     */
    setMarginTop(margin: number): any;
    /**
     * Sets the text alignment of this paragraph.
     * @param alignment Text alignment position.Valid values:
     * text-center: Aligns text to the center.
     *
     * text-justified: Modifies the space between characters to completely fill
     * text between the left and right sides. The final line is left-aligned.
     *
     * text-justified-all: Justifies text alignment including the final line.
     *
     * text-left: Align text to the left.
     *
     * text-right: Align text to the right.
     *
     *
     *
     */
    setTextAlignment(alignment: string): any;
  }
  export class PDFGenerationAPI {
    constructor();
    /**
     * Converts an HTML string to a PDF document.
     * @param html HTML to convert to a PDF document.
     * @param targetTable Name of the table on which to attach the
     * converted PDF.
     * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param fontFamilySysId Optional. Sys_id of the font family to use for the PDF. This sys_id is from the
     * PDF Generation Font Family [sys_pdf_generation_font_family] table.Default:
     * none
     * @param documentConfiguration Optional. Object containing a table of contents configuration and a page number
     * configuration.{​
     * "toc_config" : "String",​
     * "page_number_config": "String"​
     * }​
     */
    convertToPDF(
      html: string,
      targetTable: string,
      targetTableSysId: string,
      pdfName: string,
      fontFamilySysId?: string,
      documentConfiguration?: any,
    ): any;
    /**
     * Converts an HTML string into a PDF with header and footer content.
     * @param html HTML to convert to a PDF document.
     * @param targetTable Name of the table on which to attach the
     * converted PDF.
     * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param headerFooterInfo Defines PDF header and footer
     * details.{
     * "FooterImageAlignment": "String",
     * "FooterImageAttachmentId": "String",
     * "FooterImageHeight": "String",
     * "FooterText": "String",
     * "FooterTextAlignment": "String",
     * "GeneratePageNumber": "String",
     * "HeaderImageAlignment": "String",
     * "HeaderImageAttachmentId": "String",
     * "HeaderImageHeight": "String",
     * "LeftOrRightMargin": "String",
     * "PageOrientation": "String",
     * "PageSize": "String",
     * "TopOrBottomMargin": "String"
     * }
     * @param fontFamilySysId Optional. Sys_id of the font family to use for the PDF. This sys_id is from the
     * PDF Generation Font Family [sys_pdf_generation_font_family] table.Default:
     * none
     * @param documentConfiguration Optional. Object containing a table of contents configuration and a page number
     * configuration.{​
     * "toc_config" : "String",​
     * "page_number_config": "String"​
     * }​
     */
    convertToPDFWithHeaderFooter(
      html: string,
      targetTable: string,
      targetTableSysId: string,
      pdfName: string,
      headerFooterInfo: any,
      fontFamilySysId?: string,
      documentConfiguration?: any,
    ): any;
    /**
     * Fills
     * fields in an editable PDF and attaches it to the provided record.
     * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
     * getDocumentFields() method to get the list of available
     * fields.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     * @param tableName Name of the table containing the record to which the PDF
     * is attached. You can find this value in the same row as the attachment listed in the
     * Attachments [sys_attachment] table.
     * @param tableSysId Sys_id of the record to which the PDF is attached. You can
     * find this value in the same row as the attachment listed in the Attachments
     * [sys_attachment] table.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     */
    fillDocumentFields(
      fieldsMap: any | undefined,
      sysId: string,
      tableName: string,
      tableSysId: string,
      pdfName: string,
    ): any;
    /**
     * Fills fields in an editable PDF, flattens the data
     * fields, and attaches it to the provided record.
     * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
     * getDocumentFields() method to get the list of available
     * fields.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     * @param tableName Name of the table containing the record to which the PDF
     * is attached. You can find this value in the same row as the attachment listed in the
     * Attachments [sys_attachment] table.
     * @param tableSysId Sys_id of the record to which the PDF is attached. You can
     * find this value in the same row as the attachment listed in the Attachments
     * [sys_attachment] table.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
     * change the information. Specify the key as "FlattenType" and provide a flattening option as
     * a string.Valid values:
     * donot_flatten - Do not flatten any fields.
     *
     * partially_flatten - Flatten only the fields which are modified.
     *
     * fully_flatten - Flattens all the fields.
     *
     *
     *
     * Default:
     * fully_flatten
     * {
     * "FlattenType": "String"
     * }
     */
    fillDocumentFieldsAndFlatten(
      fieldsMap: any | undefined,
      sysId: string,
      tableName: string,
      tableSysId: string,
      pdfName: string,
      flatten?: any,
    ): any;
    /**
     * Fills fields in an editable PDF, adds signature
     * image, flattens the data fields, and attaches it to the provided record.
     * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
     * getDocumentFields() method to get the list of available
     * fields.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     * @param tableName Name of the table containing the record to which the PDF
     * is attached. You can find this value in the same row as the attachment listed in the
     * Attachments [sys_attachment] table.
     * @param tableSysId Sys_id of the record to which the PDF is attached. You can
     * find this value in the same row as the attachment listed in the Attachments
     * [sys_attachment] table.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param requestor Signature input returned from pdfMergeSignRequestor.
     * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
     * change the information. Specify the key as "FlattenType" and provide a flattening option as
     * a string.Valid values:
     * donot_flatten - Do not flatten any fields.
     *
     * partially_flatten - Flatten only the fields which are modified.
     *
     * fully_flatten - Flattens all the fields.
     *
     *
     *
     * Default:
     * fully_flatten
     * {
     * "FlattenType": "String"
     * }
     */
    fillFieldsAndMergeSignature(
      fieldsMap: any | undefined,
      sysId: string,
      tableName: string,
      tableSysId: string,
      pdfName: string,
      requestor: any,
      flatten?: any,
    ): any;
    /**
     * Gets a list of editable fields in a PDF document. Enables listing editable PDF fields
     * without manually opening the file to check.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     */
    getDocumentFields(sysId: string): any;
    /**
     * Gets the field type of set of editable fields from a PDF document.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     */
    getDocumentFieldsType(sysId: string): any;
    /**
     * Fills fields in an editable PDF, creates an image, and converts it to a
     * Base64-encoded PDF.
     * @param fieldsMap Optional. Key value map by PDF field name and value to fill. Use the
     * getDocumentFields() method to get the list of available
     * fields.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     * @param requestor Signature input returned from pdfMergeSignRequestor.
     * @param flatten Optional. Flattening fields enable locking the fields so that other users cannot
     * change the information. Specify the key as "FlattenType" and provide a flattening option as
     * a string.Valid values:
     * donot_flatten - Do not flatten any fields.
     *
     * partially_flatten - Flatten only the fields which are modified.
     *
     * fully_flatten - Flattens all the fields.
     *
     *
     *
     * Default:
     * fully_flatten
     * {
     * "FlattenType": "String"
     * }
     */
    getFilledDocumentWithSignatureAsBase64(
      fieldsMap: any | undefined,
      sysId: string,
      requestor: any,
      flatten?: any,
    ): any;
    /**
     * Gets the page size of a PDF document.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     */
    getPdfPageSizes(sysId: string): any;
    /**
     * Checks if the PDF document contains editable fields.
     * @param sysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table.
     */
    isDocumentFillable(sysId: string): any;
  }
  export class PdfMergeSignRequestor {
    constructor();
    /**
     * Assigns signature size and position requirements in the PDF.
     * @param pageNumber Number of the page on which to insert the signature.
     * @param leftMargin Value in points representing the left margin area of the page at which to
     * insert the signature.
     * @param topMargin Value in points representing the top margin area of the page at which to insert
     * the signature image.
     * @param boxWidth Value in points representing width of the box to contain the signature.
     * @param boxHeight Value in points representing height of the box to contain the signature
     * image.
     * @param sysId Sys_id of the signature image in the Attachments [sys_attachment]
     * table.
     */
    addSignatureMapping(
      pageNumber: number,
      leftMargin: number,
      topMargin: number,
      boxWidth: number,
      boxHeight: number,
      sysId: string,
    ): any;
    /**
     * Creates a signature request with source and target inputs.
     * @param targetSysId Sys_id of a
     * PDF in the Attachments [sys_attachment] table. Use this value as the target PDF on which to add a signature.
     * @param targetTable Name of the table containing the record to which the PDF
     * is attached. You can find this value in the same row as the attachment listed in the
     * Attachments [sys_attachment] table.
     * @param tableSysId Sys_id of the record to which the PDF is attached. You can
     * find this value in the same row as the attachment listed in the Attachments
     * [sys_attachment] table.
     * @param targetFileName Name of the target PDF without extension.
     */
    createRequest(
      targetSysId: string,
      targetTable: string,
      tableSysId: string,
      targetFileName: string,
    ): any;
    /**
     * Processes requests and adds the signatures.
     */
    processRequest(): any;
  }
  export class PdfPage {
    constructor(pageSize: string, orientation?: string);
    /**
     * Gets the Y-coordinate of the lower edge of a PDF page.
     */
    getBottom(): number;
    /**
     * Gets the X-coordinate of the left edge of a PDF page.
     */
    getLeft(): number;
    /**
     * Gets the size of a PDF page
     */
    getPdfPageSize(): any;
    /**
     * Gets the X-coordinate of the right edge of a PDF page.
     */
    getRight(): number;
    /**
     * Gets the Y-coordinate of the upper edge of a PDF page.
     */
    getTop(): number;
    /**
     * Gets the width of a PDF page.
     */
    getWidth(): number;
  }
  export class Style {
    constructor();
    /**
     * Specifies a background color of an element.
     * @param color Background color.
     */
    setBackgroundColor(color: any): any;
    /**
     * Sets a style to bold font.
     */
    setBold(): any;
    /**
     * Sets the style border on all four sides of an element.
     * @param width Style border width in points.
     */
    setBorder(width: number): any;
    /**
     * Sets the style border to the bottom of an element.
     * @param width Style border width in points.
     */
    setBorderBottom(width: number): any;
    /**
     * Sets the style border on the left side of an element.
     * @param width Style border width in points.
     */
    setBorderLeft(width: number): any;
    /**
     * Sets the style border on the right side of an element.
     * @param width Style border width in points.
     */
    setBorderRight(width: number): any;
    /**
     * Sets the style border to the top of an element.
     * @param width Style border width in points.
     */
    setBorderTop(width: number): any;
    /**
     * Sets style border with color on all four sides of an element.
     * @param width Style border width in points.
     * @param color Style border color.
     */
    setColoredBorder(width: number, color: any): any;
    /**
     * Sets style border with color to the bottom side of an element.
     * @param width Style border width in points.
     * @param color Style border color.
     */
    setColoredBorderBottom(width: number, color: any): any;
    /**
     * Sets style border with color on the left side of an element.
     * @param width Style border width in points.
     * @param color Style border color.
     */
    setColoredBorderLeft(width: number, color: any): any;
    /**
     * Sets style border with color on the right side of an element.
     * @param width Style border width in points.
     * @param color Style border color.
     */
    setColoredBorderRight(width: number, color: any): any;
    /**
     * Sets style border with color to the top side of an element.
     * @param width Style border width in points.
     * @param color Style border color.
     */
    setColoredBorderTop(width: number, color: any): any;
    /**
     * Sets a font color.
     * @param color Font color.
     */
    setFontColor(color: any): any;
    /**
     * Sets a style font size.
     * @param fontSize Font size in points.
     */
    setFontSize(fontSize: number): any;
    /**
     * Sets the horizontal alignment for a style.
     * @param alignment Horizontal alignment setting.Valid
     * values:
     * center: Align contents to the center.
     *
     * left: Align contents to the left.
     *
     * right: Align contents to the right.
     *
     *
     *
     */
    setHorizontalAlignment(alignment: string): any;
    /**
     * Sets a style to italic font.
     */
    setItalic(): any;
    /**
     * Sets the padding of all four sides of an element to the same width.
     * @param padding Padding width in points as a decimal value.
     */
    setPadding(padding: number): any;
    /**
     * Sets the value of the bottom padding width of an element.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingBottom(padding: number): any;
    /**
     * Sets the value of the left padding width of an element.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingLeft(padding: number): any;
    /**
     * Sets the value of the right padding width of a style.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingRight(padding: number): any;
    /**
     * Sets the value of the top padding width of an element.
     * @param padding Padding width in points as a decimal value.
     */
    setPaddingTop(padding: number): any;
    /**
     * Sets the text alignment for a style.
     * @param alignment Text alignment position.Valid values:
     * text-center: Aligns text to the center.
     *
     * text-justified: Modifies the space between characters to completely fill
     * text between the left and right sides. The final line is left-aligned.
     *
     * text-justified-all: Justifies text alignment including the final line.
     *
     * text-left: Align text to the left.
     *
     * text-right: Align text to the right.
     *
     *
     *
     */
    setTextAlignment(alignment: string): any;
    /**
     * Sets the vertical alignment for this element.
     * @param alignment Vertical alignment setting.Valid values:
     * bottom: Aligns contents to the bottom.
     *
     * mid: Aligns contents to the center.
     *
     * top: Aligns contents to the top.
     *
     *
     *
     */
    setVerticalAlignment(alignment: string): any;
  }
  export class SVGToPDFConversionAPI {
    constructor();
    /**
     * Adds an SVG image to a PDF on a specified page with image size and location
     * coordinates.
     * @param svg SVG to convert to a PDF document.
     * @param inputPdfSysId Sys_id of the target PDF in which to create a copy of with an SVG. The target
     * PDF is in the Attachments [sys_attachment] table.
     * @param targetTable Name of the table containing the record to which the PDF
     * is attached. You can find this value in the same row as the attachment listed in the
     * Attachments [sys_attachment] table.
     * @param targetTableSysId Sys_id of the record to which the PDF is attached. You can
     * find this value in the same row as the attachment listed in the Attachments
     * [sys_attachment] table.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param pageNo Page number in the attached PDF on which to place the SVG.
     * @param x Horizontal position of the SVG in the page. Value is in points.
     * @param y Vertical position of the SVG in the page. Value is in points.
     * @param svgImgWidth Width of the SVG image in pixels.
     * @param svgImgHeight Height of the SVG image in pixels.
     */
    addSVGToPDF(
      svg: string,
      inputPdfSysId: string,
      targetTable: string,
      targetTableSysId: string,
      pdfName: string,
      pageNo: number,
      x: number,
      y: number,
      svgImgWidth: number,
      svgImgHeight: number,
    ): any;
    /**
     * Converts an SVG provided as string to PDF.
     * @param svg SVG to convert to a PDF document.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param targetTable Name of the table on which to attach the
     * converted PDF.
     * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
     */
    convertSVGToPDF(
      svg: string,
      pdfName: string,
      targetTable: string,
      targetTableSysId: string,
    ): any;
    /**
     * Converts an SVG provided as string to PDF with image width and height
     * values.
     * @param svg SVG to convert to a PDF document.
     * @param pdfName Name to give the PDF.Default: Sys_id of the PDF in the Attachments
     * [sys_attachment] table.
     * @param targetTable Name of the table on which to attach the
     * converted PDF.
     * @param targetTableSysId Sys_id of the record on which to attach the converted PDF.
     * @param svgImgWidth Width of the SVG image in pixels.
     * @param svgImgHeight Height of the SVG image in pixels.
     */
    convertSVGToPDFWithSize(
      svg: string,
      pdfName: string,
      targetTable: string,
      targetTableSysId: string,
      svgImgWidth: number,
      svgImgHeight: number,
    ): any;
  }
  export class Table {
    constructor(ltr: boolean, columnWidths: any[], largeTable: boolean);
    /**
     * Adds a cell element to the table.
     * @param cell Cell element to add to the table.
     */
    addCell(cell: any): any;
    /**
     * Adds a cell element with an applied style to the table.
     * @param cell Cell object to add to the table.
     * @param style Style to apply to the cell.
     */
    addCellWithStyle(cell: any, style: any): any;
    /**
     * Adds a header Cell object to the table.
     * @param cell Header cell to add to the table.
     */
    addHeaderCell(cell: any): any;
    /**
     * Adds a cell that contains an image to the table.
     * @param image Image object to add to the cell.
     */
    addImageCell(image: any): any;
    /**
     * Adds a cell that contains a paragraph to the table.
     * @param p Paragraph object to add to the cell.
     */
    addParagraphCell(p: any): any;
    /**
     * Adds a cell that contains a string to the table.
     * @param text Text to add to the cell.
     */
    addTextCell(text: string): any;
    /**
     * Indicates that all the intended content has been added to a large table.
     */
    complete(): any;
    /**
     * Prevents splitting a row across two pages, when possible.
     * @param value Flag that indicates whether to split a row across two pages, or move the entire
     * row onto the second page. However, this property does not apply when the row spans
     * more than a single page.Valid values:
     * true: If the remaining part of a page is not large enough for the row, adds
     * the entire row to a new page.
     *
     * false: If the remaining part of a page is not large enough for the row,
     * splits the row across two pages.
     *
     *
     *
     * Default: false
     */
    donotSplitRowOnPageBreak(value: boolean): any;
    /**
     * Adds additional content to a table that is already added to a document.
     */
    flush(): any;
    /**
     * Returns the default style.
     */
    getDefaultStyle(): any;
    /**
     * Returns the style applied to the table's header.
     */
    getHeaderStyle(): any;
    /**
     * Sets a border of designated width around the outer edges of the table.
     * @param width Width of the border. Unit: Points
     */
    setBorder(width: number): any;
    /**
     * Sets the table's default background color.
     * @param color Color object used as the default background color for the table.
     */
    setDefaultbackGroundColor(color: any): any;
    /**
     * Sets the default style to apply to the table.
     * @param defaultStyle Default style to apply to the table.
     */
    setDefaultStyle(defaultStyle: any): any;
    /**
     * Sets the table to a fixed position on the page.
     * @param pageNumber Number of the page to add the table to.
     * @param left Number of pixels from the left margin to add the table. Unit:
     * Points
     * @param bottom Number of pixels from the bottom margin to add the table. Unit:
     * Points
     * @param width Width of the table. Unit: Points
     */
    setFixedPosition(
      pageNumber: number,
      left: number,
      bottom: number,
      width: number,
    ): any;
    /**
     * Sets the Style object to apply to the table's header.
     * @param headerStyle Style object to apply to the table's header.
     */
    setHeaderStyle(headerStyle: any): any;
    /**
     * Sets the horizontal alignment of the table.
     * @param alignment Alignment for the table. Valid
     * values:
     * center: Align contents to the center.
     *
     * left: Align contents to the left.
     *
     * right: Align contents to the right.
     *
     *
     *
     */
    setHorizontalAlignment(alignment: string): any;
    /**
     * Sets all margins around the table to the same width.
     * @param margin Value of the top, right, bottom, and left margins in points.
     */
    setMargin(margin: number): any;
    /**
     * Sets the margin at the bottom of the page.
     * @param margin Height of the bottom margin in points.
     */
    setMarginBottom(margin: number): any;
    /**
     * Sets the margin at the left side of the page.
     * @param margin Width of the left margin in points.
     */
    setMarginLeft(margin: number): any;
    /**
     * Sets the margin at the right side of the page.
     * @param margin Width of the right margin in points.
     */
    setMarginRight(margin: number): any;
    /**
     * Sets a margin at the top of the page.
     * @param margin Height of the top margin in points.
     */
    setMarginTop(margin: number): any;
    /**
     * Sets the table's total width.
     * @param width Width of the table.Unit: Points
     */
    setWidth(width: number): any;
    /**
     * Expands the table to use the entire width available on the page.
     */
    useAllAvailableWidth(): any;
  }
}
declare namespace sn_playbook {
  export class PlaybookExperience {
    /**
     * Cancels playbook executions for a given parent record.
     * @param parentRecord The parent record to cancel playbook executions for. The parent record can be
     * any record that has playbook executions, such as an interaction record or an
     * onboarding case record.
     * @param cancellationReason The reason for cancelling the playbook executions.
     * @param scopedName Optional. The scoped name of the playbook to cancel. The scoped name is from
     * the Process Definition [sys_pd_process_definition] table in the format
     * scope.name. If provided, only executions of this playbook are
     * cancelled for the given parent record. If not provided, all executions of all
     * playbooks are cancelled for the given parent record.
     * @param playbookExperienceId Optional. Sys_id of the playbook experience record in the Playbook Experience
     * [sys_playbook_experience] table to use for the cancellation. Use this parameter if
     * you’ve defined custom activity state mappings. See Playbook activity state
     * mapping.Default: Sys_id of the Global Playbook Experience
     * record.
     */
    cancelPlaybooksByParentRecord(
      parentRecord: GlideRecord,
      cancellationReason: string,
      scopedName?: string,
      playbookExperienceId?: string,
    ): any;
    /**
     * Gets a list of playbook executions for a given parent record.
     * @param parentRecord The parent record to get playbook executions for. The parent record can be any
     * record that can have playbook executions, such as an interaction record or an
     * onboarding case record.
     */
    getPlaybooksForParentRecord(parentRecord: GlideRecord): any;
    /**
     * Checks whether a parent record has playbook executions.
     * @param parentRecord The parent record to check for playbook executions. The parent record can be
     * any record that can have playbook executions, such as an interaction record or an
     * onboarding case record.
     * @param scopedName Optional. The scoped name of the playbook to check for. The scoped name is from
     * the Process Definition [sys_pd_process_definition] table in the format
     * scope.name. If provided, only executions of this playbook are
     * checked for. If not provided, executions of all playbooks are checked for.
     */
    parentRecordContainsPlaybook(
      parentRecord: GlideRecord,
      scopedName?: string,
    ): boolean;
    /**
     * Initiates a playbook for a parent record.
     * @param scopedName The scoped name of the playbook to initiate. The scoped name is from the
     * Process Definition [sys_pd_process_definition] table in the format
     * scope.name.
     * @param parentRecord The parent record to initiate a playbook for. The parent record can be any
     * record that can have playbook executions, such as an interaction record or an
     * onboarding case record.
     */
    triggerPlaybook(scopedName: string, parentRecord: GlideRecord): string;
  }
}
declare namespace sn_sc {
  export class CartJS {
    constructor(cartName?: string);
    /**
     * Adds the request for a catalog item to the current cart.
     * @param request A JSON object that contains the details of the catalog item to be added to the
     * cart.The structure of the request object
     * is:
     * {
     * 'sysparm_id': item_id,
     * 'sysparm_quantity': item_quantity,
     * 'variables':{
     * 'var_name': 'var_value',
     * ...
     * }
     * }
     * item_id: sys_id of the item to be added to the cart
     *
     * item_quantity: Number of items to be added. Default value is 1.
     *
     * var_name: Name of the question.
     *
     * var_value: Value of the answer (Not the display value).
     *
     *
     */
    addToCart(request: any): any;
    /**
     * Specifies if the current user has the required role to edit the Request
     * for field.
     */
    canViewRF(): boolean;
    /**
     * Performs the cart checkout. If the two-step checkout is enabled, returns the order
     * summary. If the two-step checkout is disabled, the cart is submitted and details of the
     * generated request are returned.
     */
    checkoutCart(): any;
    /**
     * Deletes the current cart.
     */
    empty(): any;
    /**
     * Returns the cart details.
     */
    getCartDetails(): any;
    /**
     * Returns the ID of the current cart.
     */
    getCartID(): string;
    /**
     * Returns a GlideRecord object containing records for items in the current
     * cart.
     */
    getCartItems(): GlideRecord;
    /**
     * Returns the delivery address for the current cart.
     */
    getDeliveryAddress(): string;
    /**
     * Returns the sys_id of the user for whom the cart is requested.
     */
    getRequestedFor(): string;
    /**
     * Returns the name of the user for whom the current cart is requested.
     */
    getRequestedForDisplayName(): string;
    /**
     * Returns the special instructions for the current cart.
     */
    getSpecialInstructions(): string;
    /**
     * Orders a single item. If two-step checkout is enabled, the method adds the specified
     * item to the cart and returns the sys_id of the cart. If two-step checkout is disabled, the
     * method completes the purchase of the specified item and returns the sys_id of the generated
     * request.
     * @param request JSON object that contains details of the catalog item to order.
     */
    orderNow(request: any): any;
    /**
     * Sets the delivery address for the current cart.
     * @param address Delivery address for the current cart.
     */
    setDeliveryAddress(address: string): any;
    /**
     * Sets the sys_id in the sys_user record of the user for whom the cart is
     * requested.
     * @param user sys_id to be set in the sys_user record of the user for whom the cart is
     * requested.
     */
    setRequestedFor(user: string): any;
    /**
     * Sets the special instructions for the current cart.
     * @param specialInstructions Special instructions for the current cart.
     */
    setSpecialInstructions(specialInstructions: string): any;
    /**
     * Updates special instructions, requested for, and delivery address from the
     * request parameter and performs the cart checkout. Use this API to modify
     * the mentioned parameters of the cart and perform the cart checkout simultaneously. Missing
     * parameters in the request object will have their default value.
     * @param request A JSON object that contains details of the cart to be submitted.The
     * structure of the request object
     * is:
     * {
     * 'special_instructions' : 'instructions',
     * 'sysparm_requested_for' : requested_for,
     * 'delivery_address' : 'address'
     * }
     * instructions: Special instructions for the request.
     *
     * requested_for : sys_id of the requested_for user.
     *
     * address: Delivery address for the request.
     *
     *
     */
    submitOrder(request: any): any;
    /**
     * Updates an item in the cart.
     * @param request A JSON object that contains details of the catalog item to be updated.The
     * structure of the request object
     * is:
     * {
     * 'sysparm_quantity' : item_quantity,
     * 'sysparm_requested_for' : requested_for,
     * 'variables' : {
     * 'var_name' : 'var_value',
     * ...
     * }
     * }
     * item_quantity: Number of items to be added. Default value is 1.
     *
     * var_name: Name of the question.
     *
     * var_value: Value of the answer (Not the display value).
     *
     *
     * @param cart_item_id sys_id of the cart item to be modified.
     */
    updateItem(request: any, cart_item_id: string): any;
  }
  export class CatalogClientScript {
    constructor();
    /**
     * Adds a script to the catalog client script.
     * @param script Script to be added to the catalog client script.
     */
    addScript(script: string): any;
    /**
     * Specifies if the catalog client script runs on a catalog item.
     * @param flag If true, the catalog client script runs on the catalog item. If false, the
     * catalog client script does not run on the catalog item.
     */
    appliesToCatalogItem(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a catalog task.
     * @param flag If true, the catalog client script runs on the catalog task. If false, the
     * catalog client script does not run on the catalog task.
     */
    appliesToCatalogTask(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a requested item.
     * @param flag If true, the catalog client script runs on the requested item. If false, the
     * catalog client script does not run on the requested item.
     */
    appliesToRequestedItem(flag: boolean): any;
    /**
     * Specifies if the catalog client script runs on a requested item.
     * @param flag If true, the catalog client script runs on the target record. If false, the
     * catalog client script does not run on the target record.
     */
    appliesToTargetRecord(flag: boolean): any;
    /**
     * Inserts the defined catalog client script in the catalog_script_client table.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the defined catalog client script.
     * @param sys_id Sys_id of the catalog client script.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    deleteRecord(sys_id: string, standardUpdate: boolean): any;
    /**
     * Defines attribute values for the catalog client script.
     * @param attributes A JSON object that has mapping for the field and value pairs.
     */
    setAttributes(attributes: any): any;
    /**
     * Associates a catalog item with the catalog client script.
     * @param sys_id Sys_id of the catalog item.
     */
    setCatalogItem(sys_id: string): any;
    /**
     * Runs the catalog client script when a variable value is updated.
     * @param sys_id Sys_id of the variable.
     */
    setOnChangeVariable(sys_id: string): any;
    /**
     * Associates a variable set with the catalog client script.
     * @param sys_id Sys_id of the variable set.
     */
    setVariableSet(sys_id: string): any;
  }
  export class CatalogItemVariable {
    /**
     * Inserts the specified catalog item variable.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the defined catalog item variable.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns a mapping of catalog item variable attribute values.
     * @param columns Set of columns for which to return values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Defines attribute values for this catalog item variable.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Updates current catalog item variable with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogItemVariableSet {
    /**
     * Inserts the defined catalog item variable set.
     * @param standardUpdate Flag indicating whether to enable the  running of engines and workflow.Valid
     * values:
     * true: Enable the  running of engines and workflow.
     *
     * false: Do not enable the  running of engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes a variable set.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns a mapping of catalog item variable set attribute values.
     * @param columns Specify the set of columns that you would like the values for.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Sets attributes for a variable set.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Updates a variable set.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogItemVariableSetM2M {
    /**
     * Inserts the defined catalog item variable set M2M.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the defined catalog item variable set M2M.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns a mapping of catalog item variable set M2M attribute values.
     * @param columns Set of columns that you would like the values for.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Defines attribute values for this catalog item variable set M2M.
     * @param attributes An object mapping column names to values.
     */
    setAttributes(attributes: any): any;
    /**
     * Updates current catalog item variable set M2M with set values.
     * @param columnValues An object mapping column names to values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatalogJS {
    constructor(now_GR: any);
    constructor(sys_id: string);
    /**
     * Determines whether a user can view the current category on a mobile device or
     * desktop.
     * @param mobile Flag that indicates whether to check if the user can view the current catalog on
     * a mobile view or desktop view.
     *
     * Valid values:
     * true: Mobile view
     *
     * false: Desktop view
     *
     *
     *
     * @param userId Optional. Sys_id of the user to check if they can view the catalog.Default:
     * Current user
     */
    canView(mobile: boolean, userId?: string): boolean;
    /**
     * Returns the available active catalog.
     */
    getAvailableCatalog(): any;
    /**
     * Returns the catalog background color.
     */
    getBackgroundColor(): string;
    /**
     * Returns the number of catalogs active in the catalog table.
     */
    getCatalogCount(): number;
    /**
     * Returns the categories for the current catalog.
     */
    getCategories(): any;
    /**
     * Specifies the sys_ids of the categories in the current catalog.
     */
    getCategoryIds(): any;
    /**
     * Returns the description of the current catalog.
     */
    getDescription(): string;
    /**
     * Returns the catalog desktop image file name.
     */
    getDesktopImageSRC(): string;
    /**
     * Returns the current catalog's GlideRecord.
     */
    getGr(): GlideRecord;
    /**
     * Returns the current catalog's header icon.
     */
    getHeaderIconSRC(): string;
    /**
     * Returns the sys_id of the current catalog.
     */
    getID(): string;
    /**
     * Returns the title of the current catalog.
     */
    getTitle(): string;
    /**
     * Specifies if the current catalog has categories.
     */
    hasCategories(): boolean;
    /**
     * Specifies if the current catalog has catalog items.
     */
    hasItems(): boolean;
    /**
     * Specifies if the wish list is enabled for the current catalog.
     */
    isWishlistEnabled(): boolean;
  }
  export class CatalogSearch {
    constructor();
    /**
     * Searches a catalog item based on a search term. The search can be narrowed down to a
     * catalog category level.
     * @param catalogID Identifier of the catalog to search.
     * @param categoryID Identifier of the catalog category to search.
     * @param term Search term.
     * @param mobile Flag that indicates whether catalog items exposed for mobile are
     * searched.Valid values:
     * true: Search for mobile catalog items.
     *
     * false: Do not search for mobile catalog items.
     *
     *
     *
     * @param noDepthSearch Flag that indicates whether to search subcategories.Valid values:
     * true: Do not search subcategories.
     *
     * false: Search subcategories.
     *
     *
     *
     */
    search(
      catalogID: string,
      categoryID: string,
      term: string,
      mobile: boolean,
      noDepthSearch: boolean,
    ): GlideRecord;
  }
  export class CatCategory {
    /**
     * Adds the Available For user criteria to the current catalog
     * category.
     * @param action Action to perform.
     * add: Adds the user criteria to the Available
     * For list.
     *
     * delete: Deletes the user criteria from the
     * Available For list.
     *
     *
     * @param criteriaIDs Array of the user criteria sys_ids.
     */
    availableForUserCriteria(action: string, criteriaIDs: any[]): any;
    /**
     * Determines whether a specified user can view a specified category on a mobile device or
     * desktop.
     * @param isMobile Flag that indicates whether to verify the user for access on a mobile device or desktop.
     * true: Validate for mobile.
     *
     * false: Validate for desktop.
     *
     *
     * @param userSysId Sys_id of the user to validate.
     */
    canView(isMobile: boolean, userSysId: string): boolean;
    /**
     * Insert the defined category.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes the category record on which the CatCategory class was initially
     * instantiated.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns the sys_id of the current category.
     */
    getID(): string;
    /**
     * Adds the Not Available For user criteria to a catalog
     * category.
     * @param action Action to perform.
     * add: Adds the user criteria to the Not
     * Available For list.
     *
     * delete: Deletes the user criteria from the
     * Not Available For list.
     *
     *
     */
    notAvailableForUserCriteria(action: string): any;
    /**
     * Returns a mapping of the category.
     * @param columns Set of columns that you would like the values for.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Defines the attribute values for this category.
     * @param attributes Attributes for the new field and value pairs.
     */
    setAttributes(attributes: any): any;
    /**
     * Defines the table name for this category.
     * @param tableName Name of the table that extends sc_category.
     */
    setTableName(tableName: string): any;
    /**
     * Updates the current category with the specified name-value pairs.
     * @param columnValues Mapping of column names to values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable engines and workflow.
     *
     * false: Do not enable engines and workflow.
     *
     *
     *
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class CatItem {
    /**
     * Adds the Available For user criteria to the current catalog
     * item.
     * @param action Action to perform.
     * add: Adds the user criteria to the Available
     * For list.
     *
     * delete: Deletes the user criteria from the
     * Available For list.
     *
     *
     * @param criteriaIDs Array of the user criteria sys_ids.
     */
    availableForUserCriteria(action: string, criteriaIDs: any[]): any;
    /**
     * Verifies whether the current catalog item is viewable in the selected domain (domain
     * selected in the domain picker).
     */
    canViewInDomain(): boolean;
    /**
     * Determines if the user has access to view the catalog item on global
     * search.
     * @param isMobile Flag that indicates whether to perform the search for the mobile or desktop
     * view.
     *
     * Valid values:
     * true: Perform the search for the mobile view.
     *
     * false: Perform the search for the desktop view.
     *
     *
     *
     */
    canViewOnSearch(isMobile: boolean): boolean;
    /**
     * Inserts the defined catalog item.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable the running of engines and workflow.
     *
     * false: Do not enable the running of engines and workflow. Note that the
     * created and updated system date columns on the table are not updated.
     *
     *
     *
     */
    create(standardUpdate: boolean): string;
    /**
     * Deletes a catalog item.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable the running of engines and workflow.
     *
     * false: Do not enable the running of engines and workflow.
     *
     *
     *
     */
    deleteRecord(standardUpdate: boolean): any;
    /**
     * Returns the first category that the user can view in a catalog.
     * @param catalogId Sys_id of the catalog.
     */
    getFirstAccessibleCategoryForSearch(catalogId: string): string;
    /**
     * Returns an array of users for whom the associated item cannot be delegated (requested
     * on behalf of).
     * @param requestForUsers Array of user sys_ids to check whether the associated user can acquire the
     * current item and that the item can be requested on behalf of them. User sys_ids are
     * located in the Users [sys_user] table.
     */
    getInvalidDelegatedUsers(requestForUsers: any): any[];
    /**
     * Returns the class name for the current catalog item record.
     */
    getRecordClass(): string;
    /**
     * Verifies whether the specified delegated user has acquisition rights to the current
     * service catalog item.
     * @param delegatedUser Optional. Sys_id of the user to request the service catalog item for
     * (delegate). The method verifies whether the user has acquisition rights to the
     * item.Default: Checks whether the calling user has acquisition rights to the
     * item.
     */
    isDelegationAllowed(delegatedUser?: string): boolean;
    /**
     * Determines if the current catalog item is available in service portal.
     */
    isVisibleServicePortal(): boolean;
    /**
     * Adds the Not Available For user criteria to a catalog
     * item.
     * @param action Action to perform.
     * add: Adds the user criteria to the Not
     * Available For list.
     *
     * delete: Deletes the user criteria from the
     * Not Available For list.
     *
     *
     */
    notAvailableForUserCriteria(action: string): any;
    /**
     * Returns a mapping of catalog item attribute values.
     * @param columns Name-value pairs of columns for which to return values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable the running of engines and workflow.
     *
     * false: Do not enable the running of engines and workflow.
     *
     *
     *
     */
    read(columns: any, standardUpdate: boolean): any;
    /**
     * Sets attributes for a catalog item.
     * @param attributes Name-value pairs of the columns for which to set.
     */
    setAttributes(attributes: any): any;
    /**
     * Defines the catalogs that this catalog item is associated with.
     * @param catalogs Comma-separated list of sys_ids of the catalogs to associate with the item the
     * item.
     */
    setCatalogs(catalogs: string): any;
    /**
     * Defines the categories that this catalog item is associated with.
     * @param categories Comma-separated list of sys_ids of the categories to associate with the item
     * the item.
     */
    setCategories(categories: string): any;
    /**
     * Adds an image to a catalog item.
     * @param dbImageSysId Sys_id of the image from the Images table [db_image].
     * @param type Type of image. Valid values:
     * picture
     *
     * icon
     *
     *
     *
     */
    setImage(dbImageSysId: string, type: string): any;
    /**
     * Defines the table name for this catalog item.
     * @param tableName Name of the table that extends Catalog Item [sc_cat_item].
     */
    setTableName(tableName: string): any;
    /**
     * Creates a record using a specified Service Catalog record
     * producer.
     * @param values Contains the field values and record producer to use when creating the
     * record.{
     * "variables": {Object},
     * "sysparm_id": "String"
     * }
     */
    submitProducer(values: any): any;
    /**
     * Updates the values for specified fields of a catalog item.
     * @param columnValues Name-value pairs of the fields to update and their associated values.
     * @param standardUpdate Flag that indicates whether to enable the running of engines and
     * workflow.Valid values:
     * true: Enable the running of engines and workflow.
     *
     * false: Do not enable the running of engines and workflow.
     *
     *
     *
     */
    update(columnValues: any, standardUpdate: boolean): any;
  }
  export class OrderGuide {
    constructor(sys_id: string);
    /**
     * Returns the sys_id of the order guide.
     */
    getID(): string;
    /**
     * Initialises the order guide with the specified catalog items and the variables, and
     * returns the order guide.
     * @param request A JSON object with the Catalog item and variable details.
     */
    init(request: any): any;
    /**
     * Specifies if the Show Include Toggle (include_items) check box
     * is selected for the specified order guide.
     */
    isIncludeItems(): boolean;
    /**
     * Specifies if the two-step checkout is enabled.
     */
    isTwoStep(): boolean;
    /**
     * Specifies if a separate cart (different from that for catalog items) usage is enabled
     * for a two-step order guide.
     */
    isUseCustomCart(): boolean;
    /**
     * Navigates to the catalog items of an order guide.
     * @param itemDetails A JSON object with details of catalog items in the order guide.
     */
    navigateFromMap(itemDetails: any): any;
  }
}
declare namespace sn_skill_rule {
  export class SkillDeterminationUtils {
    constructor();
    /**
     * Assigns an array of active skill objects to a work item.
     * @param skills Array of active skill objects to be assigned.
     * @param now_GR GlideRecord of the work item on which to assign skills.
     */
    assignSkillsToWorkItem(skills: any[], now_GR: GlideRecord): any;
    /**
     * Gets skills for a specified work item, indicates if the skills are mandatory, and lists
     * any skill levels.
     * @param now_GR GlideRecord of a work item from any interaction or task table
     * extension.
     */
    determineWorkItemSkills(now_GR: GlideRecord): any[];
  }
}
declare namespace sn_sms_pref {
  export class SMSPreferenceHandler {
    constructor(provider: string);
    /**
     * Returns the preferences configuration record for the current telephony service
     * provider.
     */
    getConfig(): GlideRecord;
  }
}
declare namespace sn_templated_snip {
  export class ResponseTemplate {
    constructor();
    /**
     * Returns all response templates from a specified table that match the passed in query
     * criteria.
     * @param tableName Name of the table to use to search the sn_templated_snip_note_template table to
     * locate corresponding response templates. For example, incident or
     * sn_hr_core_case.
     * @param recordId Sys ID of the record to use to render the variables in the response
     * template.
     * @param searchTerm Optional. Text to use to filter the list of matching response templates. The
     * method performs a CONTAINS search of this text on the name and body fields and a
     * STARTS WITH search on the short name field. For example, if the search term is
     * "crash", the method returns any response template that matches the query criteria
     * and has crash in the name or body or the short name starts with
     * crash.
     * Response templates with exact matches on short name appear first in
     * the return results. All other returned response templates are sorted by
     * name.
     * Default: Return all matching response templates.
     * @param limit Optional. Maximum number of response templates to return.Default:
     * 50
     * @param offset Optional. For pagination, the index at which to start the search.Default:
     * 0
     * @param includeEvaluatedBody Optional. Flag that indicates whether to render the template variables.Valid
     * values:
     *
     * false: Do not render the template variables. The response contains the message
     * variables.For example:
     * Please note that your case ${number} has been escalated to ${assignment_group}.
     *
     *
     *
     * true: Renders the template variables and returns evaluated_response
     * in the return results. For example:
     * Please note that your case INC100001 has been escalated to Facilities.
     *
     *
     *
     *
     * Default: false
     * @param errorFormat Optional. HTML formatting to use for errors. For
     * example:
     * "&lt;span
     * style='color:#ffff00'&gt;${%s}&lt;/span&gt;"
     * Default: "&lt;span
     * style='color:#ff0000'&gt;${%s}&lt;/span&gt;"
     * @param opts Optional. Parameters to pass to the
     * sn_templated_snip.response_template extension point. The format and content of these
     * parameters are dependent on the implementation of the extension point. For additional
     * information on extension points, see Using extension points to extend
     * application functionality.
     */
    query(
      tableName: string,
      recordId: string,
      searchTerm?: string,
      limit?: number,
      offset?: number,
      includeEvaluatedBody?: boolean,
      errorFormat?: string,
      opts?: any,
    ): any;
    /**
     * Renders the HTML body of a specified response template.
     * @param templateId Sys ID of the response template to render.
     * @param tableName Name of the table to use when rendering the variables on the response
     * template.
     * @param recordId Sys ID of the record to use when rendering the variables on the response
     * template. This record must be in the table specified by
     * tableName.
     * @param errorFormat Optional. HTML formatting to use for errors. For
     * example:
     * "&lt;span
     * style='color:#ffff00'&gt;${%s}&lt;/span&gt;"
     * Default: "&lt;span
     * style='color:#ff0000'&gt;${%s}&lt;/span&gt;"
     * @param opts Optional. Parameters to pass to the
     * sn_templated_snip.response_template extension point. The format and content of these
     * parameters are dependent on the implementation of the extension point. For additional
     * information on extension points, see Using extension points to extend
     * application functionality.
     */
    render(
      templateId: string,
      tableName: string,
      recordId: string,
      errorFormat?: string,
      opts?: any,
    ): any;
  }
}
declare namespace sn_tfrm {
  export class Transformer {
    constructor(transformerDefinition: any, document: string);
    /**
     * Returns
     * the row resulting from the last transformation (or null if no row
     * exists).
     */
    getRow(): any;
    /**
     * Transforms the next available
     * row/node
     * in the source document.
     */
    transform(): boolean;
  }
  export class TransformerDefinition {
    constructor(transformerRuleList: any, recordPath?: string);
    /**
     * If set when the TransformerDefinition object was instantiated, returns the record path
     * for the source data file associated with the TransformerDefinition object.
     */
    recordPath(): string;
    /**
     * Validates whether a valid TransformerRuleList is associated with the
     * TransformerDefintion object.
     */
    validate(): boolean;
  }
  export class TransformerRuleList {
    /**
     * Creates an entry in the associated transformation rules list which defines a field to
     * create in the output.
     * @param rule Name of the element in the destination output.
     * @param path Optional. JSONPath or XPath to the data element in the source document.The
     * adapter methods thenConcat() and
     * thenConcatSymbol() do not require you to define this
     * parameter if no other adapter methods are defined for the rule. All other adapter
     * methods require this parameter.
     */
    addRule(rule: string, path?: string): any;
    /**
     * Defines a name for the associated TransformerRuleList object for logging
     * purposes.
     * @param name Name to use to identify the associated TransformerRuleList object. Although
     * the API does not force this name to be unique, it is helpful if they are unique
     * within an instance.
     */
    setName(name: string): any;
    /**
     * Adds an adapter to the current rule that ties the specified currency code to the output
     * field defined in the associated addRule() call.
     * @param currencyCode Currency code to tie to the destination data element, such as USD, EUR, and
     * GBP.
     * @param outputNumericCurrencyValue Optional. Flag that indicates whether to display the currency code.Valid
     * values:
     *
     * true: do not display the country code; numeric value only
     *
     * false: display the country code
     *
     *
     * Default: false
     */
    thenAdaptCurrency(
      currencyCode: string,
      outputNumericCurrencyValue?: boolean,
    ): any;
    /**
     * Adds an adapter to the current rule that converts the source field from one unit of
     * measure to another, such as from minutes to seconds or weeks to days.
     * @param inputDuration Current unit of measure of the source field.Valid values:
     *
     * NANOSECOND
     *
     * MICROSECOND
     *
     * MILLISECOND
     *
     * SECOND
     *
     * MINUTE
     *
     * HOUR
     *
     * DAY
     *
     * WEEK
     *
     *
     * @param outputDuration Unit of measure to convert the source field to in the output.Valid
     * values:
     *
     * NANOSECOND
     *
     * MICROSECOND
     *
     * MILLISECOND
     *
     * SECOND
     *
     * MINUTE
     *
     * HOUR
     *
     * DAY
     *
     * WEEK
     *
     *
     */
    thenAdaptDuration(inputDuration: string, outputDuration: string): any;
    /**
     * Adds an adapter to the current rule that adds the passed in value to the source
     * field.
     * @param operand Value to add to the source field.
     */
    thenAdd(operand: number): any;
    /**
     * Adds an adapter to the current rule that searches the associated source field for a
     * list of strings and replaces them in the output with the specified replacement
     * values.
     * @param map Name/value pairs.
     * name: text to locate in the source data element
     *
     *
     * value: text to replace it with in the output
     *
     *
     */
    thenApplyMap(map: any): any;
    /**
     * Adds an adapter to the current rule that matches a specified regex pattern to content
     * in the source field and then replaces/reformats that content with a second regex pattern and
     * stores that value in the output.
     * @param matchPattern Regex pattern to use to locate the text to replace/reformat.
     * @param outputPattern Regex pattern to use to update the located text.
     */
    thenApplyPattern(matchPattern: string, outputPattern: string): any;
    /**
     * Adds an action to the current rule to round the source field up at the decimal position
     * specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * up (apply ceiling). For example, if this value is 2 and the source data element
     * is 6.421, the resulting value is 6.43.
     */
    thenCeiling(operand: number): any;
    /**
     * Adds an adapter to the current rule that concatenates the passed in string to the
     * output field.
     * @param value Text to concatenate to the end of the current data element.
     */
    thenConcat(value: string): any;
    /**
     * Adds an adapter to the current rule that concatenates the value of a field previously
     * defined in the rules list to the current output field.
     * @param symbol Name of the rules list element to append to the output field.
     */
    thenConcatSymbol(symbol: string): any;
    /**
     * Adds an adapter to the current rule that divides the source field by the passed in
     * value.
     * @param operand Value by which to divide the source field.
     */
    thenDivideBy(operand: number): any;
    /**
     * Adds an adapter to the current rule that divides the passed in value by the source
     * field.
     * @param operand Value into which to divide the source field.
     */
    thenDivideInto(operand: number): any;
    /**
     * Adds an adapter to the current rule that rounds the source field down at the decimal
     * position specified by the passed in value and stores it in the output.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * down (apply floor). For example, if this value is 2 and the source data element
     * is 6.427, the resulting value is 6.42.
     */
    thenFloor(operand: number): any;
    /**
     * Adds an adapter to the current rule that reformats the content in the source field that
     * matches the specified match pattern, with the specified output pattern.
     * @param matchPattern Pattern to match against the source field.Valid values:
     *
     * @: any character
     *
     * #: decimal digit
     *
     * \: literal escape (\@ for the @ symbol)
     *
     *
     * @param outputPattern Pattern to replace the content with in the output.Valid values:
     *
     * @: any character
     *
     * #: decimal digit
     *
     * \: literal escape (\@ for the @ symbol)
     *
     *
     */
    thenFormat(matchPattern: string, outputPattern: string): any;
    /**
     * Adds an adapter to the current rule that compares the passed in value against the
     * source field and copies the greater of the two values to the output field.
     * @param operand Value to compare to the source field.
     */
    thenMax(operand: number): any;
    /**
     * Adds an adapter to the current rule that compares the passed in value against the
     * source field and copies the lower of the two values to the output field.
     * @param operand Value to compare to the source field.
     */
    thenMin(operand: number): any;
    /**
     * Adds an adapter to the current rule that multiplies the source field by the passed in
     * value.
     * @param operand Value by which to multiply the source field.
     */
    thenMultiply(operand: number): any;
    /**
     * Adds an adapter to the current rule that finds all text within the source field that
     * matches a specified string and replaces it with an updated string.
     * @param matchString String to match against the source field to identify the text to
     * replace.
     * @param replaceString String with which to replace the matching text.
     */
    thenReplace(matchString: string, replaceString: string): any;
    /**
     * Adds an adapter to the current rule that rounds the source data element up at the
     * decimal position specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * up. For example, if this value is 2 and the source data element is 6.422, the
     * resulting value is 6.43.
     */
    thenRoundUp(operand: number): any;
    /**
     * Adds an adapter to the current rule that rounds the source field down at the decimal
     * position specified by the passed in value.
     * @param operand Decimal position to the right of the decimal point at which to round the number
     * down. For example, if this value is 2 and the source data element is 6.427, the
     * resulting value is 6.42.
     */
    thenRoundDown(operand: number): any;
    /**
     * Adds an adapter to the current rule that splits, reorganizes, and replaces strings
     * within the source field and saves them in the output field.
     * @param splitPattern String that denotes how to split the text into segments.
     * @param replaceString String that defines the output string, including segment references and
     * constants. Not all segments need to be referenced. Reference the segments defined
     * by the splitPattern using $#, where # is the number of the
     * order of the segment in the source data element. Reference the entire source data
     * element using $0.
     */
    thenSplit(splitPattern: string, replaceString: string): any;
    /**
     * Adds an adapter to the current rule that subtracts the passed in value from the source
     * field and stores it in the output field.
     * @param operand Value to subtract from the source data element.
     */
    thenSubtract(operand: number): any;
  }
}
declare namespace sn_uc {
  export class UserCriteria {
    constructor();
    constructor(sys_id: string);
    /**
     * Creates a user criteria with specified values in the user_criteria table. Values
     * specified in columnValues override the values provided via setters.
     * @param columnValues Key and value pairs for a column and its value.
     * @param standardUpdate Set to true to enable the running of engines and workflow.
     */
    create(columnValues: any, standardUpdate: boolean): string;
    /**
     * Deletes the current user criteria.
     */
    deleteRecord(): boolean;
    /**
     * Displays the mapping for the attribute and value pairs of the catalog item.
     * @param columns Array of catalog item attributes.
     */
    read(columns: string): any;
    /**
     * Specifies if the user criteria is active.
     * @param active If true, the user criteria is active. If false, the user criteria is
     * inactive.
     */
    setActive(active: boolean): any;
    /**
     * Specifies if the user criteria has an advanced script.
     * @param advanced If true, the user criteria has an advanced script.If false, the user
     * criteria does not have an advanced script.
     */
    setAdvanced(advanced: boolean): any;
    /**
     * Sets the company property for the user criteria.
     * @param companies Comma-separated list of the company sys_ids to be set for the user
     * criteria.
     */
    setCompanies(companies: string): any;
    /**
     * Sets the department property for the user criteria.
     * @param departments Comma-separated list of the department sys_ids to be set for the user
     * criteria.
     */
    setDepartments(departments: string): any;
    /**
     * Sets the group property for the user criteria.
     * @param groups Comma-separated list of the group sys_ids to be set for the user
     * criteria.
     */
    setGroups(groups: string): any;
    /**
     * Sets the location property for the user criteria.
     * @param locations Comma-separated list of the location sys_ids to be set for the user
     * criteria.
     */
    setLocations(locations: string): any;
    /**
     * Sets the match_all property for the user criteria.
     */
    setMatchAll(): any;
    /**
     * Sets the name property for the user criteria.
     * @param name Name of the user criteria.
     */
    setName(name: string): any;
    /**
     * Sets the role property for the user criteria.
     * @param roles Comma-separated list of the role sys_ids to be set for the user
     * criteria.
     */
    setRoles(roles: string): any;
    /**
     * Sets the script for the user criteria.
     * @param script Script to be set for the advanced user criteria.
     */
    setScript(script: string): any;
    /**
     * Sets the user property for the user criteria.
     * @param users Comma-separated list of the user sys_ids to be set for the user
     * criteria.
     */
    setUsers(users: string): any;
    /**
     * Updates the current catalog item with the specified values.
     * @param columnValues Mapping for the column name and the value pairs.
     * @param reason Reason for updating the catalog item.
     */
    update(columnValues: any, reason: string): string;
  }
}
declare namespace sn_ui {
  export class PolarisUI {
    /**
     * Checks if the current page can use the Next Experience UI.
     */
    canUsePolarisCSS(): boolean;
    /**
     * Returns a list of CSS class names used by the Next Experience UI.
     */
    getBodyClassNames(): string;
    /**
     * Checks if the Next Experience UI is enabled for the current user.
     */
    isEnabled(): boolean;
  }
}
declare namespace sn_uni_req {
  export class UniversalRequestUtilsSNC {
    /**
     * Creates a universal request and returns the sys_id of the newly created universal
     * request record.
     * @param copyFields JSON object containing field names and values to set on a new record in the
     * Universal Requests [universal_request] table.Provide details by field name and
     * field value in the format { '&lt;field_name&gt;': '&lt;field_value&gt;'
     * }. The following fields are considered the most useful details to
     * assign to a primary
     * ticket.
     *
     * {
     * 'assignment_group': 'String',
     * 'assigned_to': 'String',
     * 'contact_type': 'String',
     * 'description': 'String',
     * 'opened_by': 'String',
     * 'opened_for': 'String',
     * 'priority': 'String',
     * 'restricted': Boolean,
     * 'short_description': 'String'
     * };Other
     * fields not listed might be eligible for your use case. For a
     * list of table fields and related fields in the system, view the data
     * dictionary.
     * Note: Do not include the primary_ticket or sys_id fields in
     * the copyFields JSON object.
     */
    createUniversalRequest(copyFields: any): string;
  }
}
declare namespace sn_uni_task {
  export class UniversalTaskUtils {
    /**
     * Applies the specified universal task template to the specified universal task
     * record.
     * @param templateSysId Sys_id of universal task template to apply to the specified universal task
     * record. Located in the Universal Task Template [sn_uni_task_template] table.
     * @param uniTaskGr GlideRecord of the universal task record to which to apply the
     * template.
     */
    applyTemplate(templateSysId: string, uniTaskGr: GlideRecord): any;
    /**
     * Returns the active child task records, in the form of a GlideRecord, for the specified
     * parent ticket.
     * @param parentSysId Sys_id of the parent ticket whose active child tickets to return.
     */
    getActiveChildTasks(parentSysId: string): GlideRecord;
    /**
     * Checks whether the specified parent ticket has any universal tasks that are in the
     * work-in progress or complete state.
     * @param current GlideRecord of the parent ticket to check.
     */
    hasTasksToShow(current: GlideRecord): any;
    /**
     * Changes the state of all active universal tasks under the specified parent ticket to
     * "Cancelled".
     * @param parentSysId Sys_id of the parent ticket whose active child universal tasks' state should be
     * changed to "Cancelled".
     */
    markActiveChildTasksCancelled(parentSysId: string): any;
    /**
     * Changes the state of all active child universal tasks associated with the specified
     * parent ticket to "Complete".
     * @param parentSysId Sys_id of the parent ticket whose active child universal tasks' state should be
     * changed to "Complete".
     */
    markActiveChildTasksCompleted(parentSysId: string): any;
  }
}
declare namespace sn_ws {
  export class RESTAPIRequest {
    body: any;
    headers: any;
    pathParams: any;
    queryParams: any[];
    queryString: string;
    uri: string;
    url: string;
    /**
     * Returns the value of a specific header from the web service request.
     * @param header The name of the header, such as accept or
     * content-type.
     */
    getHeader(header: string): string;
    /**
     * Get the content types specified in the request Accept header.
     */
    getSupportedResponseContentTypes(): any[];
  }
  export class RESTAPIRequestBody {
    data: any;
    dataStream: any;
    dataString: string;
    /**
     * Determines if there are additional entries in the request body.
     */
    hasNext(): boolean;
    /**
     * Retrieve one entry from the request body as a script object.
     */
    nextEntry(): any;
  }
  export class RESTAPIResponse {
    /**
     * Returns the ResponseStreamWriter for this response, allowing you to write directly to
     * the response stream.
     */
    getStreamWriter(): any;
    /**
     * Sets the body content to send in the web service response.
     * @param body The response body, as a JavaScript object.
     *
     * The body content is automatically serialized to JSON or XML depending on the
     * value of the Accept header passed in the request.
     */
    setBody(body: any): any;
    /**
     * Assigns a value to the Content-Type header in the web service response.
     * @param contentType The content type of the response body, such as application/json.
     */
    setContentType(contentType: string): any;
    /**
     * Configures the REST response to return an error.
     * @param error Error object.
     */
    setError(error: any): any;
    /**
     * Assign a value to a REST service response header.
     * @param header The header you want to set.
     * @param value The value to assign the specified header.
     */
    setHeader(header: string, value: string): any;
    /**
     * Sets the headers for the web service response.
     * @param headers A JavaScript object listing each header and the value to assign that
     * header.
     */
    setHeaders(headers: any): any;
    /**
     * Assigns a value to the Location header in the web service response.
     */
    setLocation(): any;
    /**
     * Sets the status code number for the web service response.
     * @param status The status code to send in the response, such as 200 to indicate success.
     * Passing a non-numerical value, such as a string, causes the status code to default
     * to 0.
     */
    setStatus(status: number): any;
  }
  export class RESTAPIResponseStream {
    /**
     * Write an input stream to the response stream.
     * @param stream An attachment or a response stream from a third-party service.
     */
    writeStream(stream: any): any;
    /**
     * Write string data to the response stream.
     * @param data The string to add to the response data.
     */
    writeString(data: string): any;
  }
  export class RESTMessageV2 {
    constructor();
    constructor(name: string, methodName: string);
    /**
     * Sends the REST message to the endpoint.
     */
    execute(): any;
    /**
     * Sends the REST message to the endpoint asynchronously. The instance does not wait for a
     * response from the web service provider when making asynchronous calls.
     */
    executeAsync(): any;
    /**
     * Gets the URL of the endpoint for the REST message.
     */
    getEndpoint(): string;
    /**
     * Gets the content of the REST message body.
     */
    getRequestBody(): string;
    /**
     * Gets the value for an HTTP header specified in the REST message.
     * @param headerName Request header you want to get the value for.
     */
    getRequestHeader(headerName: string): string;
    /**
     * Gets HTTP headers that were set by the REST client and the associated
     * values.
     */
    getRequestHeaders(): any;
    /**
     * Configures the REST message to save the returned response body as an attachment
     * record.
     * @param tableName Specify the table that contains the record you want to attach the saved file
     * to.
     * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
     * @param fileName Specify the file name to give to the saved file.
     */
    saveResponseBodyAsAttachment(
      tableName: string,
      recordSysId: string,
      fileName: string,
    ): any;
    /**
     * Configures the REST message to save the returned response body as an attachment
     * record.
     * @param tableName Specify the table that contains the record you want to attach the saved file
     * to.
     * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
     * @param fileName Specify the file name to give to the saved file.
     * @param encryptContext Specify the sys_id of an encryption context. The saved file is encrypted using
     * this context.
     */
    saveResponseBodyAsAttachment(
      tableName: string,
      recordSysId: string,
      fileName: string,
      encryptContext: string,
    ): any;
    /**
     * Sets the credentials for the REST message using an existing basic auth or OAuth 2.0
     * profile.
     * @param type The type of authentication profile to use. Valid values are 'basic' to use
     * basic authentication, or 'oauth2' to use OAuth 2.0.
     * @param profileId The sys_id of an authentication profile record. When using basic auth, specify
     * the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using
     * OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile]
     * record.
     */
    setAuthenticationProfile(type: string, profileId: string): any;
    /**
     * Sets basic authentication headers for the REST message.
     * @param userName Username you want to use to authenticate the REST message.
     * @param userPass Password for the specified user.
     */
    setBasicAuth(userName: string, userPass: string): any;
    /**
     * Associates outbound requests and the resulting response record in the ECC queue. This
     * method only applies to REST messages sent through a MID Server.
     * @param correlator Unique identifier
     */
    setEccCorrelator(correlator: string): any;
    /**
     * Overrides a value from the database by writing to the REST message payload. This method
     * only applies to REST messages sent through a MID Server.
     * @param name The name of the parameter, such as source.
     * @param value The value to assign to the specified parameter.
     */
    setEccParameter(name: string, value: string): any;
    /**
     * Sets the endpoint for the REST message.
     * @param endpoint The URL of the REST provider you want to interface with.
     */
    setEndpoint(endpoint: string): any;
    /**
     * Sets the HTTP method this REST message performs, such as GET or PUT.
     * @param method HTTP method to perform.
     */
    setHttpMethod(method: string): any;
    /**
     * Sets the amount of time the REST message waits for a response from the web service
     * provider before the request times out.
     * @param timeoutMs Amount of time, in milliseconds, before the call to the REST provider times
     * out.
     */
    setHttpTimeout(timeoutMs: number): any;
    /**
     * Sets the log level for this message and the corresponding response.
     * @param level The log level. Valid values are basic, elevated, and all.
     */
    setLogLevel(level: string): any;
    /**
     * Configures the REST message to communicate through a MID Server.
     * @param midServer Name of the MID Server to use. Your instance must have an active
     * MID Server with the specified name.
     */
    setMIDServer(midServer: string): any;
    /**
     * Sets the mutual authentication protocol profile for the REST message.
     * @param profileName The Name of the protocol profile to use for mutual
     * authentication.
     */
    setMutualAuth(profileName: string): any;
    /**
     * Appends a parameter to the end of the request URL with the form name=value.
     * @param name Name of the URL parameter to pass.
     * @param value Value to assign the URL parameter.
     */
    setQueryParameter(name: string, value: string): any;
    /**
     * Sets the body content to send to the web service provider when using PUT or POST HTTP
     * methods.
     * @param body Request body to send.
     */
    setRequestBody(body: string): any;
    /**
     * Sets the request body using an existing attachment record.
     * @param attachmentSysId Sys_id of the Attachment [sys_attachment] record you want to send in this REST
     * message.
     */
    setRequestBodyFromAttachment(attachmentSysId: string): any;
    /**
     * Sets an HTTP header in the REST message to the specified value.
     * @param name Name of the header.
     * @param value Value to assign to the specified header.
     */
    setRequestHeader(name: string, value: string): any;
    /**
     * Overrides the default requestor profile for the REST message in order to retrieve an
     * OAuth access token associated with a different requestor.
     * @param requestorContext
     * @param requestorId
     */
    setRequestorProfile(requestorContext: string, requestorId: string): any;
    /**
     * Sets a REST message function variable with the specified name from the REST message
     * record to the specified value.
     * @param name Name of the REST message variable. This parameter must be defined in the REST
     * message record before you can assign a value to it.
     * @param value Value to assign the variable.
     */
    setStringParameter(name: string, value: string): any;
    /**
     * Sets a REST message function variable with the specified name from the REST message
     * record to the specified value.
     * @param name Name of the REST message variable. This parameter must be defined in the REST
     * message record before you can assign a value to it.
     * @param value Value to assign the variable.
     */
    setStringParameterNoEscape(name: string, value: string): any;
  }
  export class RESTResponseV2 {
    /**
     * Returns all headers contained in the response, including any duplicate
     * headers.
     */
    getAllHeaders(): any;
    /**
     * Gets the content of the REST response body.
     */
    getBody(): string;
    /**
     * Returns all cookies included in the response.
     */
    getCookies(): any;
    /**
     * Gets the numeric error code if there was an error during the REST transaction.
     */
    getErrorCode(): number;
    /**
     * Gets the error message if there was an error during the REST transaction.
     */
    getErrorMessage(): string;
    /**
     * Gets the value for a specified header.
     * @param name Name of the header that you want the value for, such as Set-Cookie.
     */
    getHeader(name: string): string;
    /**
     * Gets all headers returned in the REST response and the associated values.
     */
    getHeaders(): any;
    /**
     * Gets the fully-resolved query sent to the REST endpoint..
     */
    getQueryString(): string;
    /**
     * Gets the sys_id value of the attachment created from the response body
     * content.
     */
    getResponseAttachmentSysid(): string;
    /**
     * Gets the numeric HTTP status code returned by the REST provider.
     */
    getStatusCode(): number;
    /**
     * Indicates if there was an error during the REST transaction.
     */
    haveError(): boolean;
    /**
     * Set the amount of time the instance waits for a response from the web service
     * provider.
     * @param timeoutSecs The amount of time, in seconds, to wait for this response.
     */
    waitForResponse(timeoutSecs: number): any;
  }
  export class SOAPMessageV2 {
    constructor();
    constructor(soapMessage: string, soapFunction: string);
    /**
     * Sends the SOAP message to the endpoint.
     */
    execute(): any;
    /**
     * Sends the SOAP message to the ECC queue.
     */
    executeAsync(): any;
    /**
     * Gets the endpoint for the SOAP message.
     */
    getEndpoint(): string;
    /**
     * Returns the content of the SOAP message body.
     */
    getRequestBody(): string;
    /**
     * Gets the value for an HTTP header specified by the SOAP client.
     * @param headerName Request header you want to get the value for.
     */
    getRequestHeader(headerName: string): string;
    /**
     * Gets HTTP headers that were set by the SOAP client and the associated
     * values.
     */
    getRequestHeaders(): any;
    /**
     * Sets basic authentication headers for the SOAP message.
     * @param userName Username to use when authenticating the SOAP message.
     * @param userPass Password for the specified user.
     */
    setBasicAuth(userName: string, userPass: string): any;
    /**
     * Associates outbound requests and the resulting response record in the ECC
     * queue.
     * @param correlator Unique identifier
     */
    setEccCorrelator(correlator: string): any;
    /**
     * Overrides a value from the database by writing to the SOAP message payload.
     * @param name Name of the ECC parameter.
     * @param value Value to assign to the specified ECC parameter.
     */
    setEccParameter(name: string, value: string): any;
    /**
     * Sets the endpoint for the SOAP message.
     * @param endpoint URL of the SOAP web service provider you want to interface with.
     */
    setEndpoint(endpoint: string): any;
    /**
     * Sets the amount of time the SOAP message waits for a response from the web service
     * provider before the request times out.
     * @param timeoutMs Amount of time to wait for a response from the web service provider, in
     * milliseconds.
     */
    setHttpTimeout(timeoutMs: number): any;
    /**
     * Sets the log level for this message and the corresponding response.
     * @param level The log level. Valid values are basic, elevated, and all.
     */
    setLogLevel(level: string): any;
    /**
     * Configures the SOAP message to be sent through a MID Server.
     * @param midServerName Name of the MID Server you want to send the SOAP message
     * through. Your instance must have an active MID Server with the
     * specified name.
     */
    setMIDServer(midServerName: string): any;
    /**
     * Sets the mutual authentication protocol profile for the SOAP message.
     * @param profileName Name of the protocol profile to use for mutual authentication.
     */
    setMutualAuth(profileName: string): any;
    /**
     * Sets the body content to send to the web service provider.
     * @param requestBody Body of the SOAP message.
     */
    setRequestBody(requestBody: string): any;
    /**
     * Sets an HTTP header in the SOAP message to the specified value.
     * @param headerName Name of the header.
     * @param headerValue Value to assign to the specified header.
     */
    setRequestHeader(headerName: string, headerValue: string): any;
    /**
     * Defines the SOAP action this SOAP message performs.
     * @param soapAction SOAP action this SOAP message performs.
     */
    setSOAPAction(soapAction: string): any;
    /**
     * Sets a variable with the specified name from the SOAP message record to the specified
     * value.
     * @param name Name of the SOAP message variable.
     * @param value Value to assign to the specified variable.
     */
    setStringParameter(name: string, value: string): any;
    /**
     * Sets a variable with the specified name from the SOAP message record to the specified
     * value.
     * @param name Name of the SOAP message variable.
     * @param value Value to assign to the specified variable.
     */
    setStringParameterNoEscape(name: string, value: string): any;
    /**
     * Sets web service security values for the SOAP message.
     * @param keystoreId Sys_id of the Java or PKCS12 key store to use.
     * @param keystoreAlias Alias that identifies the public and private keys.
     * @param keystorePassword Password assigned to the key store record.
     * @param certificateId Sys_id of the trusted server certificate.
     */
    setWSSecurity(
      keystoreId: string,
      keystoreAlias: string,
      keystorePassword: string,
      certificateId: string,
    ): any;
  }
  export class SOAPResponseV2 {
    /**
     * Returns all headers contained in the response, including any duplicate
     * headers.
     */
    getAllHeaders(): any;
    /**
     * Gets the content of the SOAP response body.
     */
    getBody(): string;
    /**
     * Returns all cookies included in the response.
     */
    getCookies(): any;
    /**
     * Gets the numeric error code if there was an error during the SOAP
     * transaction.
     */
    getErrorCode(): number;
    /**
     * Gets the error message if there was an error during the SOAP transaction.
     */
    getErrorMessage(): string;
    /**
     * Gets the value for a specified HTTP header.
     * @param name Name of the header that you want the value for, such as Set-Cookie.
     */
    getHeader(name: string): string;
    /**
     * Gets all HTTP headers returned in the SOAP response and the associated
     * values.
     */
    getHeaders(): any;
    /**
     * Gets the numeric HTTP status code returned by the SOAP provider.
     */
    getStatusCode(): number;
    /**
     * Indicates if there was an error during the SOAP transaction.
     */
    haveError(): boolean;
    /**
     * Sets the amount of time the instance waits for a response from the web service
     * provider.
     * @param timeoutSecs Amount of time, in seconds, to wait for this response.
     */
    waitForResponse(timeoutSecs: number): any;
  }
}

// @ts-nocheck
/// <reference no-default-lib="true"/>
declare const gs = new GlideSystem();
declare const action = new ui_action();
declare const g_scratchpad = new GlideFormScratchpad();
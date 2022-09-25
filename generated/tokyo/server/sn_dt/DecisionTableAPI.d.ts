declare class DecisionTableAPI {
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
  getDecision(decisionID: string, inputs?: any): any;
  /**
   * Evaluates a decision table based on the provided inputs and returns all correctly
   * evaluated answers. If no inputs are provided, returns all default answers.
   * @param decisionID Sys_id of the Decision Table record from the
   * Decision Tables [sys_decision] table.
   * @param inputs Optional. Input values for the Decision Inputs  [sys_decision_input] table
   * associated with the provided decision table. If no inputs are provided, returns all
   * default answers.
   */
  getDecisions(decisionID: string, inputs?: any): any;
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
export { DecisionTableAPI };

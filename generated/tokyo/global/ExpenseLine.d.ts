declare class ExpenseLine {
  constructor(source: any, amount: number, description?: string);
  /**
   * Creates a new expense line record.
   */
  createExpense(): any;
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
  setCostSource(costSource: any): any;
  /**
   * Defines the description of an expense.
   * @param description Description of expense.
   */
  setDescription(description: string): any;
  /**
   * Sets the parent field on the expense line.
   * @param expense Parent expense line record.
   */
  setParent(expense: any): any;
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
export { ExpenseLine };

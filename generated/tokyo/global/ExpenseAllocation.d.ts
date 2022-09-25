declare class ExpenseAllocation {
  constructor(expense: any, rule: any);
  /**
   * Creates an expense allocation (fm_expense_allocation) record
   * referencing the parameters provided during instantiation and this method.
   * @param target GlideRecord target of the allocation, for example a cost
   * center record to allocate an expense to Decimal amount - the amount of the
   * allocation.
   * @param amount The amount of the allocation.
   */
  createAllocation(target: any, amount: number): any;
}
export { ExpenseAllocation };

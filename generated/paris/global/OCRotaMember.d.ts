declare class OCRotaMember {
  /**
   * Deactivates the user's rota member records according to the deactivate
   * date.
   * @param userId The sys id of the user.
   * @param deactivateDate The date from which the user's rotation is deactivated.
   */
  deactivateUser(userId: string, deactivateDate: any): any;
  /**
   * Checks whether the cmn_rota_member record has changed. Checks the Member, From, To, and
   * Order fields have changed.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  hasChanged(current: any, previous: any): any;
  /**
   * On update of a cmn_rota_member record, checks whether the order of the record has
   * changed.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  hasOrderChanged(current: any, previous: any): any;
  /**
   * Recalculates the schedule for the cmn_rota_member record.
   * @param current The latest changes made to the cmn_rota_member record.
   * @param previous The original state of the cmn_rota_member record.
   */
  recalculate(current: any, previous: any): any;
  /**
   * Ensures that the From date occurs before or on the same date as the To
   * date.
   * @param from Formatted date/
   * @param to Formatted date/
   */
  validateDates(from: string, to: string): any;
}
export { OCRotaMember };

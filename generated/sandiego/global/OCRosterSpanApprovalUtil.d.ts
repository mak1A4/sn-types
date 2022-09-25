declare class OCRosterSpanApprovalUtil {
  /**
   * Changes the type of the roster_schedule_span to time-off from approval.
   * @param rosterSpanGr A roster_schedule_span_proposal record.
   */
  approvePTOSpan(rosterSpanGr: any): any;
  /**
   * Returns a URL to the on-call calendar based on the rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getContextualCalUrlPerSpanProposal(rosterSpanProposalGr: any): any;
  /**
   * Returns a formatted GlideScheduleDateTime string based on the start date of the
   * rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getFromDateDisplayValuePerSpanProposal(rosterSpanProposalGr: any): any;
  /**
   * Returns an array of group managers based on the user's rota groups.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getPTOApproversList(rosterSpanProposalGr: any): any;
  /**
   * Returns a formatted GlideScheduleDateTime string based on the end date of the
   * rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getToDateDisplayValuePerSpanProposal(rosterSpanProposalGr: any): any;
  /**
   * Returns the user's name based on rosterSpanProposalGr.
   * @param rosterSpanProposalGr A roster_schedule_span_proposal record.
   */
  getUserNamePerSpanProposal(rosterSpanProposalGr: any): any;
  /**
   * Checks whether the system property
   * com.snc.on_call_rotation.pto.approval.required is true.
   */
  isPTOApprovalRequired(): any;
  /**
   * Changes the type of the roster_schedule_span to rejected from approval.
   * @param rosterSpanGr A roster_schedule_span_proposal record.
   */
  rejectPTOSpan(rosterSpanGr: any): any;
}
export { OCRosterSpanApprovalUtil };

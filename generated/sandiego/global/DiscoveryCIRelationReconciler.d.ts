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
  reconcile(): any;
}
export { DiscoveryCIRelationReconciler };

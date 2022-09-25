declare class GlideImportSetTransformMap {
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
  create(): any;
}
export { GlideImportSetTransformMap };

declare class DateTimeUtils {
  /**
   * Converts Microsoft AD integer8 DateTime format into GlideDateTime format.
   * @param int64 A 64-bit value representing the number of 100-nanosecond intervals since
   * January 1, 1601 (UTC).
   */
  int8ToGlideDateTime(int64: number): any;
  /**
   * Convert milliseconds to a GlideDateTime object
   * @param milliseconds The number of milliseconds
   */
  msToGlideDateTime(milliseconds: number): any;
}
export { DateTimeUtils };

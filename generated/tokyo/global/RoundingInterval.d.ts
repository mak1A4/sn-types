declare class RoundingInterval {
  constructor(type: string);
  /**
   * Returns the value after applying the rounding interval.
   * @param value The value to round off
   */
  getRoundedValue(value: number): any;
}
export { RoundingInterval };

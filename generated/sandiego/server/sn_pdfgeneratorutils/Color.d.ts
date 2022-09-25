declare class Color {
  constructor(colors: any[]);
  /**
   * Indicates whether the values of two different color objects match.
   * @param color Color object to check for a match.
   */
  equals(color: any): any;
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
export { Color };

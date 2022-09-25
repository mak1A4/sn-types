declare class Image {
  constructor(attachmentSysId: string);
  /**
   * Scales an image to absolute width and height sizes. This setting does not preserve the
   * width-height ratio of the image and might result in undesired stretching if settings are not
   * precise.
   * @param width Image width in points.
   * @param height Image height in points.
   */
  scaleAbsolute(width: number, height: number): any;
  /**
   * Scales an image to an absolute size while preserving the width-height
   * ratio.
   * @param width Maximum image width in points.
   * @param height Maximum image height in points.
   */
  scaleToFit(width: number, height: number): any;
  /**
   * Enables scaling width and height to a page or cell while retaining
   * dimensions.
   * @param value Flag that indicates whether to automatically scale an image.
   *
   * Valid values:
   * true: Automatically scales the image
   *
   * false: Image does not scale
   *
   *
   *
   *
   * Default: false
   */
  setAutoScale(value: boolean): any;
  /**
   * Sets a border on a PDF in the specified color.
   * @param color Image border color.
   * @param width Width of the border in points.
   */
  setColoredBorder(color: any, width: number): any;
  /**
   * Sets the horizontal alignment of the image.
   * @param alignment Positions image alignment on a page or block element.Valid values:
   * Center
   *
   * Left
   *
   * Right
   *
   *
   *
   * Default: Left
   */
  setHorizontalAlignment(alignment: string): any;
  /**
   * Sets an image to have no border.
   */
  setNoBorder(): any;
}
export { Image };

declare class IPAddress {
  constructor(ipAddress: string);
  /**
   * Returns the canonical (shortened/standard) form of the specified IP address by removing
   * any zero padding from the address.
   * @param ipAddress IP address to canonicalize or a scoped IPAddress object that contains the IP
   * address.
   */
  canonicalize(ipAddress: string): any;
  /**
   * Returns the expanded form of the specified IP address
   * @param ipAddress IP address to expand.
   */
  getExpanded(ipAddress: string): any;
  /**
   * Determines whether the specified IPAddress object is a link-local IP
   * address.
   */
  isLinkLocal(): any;
  /**
   * Determines whether the specified IPAddress object is the loopback IP
   * address.
   */
  isLocalhost(): any;
  /**
   * Determines whether the specified IPAddress object is a multicast IP
   * address.
   */
  isMulticast(): any;
  /**
   * Determines whether the specified IPAddress object is a public IP address. An IP address
   * is considered public if it is routable, and it is not a reserved address.
   */
  isPublic(): any;
  /**
   * Determines whether the specified IPAddress object is a reserved IP address.
   */
  isReserved(): any;
  /**
   * Determines whether the specified IPAddress object is a routable IP address.
   */
  isRoutable(): any;
  /**
   * Determines whether the passed IPAddress object is the is the same version, IPv4 or
   * IPv6, as the specified IP address.
   * @param ipAddress IP address to check against the IP address in the passed IPAddress
   * object.
   */
  isSameVersionAs(ipAddress: string): any;
  /**
   * Determines whether the specified IPAddress object is a unicast IP address.
   */
  isUnicast(): any;
  /**
   * Determines whether the specified IP address is a valid IPv4 address.
   * @param ipAddress IP address to validate.For the non-static implementation, the IP address is passed in the IPAddress class
   * reference instead of the method call.
   * For example New IPAddress("::1").isV4();.
   */
  isV4(ipAddress: string): any;
  /**
   * Determines whether the specified IP address is a valid IPv6 address.
   * @param ipAddress IP address to validate. For the non-static implementation, the IP address is
   * passed in the IPAddress class reference instead of the method call.
   * For
   * example New IPAddress("::1").isV6();.
   */
  isV6(ipAddress: string): any;
  /**
   * Determines whether the specified IP address is a valid IPv4 or IPv6
   * address.
   * @param ipAddress IP address to validate.
   */
  isValid(ipAddress: string): any;
  /**
   * Returns the expanded form of an IPAddress object.
   */
  toExpanded(): any;
}
export { IPAddress };

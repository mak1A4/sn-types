declare class GlideStringUtil {
  /**
   * Replaces periods with underscore characters.
   * @param sourceString Text to process.
   */
  dotToUnderBar(sourceString: string): any;
  /**
   * Removes quotes from a string.
   * @param sourceString The string to be processed.
   */
  escapeAllQuotes(sourceString: string): any;
  /**
   * Replaces problem characters with escape characters.
   * @param sourceString Text to process.
   */
  escapeForHomePage(sourceString: string): any;
  /**
   * Replaces illegal characters with their escape codes.
   * @param htmlString Text to process.
   */
  escapeHTML(htmlString: string): any;
  /**
   * Replaces non-printable characters with their printable notation.
   * @param sourceString Text to process.
   */
  escapeNonPrintable(sourceString: string): any;
  /**
   * Replaces query term separators "^" with their escape sequence "^^".
   * @param sourceString Text to process.
   */
  escapeQueryTermSeparator(sourceString: string): any;
  /**
   * Replaces quotes with escape characters by adding a backslash before each
   * quote.
   * @param sourceString Text to process.
   */
  escapeTicks(sourceString: string): any;
  /**
   * Replaces illegal HTML characters into HTML notation.
   * @param sourceString Text to process.
   */
  getHTMLValue(sourceString: string): any;
  /**
   * Extracts numeric characters from a string.
   * @param sourceString Text to process.
   */
  getNumeric(sourceString: string): any;
  /**
   * Validates whether the specified string is a valid base64 string.
   * @param sourceString Text to process.
   */
  isBase64(sourceString: string): any;
  /**
   * Validates whether the specified string is in valid sys_id format.
   * @param sourceString Text to process.
   */
  isEligibleSysID(sourceString: string): any;
  /**
   * Replaces the new line character, /n, with a break code,
   * &lt;br/&gt;.
   * @param sourceString Text to process.
   */
  newLinesToBreaks(sourceString: string): any;
  /**
   * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading,
   * trailing, and duplicate spaces.
   * @param sourceString Text to process.
   */
  normalizeWhitespace(sourceString: string): any;
  /**
   * Replaces escape characters with their respective character.
   * @param htmlString String to process.
   */
  unEscapeHTML(htmlString: string): any;
}
export { GlideStringUtil };

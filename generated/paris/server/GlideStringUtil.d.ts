declare class GlideStringUtil {
  /**
   * Replaces periods with underscore characters.
   * @param sourceString The string to be processed.
   */
  dotToUnderBar(sourceString: string): any;
  /**
   * Remove quotes from a string.
   * @param sourceString The string to be processed.
   */
  escapeAllQuotes(sourceString: string): any;
  /**
   * Use for home pages to replace problem characters with escape characters.
   * @param sourceString The string to be processed.
   */
  escapeForHomePage(sourceString: string): any;
  /**
   * Use to replace illegal characters with their escape codes.
   * @param htmlString The string to be processed.
   */
  escapeHTML(htmlString: string): any;
  /**
   * Replaces non-printable characters with their printable notation.
   * @param sourceString The string to be processed.
   */
  escapeNonPrintable(sourceString: string): any;
  /**
   * Replaces query term separators "^" with their escape sequence "^^".
   * @param sourceString The string to be processed.
   */
  escapeQueryTermSeparator(sourceString: string): any;
  /**
   * Replace quotes with escape characters by adding a backslash before each
   * quote.
   * @param sourceString The string to be processed.
   */
  escapeTicks(sourceString: string): any;
  /**
   * Use to replace illegal HTML characters into HTML notation.
   * @param sourceString The string to be processed.
   */
  getHTMLValue(sourceString: string): any;
  /**
   * Extract numeric characters from a string.
   * @param sourceString The string to be processed.
   */
  getNumeric(sourceString: string): any;
  /**
   * Returns true if the specified string is a valid base64 string.
   * @param sourceString The string to be processed.
   */
  isBase64(sourceString: string): any;
  /**
   * Returns true if the specified string is in valid sys ID format.
   * @param sourceString The string to be processed.
   */
  isEligibleSysID(sourceString: string): any;
  /**
   * Replaces the new line character, "/n", with a break code "".
   * @param sourceString The string to be processed.
   */
  newLinesToBreaks(sourceString: string): any;
  /**
   * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading,
   * trailing, and duplicate spaces.
   * @param sourceString The string to be processed.
   */
  normalizeWhitespace(sourceString: string): any;
  /**
   * Replaces escape characters with their respective character.
   * @param htmlString String to process.
   */
  unEscapeHTML(htmlString: string): any;
}
export { GlideStringUtil };

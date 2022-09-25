declare class WindowsOSNameHelper {
  /**
   * Formats the given Windows OS name.
   * @param name The name to format
   */
  formatWindowsOSName(name: string): any;
  /**
   * Ensures that the OS choice is valid.
   * @param value The value to validate
   */
  makeOSChoiceValid(value: string): any;
  /**
   * Cleans up the specified Windows OS name by stripping out incorrect characters,
   * incorrect capitalization, extra spaces, or trailing spaces.
   * @param name The name to clean up.
   */
  osCleanupName(name: string): any;
}
export { WindowsOSNameHelper };

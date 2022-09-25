declare class DynamicTranslation {
  /**
   * Detects the language of the passed in text.
   * @param text Text to use to detect the language.
   * @param parms Optional. JSON object that contains additional translation parameters.
   */
  getDetectedLanguage(text: string, parms?: any): any;
  /**
   * Translates the passed in text to one or more languages.
   * @param textToTranslate Text to translate.
   * @param parms Optional. JSON object that contains additional translation parameters.
   */
  getTranslation(textToTranslate: string, parms?: any): any;
  /**
   * Determines whether the
   * getDetectedLanguage() and getTranslation()
   * methods are enabled for a translation service.
   * @param translator Optional. Translation service to verify whether the  methods are active.
   * Translation services are configured under the Translator Configuration
   * menu.Possible values - not case-sensitive:
   *
   * Google
   *
   * IBM
   *
   * Microsoft
   *
   * &lt;custom&gt;
   *
   *
   * Note: To use custom translation services you must first configure the translation
   * service in your instance. For details, see Integrate with a translation
   * service provider.
   */
  isEnabled(translator?: string): any;
}
export { DynamicTranslation };

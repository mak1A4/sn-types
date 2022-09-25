declare class DynamicTranslation {
  /**
   * Detects the language of the passed in text.
   * @param text Text to use to detect the language.
   * @param parms Optional. JSON object that contains additional translation parameters.
   */
  getDetectedLanguage(text: string, parms?: any): any;
  /**
   * Detects the languages of the passed in text strings.
   * @param texts List of text strings to use to detect the
   * language(s).
   * @param parms Optional. JSON object that contains additional
   * translation
   * parameters."parms": {
   * "translator": "String"
   * }
   */
  getDetectedLanguages(texts: any[], parms?: any): any;
  /**
   * Translates the passed in text to one or more languages.
   * @param textToTranslate Text to translate.
   * @param parms Optional. JSON object that contains additional
   * translation
   * parameters."parms": {
   * "additionalParameters": {Object},
   * "sourceLanguage": "String",
   * "targetLanguages": [Array],
   * "translator": "String"
   * }
   */
  getTranslation(textToTranslate: string, parms?: any): any;
  /**
   * Translates the passed in text strings to one or more languages.
   * @param texts List of text stings to translate.
   * @param parms Optional. JSON object that contains additional
   * translation
   * parameters."parms": {
   * "additionalParameters": {Object},
   * "sourceLanguage": "String",
   * "targetLanguages": [Array],
   * "translator": "String"
   * }
   */
  getTranslations(texts: any[], parms?: any): any;
  /**
   * Determines whether the various methods in the
   * DynamicTranslation API are enabled for a translation
   * service.
   * @param translator Optional. Translation service to use to verify whether
   * the methods are active. Translation services are configured under the Translator
   * Configuration menu.Possible values - not case-sensitive:
   *
   * Google
   *
   * Microsoft
   *
   * IBM
   *
   * &lt;custom&gt;
   *
   *
   * Note: To use custom translation services you must first configure the translation
   * service in your instance. For details, see Integrate with a translation
   * service provider.
   * Default: Default translation
   * service.
   */
  isEnabled(translator?: string): any;
}
export { DynamicTranslation };

declare class VoiceTranscriptObject {
  /**
   * Saves third-party voice conversation transcript data to tables within a ServiceNow instance that is then accessible through Customer Service Management (CSM).
   * @param voiceConversationJson JSON that represents the voice conversation to store. This JSON is sent by
   * another ServiceNow plugin, such as OpenFrame. Third-party
   * vendors, such as Amazon, send the JSON to the plugin. The associated plugin parses
   * out the voice conversation and sends the JSON in the required format to Virtual Agent.For example, the following is an example of an
   * AmazonConnect conversation:
   * {
   * "interactionId":"bgr09b5a-7308-47b2-jy97-737de9f45d19",
   * "source":"AmazonConnect",
   * "conversationStarted":"2021-08-06 15:07:51",
   * "transcript":[
   * {
   * "isEvent":"False",
   * "isInternalMessage":"False",
   * "beginOffsetMillis":2650,
   * "content":"This is John. How can I help you? Yeah,",
   * "endOffsetMillis":9380,
   * "id":"954c4edc-31a8-48b0-8f6e-7fa0c4ca00a8",
   * "participantId":"AGENT",
   * "Sentiment":"NEUTRAL",
   * "loudnessScore":"null,null",
   * "attributes": [{
   * "key":"key1",
   * "value":"value1"
   * },{
   * "key":"key2",
   * "value":"value2"
   * }]
   * },
   * {
   * "isEvent":"False",
   * "isInternalMessage":"False",
   * "beginOffsetMillis":9120,
   * "content":"Uh, yes, John. I'm a little very frustrated right now.",
   * "endOffsetMillis":22900,
   * "id":"18bcf19c-4a9b-4af1-9bd7-7bfb5ba53b9f",
   * "participantId":"CUSTOMER",
   * "sentiment":"NEGATIVE",
   * "loudnessScore":"null,null",
   * "attributes": [{
   * "key":"key1",
   * "value":"value1"
   * },{
   * "key":"key2",
   * "value":"value2"
   * } ]
   * },
   * {
   * "isEvent":"True",
   * "isInternalMessage":"True",
   * "beginOffsetMillis":23590,
   * "content":"Agent asked for help in chat",
   * "endOffsetMillis":30610,
   * "id":"ab09b3b6-23fd-4e41-be05-6b2b53c19059",
   * "participantId":"CUSTOMER",
   * "sentiment":"NEUTRAL",
   * "loudnessScore":"null,null,null,null",
   * "attributes": []
   * }
   * ]
   * }
   */
  saveVoiceConversationTranscript(voiceConversationJson: string): any;
}
export { VoiceTranscriptObject };

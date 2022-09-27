
export const IgnoreAPIClasses = [
  "JSONScopedAPI", // Autocomplete is provided by monaco
  "c_GlideNotificationV3", // Needs nested module support because it has to be called with nowapi.g_notification
];
export const OverrideReturnTypes = [
  { "dc_identifier": "r_ScopedGlideSystemGetSession", "correct_type": "GlideSession" },
];
export const RenameAPIClasses = [
  { "dc_identifier": "c_GlideURLV3API", "correct_name": "GlideURL" },
];
export const StaticAPIClasses = [
  // Server Scoped
  { "dc_identifier": "ActionAPIBoth", "static_name": "action" },
  { "dc_identifier": "GlideFlowAPI", "static_name": "GlideFlow" },
  { "dc_identifier": "c_GlideSystemScopedAPI", "static_name": "gs" },
  { "dc_identifier": "c_GlideFormScratchpadScopedAPI", "static_name": "g_scratchpad" },
  // Client API
  { "dc_identifier": "GlideAgentWorkspaceAPI", "static_name": "g_aw" },
  { "dc_identifier": "c_GlideFormAPI", "static_name": "g_form" },
  { "dc_identifier": "GlideFlowAPI", "static_name": "GlideFlow" },
  { "dc_identifier": "c_GlideGuidV3API", "static_name": "g_guid" },
  // g_list has three implementations, don't know how to implement this correclty yet ...
  // declare const g_list = new GlideListV3();
  // declare const g_list = new GlideList(); //Now Experience
  { "dc_identifier": "c_GlideList2API", "static_name": "g_list" },
  { "dc_identifier": "c_GlideMenuAPI", "static_name": "g_menu" },
  { "dc_identifier": "c_GlideNavigationV3API", "static_name": "g_navigation" },
  { "dc_identifier": "GUIScriptsAPI", "static_name": "g_ui_scripts" },
  { "dc_identifier": "c_GlideUserAPI", "static_name": "g_user" },
];
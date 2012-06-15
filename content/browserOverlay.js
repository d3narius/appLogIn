/**
 * LogMeInChrome namespace.
 */
if ("undefined" == typeof(LogMeInChrome)) {
  var LogMeInChrome = {};
};

LogMeInChrome.BrowserOverlay = {
  /**
   * opens a new browser window with the formatted prodtest results
   */
  openLink : function(aEvent) {
    let stringBundle = document.getElementById("logmein-string-bundle");
    let errMsg = stringBundle.getString("logmein.error.msg");
    let url = stringBundle.getString("logmein.appServer.url");
    var userName = content.getSelection();
    openUILinkIn(url+"/ui/setup/Setup/?un="+userName+"&pw=123456", "tab");
  }
};

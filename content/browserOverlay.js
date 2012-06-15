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
    var userName = content.getSelection();
    let url = stringBundle.getString("logmein.appServer.url")+"/setup/forcecomHomepage.apexp?un="+userName+"&pw=123456";
    openUILinkIn(url, "tab");
  }
};

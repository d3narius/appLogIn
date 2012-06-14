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
//    window.alert('logging in');    
    //var validLink = false;
    //if(gContextMenu.onLink == true) {
	var userName = content.getSelection();
	//window.alert("logging in as "+userName);
//	if (resultLink.indexOf("results.xml") != -1) {
 	    window.open(url+"/?un="+userName+"&pw=123456");
  //          validLink = true;
       // }
    //}
    /*if (validLink == false) {
	window.alert(errMsg);
    }*/
  }
};

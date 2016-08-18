/*chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('pages/main.html', {
      state:"maximized"
    });
});*/
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('pages/main.html')}, function(tab) {
    // Tab opened.
  });
});

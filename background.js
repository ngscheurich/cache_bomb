chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.location=location.href.match(/([^?]*)/)[1]+"?"+(new Date().getTime())'
  });
});

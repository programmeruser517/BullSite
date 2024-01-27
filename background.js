chrome.runtime.onInstalled.addListener(function() {
    // Set up your extension when installed or updated
  });
  
  chrome.browserAction.onClicked.addListener(function() {
    // Open your extension's window when the extension icon is clicked
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 300,
      height: 200
    });
  });
  
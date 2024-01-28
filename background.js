//FILE TO BE DELETED, REAL BACKGROUND CODE TBI in SCRIPT TAG IN POPUP.HTML

chrome.runtime.onInstalled.addListener(function() {
    // Set up your extension when installed or updated
  });
  
  chrome.browserAction.onClicked.addListener(function() {
    alert("Hey! You clicked the icon!");
    // Open your extension's window when the extension icon is clicked
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 300,
      height: 200
    });
  });
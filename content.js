// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getTabUrl") {
      const currentUrl = window.location.href;
      sendResponse({ url: currentUrl });
    }
  });
  
function grabAndPrintWebsites() {
    // TODO: Use google search api to get the top 3 websites related to the website of the current user
    // TODO: Grab and post associated website ratings from the database
    // Current implementation: Hardcoded placeholders for website names and ratings
    var websiteNames = ["www.google.com", "www.facebook.com", "www.youtube.com", "www.nytimes.com"];
    var avgWebsiteRatings = [9.5, 8.5, 7.5];
    document.getElementById('option1').innerHTML = websiteNames[0];
    document.getElementById('option1').href = websiteNames[0];
    document.getElementById('opt1Score').innerHTML = ' (' + avgWebsiteRatings[0] + '/10)';
    document.getElementById('opt1Prog').style.width = avgWebsiteRatings[0] * 10 + '%';
    document.getElementById('option2').innerHTML = websiteNames[1];
    document.getElementById('option2').href = websiteNames[1];
    document.getElementById('opt2Score').innerHTML = ' (' + avgWebsiteRatings[1] + '/10)';
    document.getElementById('opt2Prog').style.width = avgWebsiteRatings[1] * 10 + '%';
    document.getElementById('option3').innerHTML = websiteNames[2];
    document.getElementById('option3').href = websiteNames[2];
    document.getElementById('opt3Score').innerHTML = ' (' + avgWebsiteRatings[2] + '/10)';
    document.getElementById('opt3Prog').style.width = avgWebsiteRatings[2] * 10 + '%';
}

//===== Toggle Button
function backToIndex() {
  window.location.href = "index.html";
}

function changeWindowAlt() {
  window.location.href = "index_alternative.html";
}

function changeWindowRate() {
  window.location.href = "rate_it.html";
}

function extractRelatedWebsites(data) {
  // Extract related websites from the DuckDuckGo API response
  const relatedWebsites = [];

  if (data.RelatedTopics) {
    data.RelatedTopics.forEach(topic => {
      if (topic.FirstURL && topic.FirstURL !== '') {
        relatedWebsites.push(topic.FirstURL);
      }
    });
  }

  return relatedWebsites;
}


document.addEventListener('DOMContentLoaded', function() {
    /**
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getRelatedWebsites') {
      const currentUrl = encodeURIComponent(request.url);

      // Use DuckDuckGo Instant Answer API for related websites
      const apiEndpoint = `https://api.duckduckgo.com/?q=${currentUrl}&format=json`;

      fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
          // Extract related websites from the API response
          const relatedWebsites = extractRelatedWebsites(data);

          // Send the response back to the popup.js
          sendResponse({ relatedWebsites });
        })
        .catch(error => {
          console.error('Error fetching related websites:', error);
          sendResponse({ relatedWebsites: [] }); // Return an empty array in case of an error
        });

      // Indicate that the response will be sent asynchronously
      return true;

    }
  }); **/

  /**chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
    chrome.runtime.sendMessage({ action: 'getRelatedWebsites', url: currentUrl }, function(response) {
      const relatedWebsitesList = document.getElementById('relatedWebsites');
      response.relatedWebsites.forEach(website => {
        const listItem = document.createElement('li');
        listItem.textContent = website;
        relatedWebsitesList.appendChild(listItem);
      });
    });
  }); **/

  document.getElementById('on_button').addEventListener('click', backToIndex);
  document.getElementById('alt_screen').addEventListener('click', changeWindowAlt);
  document.getElementById('rate_page').addEventListener('click', changeWindowRate);

  // Call the function to grab and print websites
  grabAndPrintWebsites();
});

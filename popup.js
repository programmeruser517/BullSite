// // Sample database array
// const database = [
//   ["https://www.nytimes.com", 8.5, 9.5, 9],
//   ["https://www.wsj.com", 8, 9.5, 8.8],
//   ["https://www.washingtonpost.com", 8, 8.59, 8.5],
//   ["https://membership.latimes.com", 7.5, 89, 8.2],
//   ["https://www.reuters.com", 5.5, 99.5, 9]
// ];

// Sample URL to check
// const urlToCheck = "https://www.nytimes.com";

// Function to check if the URL is in the database and update the popup.html

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function () {
    isOn = !isOn;
    updateToggleButton();

    // New code: Check and set variables based on the current URL when the button is clicked
    if (isOn) {
      // Send a message to the content script to get the current tab's URL
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "getTabUrl" }, function(response) {
          const currentUrl = response.url;
          checkAndSetVariables(currentUrl);
        });
      });
    }
  });

  // Initialize the button state
  updateToggleButton();
});

function checkAndSetVariables(url) {
  // Find the index of the URL in the database
  const index = database.findIndex(entry => entry[0] === url);

  // If the URL is found in the database
  if (index !== -1) {
    // Set variables based on the values in the database for that URL
    const safety = database[index][1];
    const accuracy = database[index][2];
    const security = database[index][3];
    const average = (safety + accuracy + security) / 3;

    // Update the popup.html elements with the new values
    document.getElementById('safetyValue').innerText = safety + '/5';
    document.getElementById('accuracyValue').innerText = accuracy + '/5';
    document.getElementById('policiesValue').innerText = security + '/5';
    document.getElementById('ratingValue').innerText = average.toFixed(1) + '/10';
  } else {
    // If the URL is not found in the database
    console.log("URL not found in the database");
  }
}

// what to do when the button is clicked
let isOn = false;


function updateToggleButton() {
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.className = isOn ? 'on' : 'off';
}

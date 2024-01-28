const database = [
  ["https://www.nytimes.com", 8.5, 9.5, 9],
  ["https://www.wsj.com", 8, 99.5, 8.8],
  ["https://www.washingtonpost.com", 8, 8.59, 8.5],
  ["https://membership.latimes.com", 7.5, 89, 8.2],
  ["https://www.reuters.com", 3, 2, 0]
];

const urlToCheck = ("https://www.reuters.com");

var isOn = false;
var index = -1; // Added index initialization

function setColorAndRating() {
  if (index !== -1) {
    // Set variables based on the values in the database for that URL
    const safety = database[index][1];
    const accuracy = database[index][2];
    const security = database[index][3];

    var databaseOverallRating = (safety + accuracy + security) / 3;
    var ratingText = document.getElementById('rating_site_overall_avg_str');

    if (databaseOverallRating >= 8) {
      ratingText.style.color = 'green';
      ratingText.innerHTML = "High Quality " + databaseOverallRating.toFixed(1) + '/10';
    } else if (databaseOverallRating >= 5) {
      ratingText.style.color = 'orange';
      ratingText.innerHTML = "Medium Quality " + databaseOverallRating.toFixed(1) + '/10';
    } else {
      ratingText.style.color = 'red';
      ratingText.innerHTML = "Bad Quality " + databaseOverallRating.toFixed(1) + '/10';
    }
  } else {
    // Set default values if the URL is not in the database
    var safetyRating = 7.5;
    var accuracyRating = 7.5;
    var securityRating = 7.5;
    var ratingText = document.getElementById('rating_site_overall_avg_str');
    ratingText.style.color = 'gray';
    ratingText.innerHTML = "No Rating Available";
  }
}

function loadPageInfo() {
  // Variables will store data computed from the database
  var safetyRating, accuracyRating, securityRating;

  if (index !== -1) {
    // Set variables based on the values in the database for that URL
    safetyRating = database[index][1];
    accuracyRating = database[index][2];
    securityRating = database[index][3];
  } else {
    // Set default values if the URL is not in the database
    safetyRating = 7.5;
    accuracyRating = 7.5;
    securityRating = 7.5;
  }

  document.getElementById('safety_dis').innerHTML = safetyRating.toFixed(1) + '/10';
  document.getElementById('safety_prog_bar').style.width = safetyRating * 10 + '%';
  document.getElementById('accuracy_dis').innerHTML = accuracyRating.toFixed(1) + '/10';
  document.getElementById('accuracy_prog_bar').style.width = accuracyRating * 10 + '%';
  document.getElementById('security_dis').innerHTML = securityRating.toFixed(1) + '/10';
  document.getElementById('security_prog_bar').style.width = securityRating * 10 + '%';
}

//===== Toggle Button
function fadeOutAndChangeText() {
  var button = document.getElementById('on_button');
  button.classList.add('fade-out'); // Apply fade-out class

  setTimeout(function () {
    if (isOn == false) {
      button.innerHTML = '<img src="images/logo_small.png" style="height:30px; width:65px" alt="Logo" /> Active'; // Change button text to show image
      isOn = true;
    } else {
      button.innerHTML = 'Inactive'; // Change button text to show text
      isOn = false;
    }
    button.classList.remove('fade-out'); // Remove fade-out class
  }, 500); // Wait for the fade-out transition to complete (500 milliseconds)
}

function changeWindowAlt() {
  window.location.href = "index_alternative.html";
}

function changeWindowRate() {
  window.location.href = "rate_it.html";
}

document.addEventListener('DOMContentLoaded', function () {
  // Find the index of the current URL in the database
  index = database.findIndex(entry => entry[0] === urlToCheck);
  setColorAndRating();
  loadPageInfo();
  document.getElementById('on_button').addEventListener('click', fadeOutAndChangeText);
  document.getElementById('alt_screen').addEventListener('click', changeWindowAlt);
  document.getElementById('rate_page').addEventListener('click', changeWindowRate);
});

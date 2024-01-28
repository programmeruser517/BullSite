var isOn = false;

function setColorAndRating() {
  var ratingText = document.getElementById('rating_site_overall_avg_str');
  var databaseOverallRating = 9.5; //TODO: Get from database, needs to be hardcoded
  if (databaseOverallRating >= 8) {
    ratingText.style.color = 'green';
    ratingText.innerHTML = "High Quality " + databaseOverallRating + '/10';
  } else if (databaseOverallRating >= 5) {
    ratingText.style.color = 'orange';
    ratingText.innerHTML = "Medium Quality " + databaseOverallRating + '/10';
  } else {
    ratingText.style.color = 'red';
    ratingText.innerHTML = "Bad Quality " + databaseOverallRating + '/10';
  }
}

function loadPageInfo() {
  //variables will store data computed from database
  var safetyRating = 7.5;
  var accuracyRating = 7.5;
  var securityRating = 7.5;

  document.getElementById('safety_dis').innerHTML = safetyRating + '/10';
  document.getElementById('safety_prog_bar').style.width = safetyRating * 10 + '%';
  document.getElementById('accuracy_dis').innerHTML = accuracyRating + '/10';
  document.getElementById('accuracy_prog_bar').style.width = accuracyRating * 10 + '%';
  document.getElementById('security_dis').innerHTML = securityRating + '/10';
  document.getElementById('security_prog_bar').style.width = securityRating * 10 + '%';
}

//===== Toggle Button
function fadeOutAndChangeText() {
  var button = document.getElementById('on_button');
  button.classList.add('fade-out'); // Apply fade-out class
  if (isOn == false) {
    setTimeout(function () {
        button.innerHTML = '<img src="images/logo_small.png" style="height:30px; weight:65px" alt="Logo" /> Active'; // Change button text to show image
    }, 500); // Wait for the fade-out transition to complete (500 milliseconds)
    isOn = true;
  }
  else {
    setTimeout(function () {
        button.innerHTML = 'Inactive'; // Change button text to show text
    }, 500); // Wait for the fade-out transition to complete (500 milliseconds)
    isOn = false;
  }
  
}

function changeWindowAlt() {
  window.location.href = "index_alternative.html";
}

function changeWindowRate() {
  window.location.href = "rate_it.html"
}

document.addEventListener('DOMContentLoaded', function() {
    setColorAndRating();
    loadPageInfo();
    document.getElementById('on_button').addEventListener('click', fadeOutAndChangeText);
    document.getElementById('alt_screen').addEventListener('click', changeWindowAlt);
    document.getElementById('rate_page').addEventListener('click', changeWindowRate);
});
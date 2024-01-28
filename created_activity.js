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

document.addEventListener('DOMContentLoaded', function() {
    setColorAndRating();
    document.getElementById('on_button').addEventListener('click', fadeOutAndChangeText);
});
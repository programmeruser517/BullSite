function displayMentRating() {
    document.getElementById('label1').innerHTML = document.getElementById('mental_wellness').value;
}
function displayApproRating() {
    document.getElementById('label2').innerHTML = document.getElementById('appro').value;
}
function displayFactRating() {
    document.getElementById('label3').innerHTML = document.getElementById('factAcc').value;
}
function displayReleRating() {
    document.getElementById('label4').innerHTML = document.getElementById('rele_vance').value;
}
function displayPerfRating() {
    document.getElementById('label5').innerHTML = document.getElementById('perf_speed').value;
}
function displayTrackRating() {
    document.getElementById('label6').innerHTML = document.getElementById('low_track').value;
}

//===== Toggle Buttons
function backToIndex() {
  window.location.href = "index.html";
}

function changeWindowAlt() {
  window.location.href = "index_alternative.html";
}

function changeWindowRate() {
  window.location.href = "rate_it.html";
}

function formSubmitted() {
    //TODO: send data to database
    //thank user and return to index.html
    alert("Thank you for your feedback! You will now be returned to the main page.");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('return_button').addEventListener('click', backToIndex);
    document.getElementById('submit_button').addEventListener('click', formSubmitted);
    document.getElementById('alt_screen').addEventListener('click', changeWindowAlt);
    document.getElementById('rate_page').addEventListener('click', changeWindowRate);
    document.getElementById('mental_wellness').addEventListener('input', displayMentRating);
    document.getElementById('appro').addEventListener('input', displayApproRating);
    document.getElementById('factAcc').addEventListener('input', displayFactRating);
    document.getElementById('rele_vance').addEventListener('input', displayReleRating);
    document.getElementById('perf_speed').addEventListener('input', displayPerfRating);
    document.getElementById('low_track').addEventListener('input', displayTrackRating);
});
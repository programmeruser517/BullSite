function grabAndPrintWebsites() {
    //TODO: use google search api to get the top 3 websites related to website of current user
    //TODO: grabs and posts associated website ratings from database
    //current impl: hardcoded placeholders for website names and ratings
    var websiteNames = ["www.google.com", "www.facebook.com", "www.youtube.com"];
    var avgWebsiteRatings = [9.5, 8.5, 7.5];
    document.getElementById('option1').innerHTML = websiteNames[0];
    document.getElementById('option1').href = websiteNames[0];
    document.getElementById('opt1Score').innerHTML = ' (' + avgWebsiteRatings[0] + '/10)';
    document.getElementById('opt1Prog').style.width = avgWebsiteRatings[0] * 10 + '%';
    document.getElementById('option2').innerHTML = websiteNames[1]
    document.getElementById('option2').href = websiteNames[1];
    document.getElementById('opt2Score').innerHTML = ' (' + avgWebsiteRatings[1] + '/10)';
    document.getElementById('opt2Prog').style.width = avgWebsiteRatings[1] * 10 + '%';
    document.getElementById('option3').innerHTML = websiteNames[2]
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
  window.location.href = "rate_it.html"
}

document.addEventListener('DOMContentLoaded', function() {
    grabAndPrintWebsites();
    document.getElementById('on_button').addEventListener('click', backToIndex);
    document.getElementById('alt_screen').addEventListener('click', changeWindowAlt);
    document.getElementById('rate_page').addEventListener('click', changeWindowRate);
});
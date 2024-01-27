//what to do when the button is clicked
let isOn = false;
  //creates vaiable to tell if the button is on or not.
  
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function () {
    isOn = !isOn;
    //once the button is clicked, this variable is changed to the opposite of whatever it was before.
    updateToggleButton();
    //Update the button using the function provided below
  });

  // Initialize the button state
  updateToggleButton();
});

function updateToggleButton() {
  const toggleButton = document.getElementById('toggleButton');
  //Element toggleButton can be found in the popup.html file. This file contains the dimensions aswell as the logo PNG for the button.
  toggleButton.className = isOn ? 'on' : 'off';
}
  //This code updates the ID element of the on and off code, making it switch to our logo
  //there might need to be a 
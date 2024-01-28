//what to do when the button is clicked
let isOn = false;

document.addEventListener('DOMContentLoaded', function () {
  // ...
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function () {
    isOn = !isOn;
    updateToggleButton();
    // New code: Send a Hello, World! alert
    if (isOn) {
      alert('Hello, World!');
    }
  });

  // Initialize the button state
  updateToggleButton();
});

function updateToggleButton() {
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.className = isOn ? 'on' : 'off';
}

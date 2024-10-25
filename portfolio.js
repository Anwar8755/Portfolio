// Auto-Type Effect for Name
const autoTypeElement = document.getElementById('auto-type');
const nameToType = "Anwar Ali"; // The full name to be typed
let index = 0;

function autoType() {
    if (index < nameToType.length) {
        autoTypeElement.textContent += nameToType.charAt(index);
        index++;
        setTimeout(autoType, 150); // Adjust typing speed here (150 ms)
    }
}

// Start the auto-type effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Clear the element's text content before starting
    autoTypeElement.textContent = ''; 
    setTimeout(autoType, 500); // Start typing after a slight delay
});

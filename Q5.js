const toggleButton = document.getElementById('toggle-button');
const toggleImage = document.getElementById('toggle-image');
const message = document.getElementById('message');

toggleButton.addEventListener('click', function() {
    if (toggleImage.style.display === 'none') {
        toggleImage.style.display = 'block';
        message.textContent = "Your Image is visible.";
    } else {
        toggleImage.style.display = 'none';
        message.textContent = "Your Image is hidden.";
    }
});

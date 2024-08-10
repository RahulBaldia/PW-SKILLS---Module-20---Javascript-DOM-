document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const modeText = document.getElementById('mode-text');
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'This is Dark Mode';
    } else {
        modeText.textContent = 'This is Light Mode';
    }
});

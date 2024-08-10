document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('profile-picture').src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('profile-picture').src = 'no-image.png';
    }
});

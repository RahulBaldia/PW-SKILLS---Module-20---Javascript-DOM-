function updateClockAndBackground() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds}`;
    let hexColor = `#${hours}${minutes}${seconds}`;

    clockElement.textContent = timeString;
    document.body.style.backgroundColor = hexColor;
}

setInterval(updateClockAndBackground, 1000);
updateClockAndBackground(); // Initial call to set the clock immediately

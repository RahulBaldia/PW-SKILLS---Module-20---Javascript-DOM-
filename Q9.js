const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const statusHeading = document.getElementById('statusHeading');

function updateStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        statusHeading.textContent = "You are logged in.";
    } else {
        statusHeading.textContent = "You are not logged in.";
    }
}

loginBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'true');
    updateStatus();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    updateStatus();
});

// Initial status check
updateStatus();

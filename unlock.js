document.addEventListener('DOMContentLoaded', function () {
    const unlockButton = document.getElementById('unlockButton');
    const downloadButton = document.getElementById('downloadButton');
    const timerMessage = document.getElementById('timerMessage');

    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const bookLink = urlParams.get('link');

    let countdown = 15;

    // Function to start the countdown and unlock the download button
    function startCountdown() {
        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                timerMessage.textContent = `Please wait... ${countdown}s`;
                countdown--;
            } else {
                clearInterval(countdownInterval);
                downloadButton.disabled = false;
                downloadButton.classList.remove('disabled');
                timerMessage.textContent = "Download is now available!";
            }
        }, 1000);
    }

    // Redirect to the ad network and start the countdown
    unlockButton.addEventListener('click', () => {
        // Replace with your ad network URL
        window.open('https://reticencevaliddecoction.com/jpcg5gpy8?key=b08d3b85721d3edd0eea0661b71e99dd', '_blank');
        startCountdown();
    });

    // Enable the download button to redirect to the book link
    downloadButton.addEventListener('click', () => {
        window.location.href = bookLink; // Redirect to the book download link
    });
});

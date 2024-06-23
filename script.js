document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader after the page has fully loaded
    setTimeout(function() {
        document.getElementById('loader-wrapper').style.display = 'none';
    }, 3000); // 3 seconds

    function showTab(tabId) {
        const loader = document.getElementById('loader-wrapper');
        loader.style.display = 'flex'; // Show the loader

        setTimeout(function() {
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            loader.style.display = 'none'; // Hide the loader
        }, 3000); // 3 seconds delay for loading animation
    }

    window.showTab = showTab; // Make the function available globally
});

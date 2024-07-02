function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Save user preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});

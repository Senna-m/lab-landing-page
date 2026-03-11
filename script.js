// Navigate to home page
function goToHome() {
    window.location.href = '/';
}

// Or use this for a specific home page URL
function navigateToHome(url = '/index.html') {
    window.location.href = url;
}

// You can also use this for a link click
document.addEventListener('DOMContentLoaded', function() {
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            goToHome();
        });
    });
});
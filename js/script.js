document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // Code to load more projects (this could be from an API or a hardcoded array for simplicity)
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        fadeInElements.forEach(function(element) {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Check on page load
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links that point to an ID
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate position to scroll to, accounting for the sticky header height
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Scroll smoothly to the target section
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
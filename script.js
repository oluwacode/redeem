document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    navToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });
});


const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('show');
    });
});


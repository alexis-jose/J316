document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.elementor-element-3f1540f');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) { // Show scrolled nav after 100px scroll
            nav.classList.add('nav-scrolled');
            nav.classList.remove('nav-original');
        } else {
            nav.classList.remove('nav-scrolled');
            nav.classList.add('nav-original');
        }

        lastScroll = currentScroll;
    });
});
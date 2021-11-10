// navbar scroll function //

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const offset = window.pageYOffset;

    if (offset < 75) {
        nav.add('scroll')
    }
});
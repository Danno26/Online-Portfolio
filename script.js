// navbar scroll function //
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;

    if (offset < 75) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll')
    }
});

// iFrame function attempted with html and javascript 

//var frame = document.getElementById("iframe");
//frame.onload = function() {
//    frame.style.height = frame.contentWindow.document.body.scrollHeight + 'px';
//    frame.style.width = frame.contentWindow.document.body.scrollWidth + 'px';
//}
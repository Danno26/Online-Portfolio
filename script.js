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

$(document).ready(function() {
    $('.btn').click(function(event) {
        event.preventDefault()
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status').val()


        if (name.length > 3) {
            statusElm.append('<div>Name is valid!</div>')
        } else {
            statusElm.append('< div >Name is not valid!< /div>')
        };

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid!</div>')
        } else {
            statusElm.append('<div>Email is not valid!</div>')
        }

        if (subject.length > 2) {
            statusElm.append('<div>Subject is valid!</div>')
        } else {
            statusElm.append('<div>Subject is not valid!</div>')
        }

        if (message.length > 20) {
            statusElm.append('<div>Message is valid!</div>')
        } else {
            statusElm.append('<div>Message is not valid!</div>')
        }
    })
})
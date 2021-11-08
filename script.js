// navbar scroll function //

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const offset = window.pageYOffset;

    if (offset < 75) {
        nav.add('scroll')
    }
});
/*
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
            statusElm.append('<div> Name is valid! </div>')
        } else {
            statusElm.append('<div> Name is not valid! </div>')
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
})*/

//listen for a submit //
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get Input Values

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, subject, message);

}

//Save Info
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });

    retrieveInfos();
}

//Send Email function 
function sendEmail(name, email, subject, message) {
    Email.send()
}
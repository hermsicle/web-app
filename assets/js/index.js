$(document).ready(() => {
    // console.log('hello world')
})

$('form').submit(function (e) {
    e.preventDefault();
    var name = document.getElementById('inputName'),
        email = document.getElementById('inputEmail'),
        message = document.getElementById('inputMessage')

    if (!name.value || !email.value || !message.value) {
        alert('Please check entries')
    } else {
        $.ajax({
            url: "https://formspree.io/moqlzveo",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
    }
    $(this).get(0).reset()
    alert('Message sent')
})
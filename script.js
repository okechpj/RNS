function sendMail(){
    let param = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_owqnqhi", "template_o0sbzrm", param).then(alert("Email has been sent!!"))
}

function redirect(){
    window.location.href = 'shop.html'
}


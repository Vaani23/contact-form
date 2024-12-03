
function validateForm() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var Location = document.getElementById('Location').value;
    

    if (name.trim() == '') {
        alert('Please enter your name');
        return false;
    }


    if (phone.trim() == '') {
        alert('Please enter your phone number');
        return false;
    }


    if (email.trim() == '') {
        alert('Please enter your email');
        return false;
    }


    if (message.trim() == '') {
        alert('Please enter your message');
        return false;
    }
    if (Location.trim() == '') {
        alert('Please enter your message');
        return false;
    }
   


    
    return true;
}
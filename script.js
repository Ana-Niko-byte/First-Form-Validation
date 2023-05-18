const email = document.getElementById('email');
const error = document.getElementById('emailError');


function validateEmail(){
    if (email.innerHTML != /^[^\s@]+@[^\s@]+\.[^\s@]+$/){
        error.innerHTML = 'You Goofed - Check Formatting';
        return false;
    } else {
        return true;
    }
}
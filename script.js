
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regform');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const inputs = form.querySelectorAll('input,select');
        inputs.forEach(input => input.classList.remove('error'));

        let isValid = true;

        const fname = form.querySelector('input[name="first-name"]');
        const lname = form.querySelector('input[name="last-name"]');
        const email = form.querySelector('input[name="email"]');
        const password = form.querySelector('input[name="password"]');
        const retype = form.querySelector('input[name="retype-password"]');
        const contact = form.querySelector('input[name="contact"]');
        const gender = form.querySelector('#gender');
        const dob = form.querySelector('input[name="dob"]');

        const fields =[fname, lname, email, password, retype, contact, gender, dob];

        fields.forEach(field => {
            if (field.value.trim() === "") {
                field.classList.add('error');
                isValid = false;
            }
        });

        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('error');
            isValid = false;
        }

        if (password.value && password.value.length < 6) { 
            password.classList.add('error');
            isValid = false;
        }       
        
        if (password.value && retype.value && password.value !== retype.value) {
            retype.classList.add('error');
            isValid = false;
        }   

        if (isValid) {
            alert('Registration successful!');
            form.reset();
        }
    });
});

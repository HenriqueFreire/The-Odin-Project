document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordError = document.createElement('p');
    passwordError.style.color = 'red';
    passwordError.style.fontSize = '0.8rem';
    passwordError.textContent = 'Passwords do not match';

    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordInput.classList.add('error');
            confirmPasswordInput.classList.add('error');
            if (!confirmPasswordInput.parentNode.contains(passwordError)) {
                confirmPasswordInput.parentNode.appendChild(passwordError);
            }
            return false;
        } else {
            passwordInput.classList.remove('error');
            confirmPasswordInput.classList.remove('error');
            if (confirmPasswordInput.parentNode.contains(passwordError)) {
                confirmPasswordInput.parentNode.removeChild(passwordError);
            }
            return true;
        }
    }

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        if (!validatePassword()) {
            event.preventDefault();
        }
    });
});

const buttons = document.querySelectorAll('.read-more-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mcontent = button.previousElementSibling; // Get the corresponding content

        if (mcontent.classList.contains('hidden')) {
            mcontent.classList.remove('hidden'); // Show the additional content
            button.textContent = 'Read Less'; // Change button text
        } else {
            mcontent.classList.add('hidden'); // Hide the additional content
            button.textContent = 'Read More'; // Change button text back
        }
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false; // Prevent form submission
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    return true;
}

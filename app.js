document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple demo feedback
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();
    const status = document.getElementById('formStatus');
    if (name && email && message) {
        status.style.color = 'green';
        status.textContent = 'Thank you for your message, ' + name + '! (Demo only.)';
        document.getElementById('contactForm').reset();
    } else {
        status.style.color = 'red';
        status.textContent = 'Please fill in all fields.';
    }
});
// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the message paragraph
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Display a message in the paragraph when the button is clicked
        message.textContent = 'Hello, World!';
    });
});

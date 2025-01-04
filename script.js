// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the message paragraph
    const message = document.getElementById('message');
    // Display a message in the paragraph when the button is clicked
     message.innerHTML = getHtmlBasedOnNumber(1); // Example usage with number 1
});

// Function that returns specific HTML based on a number
function getHtmlBasedOnNumber(number) {
    const numberStr = number.toString();
    let html = '';
    for (let char a of numberStr) {
         html += '<img src="./counter/'+ a +'.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="'+a+'" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
    }
    return html;
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the message paragraph
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Display a message in the paragraph when the button is clicked
        message.innerHTML = getHtmlBasedOnNumber(1); // Example usage with number 1
    });
});

// Function that returns specific HTML based on a number
function getHtmlBasedOnNumber(number) {
    switch (number) {
        case 1:
            return '<img src="https://rule34.xxx/counter/1.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="1" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';';
        case 2:
            return '<img src="https://rule34.xxx/counter/2.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="2" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 3:
            return '<img src="https://rule34.xxx/counter/3.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="3" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 4:
            return '<img src="https://rule34.xxx/counter/4.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="4" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 5:
            return '<img src="https://rule34.xxx/counter/5.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="5" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 6:
            return '<img src="https://rule34.xxx/counter/6.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="6" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 7:
            return '<img src="https://rule34.xxx/counter/7.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="7" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 8:
            return '<img src="https://rule34.xxx/counter/8.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="8" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        case 9:
            return '<img src="https://rule34.xxx/counter/9.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="9" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
        // Add more cases as needed
        default:
            return '<img src="https://rule34.xxx/counter/0.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="0" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">';
    }
}

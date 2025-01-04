
document.addEventListener('DOMContentLoaded', () => {
    let message = document.getElementById('message');
    const days = calculateDaysFromDate("2024-12-02");
    message.innerHTML = getHtmlBasedOnNumber(days); 
});

function getHtmlBasedOnNumber(number) {
    const numberStr = number.toString();
    let html = '';
    for (let char of numberStr) {
         html += `<img src="./counter/${char}.gif" style="border: 0px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="${char}" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">`;
    }
    return html;
}

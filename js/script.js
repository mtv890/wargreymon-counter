
document.addEventListener('DOMContentLoaded', () => {
    let message = document.getElementById('message');
    const days = calculateDaysFromDate("2024-12-02");
    message.innerHTML = getHtmlBasedOnNumber(days); 
});


function calculateDaysFromDate(startDate) {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start); // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
    return diffDays;
}

function getHtmlBasedOnNumber(number) {
    let numberStr = number.toString();
    let html = '';

    for(let i = 0; i < 5 - number.toString().length; i++) {
         numberStr = "0" + numberStr;
    }
    for (let char of numberStr) {
         html += `<img src="./img/counter/${char}.gif" style="border: 0px; width: 4.5%;" alt="${char}" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="">`;
    }
    return html;
}

var modal = document.getElementById("anversaryModal");
var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    setTimeout(function() {
        modal.style.display = "block";
    }, 500); 
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
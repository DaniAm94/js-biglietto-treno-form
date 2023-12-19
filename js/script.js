//Recupero gli elementi HTML

const inputName = document.getElementById('inputName');
const inputKm = document.getElementById('inputKm');
const inputAge = document.getElementById('inputAge');
const button = document.getElementById('button');
const undoButton = document.getElementById('undo-button');
const ticket = document.getElementById('ticket-show');
const outputName = document.getElementById('output-name')
const typeTicket = document.getElementById('type-ticket')
const wagon = document.getElementById('wagon')
const code = document.getElementById('code')
const price = document.getElementById('price')
const alert = document.querySelectorAll('.input-wrong')

let fullPrice = 0;

button.addEventListener('click', function () {
    let isValid = true;
    const name = inputName.value.trim();
    console.log(name);
    const distance = parseInt(inputKm.value);
    console.log(distance);
    const age = inputAge.value;
    console.log(age);

    /* ----- RIPULISCO DA EVENTUALI PRECEDENTI CONTROLLI DI VALIDAZIONE */
    if (inputName.classList.contains('border-wrong')) {
        inputName.classList.remove('border-wrong');
        inputName.classList.add('border-primary');
        inputName.classList.add('border');
        alert[0].classList.add('d-none');
    }
    if (inputKm.classList.contains('border-wrong')) {
        inputKm.classList.remove('border-wrong');
        inputKm.classList.add('border-primary');
        inputKm.classList.add('border');
        alert[1].classList.add('d-none');
    }
    /*------------------------------------------------------------------- */

    /* ---------- Inizio controllo validazione--------- */
    if (inputName.value === '') {
        inputName.classList.add('border-wrong');
        inputName.classList.remove('border-primary');
        inputName.classList.remove('border');
        alert[0].classList.remove('d-none');
        isValid = false;
    }
    if (isNaN(distance)) {
        inputKm.classList.add('border-wrong');
        inputKm.classList.remove('border-primary');
        alert[1].classList.remove('d-none');
        inputKm.classList.remove('border');
        isValid = false;
    }
    else if (distance < 1 || distance > 1000) {
        inputKm.classList.add('border-wrong');
        inputKm.classList.remove('border-primary');
        inputKm.classList.remove('border');
        alert[1].classList.remove('d-none');
        isValid = false;
    }
    /* -------------- Fine controllo validazione------------- */

    if (isValid === true) {

        // Numero random compreso tra 0 e 99.999 per simulare il CAP
        const rCode = Math.floor(Math.random() * 100000);
        console.log('CP code: ' + rCode);

        // Numero random compreso tra 1 e 10 per assegnare la carrozza
        const nWagon = Math.floor((Math.random() * 10) + 1);
        console.log('Wagon number: ' + nWagon);

        let discount = 1;
        fullPrice = 0.21 * distance;
        typeTicket.innerText = 'Biglietto standard';
        console.log('Full price: ' + fullPrice);
        ticket.classList.remove('d-none');
        let finalPrice = fullPrice;
        if (age === 'minorenne') {
            discount = 0.8;
            finalPrice = (finalPrice * discount).toFixed(2) + '€';
            fullPrice = ` <del>${fullPrice.toFixed(2)}€</del>`;
            finalPrice += fullPrice;
            typeTicket.innerText = 'Sconto minorenni -20%';
        }
        else if (age === 'over65') {
            discount = 0.6;
            finalPrice = (finalPrice * discount).toFixed(2) + '€';
            fullPrice = ` <del>${fullPrice.toFixed(2)}€</del>`;
            finalPrice += fullPrice;
            typeTicket.innerText = 'Sconto over 65 -40%';
        } else {
            finalPrice += '€';
        }
        outputName.innerText = name.trim();
        wagon.innerText = nWagon;
        code.innerText = String(rCode).padStart(5, 0);
        price.innerHTML = `<strong>${finalPrice}</strong>`;
    }
});


undoButton.addEventListener('click', function () {
    ticket.classList.add('d-none');
    inputName.value = '';
    inputKm.value = '';
    inputName.focus();

    /* ----- RIPULISCO DA EVENTUALI PRECEDENTI CONTROLLI DI VALIDAZIONE */
    if (inputName.classList.contains('border-wrong')) {
        inputName.classList.remove('border-wrong');
        inputName.classList.add('border-primary');
        inputName.classList.add('border');
        alert[0].classList.add('d-none');
    }
    if (inputKm.classList.contains('border-wrong')) {
        inputKm.classList.remove('border-wrong');
        inputKm.classList.add('border-primary');
        inputKm.classList.add('border');
        alert[1].classList.add('d-none');
    }
    /*------------------------------------------------------------------- */
})
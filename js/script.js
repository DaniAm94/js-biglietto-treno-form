//Recupero gli elementi HTML

const inputKm = document.getElementById('inputKm');
const inputAge = document.getElementById('inputAge');
const button = document.getElementById('button');
const result = document.getElementById('result');

let fullPrice = 0;
let isValid = true;


button.addEventListener('click', function () {
    result.innerText = '';
    const distance = parseInt(inputKm.value);
    console.log(distance);
    const age = parseInt(inputAge.value);
    console.log(age);

    /* ---------- Inizio controllo validazione--------- */
    if (isNaN(distance) || isNaN(age)) {
        alert('Dati inseriti non validi');
        isValid = false;
    }
    else if (distance < 1 || distance > 1000) {
        alert('Valore compreso tra 1 e 1000')
        inputKm.value = '';
        inputKm.focus();
        isValid = false;
        return;
    } else if (0 <= age && age < 11) {
        alert('I minori al di sotto gli 11 anni non pagano il biglietto');
        isValid = false;
        inputAge.value = '';
        inputAge.focus();
        return
    }
    else if (age < 0) {
        alert('Valori negativi non consentiti!')
        isValid = false;
        inputAge.value = '';
        inputAge.focus();
        return
    }
    else if (age > 100) {
        alert('Valori non oltre 100')
        inputAge.value = '';
        inputAge.focus();
        isValid = false;
    }
    /* -------------- Fine controllo validazione------------- */

    if (isValid === true) {
        inputKm.value = '';
        inputAge.value = '';
        fullPrice = 0.21 * distance;
        console.log(fullPrice);
        result.classList.remove('d-none');
        let finalPrice = fullPrice;
        if (age < 18) finalPrice *= 0.8;
        else if (age > 65) finalPrice *= 0.6;
        result.innerHTML = `Il prezzo del biglietto è <strong>${finalPrice.toFixed(2)}€</strong>`;
        inputKm.focus();
    }
});
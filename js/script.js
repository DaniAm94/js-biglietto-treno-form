//Recupero gli elementi HTML

const inputKm = document.getElementById('inputKm');
const inputAge = document.getElementById('inputAge');
const button = document.getElementById('button');
const result = document.getElementById('result');

let fullPrice = 0;


button.addEventListener('click', function () {
    const distance = parseInt(inputKm.value);
    const age = parseInt(inputAge.value);
    inputKm.value = '';
    inputAge.value = '';
    fullPrice = 0.21 * distance;
    result.classList.remove('d-none');
    const finalPrice = fullPrice;
    result.innerHTML = `Il prezzo del biglietto è <strong>${finalPrice}€</strong>`;
    inputKm.focus();
});
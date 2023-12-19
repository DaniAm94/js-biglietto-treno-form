//Recupero gli elementi HTML

const inputKm = document.getElementById('inputKm');
const inputAge = document.getElementById('inputAge');
const button = document.getElementById('button');
const result = document.getElementById('result');

let fullPrice = 0;


button.addEventListener('click', function () {
    const distance = parseInt(inputKm.value);
    console.log(distance);
    const age = parseInt(inputAge.value);
    console.log(age);
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
});
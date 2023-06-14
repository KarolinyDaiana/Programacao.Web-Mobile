let contador = document.getElementById('contador');
let diminuir = document.getElementById('diminuir');
let aumentar = document.getElementById('aumentar');

let valor = 0;

diminuir.addEventListener('click', function() {
    valor--;
    contador.textContent = valor;
} );
aumentar.addEventListener('click', function() {
    valor++;
    contador.textContent = valor;
})
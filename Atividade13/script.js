var changeMaiusculo = document.getElementById('maiusculo');
var changeMinusculo = document.getElementById('minusculo');
var primeiraMaiuscula = document.getElementById('primMaiusculo');
var texto = document.forms.formulario1.elements["texto"]

changeMinusculo.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        texto.value = texto.value.toLowerCase();
    }
})

changeMaiusculo.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        texto.value = texto.value.toUpperCase();
    }
})

primeiraMaiuscula.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        texto.value = texto.value[0].toUpperCase() + texto.value.substr(1);
    }
})
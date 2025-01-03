function calcular(event) {
    /**
     * Esse método impete que o formulário faça 'refresh'
     * assim apagando os dados digitados
     */
    event.preventDefault()

    var peso
    var altura
    var resultado
    var imc

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
    
    imc = peso / (altura * altura)

    resultado = document.getElementById('resultado');
    
    if (imc <= 17) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> <span class="text-danger">Cuidado!</span> Você estás muito abaixo do peso!'
    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> <span class="text-danger">Cuidado!</span> Você estás abaixo do peso!'
    } else if (imc > 18.49 && imc <= 24.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> <span class="text-success">Você está no peso ideal!</span>'
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> <span class="text-danger">Cuidado!</span> Você está muito acima do peso!'
    } else if (imc >= 30) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> <span class="text-danger">Cuidado!</span> Obesidade!'
    }

    // Zerando os valores
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}
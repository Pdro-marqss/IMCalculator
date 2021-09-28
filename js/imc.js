const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // validação
    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1); //Esse toFixed serve para arredondar o valor com muitas casas depois da virgula para 1 casa só, definida pelo numero dentro dos parenteses
                    //peso dividido pela altura ao quadrado = IMC

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2.';
        } else {
            classificacao = 'com obesidade grau 3. Cuidado !!!'
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}` //usando template string para não precisar ficar concatenando um monte de variavel.

    }else {
        resultado.textContent = 'Preencha todos os campos !'
    }

}



calcular.addEventListener('click', imc);
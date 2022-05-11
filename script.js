const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (valorIMC >= 18.5 && valorIMC < 25) {
      classificacao = 'no peso ideal';
    } else classificacao = 'acima do peso';

    resultado.textContent = `${nome}, seu IMC  é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = 'Preencha todos os campos!';
  }
}

calcular.addEventListener('click', imc);

//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() *10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) 
document.addEventListener('keydown', keyDownEnter)

//Funções ou métodos CallBack
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrão clicado dentro de um formulário; não envie um formulário.

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value)) {
    if (Number(inputNumber.value) < 0 || Number(inputNumber.value > 10)) {
      alert ('O valor digitado deve estar entre 0 e 10')
    } 

    if(Number(inputNumber.value) == randomNumber){
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
  } else {
    alert('Informe um valor')
  }

  inputNumber.value = ""
  xAttempts++

}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() *10)
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keyDownEnter (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

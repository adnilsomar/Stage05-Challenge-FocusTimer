import{ buttonsTimer } from './elements.js'


function howLong(){
  let time = prompt('Quanto tempo?')
  if (time === null){

    let result = confirm(`Você não digitou quanto tempo.
    \nSeleccione "Ok" para inserir um novo tempo, ou "Cancelar" para cancelar definitivamente`)
    
    if (result) {

      howLong()

    } else{

      return
    } 
  }
  
    buttonsTimer.minutesDisplay.innerText = time.toString().padStart(2,'0')
  }

let isRunning = false
let tiempo

function timer(){
  
  if (isRunning) return;
  
  isRunning = true;
  buttonsTimer.buttonPlay.disabled = true;

  tiempo = setInterval(() => {
    
  let seconds = Number(buttonsTimer.secondsDisplay.textContent)
  let minutes = Number(buttonsTimer.minutesDisplay.textContent)

  if(seconds<=0 && minutes == 0){
    return
  }
  
  if(seconds<=0){

    seconds = 60
    buttonsTimer.minutesDisplay.textContent = ((minutes - 1)).toString().padStart(2,'0')
  
  }

  buttonsTimer.secondsDisplay.textContent = ((seconds - 1).toString()).padStart(2,'0')
  
}, 1000);

}

function stopTime(){
  clearInterval(tiempo)
  isRunning = false;
  buttonsTimer.buttonPlay.disabled = false;
}

function increase(){
  let newMinutesIncrease = Number(buttonsTimer.minutesDisplay.textContent)
  newMinutesIncrease += 5 
  buttonsTimer.minutesDisplay.textContent= (newMinutesIncrease.toString()).padStart(2,'0')
}

function decrease(){
  let newMinutesDecrease = Number(buttonsTimer.minutesDisplay.textContent)

  newMinutesDecrease -= 5 
  if(newMinutesDecrease < 0){
    newMinutesDecrease = 0
    buttonsTimer.minutesDisplay.textContent= (newMinutesDecrease.toString()).padStart(2,'0')
  }else{
    buttonsTimer.minutesDisplay.textContent= (newMinutesDecrease.toString()).padStart(2,'0')
  }

}

export { howLong, timer, stopTime, increase, decrease}



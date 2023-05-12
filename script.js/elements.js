
const audio ={
  rain: new Audio('./sounds/Chuva.wav'),
  forest: new Audio('./sounds/Floresta.wav'),
  coffeshop: new Audio('./sounds/cafeteria.wav'),
  fireplace: new Audio('./sounds/lareira.wav'),
  
} 

const buttonsCards = {
  rain:{
    buttonCard: document.querySelector('.rain path'),
    buttonCard1: document.querySelector('.rain path:nth-of-type(2)')
  },
  forest:{
    buttonCard: document.querySelector('.forest path'),
    buttonCard1: document.querySelector('.forest path:nth-of-type(2)')
  },
  coffeshop:{
    buttonCard: document.querySelector('.coffeshop path'),
    buttonCard1: document.querySelector('.coffeshop path:nth-of-type(2)')
  },
  fireplace:{
    buttonCard: document.querySelector('.fireplace path'),
    buttonCard1: document.querySelector('.fireplace path:nth-of-type(2)')
  }
}

const buttonsTimer = {

  minutesDisplay: document.querySelector(".minutes"),
  secondsDisplay: document.querySelector(".seconds"),
  buttonPlay: document.querySelector('.play'),
  buttonStop: document.querySelector('.stop'),
  buttonIncrease: document.querySelector('.increase'),
  buttonDecrease: document.querySelector('.decrease')

}

export {audio, 
buttonsCards,
buttonsTimer
}
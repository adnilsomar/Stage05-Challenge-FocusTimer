import {audio, buttonsCards} from './elements.js'


let btnState = false;

function rainSound(){
  controlsButton(audio.rain, buttonsCards.rain)

}

function forestSound(){
  controlsButton(audio.forest, buttonsCards.forest)

}

function coffeshopSound(){
  controlsButton(audio.coffeshop, buttonsCards.coffeshop)
}

function fireplaceSound(){
  controlsButton(audio.fireplace, buttonsCards.fireplace)
}



function controlsButton(audio, {buttonCard, buttonCard1}){

  btnState = !btnState;
  if (btnState) {
    buttonCard.setAttribute('fill', "#2799D0")
    buttonCard1.setAttribute('fill','white')
    audio.play()
    
  }else{
    buttonCard.setAttribute('fill', "#E1E1E6")
    buttonCard1.setAttribute('fill','#323238')
    audio.pause()
  }

}

export {rainSound, forestSound, coffeshopSound, fireplaceSound }




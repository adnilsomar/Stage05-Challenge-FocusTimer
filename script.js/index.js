import {rainSound, forestSound, coffeshopSound, fireplaceSound} from './sounds.js'
import { buttonsCards, buttonsTimer } from './elements.js'
import { howLong, timer, stopTime, increase, decrease} from './timer.js'

  
howLong()

buttonsTimer.buttonPlay.addEventListener('click', timer)
buttonsTimer.buttonStop.addEventListener('click', stopTime)
buttonsTimer.buttonIncrease.addEventListener('click', increase)
buttonsTimer.buttonDecrease.addEventListener('click', decrease)
buttonsCards.rain.buttonCard.addEventListener('click', rainSound)
buttonsCards.rain.buttonCard1.addEventListener('click', rainSound)
buttonsCards.forest.buttonCard.addEventListener('click', forestSound)
buttonsCards.forest.buttonCard1.addEventListener('click', forestSound)
buttonsCards.coffeshop.buttonCard.addEventListener('click', coffeshopSound)
buttonsCards.coffeshop.buttonCard1.addEventListener('click', coffeshopSound)
buttonsCards.fireplace.buttonCard.addEventListener('click', fireplaceSound)
buttonsCards.fireplace.buttonCard1.addEventListener('click', fireplaceSound)









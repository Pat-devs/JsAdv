// drumpad component
// imports:
import { createElement } from "./utils.js"

export function drumPad(sound) {
    // create the element using createElement instead of innerHTML:
    const buttonEl = createElement("button")
    const audioEl = createElement("audio")
    audioEl.src = `sounds/${sound}`

    buttonEl.textContent = sound.toUpperCase()
    // add pointerdown event handler to start the sound
    buttonEl.addEventListener("pointerdown", function() {
        //console.log("clicked " + sound)

        audioEl.play()
    })
    // add pointerup event handler to stop the sound
    buttonEl.addEventListener("pointerup", function() {
        audioEl.pause() // pause the sound
        audioEl.currentTime = 0 // rewind
    })


    // finally add the element to the drumkitcontainer element
    //drumkitContainer.append(buttonEl)
    
    return buttonEl
}

// html elements
const drumkitContainer = document.getElementById("drumkit")

// list of sounds:
const sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav",]

// todo: go from list of sounds and create buttons in the drumkit container
// then also create an audio element for each (linked to proper audio file)

for (const sound of sounds) {

    drumkitContainer.append(drumPad(sound))

}

function drumPad(sound) {
    // create the element using createElement instead of innerHTML:
    const buttonEl = createElement("button")
    const audioEl = createElement("audio")
    audioEl.src = `sounds/${sound}`

    //sound.substring(0,sound.indexOf(".")): samme som:
    const indexOfDot = sound.indexOf(".")
    const soundName = sound.substring(0, indexOfDot) // 

    buttonEl.textContent = soundName.toUpperCase()
    // add pointerdown event handler to start the sound
    buttonEl.addEventListener("pointerdown", function () {
        //console.log("clicked " + sound)

        audioEl.play()
    })
    // add pointerup event handler to stop the sound
    buttonEl.addEventListener("pointerup", function () {
        audioEl.pause() // pause the sound
        audioEl.currentTime = 0 // rewind
    })


    // finally add the element to the drumkitcontainer element
    //drumkitContainer.append(buttonEl)

    return buttonEl
}



function playSound() {
    console.log("Clap!")

    audioEl.play()
}




// utility functions

function createElement(elementType) {
    const element = document.createElement(elementType)
    
    return element
}
// html elements
const drumkitContainer = document.getElementById("drumkit")

// list of sounds:
const sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav",]

// todo: go from list of sounds and create buttons in the drumkit container
// then also create an audio element for each (linked to proper audio file)

console.log("loopin through the sounds array...")
//for (let index = 0; index < sounds.length; index++) {
//    const sound = sounds[index];
//    
///}
for (const sound of sounds) {

    console.log("processing sound with name " + sound)
    
    //drumkitContainer.innerHTML += `<button>${sound}</button>`
    // create the element using createElement instead of innerHTML:
    const buttonEl = createElement("button")
    const audioEl = createElement("audio")
    audioEl.src = `sounds/${sound}`

    console.log("adding audio element with source: `sounds/`" + sound)

    buttonEl.textContent = "click"
    // add event handler
    buttonEl.addEventListener("click", function() {
        //console.log("clicked " + sound)

        audioEl.play()
    })

    // finally add the element to the drumkitcontainer element
    drumkitContainer.append(buttonEl)

}

// function takes type of element as first argument (ie. "div")
function createElement(elementType) {
    const element = document.createElement(elementType)
    
    return element
}







// lets try play audio with JS:
//let audioEl = document.querySelector("audio")
//console.log(audioEl)


let playButton = document.querySelector("button")
// add event handler to the button:
// i html: <button onclick="playSound()">Play</button>
// add an onclick event:
//playButton.onclick = playSound

// add a click event through the addeventlistener method:

playButton.addEventListener("click", playSound)


// play a sound


function playSound() {
    console.log("Clap!")

    audioEl.play()
}
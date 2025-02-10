// html elements
const drumkitContainer = document.getElementById("drumkit")

// lets try play audio with JS:
let audioEl = document.querySelector("audio")
console.log(audioEl)


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
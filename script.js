window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    if(!audio) return // stop the function from running 
    audio.currentTime = 0; // play the audio from beginning
    audio.play()
})
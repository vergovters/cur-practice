document.addEventListener("DOMContentLoaded", ()=> {
    let elem = document.querySelector("#wrapper")

    const sounds = {
        'a': new Audio('./src/sounds/sound1.wav'),
        's': new Audio('./src/sounds/sound2.wav'),
        'd': new Audio('./src/sounds/sound3.wav'),
        'f': new Audio('./src/sounds/sound4.wav'),
        'g': new Audio('./src/sounds/sound5.wav'),
        'h': new Audio('./src/sounds/sound6.wav'),
    };
      
    function generate(obj){
        for(let i=0; i<Object.keys(obj).length; i++){
          let button = document.createElement("div");
          button.classList.add("button")
          button.innerHTML = Object.keys(obj)[i]
          elem.append(button)
        }
    }

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase()
        sounds[key].play();
    });
      
      
    elem.addEventListener('click', function(e) {
        const divKey = e.target.textContent.toLowerCase(); 
        sounds[divKey].play();
    });
        
  
    
      
    generate(sounds)
})
//
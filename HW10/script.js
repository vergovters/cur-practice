document.addEventListener("DOMContentLoaded", ()=> {
    let elem = document.querySelector("#wrapper")

    const sounds = {
        'a': new Audio('/HW10/src/sounds/sound1.mp3'),
        's': new Audio('/HW10/src/sounds/sound2.mp3'),
        'd': new Audio('/HW10/src/sounds/sound3.mp3'),
        'f': new Audio('/HW10/src/sounds/sound4.mp3'),
        'g': new Audio('/HW10/src/sounds/sound5.mp3'),
        'h': new Audio('/HW10/src/sounds/sound6.mp3'),
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
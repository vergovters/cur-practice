document.addEventListener('DOMContentLoaded', function(){
    function generate(){
        let elem = document.querySelector("#blocks");
        elem.innerHTML = "";

        for (let i= 0; i <= 25; i++){
            let block = document.createElement("div");
            block.style.background = `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math. random() * 255)}, 
            ${Math.floor(Math. random() * 255)})`;

            elem.append(block);
        }
    }


    function setGenerate(){
        setInterval(generate, 1000)
    }

    setGenerate();
    
});



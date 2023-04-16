const text = document.querySelector("#text");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");


function* createIdGenerator(){
    let value = 1;
    while(true){
        yield value++;
    }
}

const idGenerator = createIdGenerator();


function* newFontGenerator(fontSize) {
    let fs = fontSize;
    while (true) {
        const changes = yield fs;
        if (changes === "up") {
            fs += 2;
            text.style.fontSize = fs + "px"
        } else if (changes === "down") {
            fs -= 2;
            text.style.fontSize = fs + "px"
        }
    }
}

const fontGenerator = newFontGenerator(14);
fontGenerator.next();

upBtn.addEventListener("click", ()=> {
    fontGenerator.next("up")
})

downBtn.addEventListener("click", ()=> {
    fontGenerator.next("down")
})



// на 1 частину всі персонажі додані!

function genderCharate(user){
    if (user.gender === 'male') {
        return `<i class="fa-solid fa-mars"></i>`
      } else if (user.gender === 'female') {
        return`<i class="fa-solid fa-venus"></i>`
      } else {
        return `<i class="fa-solid fa-gift"></i>`
      }
}

function renderCharacter(user){
    const characterTemplate = `
        <div class="border">
            <img src="./src/characters/${user.name}.jpg" alt="no pic"/>
            <h1>${user.name}</h1>
            <p>${genderCharate(user)}, ${user.birth_year}</p>
            
        </div>
    `;

    document.querySelector("#main").innerHTML += characterTemplate;
}

async function getCharacterInfo(url) {
    const req = await fetch(url);
    const res = await req.json();
  
    renderCharacter(res);
}
  
function renderFilmData(film) {
    const charactersRequests = film.characters.map(getCharacterInfo);
    
    Promise.all(charactersRequests).then((res) => res.forEach(renderCharacter));
}
  
async function getFilmData(filmChapter) {
    const req = await fetch(`https://swapi.dev/api/films/${filmChapter}/`);
    const res = await req.json();
    renderFilmData(res);
}

document.querySelector("#generate").addEventListener("click", function(){
    document.querySelector("#main").innerHTML = ""
    let chapter = document.querySelector(".chapter").value
    if(chapter > 0 && chapter < 7){
       return getFilmData(chapter);
    }
    console.error("Chapter not Found!");
}, false)




function renderPlanet(planet){
    const planetTemplate = `
        <div class="border">
            <img src="./src/planets/${planet.name}.jpg" alt="no pic"/>
            <h1>${planet.name}</h1>
            <p>${planet.terrain}</p>
            
        </div>
    `;

    document.querySelector("#main").innerHTML += planetTemplate;
}


async function getPlanetData(){
    await fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            planets.forEach(planet => renderPlanet(planet));
  });
}

document.querySelector(".planetButton").addEventListener('click', function(){
    document.querySelector("#main").innerHTML = ""
    getPlanetData()
})



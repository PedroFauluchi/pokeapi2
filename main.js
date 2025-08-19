let url ='https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'
let ctn = document.querySelector('.ctn');
fetch(url)
  .then(res => res.json())
  .then(data => {
    for(let pokemon of data.results){
     fetch(pokemon.url)
        .then(res => res.json())
        .then(pokeData => createPokemon(pokeData));
    }
  });

 function createPokemon(pokeData) {
    let name = pokeData.name;
    let sprite = pokeData.sprites.front_default;
    let types = pokeData.types.map(t => t.type.name).join(', ');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let na = document.createElement('h2');
    let p = document.createElement('p');
    img.src = sprite;
    na.textContent = name;
    p.textContent = types;
    div.append(img, na, p);
    div.classList.add('card');
    ctn.append(div);
  }
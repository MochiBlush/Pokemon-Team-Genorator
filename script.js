const button = document.querySelector(".button");

button.addEventListener('click', (e) => {
  e.preventDefault()
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.ceil(Math.random() * 905)
    const nameElem = document.getElementById("name-" + i);
    const pokemonImage = document.getElementById('pokemon-' + i)
    const heightElem = document.getElementById("height-" + i);
    const weightElem = document.getElementById("weight-" + i);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
    .then(response => response.json())
    .then(pokemon => {
      const {
        name,
        height,
        weight,
        sprites
      } = pokemon;
      console.log(name)
      nameElem.innerHTML = name;
      heightElem.innerHTML = height;
      weightElem.innerHTML = weight;
      pokemonImage.setAttribute('src', sprites.front_default);
    })
  }
})

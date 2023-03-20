const nameElem = document.getElementById("name");
const pokemonImage = document.getElementById('pokemon')
const heightElem = document.getElementById("height");
const weightElem = document.getElementById("weight");
const button = document.querySelector(".button");

button.addEventListener('click', (e) => {
  e.preventDefault()
  const randomNumber = Math.ceil(Math.random() * 905)
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
})
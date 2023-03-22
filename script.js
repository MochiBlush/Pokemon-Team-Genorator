const button = document.querySelector(".button");

button.addEventListener('click', (e) => {
  e.preventDefault()
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.ceil(Math.random() * 905)
    const nameElem = document.getElementById("name-" + i);
    const pokemonImage = document.getElementById('pokemon-' + i)
    const typeElem = document.getElementById('type-' + i);
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

      const types = pokemon["types"]
      console.log(types[0])
      const slot_1 = types[0]
      console.log(slot_1["type"])
      const characterType = slot_1["type"]
      console.log(characterType["name"])
      const typeName = characterType["name"]

      console.log(name)
      nameElem.innerHTML = name;
      heightElem.innerHTML = height;
      weightElem.innerHTML = weight;
      pokemonImage.setAttribute('src', sprites.front_default);
      typeElem.innerText = typeName;
    })
  }
})

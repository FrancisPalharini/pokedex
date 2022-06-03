const page =document.querySelector('#pokedex-page')

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response=> {
        return response.json()
    })
    .then (async data=>{
        const box = document.querySelector('#pokemon-box')
        page.innerHTML = ''
      
        for(let i=0; i<data.results.length; i++){
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.textTransform = "capitalize"
            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/'+ data.results[i].name)
            const imagem = await pokemonImage.json()
            box.querySelector('#pokemon-img').src = imagem.sprites.front_default
            const pokemonType = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const type = await pokemonType.json()

            if(type.types.length == 2){
            box.querySelector('#pokemon-type').innerHTML = type.types[0].type.name
            box.querySelector('#pokemon-type').innerHTML += type.types[1].type.name
            } else {
                box.querySelector('#pokemon-type').innerHTML = type.types[0].type.name

            }
            page.innerHTML += box.outerHTML
        }
        page.innerHTML = pokedex.outerHTML
    })


   

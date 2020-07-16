// 
// name
// photo 
// height / weight 
// moves 
// type

let eevee = document.getElementById('eeveeArea')
let umbreon = document.getElementById('umbreonArea')
let flareon = document.getElementById('flareonArea')
let jolteon = document.getElementById('jolteonArea')
let vaporeon = document.getElementById('vaporArea')
let espeon = document.getElementById('espeonArea')
let glaceon = document.getElementById('glaceonArea')
let sylveon = document.getElementById('sylveonArea')
let leafeon = document.getElementById('leafeonArea')

let displayPokemon = (data, area, i) => {
    
    let name = document.createElement('h3')
    let photo = document.createElement('img')
    let header = document.createElement('h6')
    let header2 = document.createElement('h6')
    let abilities = document.createElement('p')
    let weight = document.createElement('p')
    let header3 = document.createElement('h6')
    let moves = document.createElement('p')
    let header4 = document.createElement('h6')
    let type = document.createElement('p')

    name.innerText = data.name;
    photo.src= data.sprites.front_default;
    header.innerText = "Ability:";
    abilities.innerText = data.abilities[1].ability.name;
    header2.innerText ="Weight in Pounds:";
    weight.innerText = data.weight;
    header3.innerText = "Move:"
    moves.innerText = data.moves[i].move.name;
    header4.innerText = "Type:"
    type.innerText = data.types[0].type.name;
    

    area.appendChild(name)
    area.appendChild(photo)
    area.appendChild(header)
    area.appendChild(abilities)
    area.appendChild(header2)
    area.appendChild(weight)
    area.appendChild(header3)
    area.appendChild(moves)
    area.appendChild(header4)
    area.appendChild(type)

}
let getPoke = async (name, area, i) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let data = await response.json()
        console.log(data)
        displayPokemon(data, area, i);
    } catch (e) {
        console.error(e)
    }


} 

getPoke('eevee', eeveeArea, 63);
getPoke('umbreon', umbreonArea, 15);
getPoke('flareon', flareonArea, 4);
getPoke('jolteon', jolteonArea, 13);
getPoke('vaporeon', vaporArea, 5);
getPoke('espeon', espeonArea, 1);
getPoke('glaceon', glaceonArea, 1);
getPoke('sylveon', sylveonArea, 7);
getPoke('leafeon', leafeonArea, 4);

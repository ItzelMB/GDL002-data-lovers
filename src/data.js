//Declaración para mostrar todos los pokémon
const showPokemon = POKEMON.pokemon.map(poke => poke);

/*Prueba para función showPokemon
const showPokemon = (POKEMON) => {
    //let pokeObj = POKEMON.pokemon;
    return POKEMON.pokemon.map(poke => poke);
};
console.log(showPokemon(POKEMON.pokemon));*/


//Función para filtrar tipos de pokémon "puros e impuros"V
const filterPoke = (data, type) => {
    return data.filter((pokemon) => pokemon.type.includes(type));
};
//Función para filtrar tipos de pokémon "puros"
/*const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };*/


//Función para ordenar tipos de pokémon alfabéticamente A-Z
const orderByNameAsc = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameAsc.sort(function(original, order){
    return original.name.localeCompare(order.name);
}); //console.log(orderByNameAsc);


//Función para ordenar tipos de pokémon alfabéticamente Z-A
const orderByNameDes = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameDes.sort(function(original, order){
    return order.name.localeCompare(original.name);
}); //console.log(orderByNameDes);


//Función para calcular estadísticas

 //const calculateWeak = () => {
const filterByName = (data, name) => { //name debe asignarse en main.js para traer nombre de los 3 pokémon
        return data.filter(pokemon => (pokemon.name == name));
    } //console.log(filterByName(POKEMON.pokemon, 'Pikachu'));
    const bringWeak = filterByName.map(team => team.weaknesses);
    const calculateWeak = bringWeak.reduce((obj,item))
//};

window.data = {
    showPokemon,
    filterPoke,
    orderByNameAsc,
    orderByNameDes,
};

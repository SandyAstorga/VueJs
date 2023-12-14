<template>

    <h1 v-if="!pokemon"><img src="https://i.gifer.com/XgZH.gif" alt="loading">Loading...</h1>

    <div v-else>
        <h1>¿Quién es ese Pokémon?</h1>
        <!-- Es buena practica llamarlos asi  
        Componentes <pokemon-picture></pokemon-picture>-->
        <!-- Atributos :pokemon-id -->
        <!-- Atributos :show-pokemon -->
        <PokemonPinture 
            :pokemonId='pokemon.id' 
            :showPokemon='showPokemon'/>
        <PokemonOptions 
            :pokemons='pokemonArr'
            @selection='checkAnswer'
            />
        
        <!-- <div v-if="showAnswer">
            <h2 class="message fade-in">
                {{ message }}
            </h2>
            <button @click='newGame'>
                Nuevo Juego
            </button>
        </div> -->
        <template v-if="showAnswer">
            <h2 class="message fade-in">
                {{ message }}
            </h2>
            <button @click='newGame'>
                Nuevo Juego
            </button>
        </template>
    </div>

</template>

<script>
// Esta es una forma de importar archivos con ../
import PokemonPinture from '../components/PokemonPinture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

// Esta es otra forma de importarlos con @/
import getPokemonOptions from '@/helpers/getPokemonOptions'
console.log(getPokemonOptions())

export default {
    components: { PokemonPinture, PokemonOptions },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            // console.log(this.pokemonArr)

            const rndInt = Math.floor(Math.random() * 4)
            // console.log(rndInt)
            this.pokemon = this.pokemonArr[ rndInt ]    
        },
        checkAnswer(selectedId){
            // console.log('Pokemon Page', pokemonId)
            this.showPokemon = true
            this.showAnswer = true

            if(selectedId === this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name}`
            } else {
                this.message = `Oops, era ${ this.pokemon.name}`
            }
        },
        newGame(){
            // console.log('click')
            this.pokemonArr = [],
            this.pokemon = null,
            this.showPokemon = false,
            this.showAnswer =  false,
            this.mixPokemonArray()
        },
    },
    mounted(){
        // console.log('mounted')
        this.mixPokemonArray()
    }
}
</script>

<style scoped>
    .message{
        text-transform: capitalize;
    }
</style>
<template>
    <div class="pokemon-container">
        <!-- <h3>Pokemon picture</h3> -->
        <img :src="imgSrc" 
        class="pokemon-hidden"
        alt="pokemon">
        
        <img v-if="showPokemon"
        :src="imgSrc" 
        class="fade-in"
        alt="pokemon">
    </div>
</template>

<script>
export default {
    props: {
        pokemonId:{
            type: Number,
            required: true
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

// Para que los estilos solo se apliquen a este componente se usa la palabra scoped si no se coloca el estilo seera de manera global
<style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
        display: flex;
        justify-content: center;
    }
    img {
        height: 200px;
        position: absolute;
        /* width: 100vw;
        margin-left: -50vw; */
        right: calc(50% - 103px);
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .pokemon-hidden {
        filter: brightness(0);
    }
</style>
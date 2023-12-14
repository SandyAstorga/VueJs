<template>
    <div class="options-container">
        <!-- <h3>Pokemon options</h3> -->
        <ul>
            <li class="names" 
                v-for="pokemon in pokemons" 
                :key="pokemon.id"
                @click="$emit('selection', pokemon.id)">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        hola(){
            //this.$emit asi se llamaria al metodo emit(emitir)
        }
    }
}
</script>

<style scoped>
    /* Pokemon Options */
    ul {
        list-style-type: none;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }

    .names{
        text-transform: capitalize;
    }
</style>
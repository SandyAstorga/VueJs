<template>
    <div>
        <h1>Naruto Character: <span>#{{id}}</span></h1>
        <div v-if="character">
            <img :src="character.images[0]" alt="character.name">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            // id: this.$route.params.id
            character: null
        }
    },
    created(){
        // console.log(this.$route)

        // const {id} = this.$route.params
        // console.log(id)
        // this.id = id
        // console.log(this.$attrs)
        this.getCharacterNaruto()
    },
    methods: {
        async getCharacterNaruto(){
            try {
                const character = await fetch(`https://narutodb.xyz/api/character/${this.id}`)
                .then(n => n.json());
                console.log(character)
                this.character = character
            } catch (error) {
                console.log(error)
                this.$router.push('/about')
                console.log('No hay nada que hacer aqui')
            }
        }
    },
    watch: {
        id(){
            console.log(this.id)
            this.getCharacterNaruto()
        }
    }

}
</script>

<style scoped>
    img{
        width: 30%;
    }
</style>
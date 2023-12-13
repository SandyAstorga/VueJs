<template>
    <div>
        <h1>Magic 8-App</h1>
        <img v-if="img" :src="img" alt="">
        <div class="bg-dark"></div>

        <div class="indecision-container">
            <input 
                type="text"
                placeholder="Realiza una pregunta"
                v-model="question"
                
                >
            <p>Recuerda terminar tu pregunta con un signo de interrogación (❓)</p>

            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods:{
        async getAnswer(){

            try {
                this.answer = 'Pensando 🤔...'
                const { answer, image } = await fetch('https://yesno.wtf/api')
                    .then(r => r.json())

                this.answer  = answer === 'yes' ? 'Si!' : 'No!'
                this.img = image

            } catch (error) {
                console.log('IndecisionComponent:', error)
                this.answer = 'No se pudo cargar del API'
                this.img = null
            }

        }
    },
    watch: {
        question( value, oldValue){
            
            this.isValidQuestion = false
            console.log({value})

            if( !value.includes('?') ) return

            this.isValidQuestion = true
            console.log({value})

            this.getAnswer()
        }
    }

}
</script>

<style>
    img, .bg-dark {
        height: 100vh;
        left: 0;
        object-fit: cover;
        position: fixed;
        top: 0;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 300px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    h1, h2 {
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    h2 {
        margin-top: 85px;
    }

</style>
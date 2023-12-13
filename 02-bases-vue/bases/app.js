
const app = Vue.createApp({

    // Options API
    // template: `
    //     <h1> Hola Mundo </h1>
    //     <p> Desde App.js </p>
    //     <p> {{ 1 + 1 }} </p>
    //     <p> {{ [1,2,3,4,5] }} </p>
    //     <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
    // `

    // methods: {},
    // watch: {},
    
    // // Compotition API
    // setup() {}

    data(){
        return{
            author: 'Wide Wilson',
            quote: "I'm Deadpool"
        }
    },
    methods:{
        changeQuote( event ){
            console.log('Hello', event)
            this.author = 'Sandy Astorga'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')

// Expresion de JS
{/* <p> {{ 1 + 1 }} </p> */}

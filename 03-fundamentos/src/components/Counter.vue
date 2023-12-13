<template>
    <div>
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p data-testid="counter">{{ counter }}</p>

        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator( value ){
                return value >= 100
            }
        }
    },
    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        },
        increment(){
            this.counter++
        },
        decrement(){
            this.counter--
        }
    },
    computed:{
        squareCounter(){
            return this.counter * this.counter
        },
        customTitle(){
            return this.title ? this.title : 'Counter'
        }
    }
}
</script>

<style>
    button {
        background-color:darkcyan;
        border-radius: 5px;
        border-style: none;
        color: bisque;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
    }

    button:hover{
        background-color: rgb(99, 226, 184);
    }
</style>

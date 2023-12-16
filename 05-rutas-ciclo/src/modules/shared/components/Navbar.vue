<template>
    <div>
        <!-- <router-link :to="{name: 'home'}">Naruto List</router-link>
        <router-link :to="{name: 'character-id', params: {id: 1}}">Character por id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    data(){
        return{
            links: [
                { to: 'naruto-home', name: 'Characters Naruto'},
                { to: 'character-id', name: 'Por ID', id: 151},
                { to: 'naruto-about', name: 'About'},

                { to: 'dbz-characters', name: 'Characters DBZ'},
                { to: 'dbz-about', name: 'DBZ-About'},
                
                { to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    /* padding: 0 30px; */
    /* margin: 0 10px; */
}

/* div a{
    font-weight: bold;
    color: darkblue;
    margin: 0 10px;
} */

/* a.router-link-exact-active{
    color: rgb(8, 168, 168);
} */
</style>
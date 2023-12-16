<template>
    <div>
        <a  v-if="isExternalLink"   
            target="_blank"
            class="normal-link"
            :href="link.to">{{link.name}}
        </a>

        <router-link
            v-else
            :to="route"
            v-slot="{isActive}"
        >   
            <!-- href, isActive -->
            <!-- {{link.name}} -->
            <!-- :href="href -->
            <a  :class="isActive ? 'isActive': 'normal-link'"
            >
                {{link.name}}
            </a>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        link:{
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        },
        route(){
            return this.link.id === undefined
                    ? {name: this.link.to} 
                    : {name: this.link.to, params: {id: this.link.id}}
        }
    }
}
</script>

<style scoped>
.isActive{
    color: rgb(8, 168, 168);
}
.normal-link{
    color: gray;
}
</style>
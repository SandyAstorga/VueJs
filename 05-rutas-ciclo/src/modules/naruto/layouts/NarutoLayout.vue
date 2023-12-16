<template>
    <div class="naruto-layout">
        <h1>Naruto Layout</h1>
        <!-- 👇 Me permite renderizar las rutas hijas  -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .naruto-layout{
        background-color: tomato;
    }
</style>
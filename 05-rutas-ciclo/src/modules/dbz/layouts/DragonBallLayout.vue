<template>
    <div class="dragonball-layout">
        <h1>DBZ Layout</h1>
        <!-- 👇 Me permite renderizar las rutas hijas  -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .dragonball-layout{
        background-color:darkcyan;
    }
</style>
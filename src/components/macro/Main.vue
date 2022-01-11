<template>
    <main>
        <WorkCulture/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture
    }
}
</script>

<style lang="scss" scoped>

    .debug main {
        height: 1000px;
    }

</style>
<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'
import UpgradeLife from '../section/UpgradeLife.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture,
        UpgradeLife
    }
}
</script>

<style lang="scss" scoped>

    .debug main {
        height: 1800px;
    }

</style>
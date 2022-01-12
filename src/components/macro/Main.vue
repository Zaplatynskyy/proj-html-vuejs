<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
        <Courses/>
        <Hearts/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'
import UpgradeLife from '../section/UpgradeLife.vue'
import Courses from '../section/Courses.vue'
import Hearts from '../section/Hearts.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture,
        UpgradeLife,
        Courses,
        Hearts
    }
}
</script>

<style lang="scss" scoped>

    .debug main {
        height: 3000px;
    }

</style>
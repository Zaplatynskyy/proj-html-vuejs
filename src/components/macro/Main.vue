<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
        <Courses/>
        <Hearts/>
        <Transform/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'
import UpgradeLife from '../section/UpgradeLife.vue'
import Courses from '../section/Courses.vue'
import Hearts from '../section/Hearts.vue'
import Transform from '../section/Transform.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture,
        UpgradeLife,
        Courses,
        Hearts,
        Transform
    }
}
</script>

<style lang="scss" scoped>

    .debug main {
        height: 3500px;
    }

</style>
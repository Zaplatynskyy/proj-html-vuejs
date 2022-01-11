<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
        <Courses/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'
import UpgradeLife from '../section/UpgradeLife.vue'
import Courses from '../section/Courses.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture,
        UpgradeLife,
        Courses
    }
}
</script>

<style lang="scss" scoped>

    .debug main {
        height: 2500px;
    }

</style>
<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
        <Courses/>
        <Hearts/>
        <Transform/>
        <Blogs/>
        <Newsletters/>
    </main>
</template>

<script>
import WorkCulture from '../section/WorkCulture.vue'
import UpgradeLife from '../section/UpgradeLife.vue'
import Courses from '../section/Courses.vue'
import Hearts from '../section/Hearts.vue'
import Transform from '../section/Transform.vue'
import Blogs from '../section/Blogs.vue'
import Newsletters from '../section/Newsletters.vue'

export default {
    name : 'Main',
    
    components : {
        WorkCulture,
        UpgradeLife,
        Courses,
        Hearts,
        Transform,
        Blogs,
        Newsletters
    }
}
</script>

<style lang="scss" scoped>

</style>
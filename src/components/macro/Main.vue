<template>
    <main>
        <WorkCulture/>
        <UpgradeLife/>
        <Courses :courses="courses"/>
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
    },

    data() {
        return {
            courses : [
                {
                    name : 'course writing maxcoach',
                    img : 'course-02-480x298.jpg',
                    price : 40,
                    info : 'Learning to Write as a Professional Author',
                    numberLessons : 20,
                    numberStudents : 50
                },
                {
                    name : 'course python maxcoach',
                    img : 'stock-full-hd-04-480x298.jpg',
                    price : 19,
                    info : 'Open Programming Courses for Everyone: Python',
                    numberLessons : 17,
                    numberStudents : 62
                },
                {
                    name : 'course finance maxcoach',
                    img : 'finance-course-thumbnail-03-480x298.jpg',
                    price : 29,
                    info : 'Personal Finance: Financial Security Thinking & Principles',
                    numberLessons : 0,
                    numberStudents : 97
                },
                {
                    name : 'course listening maxcoach',
                    img : 'stock-full-hd-06-480x298.jpg',
                    price : 26,
                    info : 'Academic Listenind and Note-taking',
                    numberLessons : 14,
                    numberStudents : 69
                },
                {
                    name : 'course jquery maxcoach',
                    img : 'course-featured-image-01-480x298.jpg',
                    price : 39,
                    info : 'Master jQuery in a Short Period of Time',
                    numberLessons : 6,
                    numberStudents : 52
                },
                {
                    name : 'course javascript maxcoach',
                    img : 'stock-full-hd-05-480x298.jpg',
                    price : 59,
                    info : 'Introducing to Javascript for Beginners',
                    numberLessons : 14,
                    numberStudents : 77
                },
                {
                    name : 'course finance maxcoach',
                    img : 'finance-course-thumbnail-04-480x298.jpg',
                    price : 0,
                    info : 'Personal Finance: Financial Security Thinking & Principles',
                    numberLessons : 2,
                    numberStudents : 134
                },
                {
                    name : 'course psychology success maxcoach',
                    img : 'finance-course-thumbnail-02-480x298.jpg',
                    price : 29,
                    info : 'Psychology of Financial Success: Master Personal Finance',
                    numberLessons : 0,
                    numberStudents : 66
                },
                {
                    name : 'course strategies maxcoach',
                    img : 'stock-full-hd-03-480x298.jpg',
                    price : 0,
                    info : 'Customer-centric Info-Tech Strategies',
                    numberLessons : 24,
                    numberStudents : 769
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
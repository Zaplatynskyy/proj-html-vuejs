<template>
    <div class="hero">
        <!-- titolo centrale del jumbotron con il bottone -->
        <div class="text_hero">
            <div class="subtitle">Commerce Business</div>
            <h1 class="title">Distant Mentoring Program</h1>
            <div class="btn btn_white">
                Download free guidebook
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
        
        <!-- serie di icone laterali al jumbotron -->
        <ul class="links_hero">
            <li><a href="#"><i class="fas fa-ruler-combined"></i></a></li>
            <li><a href="#"><i class="far fa-life-ring"></i></a></li>
            <li><a href="#"><i class="fas fa-book"></i></a></li>
            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Hero'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    .hero {
        height: 700px;
        background-image: url('../../assets/img/home-3-hero-bg.jpg');
        background-position: center;
        background-size: cover;
        position: relative;

        // titolo centrale del jumbotron con il bottone
        .text_hero {
            color: white;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .subtitle {
                font-size: 2rem;
                font-weight: bold;
            }

            .title {
                font-size: 3.5rem;
                font-weight: 100;
                margin: 5px 0 30px 0;
            }

            .btn_white {
                color: $lightgreen;
                background-color: #fff;
                border-radius: 5px;
                padding: 20px 30px;
                cursor: pointer;
                display: inline-block;

                &:hover {
                    color: #fff;
                    background-color: $lightgreen;
                }
            }
        }

        // serie di icone laterali al jumbotron
        .links_hero {
            list-style: none;
            background-color: #fff;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            padding: 0 8px;
            display: inline-block;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-100%);

            li {
                margin: 15px 0;

                i {
                    color: $text_color;
                }
            }
        }
    }
</style>
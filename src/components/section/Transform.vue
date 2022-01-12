<template>
    <section id="upgrade_life">
        <div class="container_small section_top clearfix">
            <!-- contenitore immagini della sezione -->
            <div class="section_img left">
                <!-- immagine principale visualizzata sullo sfondo  -->
                <img class="important_img" src="../../assets/img/home-3-team-image.png" alt="transform max coach">

                <!-- immagine piccola (3 righe parallele) posizionata sulla sinistra rispetto all'immagine grande -->
                <img class="small_img" src="../../assets/img/maxcoach-shape-01.png" alt="maxcoach shape">

                <!-- immagine tonda di stelline posizionata a sinistra rispetto all'immagine grande -->
                <img class="cicle_img" src="../../assets/img/maxcoach-shape-05-150x150.png" alt="maxcoach shape circle">

                <!-- immagine quadrata stelline posizionata sotto l'immagine grande -->
                <img class="dots_img" src="../../assets/img/maxcoach-shape-07-100x100.png" alt="maxcoach shape dots">

                <!-- immagine macchia grigia posizionata sulla sinistra dell'immagine grande e leggermente sopra l'img tonda di stelline -->
                <img class="stain_img" src="../../assets/img/svg-0.svg" alt="maxcoach shape stain">
            </div>

            <div class="section_text left">
                <div class="circle"></div>
                <!-- sottotitolo della sezione -->
                <div class="subtitle">everything in <span class="important">maxcoach</span></div>
                <!-- titolo sezione -->
                <h2 class="title">We're Here To <span class="important">Transform</span> You!</h2>
                <!-- testo informazioni sezione -->
                <p>As learnes, people can enjoy great companionship from MaxCoach mentors and educators. We can help you develop and grow at your best.</p>
                <!-- bottone per la guida gratuita -->
                <div class="btn btn_green">Get Free Guide</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'Transform'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    // contenitore immagini della sezione
    .section_img {
        width: 45%;
        position: relative;
        left: 20px;

        // immagine principale visualizzata sullo sfondo
        .important_img {
            width: 90%;
            border-radius: 5px;
            position: relative;
            z-index: 2;
        }

        // immagine piccola posizionata a sinistra rispetto all'immagine grande
        .small_img {
            width: 100px;
            border-radius: 5px;
            position: absolute;
            left: -210px;
            bottom: 15px;
            z-index: 2;
        }

        // immagine cerchio "non chiuso" posizionato in basso a destra rispetto all'immagine grande
        .cicle_img {
            position: absolute;
            top: 100px;
            left: -80px;
        }

        // immagine stelline posizionata sotto l'immagine piccola, leggermente alla sua sinistra
        .dots_img {
            width: 120px;
            position: absolute;
            right: 200px;
            bottom: -70px;
        }

        // immagine macchia grigia posizionata sulla destra dell'immagine grande e leggermente sopra l'img tonda di stelline
        .stain_img {
            width: 120px;
            opacity: .5;
            position: absolute;
            top: 70px;
            left: 0;
        }
    }

    .section_text {
        width: 28%;
        margin-left: 100px;

        .circle {
            width: 60px;
            height: 60px;
            border: 8px solid #ecc5ab;
            border-radius: 100%;
            position: relative;
            right: 40px;
            bottom: 30px;
        }

        // sottotitolo della sezione
        .subtitle {
            font-size: .9rem;
            text-transform: uppercase;
            color: $grey;
            
            // testo evidenziato del sottotitolo
            .important {
                font-weight: bold;
                color: $dark_grey;
            }
        }
        
        // titolo sezione
        .title {
            font-size: 2rem;
            margin: 15px 0;

            // testo evidenziato del titolo
            .important {
                font-weight: 100;
                color: $lightgreen_important;
            }
        }

        // testo informazioni sezione
        p {
            font-size: .8rem;
            line-height: 20px;
            color: $grey;
        }

        // bottone per guida gratuita
        .btn_green {
            font-size: .8rem;
            font-weight: bold;
            color: white;
            background-color: $lightgreen;
            border-radius: 5px;
            margin: 25px 0;
            padding: 15px 45px;
            display: inline-block;
            cursor: pointer;

            &:hover {
                color:  $lightgreen;
                background-color: $lightgrey;
            }
        }
    }
</style>
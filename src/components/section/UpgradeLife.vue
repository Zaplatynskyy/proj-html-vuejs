<template>
    <section id="upgrade_life">
        <div class="container_small section_top clearfix">
            <!-- contenitore immagini della sezione -->
            <div class="section_img left">
                <!-- immagine principale visualizzata sullo sfondo  -->
                <img class="important_img" src="../../assets/img/stock-full-hd-11-670x450.jpg" alt="upgrade skills max coach">

                <!-- immagine piccola (icona youtube) posizionata al centro rispetto all'immagine grande -->
                <img class="small_img" src="../../assets/img/icon-youtube-play.png" alt="icona youtube">

                <!-- immagine tonda di stelline posizionata a sinistra rispetto all'immagine grande -->
                <img class="cicle_img" src="../../assets/img/maxcoach-shape-05-150x150.png" alt="maxcoach shape circle">

                <!-- immagine quadrata stelline posizionata sotto l'immagine grande -->
                <img class="dots_img" src="../../assets/img/maxcoach-shape-07-150x150.png" alt="maxcoach shape dots">

                <!-- immagine macchia grigia posizionata sulla destra dell'immagine grande e leggermente sopra l'img tonda di stelline -->
                <img class="stain_img" src="../../assets/img/svg-0.svg" alt="maxcoach shape stain">
            </div>

            <div class="section_text left">
                <div class="circle"></div>
                <!-- sottotitolo della sezione -->
                <div class="subtitle">how we work</div>
                <!-- titolo sezione -->
                <h2 class="title">Upgrade Your Skills <span class="important">Upgrade Your Life</span></h2>
                <!-- testo informazioni sezione -->
                <p>Opening up more opportunties in front of you to get the ticket to more enjoyable door in life. Getting equipped with new skills for new sets of insights into your career. MaxCoach accompany learners in every stage of learning.</p>
                <!-- contenitore link collegamento per il download -->
                <div class="section_link">
                    <span class="link">
                        <a href="#">
                            Download free guidebook
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'UpgradeLife'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    // contenitore immagini della sezione
    .section_img {
        width: 62%;
        position: relative;

        // immagine principale visualizzata sullo sfondo
        .important_img {
            width: 100%;
            border-radius: 5px;
            position: relative;
            z-index: 1;
        }

        // immagine piccola posizionata in alto a destra rispetto all'immagine grande
        .small_img {
            width: 100px;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        // immagine cerchio "non chiuso" posizionato in basso a destra rispetto all'immagine grande
        .cicle_img {
            position: absolute;
            top: 60px;
            left: -90px;
        }

        // immagine stelline posizionata sotto l'immagine piccola, leggermente alla sua sinistra
        .dots_img {
            position: absolute;
            right: -15px;
            bottom: -80px;
        }

        // immagine macchia grigia posizionata sulla destra dell'immagine grande e leggermente sopra l'img tonda di stelline
        .stain_img {
            width: 150px;
            opacity: .05;
            position: absolute;
            top: -60px;
            left: -50px;
        }
    }

    .section_text {
        width: 28%;
        margin-left: 80px;

        .circle {
            width: 60px;
            height: 60px;
            border: 8px solid #ecc5ab;
            border-radius: 100%;
            position: relative;
            right: 10px;
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

        // contenitore link collegamento per domande e risposte
        .section_link {
            margin-top: 30px;
            font-size: .9rem;
            color: $grey;

            // link collegamento alla guida
            .link {
                border-bottom: 1px solid $lightgrey;

                & a {
                    color: #333;
                }
            }
        }
    }
</style>
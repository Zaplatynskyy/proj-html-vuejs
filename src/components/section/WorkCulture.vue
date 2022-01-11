<template>
    <section id="work_culture">
        <div class="container_small section_top clearfix">
            <div class="section_text left">
                <!-- sottotitolo della sezione -->
                <div class="subtitle">everything in <span class="important">maxcoach</span></div>
                <!-- titolo sezione -->
                <h2 class="title">Learn about our <span class="important">Work Culture</span> at Max Coach</h2>
                <!-- testo informazioni sezione -->
                <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
                <!-- contenitore link collegamento per domande e risposte -->
                <div class="section_link">
                    Have questions?
                    <!-- link collegamento alla guida -->
                    <span class="link">
                        <a href="#">
                            Get Free Guide
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </span>
                </div>
            </div>

            <!--  contenitore cerchio tra i due elementi della sezione -->
            <div class="section_circle left">
                <div class="circle"></div>
            </div>

            <!-- contenitore immagini della sezione -->
            <div class="section_img left">
                <!-- immagine principale visualizzata sullo sfondo  -->
                <img class="important_img" src="../../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="work culture max coach">

                <!-- immagine piccola posizionata in alto a destra rispetto all'immagine grande -->
                <img class="small_img" src="../../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="learn courses max coach">

                <!-- immagine cerchio "non chiuso" posizionato in basso a destra rispetto all'immagine grande -->
                <img class="cicle_img" src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach shape circle">

                <!-- immagine stelline posizionata sotto l'immagine piccola, leggermente alla sua sinistra -->
                <img class="dots_img" src="../../assets/img/maxcoach-shape-07-150x150.png" alt="maxcoach shape dots">
            </div>
        </div>

        <!-- parte inferiore della sezione contenente i rates del sito -->
        <div class="section_bottom">
            <div class="rate learners">
                <div class="num">129+</div>
                <div class="title">enrolled learners</div>
            </div>

            <div class="rate sessions">
                <div class="num">80</div>
                <div class="title">finished sessions</div>
            </div>

            <div class="rate satisfaction">
                <div class="num">4%</div>
                <div class="title">satisfaction rate</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'WorkCulture'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    .section_text {
        width: 30%;
        padding-right: 20px;

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
            font-size: .9rem;
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
                    color: $lightgreen;
                }
            }
        }
    }

    // contenitore cerchio tra i due elementi della sezione
    .section_circle {
        width: 25%;

        .circle {
            width: 60px;
            height: 60px;
            border: 8px solid #ecc5ab;
            border-radius: 100%;
            margin-left: 50px;
        }
    }

    // contenitore immagini della sezione
    .section_img {
        width: 45%;
        position: relative;

        // immagine principale visualizzata sullo sfondo
        .important_img {
            width: 100%;
            position: relative;
            z-index: 1;
        }

        // immagine piccola posizionata in alto a destra rispetto all'immagine grande
        .small_img {
            width: 160px;
            border-radius: 5px;
            position: absolute;
            top: -80px;
            right: -60px;
            z-index: 2;
        }

        // immagine cerchio "non chiuso" posizionato in basso a destra rispetto all'immagine grande
        .cicle_img {
            width: 90px;
            position: absolute;
            bottom: -55px;
            right: 60px;
            z-index: 2;
        }

        // immagine stelline posizionata sotto l'immagine piccola, leggermente alla sua sinistra
        .dots_img {
            position: absolute;
            top: -60px;
            right: 10px;
        }
    }

    // parte inferiore della sezione contenente i rates del sito
    .section_bottom {
        display: flex;
        justify-content: center;
        margin-top: 100px;

        .rate {
            font-weight: bold;
            text-align: center;
            margin: 0 60px;

            .num {
                font-size: 2.5rem;
                color: $lightgreen;
            }

            .title {
                font-size: .8rem;
                text-transform: uppercase;
                color: $dark_grey;
                margin-top: 10px;
            }
        }
    }

</style>
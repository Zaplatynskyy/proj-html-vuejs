<template>
    <section id="hearts">
        <div class="container_small section_top clearfix">
            <div class="section_text left">
                <!-- sottotitolo della sezione -->
                <div class="subtitle">testimonials</div>
                <!-- titolo sezione -->
                <h2 class="title">Why Do People <span class="important">*Hearts*</span> Us?</h2>
                <!-- testo informazioni sezione -->
                <p>Seeking for verbals of our service quality? Find them here. Everything is trasparent and straighforward for your sense of justification.</p>
                <!-- contenitore link collegamento per le recenzioni -->
                <div class="section_link">
                    <!-- link collegamento alle recenzioni -->
                    <span class="link">
                        <a href="#">
                            View all
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </span>
                </div>
            </div>

            <!-- contenitore immagini della sezione -->
            <div class="section_img left">
                <!-- recenzione in evidenza posizionata al di sopra di un'altra recenzione -->
                <div class="primary review">
                    <!-- titolo recenzione -->
                    <div class="title_review">Professional team of specialist and passionate mentors at reach</div>
                    <!-- descrizione recenzione -->
                    <p>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</p>
                    <!-- contenitore dati testimonial -->
                    <div class="user_review">
                        <!-- immagine profilo -->
                        <img src="../../assets/img/testimonial-avata-01.jpg" alt="testimonial Pondor max coach">
                        <!-- nome e professione -->
                        <div class="testimonial">
                            <div class="name">Madley Pondor</div>
                            <div class="specialization">/ IT Specialist</div>
                        </div>
                    </div>
                </div>

                <!-- recenzione in secondo piano, posizionata sotto la recenzione in evidenza -->
                <div class="secondary review">
                    <!-- titolo recenzione -->
                    <div class="title_review">The MaxCoach team works really hard to ensure high level of quality</div>
                    <!-- descrizione recenzione -->
                    <p>I am happy with their arrangement of lessons and subjects. They Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nam porro facere doloribus sunt, quasi praesentium optio natus quaerat illum consequatur quibusdam tenetur iste mollitia dolor veritatis cumque modi nulla?
                    Autem, totam, quod corporis non ad adipisci ipsum quae ab, expedita esse neque aspernatur rerum ipsa. Blanditiis voluptates quos libero rem eum nostrum itaque architecto exercitationem possimus. Enim, excepturi quis.
                    Recusandae consequuntur eius aliquam quidem atque voluptates inventore quod alias fugit exercitationem placeat incidunt ad omnis, fugiat asperiores iure facilis distinctio reprehenderit aliquid consequatur, quae illum. Rerum deserunt est laudantium.</p>
                     <!-- contenitore dati testimonial -->
                    <div class="user_review">
                        <!-- immagine profilo -->
                        <img src="../../assets/img/testimonial-avata-02.jpg" alt="testimonial Hollace max coach">
                        <!-- nome e professione -->
                        <div class="testimonial">
                            <div class="name">Mina Hollace</div>
                            <div class="specialization">/ Freelancer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'Hearts'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    #hearts {
        margin-top: 150px;

        .section_text {
            width: 35%;
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
                font-size: .8rem;
                line-height: 20px;
                color: $grey;
            }

            // contenitore link collegamento per le recenzioni
            .section_link {
                margin-top: 30px;
                font-size: .9rem;
                color: $grey;

                // link collegamento alle recenzioni
                .link {
                    border-bottom: 1px solid $lightgrey;

                    & a {
                        color: #333;
                    }
                }
            }
        }

        // contenitore immagini della sezione
        .section_img {
            width: 55%;
            line-height: 20px;
            margin-left: 80px;
            position: relative;
            
            // struttura generale della recenzione
            .review {
                background-color: #fff;
                box-shadow: 0px 0px 30px -10px #7E8182;
                border-radius: 5px;
                padding: 30px;

                // titolo recenzione
                .title_review {
                    font-size: .9rem;
                    font-weight: bold;
                }

                // descrizione recenzione
                p {
                    font-size: .8rem;
                    color: $grey;
                    margin: 20px 0;
                }
                
                // contenitore dati testimonial
                .user_review {
                    display: flex;
                    align-items: center;
                    margin: 10px 0;

                    // immagine profilo
                    img {
                        width: 60px;
                        border-radius: 50%;
                    }

                    // nome e professione
                    .testimonial {
                        margin: 0 20px;

                        .name {
                            font-size: .8rem;
                            font-weight: bold;
                            text-transform: uppercase;
                            margin: 5px 0;
                        }

                        .specialization {
                            font-size: .7rem;
                            color: $grey;
                        }
                    }
                }
            }

            // recenzione in evidenza posizionata al di sopra di un'altra recenzione
            .primary.review {
                width: 600px;
                margin: 0 auto;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1;
            }

            // recenzione in secondo piano, posizionata sotto la recenzione in evidenza
            .secondary.review {
                width: 500px;
                opacity: .35;
                margin: 0 auto;
                position: relative;
                bottom: 110px;
            }
            
        }
    }
</style>
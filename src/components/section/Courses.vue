<template>
    <section id="courses">
        <div class="container_small">
            <!-- sottotitolo della sezione -->
            <div class="subtitle">join maxcoach at best</div>
            <!-- titolo sezione -->
            <h2 class="title">Latest Online <span class="important">Courses</span></h2>
            
            <!-- riga contenitore card dei corsi -->
            <div class="row">

                <!-- card del corso -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/course-02-480x298.jpg" alt="course maxcoach">
                    </div>

                    <!-- testo della card contenente le info sul corso -->
                    <div class="card_text">
                        <!-- prezzo del corso -->
                        <div class="price">$40.<span>00</span></div>
                        <!-- informazioni sul corso -->
                        <div class="info">Learning to Write as a Professional Author</div>
                        <!-- numero delle lezioni e dei partecipanti -->
                        <div class="numbers">
                            <div class="number lessons">
                                <i class="far fa-file-alt"></i>
                                20 Lessons
                            </div>

                            <div class="number students">
                                <i class="far fa-user"></i>
                                50 Students
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card del corso -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/stock-full-hd-03-480x298.jpg" alt="course strategies maxcoach">
                        <div class="free"><span>free</span></div>
                    </div>

                    <!-- testo della card contenente le info sul corso -->
                    <div class="card_text">
                        <!-- prezzo del corso -->
                        <div class="price">$0.<span>00</span></div>
                        <!-- informazioni sul corso -->
                        <div class="info">Customer-centric Info-Tech Strategies</div>
                        <!-- numero delle lezioni e dei partecipanti -->
                        <div class="numbers">
                            <div class="number lessons">
                                <i class="far fa-file-alt"></i>
                                24 Lessons
                            </div>

                            <div class="number students">
                                <i class="far fa-user"></i>
                                769 Students
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- card del corso -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/stock-full-hd-04-480x298.jpg" alt="course python maxcoach">
                    </div>

                    <!-- testo della card contenente le info sul corso -->
                    <div class="card_text">
                        <!-- prezzo del corso -->
                        <div class="price">$19.<span>00</span></div>
                        <!-- informazioni sul corso -->
                        <div class="info">Open Programming Courses for Everyone: Python</div>
                        <!-- numero delle lezioni e dei partecipanti -->
                        <div class="numbers">
                            <div class="number lessons">
                                <i class="far fa-file-alt"></i>
                                17 Lessons
                            </div>

                            <div class="number students">
                                <i class="far fa-user"></i>
                                62 Students
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- puntini del carousel -->
            <div class="dots">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

            <!-- contenitore link collegamento per tutti i corsi -->
            <div class="section_link">
                Control your personal preference settings to get notified about appropriate courses.
                <!-- link collegamento per tutti i corsi -->
                <span class="link">
                    <a href="#">
                        View all courses
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
                </span>
            </div>
        </div>
        
        <!-- immagine di background della sezione che grazie ad un effetto shadow fa assumere una leggera curvatura alla base della sezione -->
        <img class="img_background" src="../../assets/img/svg-1.svg" alt="wave maxcoach">
    </section>
</template>

<script>
export default {
    name : 'Courses'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    #courses {
        background: rgb(248,248,248);
        background: linear-gradient(0deg, rgba(248,248,248,1) 0%, rgba(255,255,255,1) 100%);
        padding-bottom: 0;
        margin-bottom: 60px;

        // sottotitolo della sezione
        .subtitle {
            font-size: .9rem;
            text-align: center;
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
            text-align: center;
            margin: 15px 0;

            // testo evidenziato del titolo
            .important {
                font-weight: 100;
                color: $lightgreen_important;
            }
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;

            // card del corso
            .card {
                width: 30%;
                background-color: #fff;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;

                &:hover .info {
                    color: $lightgreen;
                }

                // contenitore immagine della card
                .card_img {
                    position: relative;
                    
                    // immagine della card
                    img {
                        width: 100%;
                    }

                    // etichetta free nel caso in cui il corso sia gratuito
                    .free {
                        width: 70px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        background: linear-gradient(230deg, rgba(238,116,85,1) 70%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%),
                                    linear-gradient(310deg, rgba(238,116,85,1) 70%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%);

                        border-top-right-radius: 5px;
                        position: absolute;
                        top: 0;
                        right: 0;

                        span {
                            font-size: .8rem;
                            font-weight: bold;
                            text-transform: uppercase;
                            color: white;
                            margin-left: 10px;
                            display: inline-block;
                        }
                    }
                }

                // testo della card contenente le info sul corso
                .card_text {
                    padding: 10px 30px;

                    // prezzo del corso
                    .price {
                        font-weight: bold;
                        color: $lightgreen;
                        margin: 10px 0;

                        // span contenente i due zeri dopo la virgola
                        span {
                            font-size: .8rem;
                        }
                    }

                    // informazioni sul corso 
                    .info {
                        font-weight: bold;
                        line-height: 25px;
                    }

                    .numbers {
                        color: $grey;
                        margin: 40px 0;

                        // numero delle lezioni e dei partecipanti
                        .number {
                            font-size: .8rem;
                            margin-right: 40px;
                            display: inline-block;
                            
                            i {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }

        // puntini del carousel
        .dots {
            text-align: center;
            line-height: 10px;
            margin: 40px 0;

            .dot {
                width: 5px;
                height: 5px;
                vertical-align: middle;
                background-color: $lightgrey;
                border-radius: 50%;
                margin: 0 10px;
                display: inline-block;

                &.active {
                    width: 8px;
                    height: 8px;
                    background-color: #333;
                }
            }
        }

        // contenitore link collegamento per tutti i corsi
        .section_link {
            width: 500px;
            font-size: .9rem;
            line-height: 25px;
            text-align: center;
            color: $grey;
            margin: auto;

            // link collegamento per tutti i corsi
            .link {
                border-bottom: 1px solid $lightgrey;

                & a {
                    color: #333;
                }
            }
        }

        // immagine di background della sezione che grazie ad un effetto shadow fa assumere una leggera curvatura alla base della sezione
        .img_background {
            width: 100%;
            height: 100px;
            filter: invert(1);
            position: relative;
            top: 5px;
        }
    }
    
</style>
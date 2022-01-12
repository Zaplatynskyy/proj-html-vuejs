<template>
    <section id="courses">
        <div class="container_small">
            <!-- sottotitolo della sezione -->
            <div class="subtitle">read for more joyment</div>
            <!-- titolo sezione -->
            <h2 class="title">Latest From <span class="important">Our Blogs</span></h2>
            
            <!-- riga contenitore card dei blog -->
            <div class="row">

                <!-- card del blog -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/artist-blog-03-480x325.jpeg" alt="blog maxcoach">
                    </div>

                    <!-- testo della card contenente le info sul blog -->
                    <div class="card_text">
                        <!-- tipo di blog -->
                        <div class="type">Artist</div>
                        <!-- informazioni sul blog -->
                        <div class="info">Brush Stokes Energize Trees In Paintings</div>
                        <!-- data creazione blog e visualizzazioni -->
                        <div class="numbers">
                            <div class="number date">
                                <i class="far fa-calendar"></i>
                                May 15, 2020
                            </div>

                            <div class="number views">
                                <i class="far fa-eye"></i>
                                688 views
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card del blog -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/artist-blog-01-480x325.jpg" alt="blog painting maxcoach">
                    </div>

                    <!-- testo della card contenente le info sul blog -->
                    <div class="card_text">
                        <!-- tipo di blog -->
                        <div class="type">Artist</div>
                        <!-- informazioni sul blog -->
                        <div class="info">Pocket-Sized Notebooks Hold Miniature Paintings</div>
                        <!-- data creazione blog e visualizzazioni -->
                        <div class="numbers">
                            <div class="number date">
                                <i class="far fa-calendar"></i>
                                May 15, 2020
                            </div>

                            <div class="number views">
                                <i class="far fa-eye"></i>
                                603 views
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- card del blog -->
                <div class="card">
                    <!-- immagine della card -->
                    <div class="card_img">
                        <img src="../../assets/img/artist-blog-02-480x325.jpg" alt="blog connection maxcoach">
                    </div>

                    <!-- testo della card contenente le info sul blog -->
                    <div class="card_text">
                        <!-- tipo di blog -->
                        <div class="type">Artist</div>
                        <!-- informazioni sul blog -->
                        <div class="info">Connection Between Self-Portraits and Identity</div>
                        <!-- data creazione blog e visualizzazioni -->
                        <div class="numbers">
                            <div class="number date">
                                <i class="far fa-calendar"></i>
                                May 15, 2020
                            </div>

                            <div class="number views">
                                <i class="far fa-eye"></i>
                                397 views
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'Blogs'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    #courses {
        background-color: #f8f8f8;

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
            margin-top: 50px;

            // card del blog
            .card {
                width: 30%;
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
                        border-radius: 5px;
                    }
                }

                // testo della card contenente le info sul blog
                .card_text {

                    // tipo di blog
                    .type {
                        font-size: .8rem;
                        text-transform: uppercase;
                        color: $grey;
                        margin: 15px 0;
                    }

                    // informazioni sul blog 
                    .info {
                        font-weight: bold;
                        line-height: 25px;
                    }

                    .numbers {
                        color: $grey;
                        margin: 20px 0;

                        // data creazione blog e visualizzazioni
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
    }
</style>
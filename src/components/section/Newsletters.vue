<template>
    <section id="newsletters">
        <div class="container_small">
            <div class="content_text">
                <!-- titolo sezione -->
                <h2 class="title">Subscribe <span class="important">Newsletters</span></h2>
                <!-- testo informazioni sezione -->
                <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>

                <!-- contenitore input email e bottone -->
                <div class="input_mail">
                    <input type="email" placeholder="Enter your email">
                    <div class="btn btn_green">Subscribe</div>
                </div>
            </div>

            <div class="circle"></div>
            <!-- immagine cerchio "non chiuso" posizionato in basso a destra nella sezione -->
            <img class="circle_img" src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach shape circle">
            <!-- immagine quadrato di stelline oblique posizionato in basso a destra nella sezione insieme al circle_img -->
            <img class="dots_oblique" src="../../assets/img/maxcoach-shape-09.png" alt="maxcoach shape dots oblique">
        </div>
    </section>
</template>

<script>
export default {
    name : 'Newsletters'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    .container_small {
        position: relative;

        .content_text {
            width: 490px;
            text-align: center;
            margin: 0 auto;

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

            // testo informazioni sezione
            p {
                font-size: .8rem;
                line-height: 20px;
                color: $grey;
            }

            // input email
            input {
                font-size: .8rem;
                width: 320px;
                background-color: #f5f5f5;
                border: none;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                padding: 15px;
            }

            // bottone subscribe
            .btn_green {
                font-size: .8rem;
                font-weight: bold;
                color: white;
                background-color: $lightgreen;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                margin: 25px 0;
                padding: 15px 25px;
                display: inline-block;
                cursor: pointer;

                &:hover {
                    color:  $lightgreen;
                    background-color: $lightgrey;
                }
            }
        }

        .circle {
            width: 60px;
            height: 60px;
            border: 8px solid $lightgreen;
            border-radius: 100%;
            position: relative;
            right: 80px;
            bottom: 120px;
        }

        // immagine cerchio "non chiuso" posizionato in basso a destra nella sezione
        .circle_img {
            width: 100px;
            position: absolute;
            right: 20px;
            bottom: 100px;
        }

        // immagine quadrato di stelline oblique posizionato in basso a destra nella sezione insieme al circle_img
        .dots_oblique {
            width: 180px;
            position: absolute;
            right: 10px;
            bottom: 130px;
        }
    }

</style>
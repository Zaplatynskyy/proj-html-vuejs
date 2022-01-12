<template>
    <footer>
        <div class="container_small">

            <!-- content link footer -->
            <nav class="footer_nav">
                <!-- lista indirizzi e contatti utili -->
                <ul>
                    <li><a href="#">{{contacts.title}}</a></li>
                    <li><a href="#">{{contacts.address}}</a></li>
                    <li><a href="#">{{contacts.tel}}</a></li>
                    <li><a href="#">{{contacts.mail}}</a></li>
                    <li id="social_links">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </li>
                </ul>

                <!-- lista links -->
                <ul v-for="(link, i) in links" :key="i" :class="{contacts : link.title == 'Contacts'}">
                    <li><a href="#">{{link.title}}</a></li>
                    <li v-for="(el, i) in link.elements" :key="i"><a :href="el.link">{{el.name}}</a></li>
                </ul>
            </nav>

            <!-- content copyright -->
            <div class="rights">©2020 Maxcoach. All Rights Reserved</div>
        </div>

        <!-- bottone per tornare all'inizio della pagina -->
        <div class="btn btn_up"><a href="#"><i class="fas fa-long-arrow-alt-up"></i></a></div>
    </footer>
</template>

<script>
export default {
    name : 'Footer',

    props : {
        links : Array,
        contacts : Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    footer {
        background-color: $bgc_footer;
        padding: 50px 0;
        position: relative;

        // content link footer
        .footer_nav {
            display: flex;
            justify-content: space-between;

            ul {
                list-style: none;

                // la prima lista del footer, quella degli indirizzi, ha una crescita maggiore rispetto alle altre
                &:first-of-type {
                    flex-grow: .5;
                }

                // tutti gli li tranne i primi che rappresentano il titolo della lista
                li:not(:first-child) {
                    margin: 10px 0;

                    a {
                        font-size: .7rem;
                        color: $dark_grey;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                // il primo li di ogni lista (tranne gli li dei link social) rappresenta il titolo della lista
                li:first-child:not(#social_links li) {

                    a {
                        font-size: .8rem;
                        font-weight: bold;
                        color: #fff;
                        cursor: auto;
                    }
                }

                // la lista contacts ha il titolo nascosto
                &.contacts {

                    li:first-child {
                        opacity: 0;
                    }
                }

                // la lista dei links social
                #social_links {
                    ul {
                        margin: 15px 0;

                        li {
                            display: inline-block;
                            margin-right: 20px;

                            i {
                                font-size: 1.2rem;
                                color: $dark_grey;
                            }
                        }
                    }
                    
                }
            }
        }
        
        // content copyright
        .rights {
            font-size: .7rem;
            text-align: center;
            color: $dark_grey;
            margin-top: 30px;
        }

        // bottone per tornare all'inizio della pagina
        .btn_up {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: $lightgreen;
            border-radius: 50%;
            cursor: pointer;
            position: absolute;
            right: 40px;
            bottom: 40px;

            a {
                width: 40px;
                height: 40px;
                color: white;
                display: inline-block;
            }
        }
    }
</style>
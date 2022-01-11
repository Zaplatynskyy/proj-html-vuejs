<template>
    <header>
        <div class="container">
            <!-- header menu della pagina -->
            <nav class="header_nav">
                <ul>
                    <li v-for="(el,i) in elNav" :key="i">
                        <a href="#">
                            {{el.element}}    
                            <i class="fas fa-chevron-down"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- header logo della pagina -->
            <div class="header_logo">
                <img src="../../assets/img/dark-logo.png" alt="Max Coach Logo">
            </div>

            <!-- header icone impostazioni user e search della pagina -->
            <div class="header_icon">
                <div class="icon shop">
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                    <span class="num_shop">0</span>
                </div>
                <div class="icon user">
                    <a href="#"><i class="far fa-user-circle"></i></a>
                </div>
                <div class="icon search">
                    <input type="text" placeholder="Search...">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name : 'Header',

    props : {
        elNav : Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

    header {
        width: 100%;
        height: 80px;

        // imposta il colore a tutte le icone dell'header
        i {
            color: $text_color;
        }

        .container {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            // header menu della pagina
            .header_nav {

                ul {
                    li {
                        margin: 0 15px;
                        display: inline-block;

                        a {
                            font-size: .9rem;
                            color: $text_color;
                            display: flex;
                            align-items: center;

                            // icona arrow down di ogni <li>
                            i {
                                font-size: .5rem;
                                margin: 0 5px;
                            }
                        }
                    }
                }
            }

            .header_logo {
                width: 150px;
                position: absolute;            /*per centrare il logo*/
                left: 50%;
                transform: translateX(-50%);

                img {
                    width: 100%;
                }
            }

            .header_icon {

                .icon {
                    font-size: 1.1rem;
                    display: inline-block;
                    margin: 0 15px;

                    &.shop {
                        position: relative;

                        // numerino che indica quanti elementi ci sono nel carrello shop
                        .num_shop {
                            width: 12px;
                            height: 12px;
                            line-height: 9px;
                            text-align: center;
                            font-size: .5rem;
                            color: white;
                            background-color: $lightgreen;
                            border-radius: 50%;
                            padding: 2px;
                            position: absolute;
                            top: -8px;
                            right: -8px;
                        }
                    }

                    &.search {
                        display: inline-block;
                        position: relative;

                        input {
                            font-size: .8rem;
                            width: 250px;
                            background-color: #f5f5f5;
                            border: none;
                            border-radius: 2px;
                            padding: 15px;
                        }

                        i {
                            font-size: .9rem;
                            color: $lightgreen;
                            position: absolute;
                            right: 15px;
                            top: 50%;
                            transform: translateY(-50%);
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
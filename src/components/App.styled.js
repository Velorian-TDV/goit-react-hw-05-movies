import { styled } from 'styled-components';

export const Wrapper = styled.main`
    /* Navigator */
    .navigator{
        width: 100%;
        padding: 10px;
        background-color: black;
    
        .navigator_link{
            display: inline-block;
            min-width: 80px;
            padding: 5px;
            margin-left: 10px;

            color: white;
            border: .1px solid white;
            border-radius: 3px;
            text-align: center;
            text-decoration: none;

            transition: .3s all linear;

            &:nth-child(1){
                margin-left: 0px;
            }

            &.active{
                color: lightcyan;
                border: .1px solid cyan;
            }
        }
    }

    /* Homepage */
    .homepage{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;

        .item {
            margin: 10px 10px 10px 0px;
            padding: 15px;

            border: 1px solid black;
            border-radius: 5px;
            box-shadow: 0px 1px 1px gray;
            text-decoration: none;
            transition: .3s all linear;
            
            .item_image{
                width: 100%;
            }

            .item_title{
                text-align: center;
                color: black;
            }

            &:hover{
                box-shadow: 4px 6px 8px gray;
            }

            /* desctop */
            @media screen and (min-width: 1200px){
                width: calc((100% / 6) - 10px);
            }
            
            /* laptop */
            @media screen and (max-width: 1199px){
                width: calc((100% / 5) - 10px);
            }
            
            /* tablet */
            @media screen and (max-width: 767px){
                width: calc((100% / 3) - 10px);
            }

            /* mobile */
            @media screen and (max-width: 575px){
                width: calc((100% / 1) - 10px);
            }
        }

        .search_form{
            width: 100%;
        }
    }

    /* Movie */
    .movie{
        display: flex;
        flex-wrap: wrap;
        padding: 0px 20px 20px 20px;

        .movie_button_block{
            width: 100%;
            padding: 10px 10px 10px 0px;

            .movie_button{
                display: inline-block;
                min-width: 90px;
                padding: 5px;
                margin-left: 10px;

                transition: .3s all linear;

                color: black;
                text-align: center;
                text-decoration: none;
                border: 1px solid gray;
                border-radius: 5px;
                box-shadow: 1px 1px 1px gray;

                &:nth-child(1) {
                    margin-left: 0px;
                }

                &:hover{
                    box-shadow: 2px 4px 6px gray;
                }
            }
        }

        .poster_block{
            max-width: 20%;

            .poster{
                width: 100%;
            }
        }

        .movie_description{
            width: 80%;
            padding: 0px 0px 20px 20px;
            position: relative;

            .title{
                display: inline-block;
                width: calc(100%);
                padding: 5px;

                text-align: center;
                font-size: 22px;
                font-weight: bold;
                color: white;

                background-color: black;
            }
            
            p{
                margin-top: 10px;

                &:nth-child(1){
                    margin-top: 0px;
                }
            }

            .sub_menu{
                position: absolute;
                bottom: 0;
                padding: 0px;
            }
        }       
        
        /* tablet */
        @media screen and (max-width: 850px){
            .poster_block{
                max-width: 30%;
            }
        
            .movie_description{
                width: 70%;
            }
            .movie_description .sub_menu {
                position: relative;
            }
        }

        /* mobile */
        @media screen and (max-width: 575px){
            .poster_block{
                max-width: 100%;
            }
        
            .movie_description{
                width: 100%;
                min-height: 300px;
                padding: 0px;
            }
        }
    }

    .reviews{
        margin: 0px;
        padding: 0px;
    }

    .revie_block{
        max-width: calc(100% - 10px);
        padding: 10px;
        margin-top: 10px;

        border: 1px solid black;
        border-radius: 5px;

        .revie_name{
            display: inline-block;
            padding: 10px;
            font-weight: bold;
        }

        @media screen and (max-width: 575px){
            max-width: calc(90% - 10px);
            overflow: hidden;
        }
    }

    .actors{
        display: flex;
        flex-wrap: wrap;
        
        .actor_card{
            padding: 10px;
            margin: 10px;

            border: 1px solid black;
            border-radius: 5px;
            box-shadow: 2px 4px 8px gray;

            text-align: center;

            .actor_name{
                font-weight: bold;
            }

            img{
                width: 100%;
            }

            /* desctop */
            @media screen and (min-width: 1200px){
                width: calc((100% / 6) - 20px);
            }
            
            /* laptop */
            @media screen and (max-width: 1199px){
                width: calc((100% / 5) - 20px);
            }
            
            /* tablet */
            @media screen and (max-width: 767px){
                width: calc((100% / 3) - 20px);
            }

            /* mobile */
            @media screen and (max-width: 575px){
                width: calc((100% / 1) - 20px);
            }
        }
    }

    .not_found_page{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100vw;
        height: 90vh;
        overflow: hidden;
    }

`
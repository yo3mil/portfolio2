<template>
    <div class="cookie" v-if="isOpen">
        <div class="cookie__content">
            <slot name="message">
                {{ message }}
            </slot>
        </div>
        <div class="cookie__console">
            <div class="cookie__console-btn accept" @click="accept">
            {{ buttonTextAccept }}
            </div>
            <div class="cookie__console-btn deny" @click="deny">
            {{ buttonTextDeny }}
            </div>
        </div>
    </div>
</template>

<script>
import { cookieConsent } from '@/main.js'
export default {
    name: 'CookieMessage',
    props: {
        buttonTextAccept: {
            type: String,
            default: 'I love cookies! ❤️'
        },
        buttonTextDeny: {
            type: String,
            default: 'No cookies please! 🙅'
        },
        message: {
            type: String,
            default: 'My website uses cookies to analyse the traffic'
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    created() {
        if (!this.getGDPR() === true) {
            this.isOpen = true;
        }
    },
    methods: {
        getGDPR() {
            return localStorage.getItem('GDPR:accepted', true)
        },
        accept() {
            this.isOpen = false;
            localStorage.setItem('GDPR:accepted', true);
            cookieConsent();
            
        },
        deny() {
            this.isOpen = false;
            localStorage.setItem('GDPR:accepted', false);
            cookieConsent();
        }
    }
}
</script>

<style lang="scss">
    .cookie {
        z-index: 1000;
        transform: translateY(-300%);
        animation: slide-top-down .6s forwards;
        animation-delay: 1s;
        font-family: $font-main;
        grid-row: 1 / 3;
        grid-column: 2;
        align-self: start;
        justify-self: center;
        border: 2px solid $color-black;
        width: 40%;
        height: 15%;
        margin-top: .5rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        font-size: 1.8vh;
        box-shadow:  0px 0px 6px;
        // @media (max-width: 1400px) {
        //     height: 80%;
        //     width: 35%;
        // }
        @media (max-width: 1050px) {
            margin-top: 0;
            animation: slide-down-top .6s forwards;
            animation-delay: 1s;
            transform: translateY(300%);
            align-self: end;
            height: 30%;
            width: 50%;
            grid-row: 2 / 4;
            font-size: 3vh;
           box-shadow: -2px 64px 300px 300px rgba(0,0,0,.8);
        }
        @media (max-width: 1050px) {
            grid-row: 2 / 3;
            width: 90%;
            margin-bottom: 2rem;
        }
        @media (max-width: 450px) {
            font-size: 4.5vw;
            
        }
        &__content {
            flex: 0 0 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        &__console {
            flex: 1;
            display: flex;
            
            align-items: center;
            
            
            &-btn {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 0 0 50%;
                height: 100%;
                transition: all .3s;
            }
        }
    }
    .accept {
        background-color: rgba(0, 158, 0, 0.2);
        &:hover {
            background-color: rgba(0, 158, 0, 0.5);
        }
    }
    .deny {
        background-color: rgba(224, 17, 17, 0.2);
        &:hover {
            background-color: rgba(224, 17, 17, 0.5);
        }
    }
</style>
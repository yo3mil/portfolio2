<template>
  <div class="messenger grid_10x10 ">
        
        <form class="messenger__window shadow-all" id="form" action="https://formspree.io/mbjzoazw" method="POST">
            <div v-if="stage >= 1" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Hello ! What is your name ?</h3>
                </div>
            </div>
            <div v-if="stage >= 2" class="cloud">
                <div class="cloud__area">
                    <input class="messenger__window-input" type="text" name="_subject" id="name" v-model="name">
                </div>
            </div>
            <div v-if="stage >= 3" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Hello {{ shortString(name) }}! Now, What would you like to write to Emil?</h3>
                </div>
            </div>
            <div v-if="stage >= 4" class="cloud">
                <div class="cloud__area">
                    <textarea class="messenger__window-input" name="message" type="text" v-model="msg" readonly> readonly></textarea>
                </div>
            </div>
           <div v-if="stage >= 5" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Okey dockey! I will pass it on. Lastly, what is your email address so Emil can reply to your message ?</h3>
                </div>
            </div>
            <div v-if="stage >= 6" class="cloud">
                <div class="cloud__area">
                    <input class="messenger__window-input" type="email" name="_replyto" id="email" v-model="email" readonly>
                </div>
            </div>
            
            <div v-if="stage >= 7" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Great! message sent! He will be in touch soon!</h3>
                </div>
            </div>
               
        </form>
        
        <div class="messenger__console">
            <input v-model="input" v-on:keyup.enter="proceed" class="messenger__console-input shadow-all" type="text" maxlength="120" placeholder="Type here...">
            <i @click="proceed()" class="ion-paper-airplane"></i>
        </div>

        
  </div>
</template>

<script>
    import "@/styles/ionicons.css"
    export default {
        data() {
            return {
                name: "Tonny Smith",
                email:"tony@smith.com",
                msg:"Hello! very nice website <3",
                stage: 1,
                input: ''
            }
        },
        mounted() {
            this.stage = 0;
            setTimeout(()=>{
                this.stage = 1;
            }, 1000)
        },
        methods: {
            proceed() {
                if(this.stage === 1 ){
                    this.name = this.input;
                    this.updateStage()
                }
                if(this.stage === 3) {
                    this.msg = this.input;
                    this.updateStage()
                }
                if(this.stage === 5) {
                    if(this.emailIsValid(this.input)) {
                         this.email = this.input;
                        this.updateStage();
                        this.submit();
                    } else {
                        alert('oh noes email wornggg')
                    }
                   
                }
            },
            updateStage() {
                let self = this;
                this.input = "";
                this.stage++
                setTimeout(()=> {
                    self.stage++
                }, 500)
            },
            submit() {
               //document.getElementById('form').submit();
            },
            emailIsValid (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            },
            shortString(string) {
                 return (string.length > 30) ? string.substr(0, 30) + '(...)' : string;
            }
        }
    }
</script>

<style>

</style>
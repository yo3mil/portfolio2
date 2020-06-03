<template>
  <div class="messenger grid_10x10">
        
        <div class="messenger__window" id="form" method="post" action="">
            <div v-if="stage >= 1" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Hello ! What is your name ?</h3>
                </div>
            </div>
            <div v-if="stage >= 2" class="cloud">
                <div class="cloud__area">
                    <input class="messenger__window-input" type="text" name="name" id="name" :placeholder="name" disabled>
                </div>
            </div>
            <div v-if="stage >= 3" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Hello {{ name }}! Now, What would you like to write to Emil?</h3>
                </div>
            </div>
            <div v-if="stage >= 4" class="cloud">
                <div class="cloud__area">
                    <input class="messenger__window-input" type="text" :placeholder="msg" disabled>
                </div>
            </div>
           <div v-if="stage >= 5" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Okey dockey! I will pass it on. Lastly, what is your email address so Emil can reply to your message ?</h3>
                </div>
            </div>
            <div v-if="stage >= 6" class="cloud">
                <div class="cloud__area">
                    <input class="messenger__window-input" type="text" name="email" id="email" :placeholder="email"  disabled>
                </div>
            </div>
            
            <div v-if="stage >= 7" class="cloud_right">
                <div class="cloud_right__area">
                    <h3>Great! message send. He will be in touch soon!</h3>
                </div>
            </div>
               
        </div>
        
        <div class="messenger__console">
            <input v-model="input" v-on:keyup.enter="proceed" class="messenger__console-input" type="text" placeholder="Type here...">
        </div>
  </div>
</template>

<script>
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
            this.stage = 1;
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
                    this.email = this.input;
                    this.updateStage()
                }
            },
            updateStage() {
                let self = this;
                this.input = "";
                this.stage++
                setTimeout(()=> {
                    self.stage++
                }, 500)
            }
        }
    }
</script>

<style>

</style>
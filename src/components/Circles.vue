<template>
    <div class="">
        <!-- <canvas id="circles"></canvas> -->
    </div>
    
</template>

<script>
let canvas;
export default {
    data(){
        return {
            animate: true,
            c: null,
            numberOfCircles: 250,
            circleArr: [],
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    mounted() {
        // //hooks canvas 
        // canvas = document.querySelector('#circles');
        // canvas.width = this.width;
        // canvas.height = this.height;  
        // // canvas context
        // let ctx = canvas.getContext('2d');
        // this.c = ctx;
        // if(canvas.width > 900) {
        //     this.createCircles();
        //     this.start();
        // }
        
    },
    watch:{
        $route(to, from) {
            if(to == '/') {
                console.log(to)
            } else if (from == '/3d') {
                console.log(from)
            }
            
        }
    }, 
    methods: {
        createCircles() {
            this.circleArr = [];
            for(let i = 0; i < this.numberOfCircles; i++){
                let circle = {}
                circle.radius = Math.random() + .1;
                circle.x = Math.random() * (canvas.width - circle.radius * 4) + circle.radius;
                circle.y = Math.random() * (canvas.width - circle.radius * 4) + circle.radius;
                circle.dx = (Math.random() - .5) * .3;
                circle.dy = (Math.random() - .5) * .3;
                this.circleArr.push(circle);
            }
        },
        draw(circle) {
            this.c.beginPath();
            this.c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
            this.c.strokeStyle = 'black';
            this.c.stroke();
            
        },
        update(circle) {
            if(circle.x + circle.radius > this.width || circle.x - circle.radius < 0) {
                circle.dx = -circle.dx;
            }
            if(circle.y + circle.radius > this.height || circle.y - circle.radius < 0) {
                circle.dy = -circle.dy;
            }
            circle.x+=circle.dx;
            circle.y += circle.dy;
        },
        animateCircles() {
            
            if(this.animate){
                 requestAnimationFrame(this.animateCircles);
        
                this.c.clearRect(0, 0, innerWidth, innerHeight);
                
                for(let i = 0; i < this.circleArr.length; i++) {
                    this.update(this.circleArr[i]);
                    this.draw(this.circleArr[i]);
                }
            } 
           
        },
        start() {
            this.animate = true;
            this.animateCircles();
        },
        stop() {
            this.animate = false;
        }
        
    }
}
</script>

<style lang="scss">
    #canvas {
        z-index: 0;
    }
</style>>
    

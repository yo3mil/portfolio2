import { gsap } from 'gsap'


export default class GradientCursor {

  constructor() {
    this.ball,
    this.pos,
    this.mouse,
    this.speed,
    this.container,
    this.desktop

    this.init()
  }

  init() {
    this.getDom()
    this.initBall()
  }

  getDom() {

    this.ball = document.querySelector(".gradients__three")
    this.container = document.querySelector(".gradients")
    this.desktop = window.width

    
    this.pink = document.querySelector(".gradients__three--pink")
    this.yellow = document.querySelector(".gradients__three--yellow")
  }


  initBall() {
    
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    this.mouse = { x: this.pos.x, y: this.pos.y }
    this.speed = 0.05
    
    this.xSet = gsap.quickSetter(this.ball, "x", "px")
    this.ySet = gsap.quickSetter(this.ball, "y", "px")
    
    window.addEventListener("mousemove", e => {    
        this.mouse.x = e.clientX
        this.mouse.y = e.clientY
    });

    let half = window.innerWidth / 2
    let leftSide = true;
    
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - this.speed, gsap.ticker.deltaRatio()); 
        
        this.pos.x += (this.mouse.x - this.pos.x) * dt;
        this.pos.y += (this.mouse.y - this.pos.y) * dt;

        if (this.pos.x < half && leftSide) {
            leftSide = false
            
            gsap.fromTo(this.yellow, {opacity: 1}, {opacity: 0, duration: 1.5})
            gsap.fromTo(this.pink, {opacity: 0}, {opacity: 1, duration: 1.5})
        }
        if(this.pos.x > half && !leftSide) {
            leftSide = true
            
            gsap.fromTo(this.yellow, {opacity: 0}, {opacity: 1, duration: 1.5})
            gsap.fromTo(this.pink, {opacity: 1}, {opacity: 0, duration: 1.5})
         }

        this.xSet(this.pos.x)
        this.ySet(this.pos.y)
    });
    
  }

  

}
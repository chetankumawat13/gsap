import './style.css'
import gsap from 'gsap'




const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

gsap.set(box1,{
  x:-300
})

gsap.set(box2,{
  y:-400
})

gsap.to(box1,{
  x:'100vw',
  duration:1.5,
  delay:0.5,
  ease:'power1.inOut',
  repeat:-1,
  
})


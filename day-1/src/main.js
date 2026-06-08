
import './style.css'
import gsap from 'gsap'

const box = document.querySelector('.box')

// gsap.to(box,{
//   x:400,
//   duration:0.6,
//   delay:1
// })

gsap.set(box,{
  x:300
})

gsap.from(box,{
  x:800,
  duration:1,
  delay:0.4
})
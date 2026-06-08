import './style.css'
import gsap from 'gsap'

const box = document.querySelector('.box')

gsap.to(box,{
  x:400,
  duration:0.6,
  delay:1
})
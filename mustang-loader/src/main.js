import './style.css'
import gsap from 'gsap'















let count = 0;
const counter = document.querySelector('.count')

const interval = setInterval(() => {
  count++
  if(count === 100){
    clearInterval(interval)
    landingAnimation()
  }
  

  counter.innerHTML = `${count}%`

},20)


function landingAnimation(){
  const tl = gsap.timeline()

  tl.to('.count',{
    opacity:0,
    duration:1.6,
    ease:'expo.out'
  }).to('.overlay',{
    yPercent:100,
    duration:1.2,
    ease:'expo.out'
  },'-=1').from('img',{
    scale:1.15,
    duration:1.3,
    ease:'expo.out'
  },'-=1.1').from('.heading h1',{
    y:100,
    duration:1.2,
    ease:'expo.out'
  },'-=1').from('.subheading h4',{
    y:100,
    duration:0.6,
    ease:'expo.out'
  },'-=0.8')

}
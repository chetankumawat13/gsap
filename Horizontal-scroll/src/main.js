import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const pages = gsap.utils.toArray('.page')

gsap.to('.image-container img',{
    scale:0.36,
    x:-400,
    y:550,
    borderRadius:10,

    scrollTrigger:{
      trigger:'.image-container',
      start:'top 0%',
      end:'top, -100%',
      scrub:1,
    }

})

gsap.to(pages,{
  xPercent:-100 * (pages.length -1),
  scrollTrigger:{
    trigger:'.container',
    pin:true,
    scrub:1,
    start:"top 0%",
    end:'top -100%'
  }
})
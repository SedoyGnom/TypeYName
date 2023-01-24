import React from 'react';
import './BetweenOne.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef  } from 'react';
import { useNavigate } from 'react-router-dom'
// MUI 
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ChevronLeft';

function BetweenOne() {
 
  const navigate = useNavigate()
  const text1 = useRef(null);
  const text2 = useRef(null);
  const mark = useRef(null);
  const arrow = useRef(null);
  
  let count = false;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "none", duration: 2})
  setTimeout(() => {
    const tl = gsap.timeline();
    const tlTest = gsap.timeline();
    const tlMark = gsap.timeline();


    tl.to(text1.current, { xPercent: 100, x: 500, opacity: 1, scale: 3,})
      .to(text1.current, { x: 1000,opacity: 0})
      .to(text2.current, { xPercent: 100, x: 200, opacity: 1,scale: 3 })
      .to(text2.current, { opacity: 1 })
      .to(text1.current, { x: 500})

    tlTest.to(arrow.current, {x: -1200, onComplete: () => console.log('123')})

    tlMark.to(mark.current, { x: 1500})


    ScrollTrigger.create({
      id: "t1",
      animation: tl, 
      // start: "top top",
      trigger: ".container",
      end: "+=4000",
      pin: true,
      scrub: 1,
      // markers: true,
      anticipatePin: 1,
    })

    ScrollTrigger.create({
      id: "t2",
      animation: tlTest, 
      // start: "top top",
      trigger: ".container",
      end: "+=4000",
      pin: true,
      scrub: 1,
      // markers: true,
      anticipatePin: 1,
    })

    ScrollTrigger.create({
      id: "t3",
      animation: tlMark, 
      // start: "top top",
      trigger: ".container",
      end: "+=4000",
      // onLeave: () => console.log('Leave'),
      onUpdate: (self) => {
        console.log(self.progress.toFixed(1));
        if (self.progress.toFixed(1) == 0.7) {
          if(count == false) {
            setTimeout(() => {
              ScrollTrigger.getById("t1").kill(true); // removes child node (react bug)
              navigate('/chapterone/leveltwo')
              console.log('navigate');
            }, 5000);
            count = true

          }
        }
      },
      pin: true,
      scrub: 1,
      // markers: true,
      anticipatePin: 1,
    })

  }, 100);

  function leave() {
    gsap.fromTo(mark.current, {scale: 2}, {scale: 1, duration: 1})
  }
  return (
    <>
    <div className="container" style={{ fontFamily: 'Source Sans Pro, sans-serif'}}>
      <ArrowForwardIosIcon ref={arrow} sx={{ color: "white", fontSize: "50px", position: "absolute", right: "100px"}}/>
      <CircleIcon 
        ref={mark} 
        sx={{ color: "white", position: "absolute", top: "550px" }}
        onClick={leave}
      />

      <div ref={text1} style={{ fontFamily: 'Source Sans Pro, sans-serif' ,color: "white", opacity: 0, width: "300px", position: "absolute", top: "200px"}}>
        В этих воспоминаниях я часто рисую. Детские воспоминания самые радостные – в них я не задумываюсь, не сомневаюсь, не боюсь критики. 

        Меня хвалят и я счастлив, получается ярко и радостно. Более поздние воспоминания болезненные.
      </div>

      <div ref={text2} style={{ color: "white", opacity: 0, width: "300px", position: "absolute", top: "200px"}}>
        Более поздние воспоминания болезненные. У меня не получается то, что я задумал,
        я смотрю на чужие работы и мне кажется, что я никогда не смогу сделать также. 
        Я сминаю бумагу и начинаю заново. И снова заново. И снова заново. И снова заново. … Заново. 
      </div>
    </div>
    </>
   
  );
}

export default BetweenOne;


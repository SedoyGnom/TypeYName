import React from 'react';

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Prologue() {
  const navigate = useNavigate()

  const refBox = useRef(null);
  const placeholder1 = useRef(null);
  const placeholder2 = useRef(null);
  const refSharp = useRef(null)

  let count = false;


  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "none", duration: 2})
  
  setTimeout(() => {

    const boxTL = gsap.timeline();


    boxTL.to(refBox.current, { scale: 8, rotate: 360})
         .to(placeholder1.current, { opacity: 1, scale: 2})
         .to([ refBox.current, placeholder1.current], { x: 1000, opacity: 0})
         .to([ refSharp.current, placeholder2.current], {x: 700, scale: 6,opacity: 1 })
         .to(placeholder1.current, { x: 300, onComplete: () => { return console.log('123')}})
  
    ScrollTrigger.create({
      id: "t1",
      animation: boxTL, 
      // start: "top top",
      // markers: true,
      trigger: ".container",
      onUpdate: self => {
        if(self.progress.toFixed(1) == 0.8) {
        // console.log(self.progress.toFixed(1));
        if (count == false) {
          console.log('123');
          count = true
          setTimeout(() => {
            ScrollTrigger.getById("t1").kill(true)
            navigate('/intro')
          }, 5000);
        }
      }},
      end: "+=4000",
      pin: true,
      scrub: 1,
      // markers: true,
      anticipatePin: 1,
    })
    
  }, 100);

  return (
    <div className="container" style={{ color: "white" }}>
      <Box className="set" ref={refBox} sx={{ fontSize: "50px", position: "absolute", top: "300px", left: "49%"}}/>
      <span className="set" ref={placeholder1} style={{color: "white", position: "absolute", top: "300px", left: "47%", width: "100px", opacity: 0}}>Это целиком и полностью выдуманная история</span>
      <CodeSharpIcon ref={refSharp}sx={{ position: "absolute", fontSize: "260px", top: "360px", left: "9%",opacity: 1}}/>
      <span className="set" ref={placeholder2} style={{ position: "absolute", top: "470px", left: "14%" ,width: "100px", opacity: 0}}>Но все совпадения - не случайны.</span>
    </div>
  );
}

export default Prologue;

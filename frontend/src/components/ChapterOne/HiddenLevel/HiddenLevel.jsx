import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrement, fetchPhrases, deletePhrase } from '../../../storeToolkit/markSlice';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import gsap from "gsap"
import { useNavigate } from 'react-router-dom';


function HiddenLevel() {

  const navigate = useNavigate()
  const [phraseBuff, setPhraseBuff] = useState('');
  
  useEffect(() => {
    dispatch(fetchPhrases(7))
  }, [])

  const circle = useRef(null);
  const placeHolderRef = useRef(null);
  const door = useRef();
  const tarakan1 = useRef();
  const tarakan2 = useRef();
  const tarakan3 = useRef();

  const Mark = useSelector((state) => state.mark);
  const dispatch = useDispatch();

  function dialogue(e) {
    gsap.fromTo([tarakan1.current], { rotate: 90, x: 570, y: 210, opacity: 1 }, { opacity: 0, x: 1400, duration: 3})
    gsap.fromTo([tarakan2.current], { rotate: -90, x: 570, y: 210, opacity: 1 }, { opacity: 0, x: -100, duration: 3})
    gsap.fromTo([tarakan3.current], { rotate: -180, x: 520, y: 220, opacity: 1 }, { opacity: 0, y: 550, duration: 3})



    dispatch(countIncrement())
    if (Mark.count <= Mark.phrase[0].length) {
      
      gsap.fromTo(circle.current, {scale: 2}, {scale: 1, duration: 1})
      setPhraseBuff(Mark.phrase[0][Mark.count])
      
    } else if (Mark.count >= Mark.phrase[0].length) {
      console.log('11111');
      gsap.to(circle.current, {x: 500, y: -500, opacity: 0 ,duration: 3, onComplete:fadeOut})
      
      function fadeOut() {
        gsap.to(door.current, { rotateY: 90})
        dispatch(deletePhrase())
        setTimeout(() => {
          
          navigate('/chapterone/levelthree')
        }, 1000);
      }
    }
    
    console.log(Mark.phrase);
  }

  return (
    <div style={{ color: "white"}}>
      <img ref={tarakan1} style={{ opacity: "0", height: "100px", width: "70px"}} src="../tarakan.png" alt="tarakan"/>
      <img ref={tarakan2} style={{ opacity: "0", height: "100px", width: "70px"}} src="../tarakan.png" alt="tarakan"/>
      <img ref={tarakan3} style={{ opacity: "0", height: "100px", width: "70px"}} src="../tarakan.png" alt="tarakan"/>
      <div>
        <SensorDoorIcon ref={door} style={{ fontSize: "300px" ,width: "fit-content", margin: "auto", position: "absolute", left: "30%" ,top: "5%"}}/>
        <h2 
          className='placeHolder'
          ref={placeHolderRef}
          style={{ fontSize: "40px" ,width: "fit-content", margin: "auto", position: "absolute", width: "1200px",left: "2%" ,top: "49%"}}>
          {phraseBuff}
        </h2> 
      <Brightness1Icon
          style={{ position: "absolute", top: "72%", left: "10%", fontSize: "100px"}}
          ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
          onClick={dialogue}
        />
      </div>
    </div>
  );
}

export default HiddenLevel;

// REACT
import React, { useRef, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Draggable  from 'react-draggable'; 
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { countIncrement, fetchPhrases, deletePhrase } from '../../storeToolkit/markSlice';
// import { fetchSession } from '../../storeToolkit/sessionSlice';

//Animations
import { gsap } from 'gsap';
import "./Intro.css"
import "animate.css"
// MUI 
import Brightness1Icon from '@mui/icons-material/Brightness1';
import AlarmIcon from '@mui/icons-material/AccessAlarm';
import Moon from '@mui/icons-material/Brightness3';
import Sun from '@mui/icons-material/WbSunny';
import CircleOutlined from '@mui/icons-material/CircleOutlined';

function Intro() {
  const session = useSelector((state) => state.session)
  console.log(session);
  const [day, setDay ] = useState(true)
  // const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  const [phraseBuff, setPhraseBuff] = useState('zzzzzz.....');
  
  const Mark = useSelector((state) => state.mark);
  const dispatch = useDispatch();
  
  const circle = useRef(null);
  const circleOutIcon = useRef(null);
  const circleOutIcon1 = useRef(null);
  const circleOutIcon2 = useRef(null);
  const placeHolderRef = useRef(null);
  const alarm = useRef(null);
  const moonIcon = useRef(null);
  const sunIcon = useRef(null);
  

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPhrases(1))
    // dispatch(fetchSession())
  }, [])

  function expand(e) {
    
      console.log(Mark.phrase);
      gsap.fromTo(alarm.current, { scale: 3 },{ scale: 1 });
      gsap.fromTo(circleOutIcon.current, { scale: 2 },{ scale: 1, duration: 1 });
      gsap.fromTo(circleOutIcon1.current, { scale: 5 },{ scale: 1, duration: 1 });
      gsap.fromTo(circleOutIcon2.current, { scale: 10 },{ scale: 1, duration: 1});
      setCount((prev) => prev + 1)
      
      if(count === 2) {
        setDay(false);
        gsap.to(moonIcon.current, {rotation: 360, duration: 1} )
        setTimeout(() => {
          setTimeout(() => {
            gsap.to(sunIcon.current, {rotation:"360", duration: 4, ease: 'none', repeat:-1})
          }, 1000);
          
          setPhraseBuff(Mark.phrase[0][0]);
          
          gsap.to(circle.current, {x: 50, duration: 1})
          gsap.to(placeHolderRef.current, {x: 50, duration: 1})
        }, 1000);
        
      }
  }

  function dialogue() {
    console.log(Mark.count);
    dispatch(countIncrement())
    if (Mark.count <= Mark.phrase[0].length) {
      
      gsap.fromTo(circle.current, {scale: 2}, {scale: 1, duration: 1})
      setPhraseBuff(Mark.phrase[0][Mark.count])

    } else if (Mark.count >= Mark.phrase[0].length) {
        console.log('11111');
        gsap.to(circle.current, {x: 500, opacity: 0,duration: 3, onComplete:fadeOut})

        function fadeOut() {
          dispatch(deletePhrase())
          navigate('/chapterone/levelone')
        }
    }
  }

  return (
    <>
    {
      day 
      ?
      <div className='center'>
      <Draggable>
      <Moon
        ref={moonIcon}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          top: 40,
          left: '75%',
          fontSize: '100px'
          // width: '75%'
        }}
      />
      </Draggable>
      <div>
      <Draggable>
      <AlarmIcon
        style={{ color: "white"}}
        onClick={expand}
        ref={alarm}
        sx={{
          position: 'absolute',
          top: '150px',
          left: '49%'
        }}
        />
      </Draggable>
      </div>
        <h2
          className='placeHolder'
          ref={placeHolderRef}
          style={{ color: "white", fontSize: "20px", width: "fit-content", margin: "auto"}}>
          {phraseBuff}
        </h2>

        <Brightness1Icon
          style={{ color: "white"}}
          // ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
        />


      <CircleOutlined 
        ref={circleOutIcon}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
      <CircleOutlined 
        ref={circleOutIcon1}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
      <CircleOutlined 
        ref={circleOutIcon2}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
        
    </div>
      :
      <div className='center'>
      <Draggable>
        <Sun
          ref={sunIcon}
          style={{ color: "white"}}
          sx={{
            position: 'absolute',
            top: 40,
            left: '75%',
            fontSize: '100px'
            // width: '75%'
          }}
        />
      </Draggable>
        <h2 
          className='placeHolder'
          ref={placeHolderRef}
          style={{ color: "white", fontSize: "20px" ,width: "fit-content", margin: "auto"}}>
          {phraseBuff}
        </h2>

        <Brightness1Icon
          style={{ color: "white"}}
          ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
          onClick={dialogue}
        />
        
    </div>
      
        
    }
    </>
    
  );
}
export default Intro;

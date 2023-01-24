import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import './BetweenTwo.css';

// REDUX 
import { useSelector, useDispatch } from 'react-redux';
import { countIncrement, fetchPhrases, deletePhrase } from '../../../storeToolkit/markSlice';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useRef } from 'react';

function ChapterOne() {

  const el = useRef(null);
  const badgeEl = useRef(null);

  const [ placeholder, setPlaceholder ] = useState();
  const [value, setValue ] = useState();
  const [notify, setNotify ] = useState();

  const Mark = useSelector((state) => state.mark);
  const dispatch = useDispatch();

  // function valueLabelFormat(value) {
  //   return marks.findIndex((mark) => mark.value === value) + 1;
  // }

  useEffect( () => {
    dispatch(fetchPhrases(3))
  }, [])

  useEffect( () => {
    if(value >= 70 && value <= 80 ) {
      console.log(Mark.phrase);
      setNotify(1)
      gsap.to(badgeEl.current, {duration: 1, scale: 5 });
      gsap.to(el.current, {duration: 1,color: 'green'});
      setPlaceholder(`Иногда это не совсем воспоминания, скорее, чувства, самое сильное – желание чего-то искренне желать. Будто каждый день я просыпаюсь и живу свою жизнь, но хотел бы что-то сделать иначе, будто сегодня день, когда я должен пойти другим маршрутом, повернуть в другую сторону, и моя жизнь изменится, станет иной, новой, яркой. 
      Но я не знаю чего желать, что вызывало бы во мне искреннюю страсть, куда мне все-таки повернуть, что мне с собой сделать. 
      Эта мысль проносится в доли секунды, а я иду прямо, стандартно для каждого своего дня, и  мимолетная мысль не оставляет после себя ничего, кроме разочарования в самом себе, собственной трусости и жалости, и я убиваю ее в себе, как надоедливого комара, укус которого продолжает болеть и чесаться.`)

    } else {
      setPlaceholder('')
      gsap.to(badgeEl.current, {duration: 1, scale: 1});
      gsap.to(el.current, {duration: 1,color: 'white'});
      setNotify(0)
    }
  }, [value])


  return (
    <div className='row'>
      <Box sx={{ width: 500 }}>
        <Slider
          style={{ color: "white" }}
          // aria-label="Restricted values"
          defaultValue={20}
          // valueLabelFormat={valueLabelFormat}
          getAriaValueText={setValue}
          step={1}
          valueLabelDisplay="off"
        />
      </Box>
        <Badge ref={badgeEl} badgeContent={notify} style={{ color: "white", position: "absolute", top: "10%"}}>
         <MailIcon ref={el} style={{ color: "white"}}/>
        </Badge>
        <div style={{ color: "white", width: "1000px", fontSize: "30px"}}>
          {placeholder}
        </div>
    </div>
  );
}

export default ChapterOne;

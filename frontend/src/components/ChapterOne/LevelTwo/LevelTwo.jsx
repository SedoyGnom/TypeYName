import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ReactCardFlip from 'react-card-flip';

import { Box, Typography } from '@mui/material';

import '../LevelTwo/LevelTwo.css'

function LevelTwo() {
  const [chapter, setChapter] = useState(false)
  const [isFlipped, setFlipped] = useState(false)

 
  const handleFlip = () => {
    setFlipped((prev) => !prev)
  }

  setTimeout(() => {
    setChapter(true)
  }, 5000);

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  return (

<>

{ chapter ?

        <div className='rowtwo'>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
              <img onClick={handleFlip} className='krik' src='../krik.jpg' alt='krik'/>
            </div>

            <div>
              <img onClick={handleFlip} className='krik' src='../pass.jpg' alt='krik'/>
            </div>
          </ReactCardFlip>

          <Typography variant="h2" style={{
              color: 'white', 
              fontSize: '20px',
              fontFamily: 'Source Sans Pro, sans-serif',
              textAlign: 'center',
              letterSpacing: '5px',
              fontWeight: '1000',
              marginTop: '30px'
              }} gutterBottom component="div">

              "Я переверну сей мир, <br />
              а потом перевяжем души"

          </Typography>

          <Typography variant="h2" style={{
              color: 'black', 
              fontSize: '20px',
              textAlign: 'center',
              letterSpacing: '5px',
              fontWeight: '1000',
              marginTop: '30px'
              }} gutterBottom component="div">

          https://www.make-info.com/hide-data-in-image-steghide/

          </Typography>
        </div>

:

    <animated.div style={styles}>
       <div className='row' style={{margin: 'auto'}}>
          <Box>
            <Typography variant="h2" style={{
                color: 'white', 
                fontSize: '55px',
                fontFamily: 'Source Sans Pro, sans-serif',
                textAlign: 'center',
                letterSpacing: '5px',
                fontWeight: '1000',
                marginTop: '400px'
                }} gutterBottom component="div">

              <br />
              Страх

            </Typography>
          </Box>
        </div>
    </animated.div>
}

</>
  );
}

export default LevelTwo;

import React, { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { fetchSession, sessionAdd } from '../../storeToolkit/sessionSlice';
import Draggable  from 'react-draggable'; 

import '../register/Home.css';
import 'animate.css';

function Home() {
  const [username, setUsername] = useState('')
  const [userpass, setUserpass] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fade = useRef()

  const handleInputOne = (event) => {
    setUsername(event.target.value)
  }

  const handleInputTwo = (event) => {
    setUserpass(event.target.value)     
  }

  useEffect(() => {
    dispatch(fetchSession())
  
  }, [dispatch])

  const goFetch = async () => {
    if(username && userpass) {
     const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: username,
          password: userpass
        }),
      })

      const awaitSession = await response.json()
      dispatch(sessionAdd(awaitSession))

      fade.current.className = 'row animate__fadeOut animate__delay-3s'

      setTimeout(() => {
          navigate('/prologue')
      }, 3000);
    }
  }

  return (

    <div ref={fade} className='row animate__fadeIn animate__delay-3s' style={{margin: 'auto'}}>

      <Draggable>
        <img className='tree' src='../tree.jpg' alt='tree'/>
      </Draggable>

      <Draggable>
        <Box>
          <Typography variant="h2" style={{
              color: 'white', 
              fontSize: '100px',
              fontFamily: 'Source Sans Pro, sans-serif',
              textAlign: 'center',
              letterSpacing: '30px',
              fontWeight: '1000',
              }} gutterBottom component="div">

            TYPE YOUR NAME

          </Typography>
        </Box>
      </Draggable>

      <Draggable>
        <input 
      onClick={goFetch}
      type="button" 
      className='input' 
      value={'TAP ME'}
      />
      </Draggable>

      <Draggable>
        <input 
      onChange={handleInputOne}
      className='inputone' 
      type="text" 
      placeholder='NAME'
      />
      </Draggable>

      <Draggable>
        <input 
      onChange={handleInputTwo}
      className='inputone' 
      type="text" 
      placeholder='PASSWORD'
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>
  
      <Draggable>
        <input 
      className='inputone' 
      type="password" 
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="password" 
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="password" 
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="password" 
      readOnly="readonly"
      />
      </Draggable>

    </div>
  );
}

export default Home;

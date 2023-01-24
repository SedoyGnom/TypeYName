import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../../storeToolkit/sessionSlice';


// import store from '../../store';
import Home from '../register/Home.jsx';
import Prologue from '../ChapterOne/Prologue/Prologue.jsx';
import LevelOne from '../ChapterOne/LevelOne/LevelOne.jsx';
import BetweenTwo from '../ChapterOne/BetweenTwo/BetweenTwo.jsx';
import LevelThree from '../ChapterOne/LevelThree/LevelThree.jsx';
import Intro from '../intro/Intro';
import BetweenOne from '../ChapterOne/BetweenOne/BetweenOne.jsx';
import LevelTwo from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import HiddenLevel from '../ChapterOne/HiddenLevel/HiddenLevel.jsx';
import Load from '../ChapterOne/load/Load';
import LevelFour from '../ChapterOne/LevelFour/LevelFour.jsx';

function App() {
  const dispatch = useDispatch()
  const session = useSelector((state) => state.session)
  const navigate = useNavigate()
  const location = useLocation();


  useEffect(() => {
    dispatch(fetchSession())
  
  }, [dispatch])


  if (!session.session) return <div className='App'><Load/></div>;
  
  if (session.session && !('user' in session.session) && location.pathname !== '/') {
    navigate('/')
  }

  return (

      <div className='App'>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prologue" element={<Prologue/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/chapterone/levelone" element={<LevelOne/>}/>
          <Route path="/chapterone/betweenone" element={<BetweenOne/>}/>
          <Route path="/chapterone/leveltwo" element={<LevelTwo/>}/>
          <Route path="/chapterone/hiddenlevel" element={<HiddenLevel/>}/>
          <Route path="/chapterone/betweentwo" element={<BetweenTwo/>}/>
          <Route path="/chapterone/levelthree" element={<LevelThree/>}/>
          <Route path="/chapterone/levelfour" element={<LevelFour/>}/>
        </Routes>

      </div>
  );
}

export default App;

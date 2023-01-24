import React, { useRef } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import gsap from "gsap"
import { useSelector } from 'react-redux';

function Load() {
  const session = useSelector((state) => state.session)
  console.log(session.redirect);

  const refEye = useRef()

  gsap.to(refEye.current, { scale: 10})

  return (
    <div style={{ color: "white"}}>
      <RemoveRedEyeIcon ref={refEye} sx={{ position: "absolute",top: "49%", left: "49%"}}/>
    </div>
  );
}

export default Load;

import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { gsap } from "gsap";

import './LevelThree.css';

let duration = 7

function LevelThree() {

  const {register, handleSubmit} = useForm()
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate()

 const letsMove = () =>{
    gsap.set(".box", {
      x: (i) => i * (-570) 
    });

    gsap.to(".box", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1,
      onComplete: () => {setHidden(true)}
    });

    gsap.set(".boxA", {
      x: (i) => i * (570)
    });

    gsap.to(".boxA", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxB", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxB", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxC", {
      x: (i) => i * (570)
    });

    gsap.to(".boxC", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxD", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxD", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxE", {
      x: (i) => i * (570)
    });

    gsap.to(".boxE", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxF", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxF", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxG", {
      x: (i) => i * (570)
    });

    gsap.to(".boxG", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxH", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxH", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxI", {
      x: (i) => i * (570)
    });

    gsap.to(".boxI", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxJ", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxJ", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxK", {
      x: (i) => i * (570)
    });

    gsap.to(".boxK", {
      duration: duration,
      ease: "none",
      x: "-=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    gsap.set(".boxL", {
      x: (i) => i * (-570) 
    });

    gsap.to(".boxL", {
      duration: duration,
      ease: "none",
      x: "+=570", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 650) //force x value to be between 0 and 500 using modulus
      },
      repeat: 1
    });
    
  }

async function onSubmit(data) {

  let answer = ''

  for(let i=1; i<=13; i++) {
    answer = answer + data[`${i}`]
  }

  console.log(answer);
  const response = await fetch('http://localhost:4000/answer/3', {
          method: 'POST',
          body: JSON.stringify({
             answer: answer
            }),  
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })

        console.log(response.status);
        if (response.status === 200) {
          console.log('Молорик');
          setTimeout(() => {
            navigate('/chapterone/levelfour')
          }, 3000);
        } else {
          const rightAnswer = await response.json();
          console.log(rightAnswer);
          console.log(rightAnswer[0].body);
        }
}

  return (

    <div className="LevelThree" >
      <div className ='Bug' onClick={letsMove}>
        <div className="wrapper">
          <div className="boxes">
            <div className="box css-box"><img src="../bug/stag+Beetle01.png" alt=''/></div>
            <div className="box css-box"><img src="../bug/stag+Beetle01.png" alt=''></img></div>
          </div>
        </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxA css-box"><img src="../bug/stag+Beetle02.png" alt=''></img></div>
          <div className="boxA css-box"><img src="../bug/stag+Beetle02.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxB css-box"><img src="../bug/stag+Beetle03.png" alt=''></img></div>
          <div className="boxB css-box"><img src="../bug/stag+Beetle03.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxC css-box"><img src="../bug/stag+Beetle04.png" alt=''></img></div>
          <div className="boxC css-box"><img src="../bug/stag+Beetle04.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxD css-box"><img src="../bug/stag+Beetle05.png" alt=''></img></div>
          <div className="boxD css-box"><img src="../bug/stag+Beetle05.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxE css-box"><img src="../bug/stag+Beetle06.png" alt=''></img></div>
          <div className="boxE css-box"><img src="../bug/stag+Beetle06.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div div className="boxes">
          <div className="boxF css-box"><img src="../bug/stag+Beetle07.png" alt=''></img></div>
          <div className="boxF css-box"><img src="../bug/stag+Beetle07.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxG css-box"><img src="../bug/stag+Beetle08.png" alt=''></img></div>
          <div className="boxG css-box"><img src="../bug/stag+Beetle08.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxH css-box"><img src="../bug/stag+Beetle09.png" alt=''></img></div>
          <div className="boxH css-box"><img src="../bug/stag+Beetle09.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxI css-box"><img src="../bug/stag+Beetle10.png" alt=''></img></div>
          <div className="boxI css-box"><img src="../bug/stag+Beetle10.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxJ css-box"><img src="../bug/stag+Beetle11.png" alt=''></img></div>
          <div className="boxJ css-box"><img src="../bug/stag+Beetle11.png" alt=''></img></div>
       </div>
      </div>

      <div className="wrapper">
        <div className="boxes">
          <div className="boxK css-box"><img src="../bug/stag+Beetle12.png" alt=''></img></div>
          <div className="boxK css-box"><img src="../bug/stag+Beetle12.png" alt=''></img></div>
        </div>
      </div>

      <div className="wrapperL">
        <div className="boxesL">
          <div className="boxL"><img src="../bug/stag+Beetle13.png" alt=''></img></div>
          <div className="boxL"><img src="../bug/stag+Beetle13.png" alt=''></img></div>
        </div>
      </div>
  </div>

  <div className='hint'><p>50 04 55 14 25 15</p></div>
{ hidden &&
    <form type='submit' onSubmit={handleSubmit(onSubmit)}>
          <div className="inputNumber" >

            <input {...register('1')} type='text' id='number1' className='inputNumber' maxLength={1} ></input>
            <input {...register('2')} type='text' id='number2' className='inputNumber'  maxLength={1} ></input>
            <input  {...register('3')} type='text' id='number3' className='inputNumber'  maxLength={1} ></input>
            <input {...register('4')} type='text' id='number4' className='inputNumber'  maxLength={1} ></input>
            <input {...register('5')} type='text' id='number5' className='inputNumber' maxLength={1} ></input>
            <input {...register('6')} type='text' id='number6' className='inputNumber'  maxLength={1} ></input>
            <input {...register('7')} type='text' id='number7' className='inputNumber'  maxLength={1} ></input>
            <input {...register('8')} type='text' id='number8' className='inputNumber'  maxLength={1} ></input>
            <input {...register('9')} type='text' id='number9' className='inputNumber' maxLength={1} ></input>
            <input {...register('10')} type='text' id='number10' className='inputNumber' maxLength={1} ></input>
            <input {...register('11')} type='text' id='number11' className='inputNumber'  maxLength={1} ></input>
            <input {...register('12')} type='text' id='number12' className='inputNumber'  maxLength={1} ></input>
            <input {...register('13')} type='text' id='number13' className='inputNumber'  maxLength={1} ></input>
            
            
          </div>
      <button className='buttonInput' type="submit" >try</button>
    </form>
}
  </div>
    
  );
}

export default LevelThree;

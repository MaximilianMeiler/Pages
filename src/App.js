import './App.css';

import {useEffect, useState} from 'react';

import Router from "./components/Router";

/*
LEGEND:
  0 - Directory
  100 - Activity
  200 - Projects
  300 - Skills
  400 - Contact

  5 - Phase
  6 - OOdsy
  7 - Clubfinity
  8 - gpTA
  9 - Climbr
  10 - Portfolio
*/

function App() {
  const [stack, setStack] = useState([0]);

  const [target, setTarget] = useState(-1);
  const [queued, setQueued] = useState(-1);

  const [index, setIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(-1)

  const [hover, setHover] = useState(-1);

  const colors = {
    0: 100,
    100: 190,
    200: 150,
    300: 45,
    400: 20
  };

  async function popStack(delay) {
    const curr = document.querySelector(".left");
    curr.style.setProperty("transition", `transform ${delay / 1000}s ease-in-out`);
    curr.classList.add("hidden");

    setTimeout(() => {
      setIndex(index - 1);
      curr.style.setProperty("transition", `transform 0s ease-in-out`);
      curr.classList.remove("hidden");
  
      setBackIndex(backIndex - 1);

      setStack(stack.slice(0, stack.length-1));
    }, delay - 10)
  }

  async function popDown(page) {
    var t = stack.lastIndexOf(page);
    if (t === -1) {
      t = 0;
      setQueued(page);
    }
    setTarget(t) 
  }

  //popDown logic
  useEffect(() => {
    if (target !== -1 && stack.length-1 > target) {
      popStack(250 / (stack.length - target - 1));
    } else {
      setTarget(-1);
      if (queued !== -1) {
        pushStack(queued);
        setQueued(-1);
      }
    }
  }, [target, stack])

  async function pushStack(page) {
    const curr = document.querySelector(".left");
    await setStack(stack.concat([page]))

    setBackIndex(backIndex + 1);
    curr.style.setProperty("transition", `0s ease-in-out`);
    curr.classList.add("hidden");
    setIndex(index + 1);
    
    setTimeout(() => {
      curr.style.setProperty("transition", `.25s ease-in-out`);
      curr.classList.remove("hidden");
    }, 0)
  }

  return (
    <div>
      <div className='trueBackground'></div>
      <div className='background'>

        <div className='left' style={{backgroundColor:`hsl(${colors[stack[index]]}, 100%, 85%)`}}>
          <div className='nestedTag' style={{left:`${100 + 140*(index)}px`, backgroundColor:`hsl(${colors[stack[index]]}, 100%, 85%)`}}></div>
          <Router colors={colors} stack={stack} index={index} pushStack={pushStack}/>
        </div>

        {stack.map((v, i) => { //non-last tags
          return (
            i !== stack.length - 1 ? 
              <div className='tag' 
                style={{left:`${102 + 140*i}px`, backgroundColor:`hsl(${colors[stack[i]]}, 100%, 85%)`}}
                onClick={() => setTarget(i)}
              ></div>
            : <></>
        )})}

        {index > 0 ? 
        <div className='leftBehind' style={{backgroundColor:`hsl(${colors[stack[backIndex]]}, 100%, 85%)`}}>

          <Router colors={colors} stack={stack} index={backIndex} pushStack={pushStack}/>
        </div>
        : <></>}

        

        <div className='top' style={{backgroundColor:`hsl(${colors[stack[index]]}, 100%, 80%)`}}></div>
        <div className='right' style={{backgroundColor:`hsl(${colors[stack[index]]}, 100%, 75%)`}}>
          <div onClick={() => popDown(100)} onMouseEnter={() => setHover(1)} onMouseOut={() => setHover(-1)} style={hover === 1 ? {WebkitTextFillColor:`hsl(${colors[1]}, 100%, 50%)`} : {}}>Activity</div>
          <div onClick={() => popDown(200)} onMouseEnter={() => setHover(2)} onMouseOut={() => setHover(-1)} style={hover === 2 ? {WebkitTextFillColor:`hsl(${colors[2]}, 100%, 50%)`} : {}}>Projects</div>
          <div onClick={() => popDown(300)} onMouseEnter={() => setHover(3)} onMouseOut={() => setHover(-1)} style={hover === 3 ? {WebkitTextFillColor:`hsl(${colors[3]}, 100%, 50%)`} : {}}>Skills</div>
          <div onClick={() => popDown(400)} onMouseEnter={() => setHover(4)} onMouseOut={() => setHover(-1)} style={hover === 4 ? {WebkitTextFillColor:`hsl(${colors[4]}, 100%, 50%)`} : {}}>Contact</div>
          <button onClick={() => popStack(250)}>pop!</button>
          <button onClick={() => pushStack(100)}>push!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

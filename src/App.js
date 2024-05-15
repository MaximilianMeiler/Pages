import './App.css';

import {useEffect, useState} from 'react';

import GridScreen from './components/GridScreen';
import InfoScreen from './components/InfoScreen';

import * as projects from './projects.json';
import * as skills from './skills.json';
import * as activity from './activity.json';
import * as about from "./about.json";

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
  const [hover, setHover] = useState(-1);
  const [target, setTarget] = useState(3);
  const [next, setNext] = useState(-1);
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
      setStack(stack.slice(0, stack.length-1));
    }, delay)
  }

  async function popDown(page) {
    await setTarget(0); //pop down to home page

    setTimeout(() => {
      pushStack(page)
    }, 500)
  }

  async function pushStack(page) {
    setNext(page);
    setTarget(target + 1);
  }

  useEffect(() => {
    console.log("stack update: ", stack)
    const curr = document.querySelector(".left");
    if (next === -1) {
      curr.style.setProperty("transition", `0s ease-in-out`);
      curr.classList.remove("hidden");
    } else if (next === -2) {
      setNext(-1);
      curr.style.setProperty("transition", `.25s ease-in-out`);
      curr.classList.remove("hidden");
    } else {
      var temp = next;
      setNext(-2);
      curr.style.setProperty("transition", `0s ease-in-out`);
      curr.classList.add("hidden");
      setTimeout(() => {
        setStack(stack.concat([temp]));
      }, 0)
    }

    if (stack.length > target + 1) {
      setTimeout(() => {
        const time = 250 / (stack.length - target - 1);
        popStack(time);
      }, 0) //this somehow solves a problem
    }

  }, [stack, target])

  return (
    <div>
      <div className='trueBackground'></div>
      <div className='background'>
        <div className='left' style={{backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 85%)`}}>
          <div className='nestedTag' style={{left:`${100 + 140*(stack.length-1)}px`, backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 85%)`}}></div>

          {stack[stack.length-1] === 0 ? //about
            <InfoScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={about.default}/>
          : stack[stack.length-1] === 100 ?  //activity
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={activity.default}/>
          : stack[stack.length-1] < 200 ? 
            <InfoScreen pushStack={pushStack} color={190} values={activity.default[Math.floor(stack[stack.length-1] % 100 / 20)].data[Math.floor(stack[stack.length-1] % 100 % 20 - 1)].page}/>
          : stack[stack.length-1] === 200 ? //projects
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={projects.default}/>
          : stack[stack.length-1] < 300 ? 
            <InfoScreen pushStack={pushStack} color={150} values/>
          : stack[stack.length-1] === 300 ? //skills
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={skills.default}/>
          : stack[stack.length-1] === 400 ? //contact
            <div>This is the contact page</div>
          : <div>Error 404</div>
          }

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

        {stack.length > 1 ? 
        <div className='leftBehind' style={{backgroundColor:`hsl(${colors[stack[stack.length-2]]}, 100%, 85%)`}}>

          {stack[stack.length-2] === 0 ? //about
            <InfoScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={about.default}/>
          : stack[stack.length-2] === 100 ?  //activity
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={activity.default}/>
          : stack[stack.length-2] === 200 ? //projects
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={projects.default}/>
          : stack[stack.length-2] === 300 ? //skills
            <GridScreen pushStack={pushStack} color={colors[stack[stack.length-1]]} values={skills.default}/>
          : stack[stack.length-2] === 400 ? 
            <div>This is the contact page</div>
          : <div>Error 404</div>
          }
        </div>
        : <></>}

        <div className='top' style={{backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 80%)`}}></div>
        <div className='right' style={{backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 75%)`}}>
          <div onClick={() => popDown(1)} onMouseEnter={() => setHover(1)} onMouseOut={() => setHover(-1)} style={hover === 1 ? {WebkitTextFillColor:`hsl(${colors[1]}, 100%, 50%)`} : {}}>Activity</div>
          <div onClick={() => popDown(2)} onMouseEnter={() => setHover(2)} onMouseOut={() => setHover(-1)} style={hover === 2 ? {WebkitTextFillColor:`hsl(${colors[2]}, 100%, 50%)`} : {}}>Projects</div>
          <div onClick={() => popDown(3)} onMouseEnter={() => setHover(3)} onMouseOut={() => setHover(-1)} style={hover === 3 ? {WebkitTextFillColor:`hsl(${colors[3]}, 100%, 50%)`} : {}}>Skills</div>
          <div onClick={() => popDown(4)} onMouseEnter={() => setHover(4)} onMouseOut={() => setHover(-1)} style={hover === 4 ? {WebkitTextFillColor:`hsl(${colors[4]}, 100%, 50%)`} : {}}>Contact</div>
          <button onClick={() => popStack(250)}>pop!</button>
          <button onClick={() => pushStack(1)}>push!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

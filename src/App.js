import './App.css';
import Projects from './components/Projects';
import Phase from './components/Phase';
import {useEffect, useState} from 'react';
import Skills from './components/Skills';
import GridScreen from './components/GridScreen';

/*

LEGEND:
  0 - Directory
  1 - Activity
  2 - Projects
  3 - Skills
  4 - Contact

  5 - Phase
  6 - OOdsy
  7 - Clubfinity
  8 - gpTA
  9 - Climbr
  10 - Portfolio


*/

function App() {
  const [stack, setStack] = useState([0, 1, 2, 3])
  const [hover, setHover] = useState(-1)
  const [target, setTarget] = useState(3)
  const [next, setNext] = useState(-1)
  const colors = [-1, 190, 150, 45, 20]

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
        <div className='left' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 85%)`} : {}}>
          <div className='nestedTag' style={stack.length > 1 ? {left:`${100 + 140*(stack.length-1)}px`, backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 85%)`} : {left:`${100 + 100*(stack.length-1)}px`}}></div>

          {stack[stack.length-1] === 0 ? 
            <div>This is the about page</div>
          : stack[stack.length-1] === 1 ? 
            <div>This is the activity page</div> 
          : stack[stack.length-1] === 2 ? 
            <Projects pushStack={pushStack}/>
          : stack[stack.length-1] === 3 ? 
            <Skills/>
          : stack[stack.length-1] === 4 ? 
            <div>This is the contact page</div>
          : stack[stack.length-1] === 5 ? 
            // <Phase pushStack={pushStack}/>
            <GridScreen pushStack={pushStack}/>
          : <div>Error 404</div>
          }

        </div>

        {stack.map((v, i) => { //non-last tags
          return (
            i !== stack.length - 1 ? 
              <div className='tag' 
                style={i === 0 ? {} : {left:`${102 + 140*i}px`, backgroundColor:`hsl(${colors[stack[i]]}, 100%, 85%)`}}
                onClick={() => setTarget(i)}
              ></div>
            : <></>
        )})}

        {stack.length > 1 ? 
        <div className='leftBehind' style={stack.length > 2 ? {backgroundColor:`hsl(${colors[stack[stack.length-2]]}, 100%, 85%)`} : {}}>

          {stack[stack.length-2] === 0 ? 
            <div>This is the about page</div>
          : stack[stack.length-2] === 1 ? 
            <div>This is the activity page</div> 
          : stack[stack.length-2] === 2 ? 
            <Projects pushStack={pushStack}/>
          : stack[stack.length-2] === 3 ? 
            <div>This is the skills page</div>
          : stack[stack.length-2] === 4 ? 
            <div>This is the contact page</div>
          : <div>Error 404</div>
          }
        </div>
        : <></>}

        <div className='top' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 80%)`} : {}}></div>
        <div className='right' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 75%)`} : {}}>
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

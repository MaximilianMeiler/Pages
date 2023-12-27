import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [stack, setStack] = useState([0, 1, 2, 3])
  const [hover, setHover] = useState(-1)
  const [target, setTarget] = useState(3)
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
    await setTarget(0);
    const curr = document.querySelector(".left");
    // curr.style.setProperty("transition", `transform ${delay / 1000}s ease-in-out`);

    setTimeout(() => {
      setTarget(1);
      setStack([0, page])
    }, 500)
  }

  useEffect(() => {
    console.log("stack update: ", stack)
    const curr = document.querySelector(".left");
    curr.style.setProperty("transition", `0s ease-in-out`);
    curr.classList.remove("hidden");

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
          : <div>Error 404</div>
          }
        </div>
        : <></>}

        <div className='top' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 80%)`} : {}}></div>
        <div className='right' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 75%)`} : {}}>
          <div onClick={() => popDown(1)} onMouseEnter={() => setHover(1)} onMouseOut={() => setHover(-1)} style={hover === 1 ? {WebkitTextFillColor:`hsl(${colors[1]}, 100%, 50%)`} : {}}>Activity</div>
          <div onClick={() => setStack([0, 2])} onMouseEnter={() => setHover(2)} onMouseOut={() => setHover(-1)} style={hover === 2 ? {WebkitTextFillColor:`hsl(${colors[2]}, 100%, 50%)`} : {}}>Projects</div>
          <div onClick={() => setStack([0, 3])} onMouseEnter={() => setHover(3)} onMouseOut={() => setHover(-1)} style={hover === 3 ? {WebkitTextFillColor:`hsl(${colors[3]}, 100%, 50%)`} : {}}>Skills</div>
          <div onClick={() => setStack([0, 4])} onMouseEnter={() => setHover(4)} onMouseOut={() => setHover(-1)} style={hover === 4 ? {WebkitTextFillColor:`hsl(${colors[4]}, 100%, 50%)`} : {}}>Contact</div>
          <button onClick={() => popStack(250)}>pop!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

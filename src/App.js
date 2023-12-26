import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [stack, setStack] = useState([0])
  const colors = [150, 20, 190, 320, 45]

  async function popStack(delay) {
    const curr = document.querySelector(".left");
    curr.classList.add("hidden");

    setTimeout(() => {
      setStack(stack.slice(0, stack.length-1))
      curr.classList.remove("hidden");
    }, delay)
  }

  useEffect(() => {
    console.log(stack)
  }, [stack])

  return (
    <div>
      <div className='trueBackground'></div>
      <div className='background'>
        <div className='left' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 50%)`} : {}}>
          {stack[stack.length-1] === 0 ? 
            <div>This is the about page</div>
          : stack[stack.length-1] === 1 ? 
            <div>This is the activity page</div> 
          : <div>Error 404</div>
          }

        </div>

        {stack.length > 1 ? 
        <div className='leftBehind' style={stack.length > 2 ? {backgroundColor:`hsl(${colors[stack[stack.length-2]]}, 100%, 50%)`} : {}}>
          {stack[stack.length-2] === 0 ? 
            <div>This is the about page</div>
          : stack[stack.length-2] === 1 ? 
            <div>This is the activity page</div> 
          : <div>Error 404</div>
          }
        </div>
        : <></>}

        <div className='top' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 45%)`} : {}}></div>
        <div className='right' style={stack.length > 1 ? {backgroundColor:`hsl(${colors[stack[stack.length-1]]}, 100%, 40%)`} : {}}>
          <div onClick={() => setStack([0, 1])}>Activity</div>
          <div onClick={() => setStack([0, 2])}>Projects</div>
          <div onClick={() => setStack([0, 3])}>Skills</div>
          <div onClick={() => setStack([0, 4])}>Contact</div>
          <button onClick={() => popStack(250)}>pop!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

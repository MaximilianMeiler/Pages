import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [stack, setStack] = useState([-1, 0, 1, 2])
  const colors = [150, 20, 190, 320, 45]

  async function popStack() {
    const curr = document.querySelector(".left");
    const prev = document.querySelector(".leftBehind");
    curr.classList.add("hidden");

    setTimeout(() => {
      setStack(stack.slice(0, stack.length-1))
      curr.classList.remove("hidden");
    }, 250)
  }

  useEffect(() => {
    console.log(stack)
  }, [stack])

  return (
    <div>
      <div className='trueBackground'></div>
      <div className='background'>
        <div className='left'>
          {stack[stack.length-1] === -1 ? 
            <div>This is the home page</div>
          : stack[stack.length-1] === 0 ? 
            <div>This is the about page</div> 
          : <div>Error 404</div>
          }

        </div>

        {stack.length > 1 ? 
        <div className='leftBehind'>
          {stack[stack.length-2] === -1 ? 
            <div>This is the home page</div>
          : stack[stack.length-2] === 0 ? 
            <div>This is the about page</div> 
          : <div>Error 404</div>
          }
        </div>
        : <></>}

        <div className='top'></div>
        <div className='right'>
          <div onClick={() => setStack([-1, 0])}>About</div>
          <div onClick={() => setStack([-1, 1])}>Activity</div>
          <div onClick={() => setStack([-1, 2])}>Projects</div>
          <div onClick={() => setStack([-1, 3])}>Skills</div>
          <div onClick={() => setStack([-1, 4])}>Contact</div>
          <button onClick={() => popStack()}>pop!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

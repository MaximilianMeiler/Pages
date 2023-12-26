import './App.css';
import {useEffect, useState} from 'react';


function App() {
  const [stack, setStack] = useState([-1])

  return (
    <div>
      <div className='trueBackground'></div>
      <div className='background'>
        <div className='left'>
          {stack[stack.length-1] === 0 ? 
            <div>This is the about page</div>

            : stack[stack.length-1] === 0 ? <></> : <></>
          }

        </div>
        <div className='top'></div>
        <div className='right'>
          <div onClick={() => setStack([-1, 0])}>About</div>
          <div onClick={() => setStack([-1, 1])}>Activity</div>
          <div onClick={() => setStack([-1, 2])}>Projects</div>
          <div onClick={() => setStack([-1, 3])}>Skills</div>
          <div onClick={() => setStack([-1, 4])}>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default App;

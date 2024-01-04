import './Projects.css';

export default function Skills({
  pushStack
}) {
  return (
    <div className='window'>
      <div className='projectHeader'>Skills</div>

      <div className='projectRows'>

        <div className="projectRow">
          <div className="genericContainer">
            <img className='black' src={'./Images/html.png'} alt='bruh'></img>
            <div className='projTitle'>HTML/CSS</div>
          </div>
          <div className="genericContainer">
            <img className='black' src={'./Images/js.png'} alt='bruh'></img>
            <div className='projTitle'>Javascript</div>
          </div>
          <div className="genericContainer">
            <img className='black' src={'./Images/python.png'} alt='bruh'></img>
            <div className='projTitle'>Python</div>
          </div>
          <div className="genericContainer">
            <img className='black' src={'./Images/cpp.png'} alt='bruh'></img>
            <div className='projTitle'>C++</div>
          </div>
        </div>

        <div className="projectRow">
          <div className="genericContainer">
            <img className='black' src={'./Images/react.png'} alt='bruh'></img>
            <div className='projTitle'>React</div>
          </div>
          <div className="genericContainer">
            <img className='black' src={'./Images/nodejs.png'} alt='bruh'></img>
            <div className='projTitle'>Node.js</div>
          </div>
          <div className="genericContainer">
            <img className='black' src={'./Images/mongo.png'} alt='bruh'></img>
            <div className='projTitle'>MongoDB</div>
          </div>              
          <div className="genericContainer">
            <img className='black' src={'./Images/github.png'} alt='bruh'></img>
            <div className='projTitle'>GitHub</div>
          </div>
        </div>
      </div>
    </div>
  )
}
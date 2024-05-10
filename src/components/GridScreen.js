import './GridScreen.css';

export default function GridScreen({
  pushStack, color, values, header, clickable = true
}) {
  const bgStyle = {
    "--color": color
  }

  return (
    <div className='window'>
      <div className='header'>{header}</div>
      <div className='grid'>

        {values.map((v, i) => {
          return (
          <div className={clickable ? 'container clickable' : 'container'} onMouseEnter={() => {
            var top = document.querySelector(`#t${i}`);
            var right = document.querySelector(`#r${i}`);
            var proj = document.querySelector(`#p${i}`);

            top.classList.add("showTop");
            right.classList.add("showRight");
            proj.classList.add("showProj");
          }} onMouseLeave={() => {
            var top = document.querySelector(`#t${i}`);
            var right = document.querySelector(`#r${i}`);
            var proj = document.querySelector(`#p${i}`);

            top.classList.remove("showTop");
            right.classList.remove("showRight");
            proj.classList.remove("showProj");
          }} onClick={clickable ? () => {pushStack(v.page)} : () => {}}>
              <div className="project" id={`p${i}`} style={bgStyle}>
                <img className='image' src={`./Images/${v.image}.png`} alt='Project logo'></img>
                <div className='projTitle'>{v.title}</div>
              </div>
              <div className="pTop" id={`t${i}`} style={{backgroundColor: `hsl(${color}, 100%, 80%)`}}></div>
              <div className="pRight" id={`r${i}`} style={{backgroundColor: `hsl(${color}, 100%, 75%)`}}></div>
          </div>  
        )})}

      </div>
    </div>
  )
}
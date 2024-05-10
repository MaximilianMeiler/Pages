import './GridScreen.css';

export default function GridScreen({
  pushStack, values, header
}) {
  return (
    <div className='window'>
      <div className='header'>{header}</div>
      <div className='grid'>

        {values.map((v, i) => {
          return (
          <div className='container' onMouseEnter={() => {
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
          }} onClick={() => {pushStack(v.page)}}>
              <div className="project" id={`p${i}`}>
                <img className='image' src={`./Images/${v.logo}.png`} alt='Project logo'></img>
                <div className='projTitle'>{v.title}</div>
              </div>
              <div className="pTop" id={`t${i}`}></div>
              <div className="pRight" id={`r${i}`}></div>
          </div>  
        )})}

      </div>
    </div>
  )
}
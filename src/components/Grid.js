import './GridScreen.css';

export default function Grid({
  pushStack, color, value, index
}) {

  const bgStyle = {
    "--color": color
  }

  return (
    <div className='grid'>

      {value.data.map((d, i) => {
        return (
        <div className={d.page ? 'container clickable' : 'container'} onMouseEnter={() => {
          var top = document.querySelector(`#t${index}-${i}`);
          var right = document.querySelector(`#r${index}-${i}`);
          var proj = document.querySelector(`#p${index}-${i}`);

          top.classList.add("showTop");
          right.classList.add("showRight");
          proj.classList.add("showProj");
        }} onMouseLeave={() => {
          var top = document.querySelector(`#t${index}-${i}`);
          var right = document.querySelector(`#r${index}-${i}`);
          var proj = document.querySelector(`#p${index}-${i}`);

          top.classList.remove("showTop");
          right.classList.remove("showRight");
          proj.classList.remove("showProj");
        }} onClick={d.page ? () => {pushStack(d.page)} : () => {}}>
            <div className="project" id={`p${index}-${i}`} style={bgStyle}>
              <img className='image' src={`./Images/${d.image}.png`} alt='Project logo'></img>
              <div className='projTitle'>{d.title}</div>
            </div>
            <div className="pTop" id={`t${index}-${i}`} style={{backgroundColor: `hsl(${color}, 100%, 80%)`}}></div>
            <div className="pRight" id={`r${index}-${i}`} style={{backgroundColor: `hsl(${color}, 100%, 75%)`}}></div>
        </div>  
      )})}

    </div>
  )
}
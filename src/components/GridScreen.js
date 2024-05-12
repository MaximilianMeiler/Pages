import './GridScreen.css';

export default function GridScreen({
  pushStack, color, values
}) {
  const bgStyle = {
    "--color": color
  }

  return (
    <div className='window'>
      {values.map((v, j) => {
        return (
          <div className="group" style={{flex: v.flex}}>
            <div className='header'>{v.title}</div>
            <div className='grid'>

              {v.data.map((d, i) => {
                return (
                <div className={d.page ? 'container clickable' : 'container'} onMouseEnter={() => {
                  var top = document.querySelector(`#t${j}-${i}`);
                  var right = document.querySelector(`#r${j}-${i}`);
                  var proj = document.querySelector(`#p${j}-${i}`);

                  top.classList.add("showTop");
                  right.classList.add("showRight");
                  proj.classList.add("showProj");
                }} onMouseLeave={() => {
                  var top = document.querySelector(`#t${j}-${i}`);
                  var right = document.querySelector(`#r${j}-${i}`);
                  var proj = document.querySelector(`#p${j}-${i}`);

                  top.classList.remove("showTop");
                  right.classList.remove("showRight");
                  proj.classList.remove("showProj");
                }} onClick={d.page ? () => {pushStack(d.page)} : () => {}}>
                    <div className="project" id={`p${j}-${i}`} style={bgStyle}>
                      <img className='image' src={`./Images/${d.image}.png`} alt='Project logo'></img>
                      <div className='projTitle'>{d.title}</div>
                    </div>
                    <div className="pTop" id={`t${j}-${i}`} style={{backgroundColor: `hsl(${color}, 100%, 80%)`}}></div>
                    <div className="pRight" id={`r${j}-${i}`} style={{backgroundColor: `hsl(${color}, 100%, 75%)`}}></div>
                </div>  
              )})}

            </div>
          </div>
        )
      })}


    </div>
  )
}
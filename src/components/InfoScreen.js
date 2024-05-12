import './InfoScreen.css';

export default function InfoScreen({
  pushStack, color, values
}) {
  const bgStyle = {
    "--color": color
  }

  return (
    <div className='colWindow'>
      <div className='header'>{values.pageTitle}</div>
      <div className='flexBody'>
        <div className='imageFlex' style={values.imagesInCols ? {flexDirection: "column"} : {}}>
          {values.images.map((i) => {
            return (
              <img className='mainImage' src={`./Images/${i}.png`} alt='Featured'></img>
            )
          })}
        </div>
        <div className='infoFlex'>
          {values.content.map((c, j) => {
            return (
              <div>
              <div className='subheading'>{c.header}</div>
              {c.isParagraph ? 
                <div>
                  {c.text}
                </div>
              : 
                <div className='grid'>

                  {c.data.map((d, i) => {
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
              }
              </div>
            )
          })}
        </div>
      </div>  

    </div>
  )
}
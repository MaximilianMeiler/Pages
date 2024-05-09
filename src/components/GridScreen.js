import './GridScreen.css';

export default function GridScreen({
  pushStack
}) {
  return (
    <div className='window'>
      <div className='header'>Grid</div>
      <div className='grid'>

        <div className='container' onMouseEnter={() => {
            var top = document.querySelector("#t1");
            var right = document.querySelector("#r1");
            var proj = document.querySelector("#p1");

            top.classList.add("showTop");
            right.classList.add("showRight");
            proj.classList.add("showProj");
          }} onMouseLeave={() => {
            var top = document.querySelector("#t1");
            var right = document.querySelector("#r1");
            var proj = document.querySelector("#p1");

            top.classList.remove("showTop");
            right.classList.remove("showRight");
            proj.classList.remove("showProj");
        }} onClick={() => {pushStack(5)}}>
            <div className="project" id="p1">
              <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
              <div className='projTitle'>Phase</div>
            </div>
            <div className="pTop" id='t1'></div>
            <div className="pRight" id="r1"></div>
        </div>  

      </div>
    </div>
  )
}
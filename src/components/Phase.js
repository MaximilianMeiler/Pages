import './Projects.css';

export default function Phase({
  pushStack
}) {
  return (
    <div className='window'>
      <div className='projectHeader'>Phase</div>

      <div className='projectRow'>
        <img className='subImage' src={'./Images/Phase1.jpg'} alt='bruh'></img>
        <img className='subImage' src={'./Images/Phase2.jpg'} style={{marginLeft: '-20%'}} alt='bruh'></img>
        <div className='subDesc'> this is  acat</div>
      </div>

      {/* <div className='projectRows'>

        <div className="projectRow">
          <div className='projectContainer' onMouseEnter={() => {
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

          <div className='projectContainer' onMouseEnter={() => {
              var top = document.querySelector("#t2");
              var right = document.querySelector("#r2");
              var proj = document.querySelector("#p2");

              top.classList.add("showTop");
              right.classList.add("showRight");
              proj.classList.add("showProj");
            }} onMouseLeave={() => {
              var top = document.querySelector("#t2");
              var right = document.querySelector("#r2");
              var proj = document.querySelector("#p2");

              top.classList.remove("showTop");
              right.classList.remove("showRight");
              proj.classList.remove("showProj");
          }} onClick={() => {pushStack(6)}}>
            <div className="project" id="p2">
              <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
              <div className='projTitle'>Optimal Odyssey</div>
            </div>
            <div className="pTop" id='t2'></div>
            <div className="pRight" id="r2"></div>
          </div>

          <div className='projectContainer' onMouseEnter={() => {
              var top = document.querySelector("#t3");
              var right = document.querySelector("#r3");
              var proj = document.querySelector("#p3");

              top.classList.add("showTop");
              right.classList.add("showRight");
              proj.classList.add("showProj");
            }} onMouseLeave={() => {
              var top = document.querySelector("#t3");
              var right = document.querySelector("#r3");
              var proj = document.querySelector("#p3");

              top.classList.remove("showTop");
              right.classList.remove("showRight");
              proj.classList.remove("showProj");
          }} onClick={() => {pushStack(7)}}>
            <div className="project" id="p3">
              <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
              <div className='projTitle'>Clubfinity</div>
            </div>
            <div className="pTop" id='t3'></div>
            <div className="pRight" id="r3"></div>
          </div>
        </div>

        <div className="projectRow">
          <div className='projectContainer' onMouseEnter={() => {
                var top = document.querySelector("#t4");
                var right = document.querySelector("#r4");
                var proj = document.querySelector("#p4");

                top.classList.add("showTop");
                right.classList.add("showRight");
                proj.classList.add("showProj");
              }} onMouseLeave={() => {
                var top = document.querySelector("#t4");
                var right = document.querySelector("#r4");
                var proj = document.querySelector("#p4");

                top.classList.remove("showTop");
                right.classList.remove("showRight");
                proj.classList.remove("showProj");
            }} onClick={() => {pushStack(8)}}>
              <div className="project" id="p4">
                <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
                <div className='projTitle'>gpTA</div>
              </div>
              <div className="pTop" id='t4'></div>
              <div className="pRight" id="r4"></div>
            </div>
            <div className='projectContainer' onMouseEnter={() => {
                var top = document.querySelector("#t5");
                var right = document.querySelector("#r5");
                var proj = document.querySelector("#p5");

                top.classList.add("showTop");
                right.classList.add("showRight");
                proj.classList.add("showProj");
              }} onMouseLeave={() => {
                var top = document.querySelector("#t5");
                var right = document.querySelector("#r5");
                var proj = document.querySelector("#p5");

                top.classList.remove("showTop");
                right.classList.remove("showRight");
                proj.classList.remove("showProj");
            }} onClick={() => {pushStack(9)}}>
              <div className="project" id="p5">
                <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
                <div className='projTitle'>Climbr</div>
              </div>
              <div className="pTop" id='t5'></div>
              <div className="pRight" id="r5"></div>
            </div>
            <div className='projectContainer' onMouseEnter={() => {
                var top = document.querySelector("#t6");
                var right = document.querySelector("#r6");
                var proj = document.querySelector("#p6");

                top.classList.add("showTop");
                right.classList.add("showRight");
                proj.classList.add("showProj");
              }} onMouseLeave={() => {
                var top = document.querySelector("#t6");
                var right = document.querySelector("#r6");
                var proj = document.querySelector("#p6");

                top.classList.remove("showTop");
                right.classList.remove("showRight");
                proj.classList.remove("showProj");
            }} onClick={() => {pushStack(10)}}>
              <div className="project" id="p6">
                <img className='image' src={'./Images/cat-spaghetti.jpg'} alt='bruh'></img>
                <div className='projTitle'>This website!</div>
              </div>
              <div className="pTop" id='t6'></div>
              <div className="pRight" id="r6"></div>
            </div>
        </div>
      </div> */}
    </div>
  )
}
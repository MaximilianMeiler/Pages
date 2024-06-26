import './GridScreen.css';
import Grid from './Grid';

export default function GridScreen({
  pushStack, color, values, linkIndex
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
            <div className="gridContainer">
              <Grid pushStack={pushStack} color={color} value={v} index={j} linkIndex={linkIndex}/>
            </div>
          </div>
        )
      })}

    </div>
  )
}
import './InfoScreen.css';
import Grid from './Grid';

export default function InfoScreen({
  pushStack, color, values, linkIndex
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
              <div style={c.isParagraph ? {} : {flexShrink: 1, marginBottom: "10%"}}>
                <div className='subheading'>{c.header}</div>
                {c.isParagraph ? 
                  <div>
                    {c.text}
                  </div>
                : 
                  <Grid pushStack={pushStack} color={color} value={c} index={j} linkIndex={linkIndex} tiny={true}/>
                }
              </div>
            )
          })}
        </div>
      </div>  

    </div>
  )
}
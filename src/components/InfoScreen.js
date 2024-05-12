import './InfoScreen.css';
import Grid from './Grid';

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
              <div style={c.isParagraph ? {} : {flex: "1 1 auto"}}>
                <div className='subheading'>{c.header}</div>
                {c.isParagraph ? 
                  <div>
                    {c.text}
                  </div>
                : 
                  <Grid pushStack={pushStack} color={color} value={c} index={j} />
                }
              </div>
            )
          })}
        </div>
      </div>  

    </div>
  )
}
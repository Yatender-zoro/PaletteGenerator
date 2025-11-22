import './Card.css'


const Card = ({cocode,onClick}) => {
  return (
      <div className="element" onClick={()=> onClick(cocode)}>
        <div className="color" style={{backgroundColor:cocode}}>
        </div>
           <p className='code'>{cocode}</p> 
      </div>
  )
}

export default Card

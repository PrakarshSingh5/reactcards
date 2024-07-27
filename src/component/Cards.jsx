
import './card.css'

function Cards({ name, url}) {
  return (
    <div className="container_card">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <a href={url}><button className='button'>Show More</button></a>
        </div>
     
    </div>
    
 
  )
}

export default Cards


import './resources.scss'
import {resources} from '../../data/home/resources'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className='resource fluid-container'>
        <div className='resource_container'>
           <p style={{
            fontSize:'2rem',
            fontWeight:'bold', 
            textAlign: 'center'
            }} 
            className='wine_color'>
                Build your confidence with our world of educational resources
            </p>
            <div className='resource_categories'>
                {resources.map(resource => {
                 
                let {name, description, action, image} = resource;

                return(<>
                    <div className='resource_category'>
                        <span style={{fontSize:'1.1rem', color:'#000', fontWeight:'bold'}}>{name}</span>
                        <span className='details'>{description}</span>
                        <button style={{textDecoration:'0', marginTop:'1rem'}}>
                            {action}    
                        </button>
                        {/* <img alt={`${name}`} style={{width:'4.5rem', height:'4.5rem'}} src={`${image}`} width={100} height={100} /> */}
                    </div>
                </>)
             })}
            </div>
        </div>
    </div>
  )
}

export default Resources
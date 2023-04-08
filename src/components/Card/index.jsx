import cardCss from './styles.module.css'
import { FaExclamationCircle } from "react-icons/fa";

const Card = (props) => {
    const {team} = props
    const {name, image} = team
    
    return(
        <div className={cardCss.div}>
                <FaExclamationCircle style={{backgroundColor: '#454545', color: '#7b7b7b', position: 'absolute', top: '10px', right: '14px'}}/>
                <img src={image} alt={name} />
                <h3>{name}</h3>
        </div>
        
    )
}

export default Card
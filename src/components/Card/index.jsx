import { Link } from "react-router-dom";
import cardCss from './styles.module.css'
import { FaExclamationCircle } from "react-icons/fa";

const Card = (props) => {
    const {team} = props
    const {name, image, _id} = team
    
    return(
        <div className={cardCss.div}>
            <Link to={`/team_info/${_id}`}>
            <FaExclamationCircle style={{backgroundColor: '#454545', color: '#7b7b7b', position: 'absolute', top: '10px', right: '14px', cursor: 'pointer'}} />
            </Link>
                <img src={image} alt={name} />
                <h3>{name}</h3>
        </div>
        
    )
}

export default Card
import { Link } from "react-router-dom";
import cardCss from './styles.module.css'
import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";

const Card = (props) => {
    const {team} = props
    const {name, image, _id} = team
    const navigate = useNavigate()
    const { teamId, setTeamId } = useContext(TeamsContext)

    function navegarProdutos() {
        setTeamId(_id)
        navigate(`/home/products/${_id}`)
    }
    
    return(
        <div className={cardCss.container}>
                <Link to={`/team_info/${_id}`}>
                <FaExclamationCircle className={cardCss.info} style={{backgroundColor: '#454545', color: '#7b7b7b', position: 'absolute', top: '10px', right: '14px', cursor: 'help'}} />
                </Link>
            <div className={cardCss.div} onClick={() => navegarProdutos() }>
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </div>
        </div>
        
        
    )
}

export default Card
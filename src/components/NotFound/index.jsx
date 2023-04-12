import notFoundCss from './styles.module.css'
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const NotFound = () => {
    return(
        <div className={notFoundCss.div}>
            <Link to={`/home`}><BsArrowLeftCircle style={{color: '#FFF' }} size={'60px'} className={notFoundCss.Link} /></Link>
            <p className={notFoundCss.notFound}>Oooops...  Essa página não existe. =( </p>
        </div>
    )
}
export default NotFound
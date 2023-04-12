import { useContext } from 'react';
import teamProdutsCardCss from './styles.module.css'
import { useNavigate } from "react-router-dom";
import { TeamsContext } from '../../contexts/TeamsContext';

const TeamProductsCard = (props) => {
    const { product } = props
    const { available, price, discountPrice, urlImage, name, _id } = product
    const navigate = useNavigate()
    const { setProductId } = useContext(TeamsContext)

    function navegarDetalhesProdutos() {
        setProductId(_id)
        navigate(`/home/products/details/${_id}`)
    }

    return(
            <div className={teamProdutsCardCss.container} onClick={() => navegarDetalhesProdutos()}>
                <div className={teamProdutsCardCss.imagem}>
                    <img src={urlImage} alt={name} className={teamProdutsCardCss.img}/>
                </div>
                <h3 className={teamProdutsCardCss.nomeProduto}>{name}</h3>
                {!available ? 
                    <div className={teamProdutsCardCss.precosDisponibilidade}>
                        <span className={teamProdutsCardCss.precoComDesconto}>R$ { price }</span>
                        <span className={teamProdutsCardCss.disponivel}>Indisponível</span>
                    </div>
                : discountPrice && available ?
                    <div className={teamProdutsCardCss.precosDisponibilidade}>
                        <span className={teamProdutsCardCss.precoComDesconto}>R$ { price }</span>
                        <span className={teamProdutsCardCss.preco}>R$ {discountPrice}</span>
                    </div>
                :
                    <div className={teamProdutsCardCss.precosDisponibilidade}>
                            <span className={teamProdutsCardCss.preco}>R$ { price }</span>
                    </div> }
            </div>
    )
}

export default TeamProductsCard
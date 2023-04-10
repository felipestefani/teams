import teamProdutsCardCss from './styles.module.css'

const TeamProductsCard = (props) => {
    const { product } = props
    const { available, price, discountPrice, urlImage, name } = product

    return(
            <div className={teamProdutsCardCss.container}>
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
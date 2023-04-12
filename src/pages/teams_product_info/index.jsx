import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import MainTemplate from "../../templates/main_template";
import { TeamsContext } from "../../contexts/TeamsContext";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import teamProductInfoCss from './styles.module.css'

const TeamsProductInfo = () => {

    const [teamProductInfo, setTeamProductInfo] = useState({})
    const { productId, teamId } = useContext(TeamsContext)

    async function getProductDetails() {
        const {data} = await api.get(`https://api-products-dh-next.vercel.app/product/${productId}`, {headers: {
            Authorization: localStorage.getItem('@teams_token')
        }})
        setTeamProductInfo({...data})
        console.log({...data});
    }

    useEffect(()=>{
        getProductDetails()
    },[])

    return(
        <MainTemplate>
            <Link to={`/home/products/${teamId}`}><BsArrowLeftCircle style={{color: '#FFF' }} size={'40px'} className={teamProductInfoCss.Link} /></Link>
            <div className={teamProductInfoCss.div}>
                <div className={teamProductInfoCss.imagem}>
                    <img className={teamProductInfoCss.img} src={teamProductInfo.urlImage} alt={teamProductInfo.name} />
                </div>
                <section className={teamProductInfoCss.section}>
                    <h1 className={teamProductInfoCss.h1}>{teamProductInfo.name}</h1>
                    <p className={teamProductInfoCss.maker}>{teamProductInfo.maker}</p>
                    {<div className={''} onClick={() => navegarDetalhesProdutos()}>
                        {!teamProductInfo.available ? 
                            <div className={teamProductInfoCss.precosDisponibilidade}>
                                <span className={teamProductInfoCss.precoComDesconto}>R$ { teamProductInfo.price }</span>
                                <span className={teamProductInfoCss.preco}>Indisponível</span>
                            </div>
                        : teamProductInfo.discountPrice && teamProductInfo.available ?
                            <div className={teamProductInfoCss.precosDisponibilidade}>
                                <span className={teamProductInfoCss.precoComDesconto}>R$ { teamProductInfo.price }</span>
                                <span className={teamProductInfoCss.preco}>R$ {teamProductInfo.discountPrice}</span>
                            </div>
                        :
                            <div className={teamProductInfoCss.precosDisponibilidade}>
                                    <span className={teamProductInfoCss.preco}>R$ { teamProductInfo.price }</span>
                            </div> }
                    </div>}
                    <p className={teamProductInfoCss.descricao}>Descrição</p>
                    <p className={teamProductInfoCss.p}>{teamProductInfo.description}</p>
                </section>
            </div>

        </MainTemplate>
    )

}

export default TeamsProductInfo
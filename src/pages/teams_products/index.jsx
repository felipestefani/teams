import MainTemplate from "../../templates/main_template";
import api from "../../services/api";
import { useState, useContext, useEffect } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";
import { BsArrowLeftCircle  } from "react-icons/bs";
import { Link } from "react-router-dom";
import TeamProductsCard from "../../components/TeamProducts";
import teamsProductsCss from './styles.module.css'
import CircularProgress from "@mui/material/CircularProgress";

const TeamsProducts = () => {

    const [teamProducts, setTeamProducts] = useState([])
    const { teamId, loading, setLoading} = useContext(TeamsContext)

    async function getTeamProducts() {
        try {
            setLoading(true)
            const { data } = await api.get(`/products/${teamId}`, { headers: {
                Authorization: localStorage.getItem('@teams_token')
            }})
            setTeamProducts(data)
        } catch (error) {
            console.log(error); 
        } finally {
            setLoading(false)
        }       
    }

    useEffect(() => {
        getTeamProducts()
    }, [])

    return(
        <MainTemplate>
            <div className={teamsProductsCss.container}>
                <Link to={`/home`} style={{textDecoration: 'none'}}><BsArrowLeftCircle size={'40px'} className={teamsProductsCss.icone}/></Link>
                {
                     loading ? <div className={teamsProductsCss.loading}>
                            <CircularProgress />
                        </div> 
                        :   <ul className={teamsProductsCss.ul}>
                        { teamProducts.length <= 0 ? 
                            <p className={teamsProductsCss.nenhumProduto}>Nenhum produto encontrado =(</p> 
                        :
                        (teamProducts.map((product)=>(
                            <TeamProductsCard key={product._id} product={product}/> 
                        )))}
                    </ul>
                }       
            </div>         
        </MainTemplate>
    )
}

export default TeamsProducts
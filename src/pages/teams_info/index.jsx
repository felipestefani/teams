import MainTemplate  from "../../templates/main_template";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import teamInfoCss from './styles.module.css'
import { TeamsContext } from "../../contexts/TeamsContext";
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const TeamsInfo = () => {
    const { id } = useParams()
    const [infoTeam, setInfoTeam] = useState({})
    const { loading, setLoading} = useContext(TeamsContext)

    async function getTeamInfo() {
        try {
            setLoading(true)
            const { data } = await api.get(`/teams/${id}`, {headers:{
                Authorization: localStorage.getItem('@teams_token')}})
            setInfoTeam({...data.response})
        } catch (error) {
           toast.error('Erro ao realizar requisição de dados')
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getTeamInfo()
    },[])

    return (
        <MainTemplate>
            <ToastContainer />
            <Link to={`/home`}><BsArrowLeftCircle style={{color: '#FFF' }} size={'40px'} className={teamInfoCss.Link} /></Link>
            {
                loading ? <div className={teamInfoCss.loading}>
                            <CircularProgress />
                        </div> 
                        : <div className={teamInfoCss.div}>
                            <div className={teamInfoCss.imagem}>
                                <img className={teamInfoCss.img} src={infoTeam.image} alt={infoTeam.name} />
                            </div>
                            <section className={teamInfoCss.section}>
                                <h1 className={teamInfoCss.h1}>{infoTeam.name}</h1>
                                <p className={teamInfoCss.p}>{infoTeam.description}</p>
                            </section>
                        </div> 
            }   
            
        </MainTemplate>
    )
}

export default TeamsInfo
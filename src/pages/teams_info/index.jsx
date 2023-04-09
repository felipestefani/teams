import MainTemplate  from "../../templates/MainTemplate";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import teamInfoCss from './styles.module.css'

const TeamsInfo = () => {
    const { id } = useParams()
    const [infoTeam, setInfoTeam] = useState({})

    async function getTeamInfo() {
        try {
            const { data } = await api.get(`/teams/${id}`, {headers:{
                Authorization: localStorage.getItem('@teams_token')}})
            setInfoTeam({...data.response})
        } catch (error) {
           alert('Erro ao buscar dados') 
        }     
    }

    useEffect(()=>{
        getTeamInfo()
    },[])

    return (
        <MainTemplate>
            <Link to={`/home`}><BsArrowLeftCircle style={{color: '#FFF' }} size={'40px'} className={teamInfoCss.Link} /></Link>
            <div className={teamInfoCss.div}>
                <div className={teamInfoCss.imagem}>
                    <img className={teamInfoCss.img} src={infoTeam.image} alt={infoTeam.name} />
                </div>
                <section className={teamInfoCss.section}>
                    <h1 className={teamInfoCss.h1}>{infoTeam.name}</h1>
                    <p className={teamInfoCss.p}>{infoTeam.description}</p>
                </section>
            </div>
        </MainTemplate>
    )
}

export default TeamsInfo
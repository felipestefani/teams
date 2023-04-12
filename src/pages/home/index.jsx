import api from '../../services/api'
import MainTemplate from "../../templates/main_template"
import { useContext, useEffect, useState } from 'react';
import Card  from "../../components/TeamCard";
import homeCss from './styles.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import { TeamsContext } from '../../contexts/TeamsContext';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Home = () =>{
    const [teams, setTeams] = useState([])
    const { loading, setLoading} = useContext(TeamsContext)

    async function getTeams() {
        setLoading(true)
        try {
            const { data } = await api.get('/teams', {headers:
            {Authorization: localStorage.getItem('@teams_token')}})
            setTeams(data)
        } catch (error) {
            toast.error(`Erro ao fazer a requisição.` )
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTeams()
    }, [])

    return (
        <MainTemplate>
            <ToastContainer />
            {
                loading ? <div className={homeCss.loading}>
                            <CircularProgress />
                        </div> 
                        :  <ul className={homeCss.ul}>
                                {teams.map((team) => (
                                        <Card  key={team._id} team={team} />          
                                ))}
                            </ul>
            }       
        </MainTemplate>
    )
}

export default Home
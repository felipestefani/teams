import api from '../../services/api'
import MainTemplate from "../../templates/main_template"
import { useContext, useEffect, useState } from 'react';
import Card  from "../../components/TeamCard";
import homeCss from './styles.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import { TeamsContext } from '../../contexts/TeamsContext';

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
            console.log('Erro ao buscar os dados');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTeams()
    }, [])

    return (
        <MainTemplate>
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
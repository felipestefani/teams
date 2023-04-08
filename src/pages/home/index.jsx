import api from '../../services/api'
import MainTemplate from "../../templates/MainTemplate";
import { useEffect, useState } from 'react';
import Card  from "../../components/Card";
import homeCss from './styles.module.css'

const Home = () =>{
    const [teams, setTeams] = useState([])

    async function getTeams() {
        try {
            const {data} = await api.get('/teams', {headers:
            {Authorization: localStorage.getItem('@teams_token')}})
            setTeams(data)
        } catch (error) {
            console.log('Erro ao buscar os dados');
        }
    }

    useEffect(() => {
        getTeams()
    }, [])

    return (
        <MainTemplate>
            <ul className={homeCss.ul}>
                {teams.map((team) => (
                        <Card key={team._id} team={team} />                  
                ))}
            </ul>
        </MainTemplate>
    )
}

export default Home
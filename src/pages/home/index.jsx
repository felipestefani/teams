import api from '../../services/api'
import MainTemplate from "../../templates/MainTemplate";
import { useContext, useEffect, useState } from 'react';
import Card  from "../../components/Card";
import homeCss from './styles.module.css'
import { Link, useNavigate } from "react-router-dom";
import { TeamsContext } from '../../contexts/TeamsContext';

const Home = () =>{
    const [teams, setTeams] = useState([])
    // const { teamId, setTeamId } = useContext(TeamsContext)
    // const navigate = useNavigate()

    async function getTeams() {
        try {
            const { data } = await api.get('/teams', {headers:
            {Authorization: localStorage.getItem('@teams_token')}})
            setTeams(data)
        } catch (error) {
            console.log('Erro ao buscar os dados');
        }
    }

    // function teamInfo(id) {
    //     setTeamId(id)
    //     console.log(teamId);
    //     navigate(`/team_info/${id}`)
    // }

    useEffect(() => {
        getTeams()
    }, [])

    return (
        <MainTemplate>
            <ul className={homeCss.ul}>
                {teams.map((team) => (
                    // <Link onClick={() => teamInfo(team._id)} style={{border: '1px solid red'}} >
                        <Card key={team._id} team={team}/>          
                    // {/* </Link> */}
                    
                ))}
            </ul>
        </MainTemplate>
    )
}

export default Home
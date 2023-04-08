import { useContext, useState } from "react"
import api from '../../services/api'
import { useNavigate } from "react-router-dom";
import authCss from './styles.module.css'
import { AuthContext } from "../../contexts/AuthContext";

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { saveUserData } = useContext(AuthContext)

    async function logar(e){
        e.preventDefault()
        try {
            const {data} = await api.post('/auth', {email, password})
            saveUserData(data.name, data.token)
            navigate('/home')
        } catch (error) {
            alert('Erro na requisição!');
        }
    }

    return (
        <div className={authCss.div}>
            <form>
                <input type="email" placeholder="Informe o email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Informe a senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={logar}>Entrar</button>
            </form>
        </div>
            
    )
}

export default Auth
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import headerCss from './styles.module.css'
import logo from '../../assets/digitalhouse.jpg'

const Header = () => {

    const navigate = useNavigate()
    
    const { name, deleteUserLocalData } = useContext(AuthContext)

    useEffect(() => {
        const token = localStorage.getItem('@teams_token')
        !token ? navigate('/') : null
    })

    function logout(e) {
        e.preventDefault()
        deleteUserLocalData()
        navigate('/')
    }

    return (
        <div className={headerCss.div}>
            <header >
                <img src={logo} alt="" />
                <ul>
                    <li>Olá, {name}</li>
                    <li><button type="submit" onClick={logout}>Sair</button></li>
                </ul>
            </header>
        </div>
        
    )
}

export default Header;
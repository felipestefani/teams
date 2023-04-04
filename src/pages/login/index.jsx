import { useState } from "react"

const Login = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div>
            <form action="">
                <label htmlFor="">Login</label>
                <input type="email" placeholder="e-mail" value={login} onChange={(e) => setLogin(e.target.value)} />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="e-mail" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login
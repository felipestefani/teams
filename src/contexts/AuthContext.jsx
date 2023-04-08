import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [name, setName] = useState('')

    useEffect(() => {
        const userName = localStorage.getItem('@teams_username')
        setName(userName)
    })
    
    function deleteUserLocalData() {
        localStorage.removeItem('@teams_username')
        localStorage.removeItem('@teams_token')
    }

    function saveUserData(name, token) {
        setName(name)
        localStorage.setItem('@teams_username', name)
        localStorage.setItem('@teams_token', token)
    }

        return (
        <AuthContext.Provider value={{  name, saveUserData, deleteUserLocalData }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
import { createContext, useEffect, useState } from "react";

export const TeamsContext = createContext({})

const TeamsProvider = ({children}) => {
    
    const [teamId, setTeamId] = useState('')
    const [productId, setProductId] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(teamId);
    },[])

    return(
        <TeamsContext.Provider
            value={{ teamId, setTeamId, productId, setProductId, loading, setLoading }}>
            {children}
        </TeamsContext.Provider>
    )
}

export default TeamsProvider
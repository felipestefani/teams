import { createContext, useEffect, useState } from "react";

export const TeamsContext = createContext({})

const TeamsProvider = ({children}) => {
    
    const [teamId, setTeamId] = useState('')
    const [productId, setProductId] = useState('')

    useEffect(() => {
        console.log(teamId);
    },[])

    return(
        <TeamsContext.Provider
            value={{ teamId, setTeamId, productId, setProductId }}>
            {children}
        </TeamsContext.Provider>
    )
}

export default TeamsProvider
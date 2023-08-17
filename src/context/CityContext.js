import { createContext, useContext,  useState } from "react";

const UserContext = createContext();

const CityProvider = ({children})=>{
    const [city, setCity] = useState("istanbul")

    const values = {
        city,
        setCity 
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}; 

const useUser = () => useContext(UserContext);

export {useUser, CityProvider}
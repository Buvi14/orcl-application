import { createContext, ReactNode, useContext, useState } from "react";

type ProviderProps ={
    children: React.ReactNode
}

export const Connectionserver = createContext<any>('');

const Context = ({children}:ProviderProps) => {
    const [connectionState,setConnection] = useState<string>('No Server Connected');
    return <Connectionserver.Provider value={{connectionState,setConnection}}>{children}</Connectionserver.Provider>
}

export default Context;
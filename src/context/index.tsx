import React, { createContext, useContext, useState } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const Web3Context = createContext<any>({});

export function useWeb3Context() {
    return useContext(Web3Context);
}

const Web3ContextProvider:React.FC = ({children}) => {
    const [desiredChain, setDesiredChain] = useState<any>(ChainId.Mumbai);
    const value = {
        desiredChain,
        setDesiredChain
    }
    return (
        <Web3Context.Provider value={value}>
            <ThirdwebProvider desiredChainId={desiredChain}>
                {children}
            </ThirdwebProvider>
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider;
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { useWeb3Context } from 'context';
import { ChainId } from "@thirdweb-dev/sdk";
import Modal from 'components/modal'

const SelectChainId = ({handleClick}: any) => {
  return (
    <div className="dark:bg-background-900 bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">✔ Select Chain</h3>
            <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-300">Select chain for which to receive testnet tokens.</p>
            </div>
        </div>
    </div>
    <div className="mt-3 sm:text-left">
    {
      Object.keys(ChainId).map((chain,idx) => 
        isNaN(parseInt(chain)) ? 
        <button key={idx} className="dark:text-white dark:bg-background-800 dark:border-0 border rounded-xl  py-2 w-full my-1" onClick={() => handleClick(chain)}>{chain}</button>  
        : null
      )
    }
    </div>
</div> 
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { desiredChain, setDesiredChain } = useWeb3Context();

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);
  
  const handleClose = useCallback(() => setOpen(false),[]);
  const handleOpen = useCallback(() => {setOpen(true)},[]);
  const handleClick = useCallback((newChain:any) => {setDesiredChain(ChainId[newChain])},[])

  return (
    <header className="flex justify-between items-center py-3"> 
        <Modal 
          open={open}
          Content={() => <SelectChainId handleClick={handleClick} />}
          onClose={handleClose}
        />
      <h2 className="text-2xl font-bold hover:underline hover:cursor-pointer">CLI-Faucet</h2>
      <nav className="flex align-center">
        <button className="button text-white mr-2" onClick={handleOpen}>
          {ChainId[desiredChain] ?? "Select Chain"}
        </button>
        <button
          className="button text-white"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" ? <RiMoonFill /> : <RiSunLine />}
        </button>
      </nav>
    </header>
  );
};

export default Header;

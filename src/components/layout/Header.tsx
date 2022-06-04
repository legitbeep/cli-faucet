import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { useWeb3Context } from 'context';
import { ChainId } from "@thirdweb-dev/sdk";
import Modal from 'components/modal'

const SelectChainId = () => {
  return (
    <>Heeloo</>
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { desiredChain, setDesiredChain } = useWeb3Context();

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
    setDesiredChain((prev: any) => localStorage.getItem("desiredChain") || prev)
  }, []);

  useEffect(() => {
    localStorage.setItem("desiredChain", JSON.stringify(desiredChain));
  }, [desiredChain])
  console.log(desiredChain, ChainId[desiredChain])

  const handleClose = useCallback(() => setOpen(false),[]);

  return (
    <header className="flex justify-between items-center py-3"> 
        <Modal 
          open={open}
          // Content={() => <div>Modal</div>}
          onClose={handleClose}
        />
      <h2 className="text-2xl font-bold hover:underline hover:cursor-pointer">CLI-Faucet</h2>
      <nav className="flex align-center">
        <button className="button text-white mr-2" onClick={() => {setOpen(true)}}>
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

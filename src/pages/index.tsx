import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import {
  useAddress,
  useMetamask,
  useCoinbaseWallet,
  useWalletConnect,
  useDisconnect,
} from "@thirdweb-dev/react";

import ConnectWallet from "components/ConnectWallet";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <NextSeo title="Home" />
      <section data-testid="home-page">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold text-center ">
            CLI-Faucet
          </h1>
          <div className="min-h-[200px] w-full flex flex-col items-center justify-center" >
            {!address 
              ? <div className="max-w-[200px] w-full flex flex-col">
                  <ConnectWallet text="Metamask Wallet" onClick={connectWithMetamask} />
                  <ConnectWallet text="Coinbase Wallet" onClick={connectWithCoinbaseWallet} />
                  <ConnectWallet text="Wallet Connect" onClick={connectWithWalletConnect} />
                </div>
              :
              <>
                <h4><b>Address :</b>{address}</h4>
              <ConnectWallet text="Disconnect Wallet" onClick={disconnectWallet} />
              </> 
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

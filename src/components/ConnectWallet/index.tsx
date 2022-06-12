import React, { useState } from "react";

interface IConnectWallet  {
  text?: string;
  onClick?: (e:any) => void;
}

const ConnectWallet = ({text, onClick}: IConnectWallet) => {
  const handleClick = () => {
    console.log("CLICKED");
  }
  return (
    <button className={`button w-full my-2`} onClick={onClick ?? handleClick}>{text ?? "Connect Wallet"}</button>
  );
};

export default React.memo(ConnectWallet);

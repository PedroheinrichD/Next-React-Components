import { useContext } from "react";
import { CountContext } from "../Context/CountContext";

export function UserOnline() {
  const countCtx = useContext(CountContext);

  function resetToZero() {
    countCtx?.setOnlineCount(0)
  }

  return (
    <>
      <p>Usuários Online: {countCtx?.onlineCount}</p>
      <button className="b-2 bg-amber-800 p-2 rounded cursor-pointer"
        onClick={resetToZero}
      >Zerar</button>
    </>
  );
}

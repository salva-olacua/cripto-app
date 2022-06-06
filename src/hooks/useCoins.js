import { useEffect, useState } from "react";
import { initialData } from "../utils/initialData";
import { getWebSocket } from "../services/getWebSocket";
import { addNewCoinData } from "../utils/utils";

const useCoins = () => {
  const [coins, setCoins] = useState(initialData);

  useEffect(() => {
    const binanceWS = getWebSocket();
    binanceWS.onmessage = (event) => {
      const coin = JSON.parse(event.data);
      setCoins((currentCoins) => addNewCoinData(currentCoins, coin));
    };
  }, []);

  return coins;
};

export default useCoins;

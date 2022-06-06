import React from "react";
import { searchCoins } from "../../utils/utils";
import Row from "../row/Row";
import "./Table.css";

const Table = ({ coins, search }) => {
  const searchedCoins = searchCoins(coins, search);

  return (
      <table>
        <tbody>
          { searchedCoins.map((coin, index) => (<Row key={index} coin={coin} />)) }
        </tbody>
      </table>
  );
};

export default Table;

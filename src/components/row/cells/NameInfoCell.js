import React from "react";
import './cell.css';

const NameInfoCell = ({ symbol, name}) => {
  return (
    <td>
        <p className="paragraph--semi-bold"> {symbol} </p>
        <p className="paragraph__secondary paragraph--semi-bold"> {name} </p>
    </td>
  );
};

export default NameInfoCell;

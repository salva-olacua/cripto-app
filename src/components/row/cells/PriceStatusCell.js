import React from "react";
import style from './PriceStatusCell.module.css';
import './cell.css';

const PriceStatusCell = ({ price, percentage }) => {
  return (
    <td>
      <p className="paragraph__tertiary paragraph--semi-bold"> ARS </p>
      <p> ${price ?? 0} </p>
      <p className={percentage >= 0 ? style.green : style.red}>
        {percentage ?? 0}%
      </p>
    </td>
  );
};

export default PriceStatusCell;

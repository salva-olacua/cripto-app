import React from 'react';
import Canvas from '../canvas/Canvas';
import ImageCell from './cells/ImageCell';
import NameInfoCell from './cells/NameInfoCell';
import PriceStatusCell from './cells/PriceStatusCell';
import './Row.css';

const Row = ({ coin }) => {
  return (
      <tr>
        <ImageCell source={coin?.image} />
        <NameInfoCell symbol={coin?.symbol} name={coin?.name} />
        <td> <Canvas /> </td>
        <PriceStatusCell price={coin?.price} percentage={coin?.percentage} />
      </tr>
  );
};

export default Row;

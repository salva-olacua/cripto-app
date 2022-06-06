import avalanche from '../logos/avalanche.png';
import binanceBnb from '../logos/binance_bnb.png';
import binanceUsd from '../logos/binance_usd.png';
import bitcoin from '../logos/bitcoin.png';
import ethereum from '../logos/ethereum.png';
import litecoin from '../logos/litecoin.png';
import polygon from '../logos/polygon.png';
import luna from '../logos/luna.png';
import solana from '../logos/solana.png';
import xrp from '../logos/xrp.png';
import { ars, specialArs, percentage } from '../utils/utils';

export const initialData = {
  'BTCBUSD': {
    'symbol': 'BTC',
    'name': 'Bitcoin',
    'image': bitcoin,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'ETHBUSD': {
    'symbol': 'ETH',
    'name': 'Ethereum',
    'image': ethereum,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'BNBBUSD': {
    'symbol': 'BNB',
    'name': 'BNB',
    'image': binanceBnb,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'LUNABUSD': {
    'symbol': 'LUNA',
    'name': 'Terra',
    'image': luna,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'SOLBUSD': {
    'symbol': 'SOL',
    'name': 'Solana',
    'image': solana,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'LTCBUSD': {
    'symbol': 'LTC',
    'name': 'Litecoin',
    'image': litecoin,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'MATICBUSD': {
    'symbol': 'MATIC',
    'name': 'Polygon',
    'image': polygon,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'AVAXBUSD': {
    'symbol': 'AVAX',
    'name': 'Avalanche',
    'image': avalanche,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'XRPBUSD': {
    'symbol': 'XRP',
    'name': 'XRP',
    'image': xrp,
    'ars': ({ a }) => ars(a),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  },
  'BUSDUSDT': {
    'symbol': 'BUSD',
    'name': 'Binance USD',
    'image': binanceUsd,
    'ars': ({ b }) => specialArs(b),
    'price': 0,
    'getPercentage': ({o, c}) => percentage(o, c),
    'percentage': 0
  }
};
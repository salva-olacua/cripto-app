import { endPoints } from '../utils/endPoints';

const baseEndpoint = 'wss://stream.binance.com:9443/ws/';

export const getWebSocket = () => {
  return new WebSocket(baseEndpoint+endPoints.join('/'));
}
import io from 'socket.io-client';
import { marketDataRoute } from './apiRoutes';

export function getMarketPrice () {
    return io(marketDataRoute,  { transports: ['websocket', 'polling', 'flashsocket'] })
}
import { fromJS } from 'immutable';

export const itemsAvailable = fromJS({
  'MB': {
    id: 'MB',
    name: 'MacBook Pro',
    price: 1200,
  },
  'AD': {
    id: 'AD',
    name: 'Apple Display',
    price: 1000,
  },
  'LM': {
    id: 'LM',
    name: 'Logitech Mouse',
    price: 14,
  },
  'AK': {
    id: 'AK',
    name: 'Apple Keyboard',
    price: 36,
  },
  'DL': {
    id: 'DL',
    name: 'Desk Lamp',
    price: 24,
  },
  'TP': {
    id: 'TP',
    name: '3d Printer',
    price: 399,
  },
  'AU': {
    id: 'AU',
    name: 'Arduino Uno',
    price: 34,
  },
  'PP': {
    id: 'PP',
    name: 'Particle Photon',
    price: 19,
  },
});

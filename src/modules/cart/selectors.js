import { createSelector } from 'reselect';

import { itemsAvailable } from 'modules/cart/constants';

export const getItems = (state) => state.cart.get('items');
export const getSelectedState = (state) => state.cart.get('state');

export const getItemsWithTotals = createSelector(
  [ getItems ],
  (items) => {
    return items.map(i => {
      return i.set('total', i.get('price', 0) * i.get('quantity'));
    });
  }
);

export const getItemSubtotal = createSelector(
  [ getItemsWithTotals ],
  (items) => {
    return items.reduce((acc, i) => {
      return acc + i.get('total');
    }, 0);
  },
);

export const getFinalTotal = createSelector(
  [ getItemSubtotal ],
  (subtotal) => {
    return subtotal;
  },
);

export const getAvailableItems = createSelector(
  [ getItems ],
  (items) => {
    return itemsAvailable.filter(i => !items.has(i.get('id')));
  },
);

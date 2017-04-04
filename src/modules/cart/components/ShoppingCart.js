import React from 'react';

import { getFinalTotal } from 'modules/cart/selectors';

import CartItems from 'modules/cart/components/CartItems';
import DisplayValue from 'modules/cart/components/DisplayValue';
import AvailableItems from 'modules/cart/components/AvailableItems';

function ShoppingCart() {
  return (
    <main
      style={{ maxWidth: 900, margin: '4rem auto' }}
      className="flex flex-column justify-center">
      <div className="flex-auto">
        <table className="table table-light">
          <h2>Cart</h2>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th />
            </tr>
          </thead>
          <CartItems />
          <tfoot>
            <tr>
              <td className="bold align-middle" colSpan="4">
                <div className="right">Total amount:</div>
              </td>
              <td className="bold align-middle">
                <DisplayValue id="total" selector={ getFinalTotal } />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex-auto">
        <h2>Products</h2>
        <AvailableItems />
      </div>
    </main>
  );
}

ShoppingCart.displayName = 'ShoppingCart';
ShoppingCart.propTypes = {};
ShoppingCart.defaultProps = {};

export default ShoppingCart;

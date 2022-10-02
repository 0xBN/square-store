import styles from './styles.module.css';
import React from 'react';
import { catalog as storeCatalog } from '../../storeCatalog';
import { nanoid } from 'nanoid';

export const Cart = ({ totalItems, setTotalItems }) => {
  let cartData = JSON.parse(localStorage.getItem('cart'));
  let cartList = [];
  let totalCost = 0;
  const [localStorageCart, setLocalStorageCart] = React.useState(cartData);

  const showCart = (cart) => {
    let keys = Object.keys(cart);
    for (let item of keys) {
      let itemName = storeCatalog[item].title;
      let itemPrice = storeCatalog[item].price;
      let itemQuantity = cart[item];
      let itemImage = storeCatalog[item].imageLink;

      totalCost += itemQuantity * itemPrice;

      cartList.push(
        <div key={nanoid()} className={styles.product}>
          <img src={itemImage} alt='' />
          <div className={styles.rightSide}>
            <div className={styles.itemName}>{itemName}</div>
            <div className={styles.amount}>
              <input
                type='number'
                value={localStorageCart[item]}
                name={item}
                onChange={(e) => editCart(e)}
              />
              x {itemPrice}
            </div>
          </div>
        </div>
      );
    }

    return cartList;
  };

  const editCart = (e) => {
    const { name, value } = e.target;
    if (value < 0) return;
    setLocalStorageCart((prevState) => {
      return { ...prevState, [name]: Number(value) };
    });
  };

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(localStorageCart));

    let totalItemsTemp = 0;
    for (let item in localStorageCart) totalItemsTemp += localStorageCart[item];

    setTotalItems(totalItemsTemp);
  }, [localStorageCart, totalItems, setTotalItems]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Cart</h1>
      <div className={styles.itemContainer}>
        {showCart(localStorageCart)}
        {/* <div>--------------</div> */}
      </div>
      <div className={styles.total}>
        <div>
          <strong>Items</strong>: {totalItems}
        </div>
        <div>
          <span>
            <strong>Total: </strong>
          </span>
          {totalCost.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </div>
      </div>
    </div>
  );
};

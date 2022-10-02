import styles from './styles.module.css';
import React from 'react';

export const Product = ({
  title,
  price,
  imageLink,
  cart,
  setCart,
  item,
  totalItems,
  setTotalItems,
}) => {
  const [quantity, setQuantity] = React.useState('');

  const addToCart = (item, quantity) => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    let newQuantity = !localStorageCart[item]
      ? Number(quantity)
      : cart[item] + Number(quantity);

    setCart((prevCart) => {
      return {
        ...prevCart,
        [item]: newQuantity,
      };
    });
  };

  React.useEffect(() => {
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    let totalQuantity = 0;
    for (let item in cart) totalQuantity += cart[item];
    setTotalItems(totalQuantity);
  }, [cart, setTotalItems]);

  return (
    <div className={styles.container}>
      <img src={imageLink} alt='original-red-square' />
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productPrice}>${price}</div>
      <div className={styles.quantity}>
        <button
          className={styles.decrement}
          onClick={() => {
            if (quantity === 0 || quantity === '') return;
            else setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <input
          type='text'
          placeholder='0'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className={styles.increment}
          onClick={() => setQuantity(Number(quantity) + 1)}
        >
          +
        </button>
      </div>
      <button
        className={styles.addToCartBtn}
        onClick={() => {
          if (quantity === 0 || quantity === '') return;
          addToCart(item, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

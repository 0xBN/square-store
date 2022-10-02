import styles from './styles.module.css';
import React from 'react';

export const CartBtn = ({ cart, totalItems, setTotalItems }) => {
  return (
    <div>
      <a className={styles.cartButton} href='./cart'>
        Cart ({totalItems})
      </a>
    </div>
  );
};

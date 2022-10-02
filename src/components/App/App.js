import styles from './styles.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Cart, Shop, Home, Contact } from 'pages';
import { Footer, Header } from 'components';

export const App = () => {
  const localStorageCart = JSON.parse(localStorage.getItem('cart'));

  const [cart, setCart] = React.useState(
    localStorageCart ? localStorageCart : 0
  );

  let total = 0;
  for (let item in localStorageCart) total += localStorageCart[item];
  const [totalItems, setTotalItems] = React.useState(total);

  return (
    <div className={styles.main}>
      <Header
        cart={cart}
        totalItems={totalItems}
        setTotalItems={setTotalItems}
      />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route
            path='/cart'
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                totalItems={totalItems}
                setTotalItems={setTotalItems}
              />
            }
          />
          <Route
            path='/shop'
            element={
              <Shop
                cart={cart}
                setCart={setCart}
                totalItems={totalItems}
                setTotalItems={setTotalItems}
              />
            }
          />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

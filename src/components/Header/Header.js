import styles from './styles.module.css';
import { CartBtn } from 'components';

export const Header = ({ cart, totalItems, setTotalItems }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <a href='./'>TheSquareStore.</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a className={styles.navlinks} href='/'>
              Home
            </a>
          </li>
          <li>
            <a className={styles.navlinks} href='./shop'>
              Shop
            </a>
          </li>
          <li>
            <a className={styles.navlinks} href='./contact'>
              Contact
            </a>
          </li>
          <li>
            <CartBtn
              cart={cart}
              totalItems={totalItems}
              setTotalItems={setTotalItems}
            />
            {console.log('rendered Cart number')}
          </li>
        </ul>
      </nav>
    </div>
  );
};

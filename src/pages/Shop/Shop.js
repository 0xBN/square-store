import styles from './styles.module.css';
import { Product } from 'components';
import { catalog } from '../../storeCatalog';
import { nanoid } from 'nanoid';

export const Shop = ({ cart, setCart, totalItems, setTotalItems }) => {
  const showCatalog = (catalog) => {
    let catalogList = [];
    for (let item in catalog) {
      const { title, price, imageLink } = catalog[item];

      catalogList.push(
        <div key={nanoid()}>
          <Product
            item={item}
            title={title}
            price={price}
            imageLink={imageLink}
            cart={cart}
            setCart={setCart}
            totalItems={totalItems}
            setTotalItems={setTotalItems}
          />
        </div>
      );
    }
    return catalogList;
  };
  return (
    <div className={styles.shopPage}>
      <div className={styles.container}>{showCatalog(catalog)}</div>
    </div>
  );
};

import styles from './styles.module.css';

export const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <h1>TheSquareStore.</h1>
        <p>
          <strong>Visit us: </strong>Plaza 333, Square Drive, Stockholm SWE
        </p>

        <p>
          <strong>Write us: </strong>hello@thesquarestore.com
        </p>
      </div>
      <img src='https://bit.ly/3dUCTXR' alt='' />
    </div>
  );
};

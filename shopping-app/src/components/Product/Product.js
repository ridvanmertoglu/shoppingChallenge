import React from 'react';
import styles from './Product.module.scss';

const Product = ({price,name}) => {

    const handleOnclickAdd = () => {
        console.log("Add");
    }

    return (
     <div className={styles.container}>
        <div className={styles.imageContainer}>
            <div 
                className={styles.image}
            /> 
        </div>
        <div>
            <p className={styles.price}>₺ {price}</p>
            <p className={styles.name}>{name}</p>
            <button 
            onClick={handleOnclickAdd}
            className={styles.addButton}>Add</button>
        </div>
     </div>   
     
    );
  }
  
  export default Product;
  
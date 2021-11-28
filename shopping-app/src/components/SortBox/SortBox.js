import React, {useState} from 'react';
import styles from './SortBox.module.scss';


const SortBox = ({title, handleClickSort}) => {

  const [checkboxData] = useState( [  
    {id: 1, value: "Price low to high"},  
    {id: 2, value: "Price high to low"},  
    {id: 3, value: "New to old"},  
    {id: 4, value: "Old to new"} 
  ]);

  const handleChange = (event) => {  
    handleClickSort(event.target.id);
  } 

    return (
     <div className={styles.container}>
       <p className={styles.titleText}>{title}</p>
       <div className={styles.sortBoxContent}>
       {checkboxData.map((item) => (
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox}
            type="radio"  
            name="sorting"
            id={item.id}  
            onChange={handleChange}  
          />
          <p className={styles.checkboxText}>{item.value}</p>  
       </div>
       ))}
       </div>
      </div>   
     
    );
  }
  
  export default SortBox;
  
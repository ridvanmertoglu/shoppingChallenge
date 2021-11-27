import React, {useState} from 'react';
import styles from './SortBox.module.scss';


const SortBox = ({title, searchable}) => {

  const [checkboxData] = useState( [  
    {id: 1, value: "Price low to high"},  
    {id: 2, value: "Price high to low"},  
    {id: 3, value: "New to old"},  
    {id: 4, value: "Old to new"} 
  ]);
  const [filteredData, setFilteredData] = useState(checkboxData);


  const handleChange = (event) => {  
    var isChecked = event.target.checked;  
    var item = event.target.value;    
    console.log(isChecked,item) 
} 

    const handleOnChange = e => {
        if (e.target.value === "") {
            setFilteredData(checkboxData);
        } else {
            setFilteredData(checkboxData.filter((data) => data.value.toLowerCase().includes(e.target.value))); 
        }
    };  

    return (
     <div className={styles.container}>
       <p className={styles.titleText}>{title}</p>
       <div className={ searchable ? styles.sortBoxContentWithSearch : styles.sortBoxContentWithoutSearch}>
       {searchable &&
       <input 
         className={styles.searchInput}
         onChange = {handleOnChange}
         placeholder={`Search ${title}`}  
       />
       
       }
       {filteredData.map((item) => (
        <div className={styles.checkboxContainer}>
        <input className={styles.checkbox}
           type="checkbox"  
           value={item.id}  
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
  
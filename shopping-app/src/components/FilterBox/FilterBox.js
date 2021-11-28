/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import styles from './FilterBox.module.scss';

const FilterBox = ({title, handleClickSort, defaultData, tagFilter}) => {

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(defaultData);
  const [alreadySet, setAlreadySet] = useState(false);


  useEffect(() => {
    if (defaultData && defaultData.length > 0 && !alreadySet) {
      setData(defaultData);
      setFilteredData(defaultData);
      setAlreadySet(true);
    }
  }, [defaultData])


  const handleChange = (event) => {  
    handleClickSort(event.target.id);
} 

    const handleOnChange = e => {
        if (e.target.value === "") {
            setFilteredData(defaultData);
        } else {
          if (tagFilter) {
            setFilteredData(data.filter((element) => element.toLowerCase().includes(e.target.value))); 
          } else {
            setFilteredData(data.filter((element) => element.name.toLowerCase().includes(e.target.value))); 
          }
            
        }
    };  

    return (
     <div className={styles.container}>
       <p className={styles.titleText}>{title}</p>
       <div className={styles.filterBoxContent}>
       <input 
         className={styles.searchInput}
         onChange = {handleOnChange} 
       />
       {filteredData.map((element) => (
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox}
            type="radio"  
            name="filter"
            id={tagFilter ? element : element.slug}  
            onChange={handleChange}  
          />
          <p className={styles.checkboxText}>{tagFilter ? element : element.slug}</p>  
       </div>
       ))}
       </div>
      </div>   
     
    );
  }
  
  export default FilterBox;
  
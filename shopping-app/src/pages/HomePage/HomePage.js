import React  from 'react';
import styles from './HomePage.module.scss';
import { SortBox, Product } from '../../components';
import {Row,Col} from 'react-bootstrap'


const HomePage = () => {

    const handleOnclickMug = () => {
      console.log("Mug");
  }

  const handleOnclickShirt = () => {
    console.log("Shirt");
  }

    return (
      <div className={styles.container}>
      <Row>
      <Col md={3} >
      <SortBox title="Sorting"/>
      <SortBox title="Brands" searchable/>
      <SortBox title="Tags" searchable/>
      </Col>
      <Col md={6}>
      <Row>
        <p className={styles.productsTitle}>Products</p>
        <div className={styles.buttonContainer}>
        <button 
          onClick={handleOnclickMug}
          className={styles.activeItemTypeButton}>mug</button>
        <button 
          onClick={handleOnclickShirt}
          className={styles.itemTypeButton}>shirt</button>
        </div>
      </Row>
      <Row>
        <Col className={styles.productsCol}>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
          <Product 
          name="Gorgeous Office Mug"
          price={10.99}/>
        </Col>
      </Row>
      
     
      </Col>
      </Row>
      </div>
    );
  }
  
  export default HomePage;
  
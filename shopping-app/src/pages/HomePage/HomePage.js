import React  from 'react';
import styles from './HomePage.module.scss';
import { SortBox } from '../../components';
import {Row,Col} from 'react-bootstrap'


const HomePage = () => {

    return (
      <div className={styles.container}>
      <Row>
      <Col md={3} >
      <SortBox title="Sorting"/>
      <SortBox title="Brands" searchable/>
      <SortBox title="Tags" searchable/>
      
      </Col>
      </Row>
      </div>
    );
  }
  
  export default HomePage;
  
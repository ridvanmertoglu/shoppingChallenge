/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect}  from 'react';
import styles from './HomePage.module.scss';
import { SortBox, Product, Basket } from '../../components';
import {Row,Col} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import {  useDispatch } from 'react-redux';
import { basketActions } from '../../redux/actions';


const HomePage = () => {

  const dispatch = useDispatch();

  let defaultItems = Object.values(useSelector((state) => state.itemsReducer.items))
  const basketContent = useSelector((state) => state.basketReducer.products)
  const basketTotalPrice = useSelector((state) => state.basketReducer.totalPrice)

  const [alreadySet, setAlreadySet] = useState(false);
  const [items, setItems] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeTab, setActiveTab] = useState("mug");

  useEffect(() => {
    if (defaultItems && defaultItems.length > 0 && !alreadySet) {
      setItems(defaultItems.filter((item) => item.itemType === "mug"))
      setAlreadySet(true);
    }
  }, [defaultItems])
  

  useEffect(() => {
    if (items !== undefined) {
      const endOffset = itemOffset + 16;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / 16));
    }
  }, [itemOffset,items]);

  const handleOnclickMug = () => {
    setActiveTab("mug");
    setItems(defaultItems.filter((item) => item.itemType === "mug"));
  }

  const handleOnclickShirt = () => {
    setActiveTab("shirt");
    setItems(defaultItems.filter((item) => item.itemType === "shirt"));
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 16) % items.length;
    setItemOffset(newOffset);
  };

  const addProductToBasket = (item) => {
    const newBasketContent = basketContent;
    let newTotalPrice = basketTotalPrice;

    const addedItem = basketContent.find((product) => product.name === item.name)
    if (addedItem !== undefined) {
        newBasketContent[basketContent.indexOf(addedItem)] = {
          ...addedItem,
          count: addedItem.count + 1
        }
        newTotalPrice += addedItem.price
    } else {
        newBasketContent.push({
          name: item.name,
          price: item.price,
          count: 1,
        })
        newTotalPrice += item.price
    }
    dispatch(basketActions.setBasket(newBasketContent))
    dispatch(basketActions.setTotalPrice(newTotalPrice));
  }

  

  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <Product 
              name={item.name}
              price={item.price}
              handleOnclickAdd={() => addProductToBasket(item)}
              />
          ))}
      </>
    );
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
          className={activeTab === "mug" ? styles.activeItemTypeButton :styles.itemTypeButton}>mug</button>
        <button 
          onClick={handleOnclickShirt}
          className={activeTab === "shirt" ? styles.activeItemTypeButton :styles.itemTypeButton}>shirt</button>
        </div>
      </Row>
      <Row>
        <Col className={styles.productsCol}>
          <Items currentItems={currentItems} />
        </Col>
        <ReactPaginate
          className={styles.pagination}
          breakLabel="..."
          nextLabel="NEXT >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< PREV"
          renderOnZeroPageCount={null}
          pageClassName={styles.pageItem}
      />
      </Row>
      </Col>
      <Col md={3}>
        <Basket />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default HomePage;
  
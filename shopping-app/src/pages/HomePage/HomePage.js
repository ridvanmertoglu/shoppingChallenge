/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect}  from 'react';
import styles from './HomePage.module.scss';
import { SortBox, FilterBox, Product, Basket } from '../../components';
import {Row,Col} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import {  useDispatch } from 'react-redux';
import { basketActions } from '../../redux/actions';


const HomePage = () => {

  const dispatch = useDispatch();

  let defaultItems = Object.values(useSelector((state) => state.itemsReducer.items));
  let defaultCompanies = Object.values(useSelector((state) => state.companiesReducer.companies));
  let defaultTags = Object.values(useSelector((state) => state.itemsReducer.tags));
  const basketContent = useSelector((state) => state.basketReducer.products);
  const basketTotalPrice = useSelector((state) => state.basketReducer.totalPrice);
  
  const [alreadySet, setAlreadySet] = useState(false);
  const [items, setItems] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeTab, setActiveTab] = useState("mug");
  const [sortCounter, setSortCounter] = useState(0);
  const [itemTags, setItemTags] = useState([]);


 



  useEffect(() => {
    if (defaultItems && defaultItems.length > 0 && !alreadySet) {
      setItems(defaultItems.filter((item) => item.itemType === "mug"));
      setAlreadySet(true);
    }
  }, [defaultItems])
  

  useEffect(() => {
    if (items !== undefined) {
      const endOffset = itemOffset + 16;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / 16));
    }
  }, [itemOffset,items,sortCounter]);

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

  const handleOnClickSort = (sortId) => {
    if (sortId === '1') {
      items.sort((item1,item2) => item1.price > item2.price ? 1 : item2.price > item1.price ? -1 : 0); 
    } else if (sortId === '2') {
      items.sort((item1,item2) => item1.price < item2.price ? 1 : item2.price < item1.price ? -1 : 0); 
    } else if (sortId === '3') {
      items.sort((item1,item2) => item1.added < item2.added ? 1 : item2.added < item1.added ? -1 : 0); 
    } else if (sortId === '4') {
      items.sort((item1,item2) => item1.added > item2.added ? 1 : item2.added > item1.added ? -1 : 0); 
    }
    setSortCounter(sortCounter + 1);
  }

  const handleOnclickFilter = (filterName) => {
    setItems(defaultItems.filter((item) => item.manufacturer === filterName))
  }

  const handleOnclickTagFilter = (filterName) => {
    setItems(defaultItems.filter((item) => item.tags.includes(filterName)))
  }

    return (
      <div className={styles.container}>
      <Row>
      <Col md={3} >
      <SortBox title="Sorting" handleClickSort={handleOnClickSort}/>
      <FilterBox title="Brands" handleClickSort={handleOnclickFilter} defaultData={defaultCompanies}/>
      <FilterBox title="Tags" handleClickSort={handleOnclickTagFilter} defaultData={defaultTags} tagFilter/>
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
          nextLabel="Next>"
          nextLinkClassName={styles.pageItem}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<Prev"
          previousLinkClassName={styles.pageItem}
          renderOnZeroPageCount={null}
          pageClassName={styles.pageItem}
          activeClassName={styles.activePage}
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
  
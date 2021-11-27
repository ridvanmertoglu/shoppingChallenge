/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { itemsActions } from './redux/actions';
import { itemService } from './services';
import { DefaultLayout } from './layouts';
import { HomePage } from './pages';


const App = () => {

  const dispatch = useDispatch();

  const fetchItems = async () => {
    try {
      const { data } = await itemService.getItems();
      dispatch(itemsActions.setItems(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <DefaultLayout>
       <HomePage />
    </DefaultLayout>
   
  );
}

export default App;

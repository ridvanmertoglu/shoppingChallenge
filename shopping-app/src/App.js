/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { itemsActions,companiesActions } from './redux/actions';
import { itemService, companiesService } from './services';
import { DefaultLayout } from './layouts';
import { HomePage } from './pages';


const App = () => {

  const dispatch = useDispatch();

  const fetchItems = async () => {
    try {
      const tags = [];
      const { data } = await itemService.getItems();
      data.forEach((item) => {
        item.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        })
      })
      dispatch(itemsActions.setItems(data));
      dispatch(itemsActions.setTags(tags));

    } catch (error) {
      console.log(error);
    }
  }

  const fetchCompanies = async () => {
    try {
      const { data } = await companiesService.getCompanies();
      dispatch(companiesActions.setCompanies(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchItems();
    fetchCompanies();
  }, [])


  return (
    <DefaultLayout>
       <HomePage />
    </DefaultLayout>
   
  );
}

export default App;

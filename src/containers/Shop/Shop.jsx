import React, { useEffect, useContext } from 'react';

import { Cart } from '../../components/Cart';
import { CartList } from '../../components/CartList';
import { Layout } from '../../components/Layout';
import { Notification } from '../../components/Notification';

import { ShopList } from './components/ShopList';

import { API_SHOP_URL } from '../../config';
import { ShopContext } from '../../Сontext/ShopContext';

const apiKey = process.env.REACT_APP_API_KEY_SHOP;

const Shop = (props) => {
  const { setIsItemsLoading, resetIsItemsLoading, setItems } = useContext(ShopContext);

  useEffect(() => {
    handleGetItems();
  }, []);

  const handleGetItems = () => {
    setIsItemsLoading();

    fetch(API_SHOP_URL, { headers : { 'Authorization': apiKey } })
      .then(response => response.json())
      .then(data => {
        setItems(data.featured.slice(0, 50));
        resetIsItemsLoading();
      })
      .catch(err => {
        console.error(err);
        resetIsItemsLoading();
      });
  };

  return (
    <Layout title="Shop">
      <div className="container content">
        <Cart />

        <CartList />

        <ShopList />

        <Notification />
      </div>
    </Layout>
  );
};

export default Shop;
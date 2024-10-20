import React, { useEffect, useState } from 'react';

import { Cart } from '../../components/Cart';
import { CartList } from '../../components/CartList';
import { Preloader } from '../../components/Preloader';
import { ShopItem } from '../../components/ShopItem';

import { API_SHOP_URL } from '../../config';
import { Notification } from '../../components/Notification';

const apiKey = process.env.REACT_APP_API_KEY_SHOP;

export const Shop = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [notificationContent, setNotificationContent] = useState(null);

  useEffect(() => {
    handleGetItems();
  }, []);

  const handleCartOpened = () => {
    setIsCartOpened((prevState) => !prevState);
  }

  const handleGetItems = () => {
    setLoading(true);

    fetch(API_SHOP_URL, { headers : { 'Authorization': apiKey } })
      .then(response => response.json())
      .then(data => {
        setItems(data.featured || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleSetItemToOrder = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, count: 1 };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, id) => {
        if (id === itemIndex) {
          return {
            ...orderItem,
            count: orderItem.count + 1,
          }
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
      setNotificationContent(`${item.name} добавлен в корзину`);
    }
  };

  const handleRemoveItemFromOrder = (id) => {
    setOrder(order.filter(orderItem => orderItem.id !== id));
  };

  const handleChangeItemCount = (id, actionType) => {
    const newOrder = order.map((orderItem) => {
      const item = order.find((orderItem) => orderItem.id === id);

      if (orderItem.id === id) {
        const newCount = actionType === 'increase' ? item.count + 1 : item.count - 1;

        return { ...orderItem, count: newCount };
      }

      return orderItem;
    })

    setOrder(newOrder);
  };

  const handleCloseNotification = () => {
    setNotificationContent(null);
  }

  return (
    <div className="container content">
      {!loading && <Cart quantity={order.length} onCartOpened={handleCartOpened} />}

      {isCartOpened && (
        <CartList
          order={order}
          onCartOpened={handleCartOpened}
          onChangeItemCount={handleChangeItemCount}
          onRemoveItem={handleRemoveItemFromOrder}
        />
      )}

      {loading 
        ? <Preloader />
        : items.length
          ? <div className="items">
            {items.map((item) => 
              <ShopItem key={Math.ceil(Math.random() * 10) + item.id + Math.ceil(Math.random() * 10)} item={item} handleSetItemToOrder={handleSetItemToOrder} />
            )}
          </div>
          : <>Nothing founded</>
      }

      {notificationContent && (
        <Notification
          content={notificationContent}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};
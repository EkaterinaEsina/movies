import { createContext, useReducer } from 'react';

import { initialState, shopReducer } from './reducer';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [shopValue, dispatch] = useReducer(shopReducer, initialState);

  // notification
  shopValue.openNotification = (content) => dispatch({ type: 'OPEN_NOTIFICATION', payload: content });
  shopValue.closeNotification = () => dispatch({ type: 'CLOSE_NOTIFICATION' });

  // showing cart
  shopValue.openCart = () => dispatch({ type: 'OPEN_CART' });
  shopValue.closeCart = () => dispatch({ type: 'CLOSE_CART' });

  // items loading state
  shopValue.setIsItemsLoading = () => dispatch({ type: 'SET_IS_ITEMS_LOADING' });
  shopValue.resetIsItemsLoading = () => dispatch({ type: 'RESET_IS_ITEMS_LOADING' });

  // setting loaded items
  shopValue.setItems = (items) => dispatch({ type: 'SET_ITEMS', payload: items });

  // setting item to order
  shopValue.setItemToOrder = (item) => dispatch({ type: 'ADD_ITEM_TO_ORDER', payload: item });

  // setting item to order
  shopValue.changeItemCount = (item) => dispatch({ type: 'CHANGE_ITEM_COUNT', payload: item });

  // removing item from order
  shopValue.removeItemFromOrder = (itemId) => dispatch({ type: 'REMOVE_ITEM_FROM_ORDER', payload: itemId });

  // change item count
  shopValue.increaseItemCount = (id) => dispatch({ type: 'INCREASE_ITEM_COUNT', payload: id });
  shopValue.decreaseItemCount = (id) => dispatch({ type: 'DECREASE_ITEM_COUNT', payload: id });

  return <ShopContext.Provider value={shopValue}>
    {children}
  </ShopContext.Provider>
};

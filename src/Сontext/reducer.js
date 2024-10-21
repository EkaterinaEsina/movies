export const initialState = {
  items: [],
  isItemsLoading: false,
  order: [],
  isCartOpened: false,
  notificationContent: null,
};

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_IS_ITEMS_LOADING': {
      return {
        ...state,
        isItemsLoading: true,
      }
    }

    case 'RESET_IS_ITEMS_LOADING': {
      return {
        ...state,
        isItemsLoading: false,
      }
    }

    case 'OPEN_CART': {
      return {
        ...state,
        isCartOpened: true,
      }
    }

    case 'CLOSE_CART': {
      return {
        ...state,
        isCartOpened: false,
      }
    }

    case 'OPEN_NOTIFICATION': {
      return {
        ...state,
        notificationContent: payload,
      }
    }

    case 'CLOSE_NOTIFICATION': {
      return {
        ...state,
        notificationContent: initialState.notificationContent,
      }
    }

    case 'REMOVE_ITEM_FROM_ORDER': {
      return {
        ...state,
        order: state.order.filter(orderItem => orderItem.id !== payload),
      }
    }

    case 'SET_ITEMS': {
      return {
        ...state,
        items: payload || [],
      }
    }

    case 'ADD_ITEM_TO_ORDER': {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

      if (itemIndex < 0) {
        const newItem = { ...payload, count: 1 };

        return {
          ...state,
          order: [...state.order, newItem],
        }
      } else {
        const newOrder = state.order.map((orderItem, id) => {
          if (id === itemIndex) {
            return {
              ...orderItem,
              count: orderItem.count + 1,
            }
          } else {
            return orderItem;
          }
        });

        return {
          ...state,
          order: newOrder,
          notificationContent: `${payload.name} добавлен в корзину`,
        }
      }
    }

    case 'INCREASE_ITEM_COUNT': {
      const newOrder = state.order.map((orderItem) => {
        const item = state.order.find((orderItem) => orderItem.id === payload);
  
        if (orderItem.id === payload) {
          return { ...orderItem, count: item.count + 1 };
        }
  
        return orderItem;
      });
  
      return {
        ...state,
        order: newOrder,
      }
    }

    case 'DECREASE_ITEM_COUNT': {
      const newOrder = state.order.map((orderItem) => {
        const item = state.order.find((orderItem) => orderItem.id === payload);
  
        if (orderItem.id === payload) {
          return { ...orderItem, count: item.count - 1 };
        }
  
        return orderItem;
      });
  
      return {
        ...state,
        order: newOrder,
      }
    }

    default: 
      return state;
  }
}
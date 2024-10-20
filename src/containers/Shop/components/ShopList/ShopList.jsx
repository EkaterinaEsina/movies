import { useContext } from 'react';

import { Preloader } from '../../../../components/Preloader';
import { ShopItem } from '../../../../components/ShopItem';

import { ShopContext } from '../../../../Сontext/ShopContext';

export const ShopList = () => {
  const { items, isItemsLoading } = useContext(ShopContext);

  if (isItemsLoading) {
    return <Preloader />;
  }

  if (!items.length) {
    return <>Nothing founded</>;
  }

  const shopItemId = (id) => `${Math.ceil(Math.random() * 10)}${id}${Math.ceil(Math.random() * 10)}`;

  return (
    <div className="items">
        {items.map((item) => <ShopItem key={shopItemId} item={item} />)}
    </div>
  );
}
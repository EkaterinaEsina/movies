import { DishItem } from '../RecipeItem';

export const DishesList = ({ dishes }) => {
  if (!dishes.length) {
    return <>Nothing founded</>;
  }

  return (
    <div className="list">
      {dishes.map((dish) => <DishItem key={dish.idMeal} dish={dish} />)}
    </div>
  );
}
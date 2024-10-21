import { CategoryItem } from '../CategoryItem';

export const CategoryList = ({ categories }) => {
  if (!categories.length) {
    return <>Nothing founded</>;
  }

  return (
    <div className="list">
      {categories.map((category) => <CategoryItem key={category.idCategory} category={category} />)}
    </div>
  );
}
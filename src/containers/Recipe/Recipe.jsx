import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { Preloader } from '../../components/Preloader';

import { RecipeItem } from './components/RecipeItem';

import { getMealById } from '../../api';

const Meal = (props) => {
  const { name, recipeId } = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    handleGetCategory();
  }, [name]);

  const handleGetCategory = () => {
    getMealById(recipeId)
      .then(data => setRecipe(data.meals[0]));
  };

  return (
    <Layout title={`Category ${name} meals`}>
      <div className="container content">
        {!recipe 
          ? <Preloader />
          : <RecipeItem recipe={recipe} />
        }
      </div>
    </Layout>
  );
};

export default Meal;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { Preloader } from '../../components/Preloader';

import { DishesList } from './components/DishesList';

import { getFilteredCategories } from '../../api';

const Meal = (props) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [categoryDishes, setCategoryDishes] = useState([]);

  useEffect(() => {
    handleGetCategory();
  }, [name]);

  const handleGetCategory = () => {
    getFilteredCategories(name)
      .then(data => setCategoryDishes(data.meals));
  };

  return (
    <Layout title={`Category ${name} meals`}>
      <div className="container content">
        <button className="btn" onClick={() => navigate(-1)}>
          <i className="material-icons">arrow_back</i>
          GO BACK
        </button>

        {!categoryDishes.length 
          ? <Preloader />
          : <DishesList dishes={categoryDishes} />
        }
      </div>
    </Layout>
  );
};

export default Meal;
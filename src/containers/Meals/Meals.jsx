import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { Filter } from '../../components/Filter';
import { Layout } from '../../components/Layout';
import { Preloader } from '../../components/Preloader';

import { CategoryList } from './components/CategoryList';

import { getAllCategories } from '../../api';

const Meals = (props) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  useEffect(() => {
    handleGetAllCategories();
  }, [urlSearchParams]);

  const handleGetAllCategories = () => {
    getAllCategories().then(data => {
      setCategories(data.categories);
      setFilteredCategories(
        urlSearchParams.size
          ? data.categories.filter(category => 
            category.strCategory.toLowerCase() === urlSearchParams.get('search').toLowerCase())
          : data.categories
      );
    });
  };

  const handleSearch = (str) => {
    setFilteredCategories(
      categories.filter((category) => 
        category.strCategory.toLowerCase().includes(str.toLowerCase()))
    );

    setUrlSearchParams(str.length ? { search: str } : urlSearchParams.delete('search'));
  };

  return (
    <Layout title="Meals">
      <div className="container content">
        <Filter onSubmit={handleSearch} initialFilter={urlSearchParams.get('search') || ''}  />

        {!categories.length 
          ? <Preloader />
          : <CategoryList categories={filteredCategories} />
        }
      </div>
    </Layout>
  );
};

export default Meals;
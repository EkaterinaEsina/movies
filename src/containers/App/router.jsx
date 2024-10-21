import { createBrowserRouter, json } from 'react-router-dom';

import { route as notFoundPageRoute } from '../NotFoundPage';
import { route as mealPageRoute } from '../Meal';
import { route as mealsPageRoute } from '../Meals';
import { route as moviesPageRoute } from '../Movies';
import { route as postsPageRoute } from '../Posts';
import { route as recipePageRoute } from '../Recipe';
import { route as shopPageRoute } from '../Shop';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      mealPageRoute,
      mealsPageRoute,
      moviesPageRoute,
      shopPageRoute,
      postsPageRoute,
      recipePageRoute,
      notFoundPageRoute,
    ],
    errorElement: notFoundPageRoute.element,
    loader: () => json({}),
  },

  notFoundPageRoute,
]);

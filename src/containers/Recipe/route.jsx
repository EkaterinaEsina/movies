import { createRoute } from '../../utils/createRoute';

export const route = createRoute({
  loader: () => import('./Recipe'),
  path: `meals/meal/:name/recipe/:recipeId`,
});

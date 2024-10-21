import { createRoute } from '../../utils/createRoute';

export const route = createRoute({
  loader: () => import('./Meal'),
  path: `meals/meal/:name`,
});

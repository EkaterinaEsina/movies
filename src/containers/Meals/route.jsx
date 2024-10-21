import { createRoute } from '../../utils/createRoute';

export const route = createRoute({
  loader: () => import('./Meals'),
  path: `meals`,
});

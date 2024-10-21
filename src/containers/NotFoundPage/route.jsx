import { createRoute } from '../../utils/createRoute';

export const route = createRoute({
  loader: () => import('./NotFoundPage'),
  path: '*',
});

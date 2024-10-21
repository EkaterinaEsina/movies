import { createRoute } from '../../utils/createRoute';

export const route = createRoute({
  loader: () => import('./Posts'),
  path: `posts`,
});

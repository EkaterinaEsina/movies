import * as React from 'react';

import { loadable } from '../loadable';


export const createRoute = (params) => {
  const { loader, path } = params;

  const Element = loadable(loader);

  return {
    element: <Element />,
    path,
  };
};

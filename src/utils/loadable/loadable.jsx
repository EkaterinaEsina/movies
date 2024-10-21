import * as React from 'react';

export const loadable = (
  importFunction,
  { fallback = null } = { fallback: null },
) => {
  const LazyComponent = React.lazy(importFunction);

  return (props) => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

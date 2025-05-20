import React, { Suspense, lazy } from 'react';

interface LoadingProps {
  message?: string;
}

const PageLoading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-pulse text-primary">{message}</div>
  </div>
);

export const lazyLoad = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  loadingMessage?: string
): React.FC => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<PageLoading message={loadingMessage} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}; 
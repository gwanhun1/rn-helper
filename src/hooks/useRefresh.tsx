import React, { useCallback, useState } from 'react';

const useRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  return { refreshing, onRefresh };
};

export default useRefresh;

import { useState } from 'react';
import { useStateValue } from '../../index';
import { loadCategories } from '../queries';
import { listCategories } from '../actions';

const useCategories = () => {
  console.log("ok es", useStateValue())
  const [{ categories }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);

    const response = await loadCategories();

    if (response) {
      dispatch(listCategories(response));
    } else {
      const err = [];
      dispatch(listCategories(err));
    }
    setIsLoading(false);
  };

  return [categories, isLoading, request];
};

export default useCategories;

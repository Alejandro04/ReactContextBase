import React, { useEffect } from 'react';
import useCategories from '../../state/categories/hooks/useCategories';

import Spinner from '../../components/spinner';
import List from './components/list';
import Card from './components/card';
import Button from '../../components/button';

const Home = () => {
  //setListCategories es una prop implicita del context para llamar al custom hook
  const [categories, isLoading, setListCategories] = useCategories();

  useEffect(() => {
    if (!categories.categories || categories.categories.length === 0) {
      setListCategories();
    }
  }, [categories, setListCategories]);

  return (
    <div>
      <Spinner show={isLoading} />
      <Button primary large onClick={setListCategories} type="submit">
        Refresh
      </Button>
      <List>
        {categories?.categories?.map(p => (
          <Card key={p.id}>
            <h1>{p.name}</h1>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default Home;

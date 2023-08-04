import React from 'react';
import CategoryCard from '../components/Home/CategoryCard';

const Home = () => (
  <div>
    <CategoryCard title='Clothings' productList={['a', 'b']}></CategoryCard>
    {/* <CategoryCard title='Clothings'></CategoryCard> */}
  </div>
);

export default Home;

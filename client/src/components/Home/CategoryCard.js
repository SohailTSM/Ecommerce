import { Link } from 'react-router-dom';
import Card from '../../UI/Card';
import ProductCard from './ProductCard';

const CategoryCard = (props) => {
  return (
    <Card className='category-card'>
      <div className='m-4' style={{ position: 'absolute' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ fontWeight: '700', fontSize: '30px' }}>{props.title}</h2>
          <div className='mx-3' style={{ cursor: 'pointer' }}>
            <Link to='' style={{ fontSize: '1rem' }}>
              Explore
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {props.productList.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </div>
    </Card>
  );
};
export default CategoryCard;

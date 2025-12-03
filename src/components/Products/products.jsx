import React from 'react';
import Product from '../Product/Product';
import EmptyList from '../EmptyList/EmptyList';

export default function Products({ products = [] }) {
  return (
    <div>
      {products.length ? (
        <div className='flex items-center justify-center flex-wrap gap-4'>
          {products.map((product, index) => (
            <Product {...product} key={index} />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Products from '../../components/Products/products';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Pagination from '../../components/pagination/Pagination';
import productsData from '../../data/Products';
import SearchInput from '../../components/SearchInput/SearchInput';

export default function Explore() {
  const categories = ['Popular', 'Espresso', 'Cold Brew', 'Light Roast', 'Dark Roast'];
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([...productsData]);

  const clearSearchResult = () => {
    setSearchValue("");
    setProducts([...productsData]);
  };

  const handleSearch = () => {
    const foundedProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(foundedProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <>
      <Navbar />
      <div className='bg-creamdark pt-25'>
        <SectionHeader 
          title="Explore our collection"
          text=""
        />

        {/* دسته‌بندی‌ها و جستجو */}
        <div className="flex justify-center my-3">
          <div className="bg-creamlight w-full max-w-5xl rounded-2xl shadow-lg flex items-center justify-between px-6 py-4">
            <div className="flex gap-6 font-semibold text-green items-center">
              {categories.map((category, idx) => (
                <span
                  key={idx}
                  className={category === 'Popular' ? 'bg-black/10 px-3 py-1 rounded-xl' : ''}
                >
                  {category}
                </span>
              ))}
            </div>

            <SearchInput 
              inputValue={searchValue}
              onChange={(value) => setSearchValue(value)}
            />
          </div>
        </div>

        {/* محصولات */}
        <Products products={products} />

      </div>

      <Pagination /><br /><br />
      <Footer />
    </>
  );
}

import React from 'react';
import { useItems } from 'queries/items';
import ProductDescription from 'components/molecules/products/ProductDescription';
import useProductLocalStorage from 'hooks/useProductLocalStorage';
import { Product } from 'api/Items/declaration';

const ProductList = ({ searchValue }) => {
  const { addProductInStorage } = useProductLocalStorage();
  const { data } = useItems(searchValue);

  const addProduct = (product: Product, quantity: number) => addProductInStorage(product, quantity);

  return (
    <section className="shopping-cart dark">
      <div className="container">
        <div className="block-heading">
          <h2>Products</h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="items">
                {data?.results?.slice(0, 50).map((item) => (
                  <div key={item.id}>
                    <ProductDescription item={item} addProduct={addProduct} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;

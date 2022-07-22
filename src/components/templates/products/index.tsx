import ProductList from 'components/organisms/products/ProductList';
import React, { ReactElement, useState } from 'react';

const ProductTemplate = (): ReactElement => {
  const [searchValue, setSearchValue] = useState();
  const [searchText, setSearchText] = useState();

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const onSearchValue = () => setSearchValue(searchText);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChangeSearch}
            />
            <button className="btn btn-primary" type="button" onClick={onSearchValue}>
              Search
            </button>
          </form>
        </div>
      </div>
      <br />
      <ProductList searchValue={searchValue} />
    </div>
  );
};

export default ProductTemplate;

import { useRouter } from 'next/router';
import { ReactElement, useContext, useState } from 'react';
import routes from 'shared/constants/routes';
import { BsFillCartFill } from 'react-icons/bs';
import { ShoppingCartContext } from 'context/ShoppingCartContext';

const Navbar = (): ReactElement => {
  const router = useRouter();
  const { shoppingCartState } = useContext(ShoppingCartContext);
  const { products } = shoppingCartState;

  const getTotalProducts = (): number => {
    let totalProducts = 0;

    if (products?.length > 0) {
      totalProducts = products.map(({ quantity }) => quantity).reduce((value, total) => total + value, 0);
    }

    return totalProducts;
  };

  const goToShoppingCart = () => {
    router.push('/shopping');
  };

  const closeSession = (data) => {
    router.replace('/login');
  };

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Sell Smartphones
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button type="button" className="btn btn-primary" onClick={goToShoppingCart}>
              <BsFillCartFill size={30} color="white" />
              <span className="badge text-bg-secondary">{getTotalProducts()}</span>
            </button>
            <div className="dropdown">
              <button className="btn btn-secondary" type="button" onClick={closeSession}>
                Cerrar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
    // <nav className="bg-primary-color shadow">
    //   <input
    //     type="text"
    //     name="searchBox"
    //     placeholder="Nunca dejes de buscar"
    //     value={searchValue}
    //     onChange={onChangeSearchBox}
    //     onKeyDownCapture={onEnterCapture}
    //   />
    //   <button type="button" onClick={onSearch}>
    //     <img src="/assets/ic_search_large.png" className="ml-2 h-5 w-5" />
    //   </button>
    // </nav>
  );
};

export default Navbar;

import { Product } from 'api/Items/declaration';
import ShoppingProductDescription from 'components/molecules/products/shopping-cart/ShoppingProductDescription';
import { ShoppingAmount } from 'components/organisms/shopping-cart/ShoppingAmount';
import useProductLocalStorage from 'hooks/useProductLocalStorage';
import { useRouter } from 'next/router';
import React from 'react';
import { ProductLocalStorage } from 'shared/types/local_storage';
import Swal from 'sweetalert2';

const ShoppingCartTemplate = () => {
  const router = useRouter();
  const useCurrentProductLocalStorage: ProductLocalStorage = useProductLocalStorage();

  const { productsStorage, clearProductsStorage, removeProductStorage } = useCurrentProductLocalStorage;

  const cartHasProducts = productsStorage?.length > 0;

  const onRemoveAll = () =>
    Swal.fire({
      title: `Esta apunto de eliminar todos los porductos agregados al carrito.
             ¿Quiere continuar con esta operación?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearProductsStorage();
        Swal.fire('Carrito de compras vacio', 'Se eliminaron todos los productos agregados al carrito', 'success');
      }
    });

  const removeProduct = (product: Product) =>
    Swal.fire({
      title: '¿Desea eliminar este producto del carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeProductStorage(product);
        Swal.fire('Producto eliminado', 'Se elimino un producto del carrito', 'success');
      }
    });

  const goToProducts = () => router.push('/products');

  return (
    <div>
      {cartHasProducts ? (
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
            </div>
            <div className="row">
              <button className="btn btn-primary col-md-2" onClick={onRemoveAll}>
                Remove All
              </button>
            </div>
            <br />
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {productsStorage?.map((product) => (
                      <div key={product.id}>
                        <ShoppingProductDescription product={product} removeProduct={removeProduct} />
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
                <ShoppingAmount productLocalStorage={useCurrentProductLocalStorage} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center empty-product">
          Aun no hay productos agregados en el carrito{' '}
          <label onClick={goToProducts} style={{ color: 'blue', cursor: 'pointer' }}>
            ir a productos
          </label>
        </p>
      )}
    </div>
  );
};

export default ShoppingCartTemplate;

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { formatMoney } from 'shared/utils/money';
import Swal from 'sweetalert2';

export const ShoppingAmount = ({ productLocalStorage }) => {
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const { productsStorage, clearProductsStorage } = productLocalStorage;

  useEffect(() => {
    getTotalProducts();
  }, [productsStorage]);

  const getTotalProducts = () => {
    const prices: number[] = productsStorage?.map((product) => product.price * product.quantity) || [0];

    const sumPrices = prices.reduce((value, currentValue) => currentValue + value, 0);

    setTotal(sumPrices);
  };

  const onPayment = () =>
    Swal.fire({
      title: '¿Usted quiere realizar el pago de los productos agregados al carrito?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No, quiero seguir agregando productos',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearProductsStorage();
        Swal.fire('Compra realizada', 'Su compra se realizo correctamente', 'success');
        goToShopping();
      }
    });

  const goToShopping = () => router.push('/products');

  return (
    <div className="col-md-12 col-lg-4">
      <div className="summary">
        <h3>Summary</h3>
        <div className="summary-item">
          <span className="text">Subtotal</span>
          <span className="price">{formatMoney(total)}</span>
        </div>
        <div className="summary-item">
          <span className="text">Discount</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Shipping</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Total</span>
          <span className="price">{formatMoney(total)}</span>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onPayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

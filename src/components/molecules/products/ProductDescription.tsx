import React, { useState } from 'react';
import { MIN_VALUE } from 'shared/constants/constants';
import { formatMoney } from 'shared/utils/money';
import Swal from 'sweetalert2';

const ProductDescription = ({ item, addProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = (e) => {
    const value = Number(e.target.value);
    if (value < MIN_VALUE) return;
    setQuantity(value);
  };

  const { id, thumbnail: img, title, price } = item;

  const onAddNewProducts = () =>
    Swal.fire({
      title: `¿Desea agregar ${title} al carrito?`,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        const product = { id, title, img, price };
        addProduct(product, quantity);
        Swal.fire('Correcto', `Se agrego ${title} al carrito`, 'success');
        setQuantity(MIN_VALUE);
      }
    });

  return (
    <div>
      <div className="product">
        <div className="row">
          <div className="col">
            <img className="img-fluid mx-auto d-block image" src={img} width="120px" height="120px" />
          </div>
          <div className="col-md-8">
            <div className="info">
              <div className="row">
                <div className="col-md-5">
                  <div className="product-name">
                    <div className="product-info">
                      <div>
                        Device: <span className="value">{title}</span>
                      </div>
                      <br />
                      <div>
                        Price: <span className="value">{formatMoney(price)}</span>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <label>Quantity:</label>
                      <div className="col">
                        <input
                          id="quantity"
                          type="number"
                          min="1"
                          value={quantity}
                          className="form-control quantity-input"
                          onChange={onChangeQuantity}
                        />
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={onAddNewProducts}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductDescription;

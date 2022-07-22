import React from 'react';
import { formatMoney } from 'shared/utils/money';

const ShoppingProductDescription = ({ product, removeProduct }) => {
  const { price, img, title, quantity } = product;
  const totalCost = formatMoney(quantity * price);

  const onRemoveCurrentProduct = () => removeProduct(product);
  return (
    <>
      <div className="product">
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid mx-auto d-block image" src={img} width="68px" height="68px" />
          </div>
          <div className="col-md-8">
            <div className="info">
              <div className="row">
                <div className="col-md-6 product-name">
                  <div className="product-name">
                    <a href="">{title}</a>
                    <br />
                    <br />
                    <div className="product-info">
                      <div>
                        Unit price: <span className="value">{formatMoney(price)}</span>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-4 ">
                      <label>Quantity:</label>
                      <input id="quantity" type="number" value={quantity} className="form-control quantity-input" />
                    </div>
                    <br />
                    <div className="col-md-8 ">
                      <button type="submit" className="btn btn-secondary " onClick={onRemoveCurrentProduct}>
                        Remove product
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 price">
                  <div className="row">
                    <div className="col-md-12">
                      <label>Total Cost</label>
                    </div>
                    <div className="col-md-12">
                      <span>{totalCost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingProductDescription;

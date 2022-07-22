import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillGoogleCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com" className="me-4 text-reset">
            <AiFillFacebook size="32" />
          </a>
          <a href="https://www.instagram.com" className="me-4 text-reset">
            <AiFillInstagram size="32" />
          </a>
          <a href="https://www.twitter.com" className="me-4 text-reset">
            <AiOutlineTwitter size="32" />
          </a>
          <a href="https://www.google.com" className="me-4 text-reset">
            <AiFillGoogleCircle size="32" />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Sell Smartphones
              </h6>
              <p>We are a company dedicated to the sale smartphones, at the best prices you can find in the market</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/products" className="text-reset">
                  Phones
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Mérida, Yucatán, Calle 50 X 60, Centro.
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                sellsmartphone@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 52 999 228 23 72
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 52 999 222 00 33
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">© 2022 Copyright: SellSmartphones</div>
    </footer>
  );
};

export default Footer;

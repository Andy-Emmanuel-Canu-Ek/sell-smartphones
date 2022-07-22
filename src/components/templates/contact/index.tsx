import React, { ReactElement } from 'react';

const ContactTemplate = (): ReactElement => {
  return (
    <section className="shopping-cart dark">
      <div className="container">
        <div className="block-heading">
          <h2>Contact</h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="name" className="form-control" id="inputEmail4" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="lastName" className="form-control" id="inputPassword4" />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Phone</label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="Phone" />
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTemplate;

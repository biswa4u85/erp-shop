import React, { useState, useEffect, useRef } from 'react';
import { apiPostCall, apiPutCall } from '../hooks/SiteAPIs'
import { useNavigate } from "react-router-dom";
import { Row, Col, Checkbox } from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'

function Details() {
  const navigate = useNavigate();
  const [details, setDetails] = useLocalStorage("details", null);


  useEffect(() => {
    if (!details) {
      navigate('/shop')
    }
  }, [details]);

  console.log(details)
  let items = []

  const getDetails = (item) => {
    setDetails(item);
    setTimeout(() => navigate('/details'))
  }

  return (
    <>
      <div className="contain-bg py-5 mt-1">
        <div className="container  ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 ">
              <div className="product-image"><img src="./assets/images/mobile.png" className="rounded mx-auto d-block" alt="..." />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="px-4 single-product">
                <h5 className="fs-2">Name Product</h5>
                <h6 className="fs-5 my-3">Product Name</h6>
                <p className="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  lacus, auctor pretium ac ultrices.
                  Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit
                  amet,
                </p>

                <div className="cart-btn">
                  <button type="button" className="btn btn-outline-dark btn-sm rounded">Add to Cart </button>
                  <button type="button" className="btn btn-secondary btn-sm baynow-btn rounded mx-3">Buy
                    Now</button>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div className=" line-border pb-2 mb-4 mt-4 border-bottom border-2 border-light"></div>

                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item fw-light">
                    <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                    <span>Shipping & Delivery</span>
                  </li>
                  <li className="list-group-item fw-light">
                    <i className="fa fa-phone me-2" aria-hidden="true"></i>
                    <span>Returns & Exchanges</span>
                  </li>
                  <li className="list-group-item fw-light">
                    <i className="fa fa-envelope-o me-2" aria-hidden="true"></i>
                    <span>Ask a question</span>
                  </li>
                </ul>

                <div className="payment-option">
                  <h6 className="my-3">guaranteed safe checkout</h6>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <img src="./assets/images/payment.png" className=" d-block" alt="..." />
                    </li>
                    <li className="list-group-item">
                      <img src="./assets/images/payment.png" className=" d-block" alt="..." />
                    </li>
                    <li className="list-group-item ">
                      <img src="./assets/images/payment.png" className=" d-block" alt="..." />
                    </li>
                    <li className="list-group-item ">
                      <img src="./assets/images/payment.png" className=" d-block" alt="..." />
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card-sec">
          <div className="container">
            <h4 className="py-4">RELATED PRODUCTS</h4>
            <div className="row">
              {items.map((item, key) => <div key={key} onClick={() => getDetails(item)} className="col-sm-6 col-md-6 col-lg-3 ">
                <div className="card">
                  <img src="./assets/images/Image.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-text fw-light "> {item.name}</h6>
                    <div className="cart-btn d-flex justify-content-between">
                      <h6>RM 30.00</h6>
                      <i className="fa fa-envelope-o me-2" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details
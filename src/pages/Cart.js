import React, { useState, useEffect, useRef } from 'react';
import { apiPostCall, apiGetCall } from '../hooks/SiteAPIs'
import { useNavigate } from "react-router-dom";
import { Row, Col, Checkbox } from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'
import productImg from '../assets/images/product-img.png'

function Cart() {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    feachData()
  }, []);

  const feachData = async () => {
    let params = `doctype=Quotation&cmd=frappe.client.get_list&fields=["*"]&filters=[["Quotation","party_name","=","${user}"],["Quotation","status","=","Draft"]]&limit_page_length=None`;
    let dataArray = await apiPostCall('/', params, window.frappe?.csrf_token)
    if (dataArray && dataArray[0] && dataArray[0].name) {
      let params1 = `/api/method/frappe.desk.form.load.getdoc?doctype=Quotation&name=${dataArray[0].name}`;
      let dataArray1 = await apiGetCall(params1, {}, window.frappe?.csrf_token)
      if (dataArray1 && dataArray1.docs && dataArray1.docs[0]) {
        setData(dataArray1.docs[0])
      }
    }
  }

  console.log(data)

  return (
    <div className="row mx-5 mt-5">
      <div className="col-sm-12 col-md-12 col-lg-8">
        <div className="items bg-white rounded-3 p-2">
          <h5 className="fs-5 ps-3 fw-bold">Items</h5>
          <div className="line"></div>

          <div className="d-flex justify-content-between">
            <div className="p-2 text-secondary ">Items</div>
            <div className="p-2 ms-5  text-secondary">Quantity</div>
            <div className="p-2  text-secondary ">Subtotal</div>
          </div>
          <div className="line mb-3"></div>

          {data?.items ? (data?.items).map((item, key) => <div key={key} className=" position-relative justify-content-between main">
            <div className="text-center rounded product-image2 mt-2 mx-4">
              <img src={item.image} style={{ height: 'auto', width: '100%' }} alt={item.item_name} />
            </div>
            <div className="second-heading">
              <p className="fw-bold">{item.item_name}</p>
              <h5 className="fs-6 fw-normal text-secondary">{item.description}</h5>
              {/* <span>Variant of <a href="#" className="stretched-link">Samsung Galaxy A53 5G</a></span> */}
              <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea"></textarea>
              </div>
            </div>
            <div className="form-section">
              <form>
                <div className="value-button" id="decrease" onclick="decreaseValue()"
                  value="Decrease Value">-</div>
                <input type="number" id="number" value="0" />
                <div className="value-button" id="increase" onclick="increaseValue()"
                  value="Increase Value">+</div>
              </form>
            </div>
            <div>
              <button type="button" className="btn btn-light mx-4 close"><i className="fa fa-times"
                aria-hidden="true"></i>
              </button>
            </div>
            <div className="number">
              <h5 className="fs-6 fw-normal text-right">{data?.currency} {item.base_amount}</h5>
              {/* <h5 className="fs-6 fw-normal">Rate:$30,499.00</h5> */}
            </div>
          </div>) : null}


          <div className="border border-light"></div>
          <div className="d-flex  justify-content-end my-3">
            <h6 className="amount fw-bolder">Total</h6>
            <h6 className="ms-5 fw-bolder">{data?.currency} {data?.base_rounded_total}</h6>
          </div>
          <div className="d-flex justify-content-between my-3 gap-3">
            {/* <button className="btn text-primary btn-bg rounded-4" type="submit">Past Orders</button> */}
            <button onClick={() => navigate('/')} className="btn text-primary btn-bg rounded-4" type="submit">Continue Shopping</button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="apply-code d-flex justify-content-between mb-4">
          <button type="button" className="btn btn-light ">Enter Coupon Code</button>
          <button type="button" className="btn btn-primary"> Apply Coupon Code</button>
        </div>
        <div className="items bg-white rounded-3 py-4 px-3">
          <h5 className="fs-6 fw-bold"> Payment Summary</h5>
          <div className="line my-3"></div>
          <div className="d-flex justify-content-between">
            <p className="fs-6 fw-normal"> Net Total ({data?.total_qty} items)</p>
            <h5 className="fs-6 fw-normal">{data?.currency} {data?.base_net_total}</h5>
          </div>
          <div className="line my-2"></div>
          <div className="d-flex justify-content-between">
            <h5 className="fs-6 fw-normal"> Grand Total </h5>
            <h5 className="fs-6 fw-normal">{data?.currency} {data?.base_rounded_total}</h5>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary mt-3" type="button"> Place Order</button>
          </div>
        </div>

        <div className="items d-flex justify-content-between bg-white rounded-3 pt-4 pb-5 px-3 my-3">
          <h6 className="fs-6 fw-bold"> Shipping Address</h6>
          <a href="#"> Add a new address</a>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Billing Address is same as Shipping Address
          </label>
        </div>

        <div className="items bg-white rounded-3 py-4 px-3 mt-3">
          <div className="d-flex justify-content-between">
            <h5 className="fs-6 fw-normal"> Billing Address</h5>
            <a href="#"> Add a new address</a>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <h5 className="fs-6 fw-bold">Home</h5>
            <button type="button" className="btn btn-outline-primary btn-sm ">Change</button>
          </div>
          <div>
            <span dangerouslySetInnerHTML={{ __html: data?.address_display }} ></span>
            <button type="button" className="btn btn-light text-primary"><i className="fa fa-pencil pe-2"
              aria-hidden="true"></i>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
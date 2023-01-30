import React, { useState, useEffect, useRef } from 'react';
import { apiPostCall, apiGetCall } from '../hooks/SiteAPIs'
import { useNavigate } from "react-router-dom";
import { Row, Col, Checkbox } from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'
import  productImg  from '../assets/images/product-img.png'

function Popular() {
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
    <>
      <div className="container-fluid">
        <div className="row  mt-1">
          {/* sidebar-start */}
          <div className="col-3 nav-left">
            <div className="sidebar-bg p-4">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="fs-5 ">Filters</h5>
                <button type="button" className="btn btn-link">CLEAR ALL</button>
              </div>
              <div className="border-top mt-3 item-sec">
                <h6 className="mt-4">ITEM GROUP</h6>
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Tab
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Mobile
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Laptop
                  </label>
                </div>
              </div>
              <div className="border-top mt-3 item-sec">
                <h6 className="mt-4">COLOUR</h6>
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Awesome Black
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Awesome Blue
                  </label>
                </div>

              </div>
              <div className="border-top mt-3 item-sec">
                <h6 className="mt-4">STORAGE</h6>
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    128GB ｜8GB
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckDefault">
                    128GB ｜8GB
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    128GB ｜8GB
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar-end */}
          <div className=" col-lg-9 col-md-12 col-sm-12">
            <div className="product-bg py-4 mt-3">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 ">
                  <div className="product-img">
                    <img src={productImg} className=" w-100 h-100 " alt="..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="mt-4 center-sec">
                    <h4 className="fw-normal">Best selling mobiles</h4>
                    <h5 className="fw-bolder fs-6">Under Rs. 20,000</h5>
                    <h6 style={{ fontSize: "12px" }}>Offer Code DIWA02</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bg py-4 mt-3">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 ">
                  <div className="product-img">
                    <img src={productImg} className=" w-100 h-100 " alt="..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="mt-4 center-sec">
                    <h4 className="fw-normal">Best selling mobiles</h4>
                    <h5 className="fw-bolder fs-6">Under Rs. 20,000</h5>
                    <h6 style={{ fontSize: "12px" }}>Offer Code DIWA02</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bg py-4 mt-3">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 ">
                  <div className="product-img">
                    <img src={productImg} className=" w-100 h-100 " alt="..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="mt-4 center-sec">
                    <h4 className="fw-normal">Best selling mobiles</h4>
                    <h5 className="fw-bolder fs-6">Under Rs. 20,000</h5>
                    <h6 style={{ fontSize: "12px" }}>Offer Code DIWA02</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bg py-4 mt-3">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 ">
                  <div className="product-img">
                    <img src={productImg} className=" w-100 h-100 " alt="..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="mt-4 center-sec">
                    <h4 className="fw-normal">Best selling mobiles</h4>
                    <h5 className="fw-bolder fs-6">Under Rs. 20,000</h5>
                    <h6 style={{ fontSize: "12px" }}>Offer Code DIWA02</h6>
                  </div>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </>
  );
}

export default Popular
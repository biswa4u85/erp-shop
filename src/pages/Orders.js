import React, { useState, useEffect, useRef } from 'react';
import { apiPostCall, apiPutCall } from '../hooks/SiteAPIs'
import { useNavigate } from "react-router-dom";
import { Row, Col, Checkbox } from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'

function Orders() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    feachData()
  }, []);

  const feachData = async (search) => {
    let params = `doctype=Sales+Order&cmd=frappe.client.get_list&fields=["*"]&limit_page_length=None`;
    let dataArray = await apiPostCall('/', params, window.frappe?.csrf_token)
    if (dataArray) {
      setData(dataArray)
    }
  }

  console.log(data)

  return (
    <>
      <div className='container-fluid'>
        <div className="shop ">
          <div className="row">
            <div className="col-3 fliter-nav">
              <div className="order-nav p-4">
                <h6 className="mb-3"><a href="#">Project</a></h6>
                <h6 className="mb-3"><a href="#"> Request for Quotations</a></h6>
                <h6 className="mb-3"><a href="#">Supplier Quotation </a></h6>
                <h6 className="mb-3"><a href="#"> Purchase Orders</a></h6>
                <h6 className="mb-3"><a href="#">Purchase Invoices</a></h6>
                <h6 className="mb-3"><a href="#">Quotation</a></h6>
                <h6 className="mb-3"><a href="#">Orders</a></h6>
                <h6 className="mb-3"><a href="#">Invoices</a></h6>
                <h6 className="mb-3"><a href="#">Shipments</a></h6>
                <h6 className="mb-3"><a href="#">Issues</a></h6>
                <h6 className="mb-3"><a href="#">Addresses</a></h6>
                <h6 className="mb-3"><a href="#">Timesheets</a></h6>
                <h6 className="mb-3"><a href="#">Lab Test</a></h6>
                <h6 className="mb-3"><a href="#">Prescription</a></h6>
                <h6 className="mb-3"><a href="#">Patient Appointment</a></h6>
                <h6 className="mb-3"><a href="#">Fees</a></h6>
                <h6 className="mb-3"><a href="#">Newsletter</a></h6>
                <h6 className="mb-3"><a href="#">Admission</a></h6>
                <h6 className="mb-3"><a href="#">Certification</a></h6>
                <h6 className="mb-3"><a href="#">Material Request</a></h6>
                <h6 className="mb-3"><a href="#">Appointment Booking</a></h6>
                <h6 className="mb-3"><a href="#"> My Account</a></h6>
              </div>
            </div>
            <div className=" col-lg-9 col-md-12 col-sm-12 serial-number">
              <h1 className="fs-1 fw-bold mb-5">Order</h1>
              <div className="line2 my-4"></div>

              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal m-0"><i className="fa fa-circle"
                    aria-hidden="true"></i>SAL-ORD-2023-00001</h5>
                  <p className="fs-6 fw-normal text-secondary">January20,2023</p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="fs-6 fw-normal">Sumsung Galaxy A53 5G-128GB l 6GB-AWESOME BLUE</p>

                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal">$30,499.00</h5>

                </div>
                <div className="line2 mb-4"></div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal m-0"><i className="fa fa-circle"
                    aria-hidden="true"></i>SAL-ORD-2023-00002</h5>
                  <p className="fs-6 fw-normal text-secondary">January20,2023</p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="fs-6 fw-normal">Sumsung Galaxy A53 5G-128GB l 6GB-AWESOME BLUE</p>

                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal">$30,499.00</h5>

                </div>
                <div className="line2 mb-4"></div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal m-0"><i className="fa fa-circle"
                    aria-hidden="true"></i>SAL-ORD-2023-00001</h5>
                  <p className="fs-6 fw-normal text-secondary">January20,2023</p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="fs-6 fw-normal">Sumsung Galaxy A53 5G-128GB l 6GB-AWESOME BLUE</p>

                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="fs-6 fw-normal">$30,499.00</h5>

                </div>
                <div className="line2 mb-4"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders
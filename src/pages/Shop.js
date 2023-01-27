import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { apiPostCall, apiPutCall } from '../hooks/SiteAPIs'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Row, Col, Checkbox } from 'antd';
import infinix from '../assets/images/infinix.png';
import apple from '../assets/images/apple.png';
import poco from '../assets/images/poco.png';
import Oppo from '../assets/images/Oppo.png';
import narzo from '../assets/images/narzo.png';

function Shop() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ 'ITEM GROUP': ['Tab', 'Mobile', 'Laptop'], 'STORAGE': ['Awesome Black', 'Awesome Blue'], 'COLOUR': ['128GB | 8GB', '128GB | 6GB', '64GB | 4GB RAM'] });
  const [items, setItems] = useState([]);
  const [itemGroup, setItemGroup] = useState([]);
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const [details, setDetails] = useLocalStorage("details", null);

  useEffect(() => {
    feachData(null)
  }, []);

  useEffect(() => {
    feachData(true)
  }, [itemGroup, colors, storage]);

  const onChange = (item, checkedValues) => {
    if (item == 'ITEM GROUP') {
      setItemGroup(checkedValues)
    }
    if (item == 'STORAGE') {
      setStorage(checkedValues)
    }
    if (item == 'COLOUR') {
      setColors(checkedValues)
    }
  };

  const feachData = async (search) => {
    let field_filters = itemGroup.length > 0 ? { "item_group": itemGroup } : {}
    let attribute_filters = (colors.length > 0 || storage.length > 0) ? { "COLOUR": colors, "STORAGE": storage } : {}
    let params = `query_args=${JSON.stringify({ "field_filters": field_filters, "attribute_filters": attribute_filters, "item_group": null, "start": null, "from_filters": false })}&cmd=erpnext.e_commerce.api.get_product_filter_data`;
    let dataArray = await apiPostCall('/', params, window.frappe?.csrf_token)
    if (!search) {
      let filters = { 'ITEM GROUP': [] }
      if (dataArray?.settings?.filter_attributes) {
        for (let item of dataArray?.settings?.filter_attributes) {
          filters[item.attribute] = []
        }
      }
      // setFilters(filters)
      setItems(dataArray?.items)
    }
  }

  const getDetails = (item) => {
    setDetails(item);
    setTimeout(() => navigate('/details'))
  }

  console.log(colors)

  return (
    <>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-bg p-4">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="fs-5 ">Filters</h5>
              <button type="button" className="btn btn-link">CLEAR ALL</button>
            </div>
            <div className="border-top mt-3 item-sec">
              <h6 className="mt-4">ITEM GROUP</h6>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault" >
                  Tab
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" for="flexCheckChecked" >
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
      </div>


      <div className="container-fluid">
        <div className="row  mt-1">

          <div className="col-3 nav-left">
            <div className="sidebar-bg p-4">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="fs-5 ">Filters</h5>
                <button type="button" onClick={() => {
                  setItemGroup([])
                  setStorage([])
                  setColors([])
                }} className="btn btn-link">CLEAR ALL</button>
              </div>

              {Object.keys(filters).map((item, key) =>
                <div key={key} className="border-top mt-3 item-sec">
                  <h6 className="mt-4">{item}</h6>
                  <Checkbox.Group onChange={(val) => onChange(item, val)}>
                    <Row>
                      {filters[item].map((val, k) => <Col span={24} key={k}>
                        <Checkbox checked value={val}>{val}</Checkbox>
                      </Col>)}
                    </Row>
                  </Checkbox.Group>
                </div>)}

            </div>
          </div>

          <div className=" col-lg-9 col-md-12 col-sm-12">
            <div className="row text-center py-3">
              <div className="col">
                <div className="fast-col rounded"><img src={infinix} className="rounded mx-auto d-block"
                  alt="..." /></div>
              </div>
              <div className="col">
                <div className="fast-col rounded"><img src={apple} className="rounded mx-auto d-block"
                  alt="..." /></div>
              </div>
              <div className="col">
                <div className="fast-col rounded pt-1"><img src={poco} className="rounded mx-auto d-block "
                  alt="..." /></div>
              </div>
              <div className="col">
                <div className="fast-col rounded"><img src={Oppo} className="rounded mx-auto d-block"
                  alt="..." /></div>
              </div>
              <div className="col">
                <div className="fast-col rounded pt-1"><img src={narzo} className="rounded mx-auto d-block"
                  alt="..." /></div>
              </div>
              <div className="col">
                <div className="fast-col rounded pt-1"><img src={narzo} className="rounded mx-auto d-block"
                  alt="..." /></div>
              </div>
            </div>


            <div className=" row d-flex flex-wrap">
              {items.map((item, key) => <div key={key} onClick={() => getDetails(item)} className=" col-sm-6 col-md-4 col-lg-3 mb-auto px-4 py-2  product-sec ">
                <div className="product"><img src={item.website_image} className="rounded mx-auto d-block" alt="..." />
                </div>
                <h5 className="fs-6 fw-light my-2">{item.web_item_name}</h5>
                <h6 className="fw-light sub-text ">{item.web_long_description}</h6>
              </div>)}
            </div>
          </div>

        </div>
      </div>

      {/* <div className="lode-btn d-grid col-2 mx-auto my-5 py-5"><button type="button" className="btn btn-outline-dark ">Load more
        products</button></div> */}

    </>
  );
}

export default Shop
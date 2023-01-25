import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { apiPostCall, apiPutCall } from '../hooks/SiteAPIs'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Row, Col, Checkbox } from 'antd';

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
      console.log(dataArray)
    }
  }

  const getDetails = (item) => {
    setDetails(item);
    setTimeout(() => navigate('/details'))
  }

  console.log(items)
  return (
    <>
      {Object.keys(filters).map((item, key) => <div key={key}>
        <h2>{item}</h2>
        <Checkbox.Group onChange={(val) => onChange(item, val)}>
          <Row>
            {filters[item].map((val, k) =>
              <Col span={24} key={k}>
                <Checkbox value={val}>{val}</Checkbox>
              </Col>)}
          </Row>
        </Checkbox.Group>
      </div>)}
      <div>
        {items.map((item, key) =>
          <div key={key} onClick={() => getDetails(item)}>
            {item.name}
          </div>
        )}

      </div>
    </>
  );
}

export default Shop
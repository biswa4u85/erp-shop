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
      <div>Orders</div>
    </>
  );
}

export default Orders
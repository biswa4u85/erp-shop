import React, { useState, useEffect, useRef } from 'react';
import { apiPostCall, apiGetCall } from '../hooks/SiteAPIs'
import { useNavigate } from "react-router-dom";
import { Row, Col, Checkbox } from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'

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
    <>
      <div>Orders</div>
    </>
  );
}

export default Cart
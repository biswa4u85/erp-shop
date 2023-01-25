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

  return (
    <>
      <div>Details</div>
    </>
  );
}

export default Details
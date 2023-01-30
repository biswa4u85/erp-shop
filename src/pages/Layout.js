import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Button, DatePicker, Switch } from 'antd';
import logo from '../assets/images/logo-main.png';

function Layout() {
  let navigate = useNavigate();
  return (
    <>
      <div className="header-section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to={"/"}><img src={logo} className="logo-image"
                alt="..." /></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <NavLink className="nav-link active " aria-current="page" href="#">HOME</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink className="nav-link " to={"/shop"}>SHOP</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink className="nav-link" to={"/cart"}>MOST POPULAR</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink className="nav-link" to={"#"}>DEALS</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <div className="input-group mb-3 mt-1">
                      <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"
                        aria-hidden="true"></i></span>
                      <input className="form-control me-2 w-53" type="search" placeholder="Search"
                        aria-label="Search" />
                    </div>
                  </li>
                </ul>
                <i className="fa fa-bell-o me-4" aria-hidden="true"></i>
                <button type="button" onClick={() => navigate('/login')} className="btn btn-lg fs-6 login-btn">LOGIN</button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid">
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link active " aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link " href="#">SHOP</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">MOST POPULAR</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">DEALS</a>
              </li>
              <li className="nav-item px-3">
                <div className="input-group mb-3 mt-1">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"
                    aria-hidden="true"></i></span>
                  <input className="form-control me-2 w-53" type="search" placeholder="Search"
                    aria-label="Search" />
                </div>
              </li>
              <li className="nav-item px-3">
                <i className="fa fa-bell-o me-4" aria-hidden="true"></i>

                <button type="button" className="btn btn-lg fs-6 login-btn">LOGIN</button>
              </li>
            </ul>

          </div>
        </div>
      </div>


      <Outlet />
      <div className="footer-bg py-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <h5 className="fs-6 text">BE IN TOUCH WITH US:</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button type="button" className="btn btn-outline-light mx-2 ">Primary</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 social-icon">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item"><i className="fa fa-facebook-square" aria-hidden="true"></i>
                </li>
                <li className="list-group-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                <li className="list-group-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                <li className="list-group-item"><i className="fa fa-pinterest" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-4">
        <div className="row footer-buttom">
          <div className="col-sm-6 col-md-6 col-lg-3 col-xs-6 mt-3">
            <h5>CATEGORIES</h5>
            <ul className="list-group">
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Food</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Personal Care</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Accessories</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Beauty</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
            <h5>INFOMATION</h5>
            <ul className="list-group">
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">About Us</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Contact Us</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Blog</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">FAQs</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
            <h5>USEFUL LINKS</h5>
            <ul className="list-group">
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Terms & Conditions</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Returns</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Shipping</li>
              </a>
              <a href="#" className="text-decoration-none">
                <li className="list-group-item fw-light">Privacy Policy</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
            <h5>CONTACT US</h5>
            <ul className="list-group">
              <li className="list-group-item fw-light">
                <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                <span>Address</span>
              </li>
              <li className="list-group-item fw-light">
                <i className="fa fa-phone me-2" aria-hidden="true"></i>
                <span>+60 125697433</span>
              </li>
              <li className="list-group-item fw-light">
                <i className="fa fa-clock-o me-2" aria-hidden="true"></i>
                <span>All week 24/7</span>
              </li>
              <li className="list-group-item fw-light">
                <i className="fa fa-envelope-o me-2" aria-hidden="true"></i>
                <span>Email</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
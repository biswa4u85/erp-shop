import React from "react";

function Home() {
  return (
    <>
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

      <div id="carouselExampleInterval" className="carousel slide mt-3" data-bs-ride="carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active my-4">
              <div className="row">
                <div className="col">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Mobile</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Fashion</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Electronics</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Appliance</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Toys</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Beauty</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Grocery</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-1.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">BestOffers</h6>
                </div>


              </div>

            </div>
            <div className="carousel-item my-4">
              <div className="row">
                <div className="col">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Mobile</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Fashion</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Electronics</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Appliance</h6>
                </div>

                <div className="col">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Toys</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Beauty</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Grocery</h6>
                </div>

                <div className="col gift">
                  <img src="./assets/images/product-2.png" className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">BestOffers</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home
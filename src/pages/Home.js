import React from "react";
import productImg from "../assets/images/product-1.png"
import vectorImg from "../assets/images/vector.png"
import vectorImg2 from "../assets/images/vector2.png"
import banner_logo from "../assets/images/banner_logo.png"
import collection3 from "../assets/images/collection3.jpg"
import collection2 from "../assets/images/collection2.jpg"
import collection1 from "../assets/images/collection1.jpg"
import balckGlas from "../assets/images/balck_glas.png"
import slideImage from "../assets/images/Image.png"
import cardImage from "../assets/images/image2.png"
import dealImg from "../assets/images/deal-img.png"
import add2 from "../assets/images/add2.png"
import add1 from "../assets/images/add1.png"
import rectangle from "../assets/images/rectangle.jpg"
function Home() {
  return (
    <>
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
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Mobile</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Fashion</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Electronics</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Appliance</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Toys</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Beauty</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Grocery</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">BestOffers</h6>
                </div>
              </div>

            </div>
            <div className="carousel-item my-4">
              <div className="row">
                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Mobile</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Fashion</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Electronics</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Appliance</h6>
                </div>

                <div className="col">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Toys</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Beauty</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">Grocery</h6>
                </div>

                <div className="col gift">
                  <img src={productImg} className="rounded mx-auto d-block h-50" alt="..." />
                  <h6 className="text-center fw-light">BestOffers</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner position-relative my-3 pb-5">
        <div className="position-absolute top-0 start-0 translate-middle">
          <img src={vectorImg} className=" d-block" alt="..." />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="left-banner  ">
                <h1 className="text-white fw-bold">Find the Best Product for You on GK Dukan</h1>
                <p className="fs-6 fw-normal text-white text-break" style={{width: "23rem"}}>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed
                  ullamcorper congue eros, eget
                  tincidunt
                  ipsum eleifend ut.</p>
                <button className=" border-0 py-2 px-3 rounded-2">SHOP NOW</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="banner-sec position-relative">
                <div className="vector-img position-absolute top-50 start-50 translate-middle">
                  <img src={vectorImg2} className="position-absolute" alt="..." />
                </div>
                <div className="banner-img "><img src={banner_logo} alt="..." /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="vector-img2 position-absolute top-50 start-100 translate-middle">
          <img src={vectorImg2} className="position-absolute" alt="..." />
        </div>
      </div>

      <div class="text-center my-5">
        <h5 class=" fs-1 fw-bold">New Collection</h5>
        <div class="pink-border mb-3"></div>
        <p class="fs-6 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="new-collect">
              <img class="w-100 h-100" src={collection3} />
            </div>
            <div class="d-grid gap-2 position-relative">
              <button class="btn-product position-absolute w-75 border-0 rounded-3 p-2 " type="button">Nama
                Product</button>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="new-collect">
              <img class="w-100 h-100" src={collection2} />
            </div>
            <div class="d-grid gap-2 position-relative">
              <button class="btn-product position-absolute w-75 border-0 rounded-3 p-2" type="button">Nama
                Product</button>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="p-1 position-absolute">-50%</div>
            <div class="new-collect">
              <img class="w-100 h-100" src={collection1} />
            </div>
            <div class="d-grid gap-2 position-relative">
              <button class="btn-product position-absolute w-75 border-0 rounded-3 p-2" type="button">Nama
                Product</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row top-space">
          <div class="col-sm-12 col-md-6 col-lg-6">
          <div class="position-relative top-0 start-50 translate-middle">
              <img src={vectorImg2} class="position-absolute" alt="..." />
            </div>
            <div class="new-item">
              <img class="all-items w-100 " src={balckGlas} />
            </div>
            
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 item-text">
            <h2 class="fw-bold">Best Item Since 2020</h2>
            <p class="lh-lg fs-5 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
              congue eros,
              eget
              tincidunt ipsum eleifend ut orem ipsum dolor sit amet consectetur adipiscing elit Sed
              ullamcorper congue eros eleifend ut tincidunt ipsum .
            </p>

            <ul class="list-group list-group-horizontal bg-white shadow p-3 justify-content-center count-sec">
              <li class="list-group-item text-center">
                <h3>2002</h3>
                <p class="w-100">Phaladora Founded</p>
              </li>
              <li class="list-group-item text-center">
                <h3>8900+</h3>
                <p>Product Sold</p>
              </li>
              <li class="list-group-item text-center">
                <h3>3105+</h3>
                <p>Best Reviews</p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div class="product-text p-5 ">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 text-white px-5 left-text">
            <h5 class="fs-1 fw-bold mt-5">Best Seller Product</h5>
            <p class="fs-6 fw-normal my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros</p>
            <button type="button" class="btn btn-lg fs-6 login-btn product-btn mt-3">LOGIN</button>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                  class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active ">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={slideImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title fs-6 fw-bold">Nama Product</h5>
                      <p>RM50 <span>RM40</span></p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={slideImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title fs-6 fw-bold">Nama Product</h5>
                      <p>RM50 <span>RM40</span></p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={slideImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title fs-6 fw-bold">Nama Product</h5>
                      <p>RM50 <span>RM40</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-5 ">
        <h5 class=" fs-1 fw-bold">Our Product</h5>
        <div class="pink-border mb-3"></div>
        <ul class="nav nav-pills tab-sec justify-content-center">
          <li class="nav-item">
            <a class="nav-link " href="#">HOT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ON SALE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">TRENDING NOW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">NEW ARRIVAL</a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card border-0 product-card">
              <img class="card-img-top" src={cardImage} />
              <div class="card-body text-center">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <h5 class="card-title m-2 fs-6">Nama Product</h5>
                <p class="card-text"><span
                  class="text-decoration-line-through text-danger-emphasis">RM50</span>RM40</p>
              </div>
            </div>
          </div>
        </div>

        <div class="d-grid my-5">
          <button class="seeall-btn rounded-3 text-white p-2" type="button">SEE ALL</button>
        </div>


        <div class="brown-bg">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 py-5 ">
              <div class="bg-left">
                <h5 class="fs-1 fw-bold">Deal of The Day</h5>
                <p class=" fs-6 fw-normal lh-lg my-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed
                  ullamcorper congue erosget tincidunt </p>
                <div class="time">
                  <div class="row px-2">
                    <div class="col text-center bg-white mx-2 pt-2">
                      <h6 class="fs-3">08</h6>
                      <p class="fs-6">Days</p>
                    </div>
                    <div class="col text-center bg-white mx-2 pt-2">
                      <h6 class="fs-3">09</h6>
                      <p class="fs-6">Hours</p>
                    </div>
                    <div class="col text-center bg-white mx-2 pt-2">
                      <h6 class="fs-3">14</h6>
                      <p class="fs-6">Min</p>
                    </div>
                  </div>
                </div>
                <button class="seeall-btn text-white px-5 py-2 mt-5 btn-lg" type="button">SHOP NOW</button>

              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 border-none pt-5 text-center">
              <div class=" position-relative">
                <img src={dealImg} class="vector-banner" />
                <img src={vectorImg2} class="vector-img position-absolute" />
              </div>
            </div>
          </div>
        </div>
        <div class="light-bg mt-5 py-5">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-3 col-md-12 col-sm-12">
                <img src={add2} class="" />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 p-5">
                <div class="bg-white p-5 h-100">
                  <p class="fs-6 fw-light">Special Offer</p>
                  <h5 class="fs-4 fw-bold ">Subscribe<br />
                    <span style={{ color: "#ED1272" }}>Get 10% Off</span>
                  </h5>
                  <div class="input-group mt-4 w-50 bg-gray mx-auto">
                    <input type="text" class="form-control text-center border-0 "
                      placeholder="Enter your email" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                  <button class="seeall-btn text-white py-2 mt-5 btn-lg rounded-2"
                    type="button">Subscribe</button>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-sm-12">
                <img src={add1} class="" />
              </div>
            </div>
          </div>
        </div>


        <div class=" d-flex justify-content-between px-2 py-5 ">
          <h5>LATEST FROM BLOG</h5>
          <a href="#" class="text-decoration-none text-dark">
            <p>SEE ALL</p>
          </a>
        </div>

        <div class="seal-all px-2">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="position-relative">
                <img src={rectangle} class="w-100" />
                <div class="mobile position-absolute top-50 end-0 mx-4 p-3 mt-5 bg-white">
                  <h5 class="fs-6 fw-bold">TOLONG LETAK GAMBER</h5>
                  <p class="fs-6 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacus, auctor pretium ac ultrices.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="position-relative">
                <img src={rectangle} class=" w-100" />

                <div class="mobile position-absolute top-50 end-0 mx-4 p-3 mt-5 bg-white">
                  <h5 class="fs-6 fw-bold">TOLONG LETAK GAMBER</h5>
                  <p class="fs-6 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacus, auctor pretium ac ultrices.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="position-relative">
                <img src={rectangle} class="w-100" />
                <div class="mobile position-absolute top-50 end-0 mx-4 p-3 mt-5 bg-white">
                  <h5 class="fs-6 fw-bold">TOLONG LETAK GAMBER</h5>
                  <p class="fs-6 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacus, auctor pretium ac ultrices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contain-btn">
        <div class="lode-btn d-grid col-2 mx-auto my-5 py-5">
          <button type="button" class="btn btn-outline-dark ">Load more products</button>
        </div>
      </div>





    </>
  );
}

export default Home
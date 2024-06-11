import React from "react";
import img from '../images/billingpersonprofile.webp';

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar" style={{ height: "100vh" }}>
        <div
          className="sidebar-header d-flex flex-row border-bottom justify-content-around align-items-center mt-2"
          style={{ height: "50px" }}
        >
          <div className="border ps-2 pe-2 w-25 h-50 rounded-circle text-center bg-primary">
            B
          </div>
          <div className="fs-6 fw-bold">Billing Web App</div>
          <div className="border ps-1 pe-1 rounded w-20 h-50">
            <i class="bi bi-arrow-left"></i>
          </div>
        </div>

        {/* side bar content */}
        <div className="bg-light">
          <div className="sidebar-content mt-3">
            <div
              className="d-flex border rounded pt-1 bg-primary text-light position-relative"
              data-bs-toggle="collapse"
              href="#salescollapse"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              <span className="ms-1">
                <i class="bi bi-receipt fs-5"></i>
              </span>
              &nbsp;<p className="mt-1 ms-3">Sales</p>
              <span className="mt-1 ms-5 position-absolute end-0 me-3">
                <i class="bi bi-chevron-down"></i>
              </span>
            </div>
            <div className="collapse border" id="salescollapse">
              <ul>
                <li className="list-unstyled mt-1">Product</li>
                <li className="list-unstyled mt-1">Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 d-flex">
            <span className="text-secondary">
              <i class="bi bi-bag-heart-fill"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">Purchase</p>
          </div>
          <div className="d-flex mt-1">
            <span className="text-secondary">
              <i class="bi bi-pencil"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">Quotations</p>
          </div>
          <div className="d-flex mt-1">
            <span className="text-secondary">
              <i class="bi bi-wallet2"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">Expenses</p>
          </div>
          <div className="d-flex mt-1">
            <span className="text-secondary">
              <i class="bi bi-cloud-arrow-up-fill"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">Import Bank Statement</p>
          </div>
          <div className="d-flex mt-1">
            <span className="text-secondary">
              <i class="bi bi-person"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">Customer</p>
          </div>
          <div className="d-flex mt-1">
            <span className="text-secondary">
              <i class="bi bi-people-fill"></i>
            </span>
            &nbsp;&nbsp;<p className="fst-italic fs-6">People</p>
          </div>


          {/* profile sidebar */}
          <div className="profile-side-bar position-relative d-flex mt-5">
          <div className="mt-1"><img className="rounded-circle" src={img} alt="can't load" width="30px" height="30px" /></div>
              <div className="position-relative ms-2"style={{fontSize:"10px"}}><p className="mt-1 fw-bold">Vijay</p><p className="position-absolute" style={{top:"17px"}}>vijayvengatesh@144gmail.com</p></div>
              <div className="position-absolute end-0 mt-1"><i class="bi bi-chevron-down"></i></div>
          </div>
        </div>
      </div>
    </>
  );
};

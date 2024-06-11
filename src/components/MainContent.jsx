import axios from "axios";
import React, { useEffect, useState } from "react";

export const MainContent = () => {
  const [productDetails, setProductDetails] = useState({
    productname: "",
    quvantity: 1,
    unitprice: 0,
    discountamount: 0,
  });

  const [data, setData] = useState({
    customerName: "",
    invoice: "",
    invoiceDate: "",
    ordernumber: '',
    duedate: '',
    products: [],
  });

  const [subTotalDiscount, setSubTotalDiscount] = useState(0);
  const [allItemsDiscount, setAllItemsDiscount] = useState(0)


  // //console.log()(allItemsDiscount)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // //console.log()("onchange data", data);
  };

  const productDetailsChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
    //console.log()(name, value);
    //console.log()(productDetails);
  };

  const productsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProducts = data.products.map((product, i) => {
      if (i === index) {
        const updatedProduct = { ...product, [name]: value };
        updatedProduct.netAmount =
          updatedProduct.quvantity * updatedProduct.unitprice -
          updatedProduct.discountamount;
        return updatedProduct;
      }
      return product;
    });
    setData({ ...data, products: updatedProducts });
  };

  const addBill = () => {
    setData({
      ...data,
      products: [...data.products, { ...productDetails }],
    });
    //console.log()(data);
  };

  const SubTotal = () => {
    return data.products.reduce((total, product) => {
      return total + (product.quvantity * product.unitprice - product.discountamount);
    }, 0);
  };

  const allItemsSubtotal=()=>{
    return SubTotal()-allItemsDiscount
  }

  const totalAmount=()=>{
    return SubTotal()-allItemsDiscount-subTotalDiscount;
  }


  const saveData=async()=>{
    const storeData={
      customerName:data.customerName,
      invoice:data.invoice,
      orderNumber:data.ordernumber,
      invoiceDate:data.invoiceDate,
      dueDate:data.duedate,
      purchaseProducts:data.products,
      totalAmount:totalAmount()
    }

    await axios.post("http://localhost:5000/insert",storeData)
    .then(result=>{
        console.log("suscess",result)
    })
    .catch((err)=>{
      console.log("failed",err)
    })
  }


  return (
    <>
      <div className="maincontent" style={{ height: "100vh" }}>
        <div
          className="row d-flex justify-content-around align-items-center mt-2 border-bottom"
          style={{ height: "50px" }}
        >
          <div className="col-8 fw-bold">Sales</div>
          <div className="col-2 text-end ">
            <i className="bi bi-bell-fill"></i> &nbsp;
            <i className="bi bi-gear"></i>
          </div>
          <div className="col-2 d-flex">
            <div className="border w-20 ps-2 pe-2 rounded-circle">S</div> &nbsp;
            <div>
              silico design &nbsp;<i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>

        {/* main-content-box */}
        <div className="border rounded" style={{ margin: "20px", padding: "10px" }}>
          {/* invoice content start */}
          <div className="invoice-content">
            <div className="d-flex fw-bold">
              <span className="text-dark">
                <i className="bi bi-arrow-left"></i>{" "}
              </span>
              &nbsp; <p>Create Invoice</p>
            </div>
            <div>
              <p style={{ fontSize: "13px" }}>Add Compo Logo</p>
            </div>
            {/* box */}
            <div
              className="border border-primary rounded d-flex flex-column justify-content-center align-items-center"
              style={{ margin: "10px" }}
            >
              <span className="text-primary">
                <i className="bi bi-upload fs-2"></i>
              </span>
              <span>Max,file Size 5Mp</span>
              <p>
                Drag & Drop your file or{" "}
                <span className="text-primary">browser</span>
              </p>
            </div>
          </div>
          {/* inVoiceContentend */}

          {/* Customer details start */}
          <div className="customer-details mt-1">
            <div className="d-flex fw-bold">
              <span className="text-primary">
                <i className="bi bi-person"></i>
              </span>
              &nbsp;&nbsp;<p>Customer Details</p>
            </div>
          </div>

          {/* text boxes */}
          <div className="row">
            <div className="col-12 col-md-3  ms-2 d-flex flex-column position-relative">
              <label htmlFor="" style={{ fontSize: "14px" }}>
                Customer Name
              </label>
              <input
                type="text"
                placeholder="      | Search Customers"
                className="border-primary rounded mt-1"
                name="customerName"
                onChange={handleChange}
              />
              <span
                className="position-absolute"
                style={{ top: "26px", left: "15px" }}
              >
                <i className="bi bi-search"></i>
              </span>
              <span
                className="position-absolute"
                style={{ top: "26px", right: "17px" }}
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
            <div className="col-12 col-md-2 ms-2 d-flex flex-column" onChange={handleChange}>
              <label htmlFor="" style={{ fontSize: "14px" }}>
                Invoice
              </label>
              <input type="text" className="border border-2 rounded mt-1" name="invoice" onChange={handleChange}/>
            </div>
            <div className="col-12 col-md-2 ms-2 d-flex flex-column" onChange={handleChange}>
              <label htmlFor="" style={{ fontSize: "14px" }}>
                Order Number
              </label>
              <input type="text" className="border border-2 rounded mt-1" name="ordernumber" onChange={handleChange} />
            </div>
            <div className="col-12 col-md-2 ms-2 d-flex flex-column" >
              <label htmlFor="" style={{ fontSize: "14px" }}>
                Invoice Date
              </label>
              <input type="date" className="border border-2 rounded mt-1" name="invoiceDate"  onChange={handleChange}/>
            </div>
            <div className="col-12 col-md-2 ms-2 d-flex flex-column" >
              <label htmlFor="" style={{ fontSize: "14px" }}>
                Due Date
              </label>
              <input type="date" className="border border-2 rounded mt-1" name="duedate" onChange={handleChange}/>
            </div>
          </div>
          {/* text boxes end */}

          {/* Product details start */}
          <div className="prodcut-details mt-3">
            <div className="d-flex fw-bold">
              <span className="text-primary">
                <i className="bi bi-ticket-detailed"></i>
              </span>
              &nbsp;&nbsp;<p>Product Details</p>
            </div>

            {/* product details text boxes */}
            <div className="row">
              <div className="col-4 col-md-4 ms-2 d-flex flex-column">
                <label htmlFor="" style={{ fontSize: "14px" }}>
                  Select Products
                </label>
                <input type="text" className="border border-2 rounded mt-1"  name="productname" onChange={productDetailsChange}/>
              </div>
              <div className="col-4 col-md-4 ms-2 d-flex flex-column">
                <label htmlFor="" style={{ fontSize: "14px" }}>
                  Quvantity
                </label>
                <input type="number" className="border border-2 rounded mt-1"  name="quvantity" onChange={productDetailsChange}/>
              </div>
              <div className="col">
                <button
                  type="button"
                  onClick={addBill}
                  className="btn btn-primary btn-sm mt-4 w-50 h-50 position-relative"
                >
                  <span className="position-absolute top-0 start-0  ms-lg-5">
                    <i className="bi bi-plus-lg"></i>&nbsp;Add to Bill
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* product table */}
          <div className="table-responsive">
            <table
              className="table mt-3  border border-light"
              style={{ fontSize: "14px", fontWeight: "lighter" }}
            >
              <thead>
                <tr className="bg-light border">
                  <th scope="col">Prodct Name</th>
                  <th scope="col">Quvantity</th>
                  <th scope="col">UnitPrice</th>
                  <th scope="col">Discounted (Total Amount)</th>
                  <th scope="col">Net Amount</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data.products) && data.products.length >= 1 ? data.products.map((sin, index) => (
                  <tr key={index}>
                    <th scope="row">{sin.productname}</th>
                    <td>
                      <input type="number" className="border rounded" value={sin.quvantity<1?'':sin.quvantity} name="quvantity" onChange={(e) => productsChange(e, index)} />
                    </td>
                    <td>
                      <input type="number" className="border rounded" name="unitprice" value={sin.unitprice} onChange={(e) => productsChange(e, index)} />
                    </td>
                    <td>
                      <input type="number" className="border rounded" name="discountamount" value={sin.discountamount} onChange={(e) => productsChange(e, index)} />
                    </td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <p>{sin.netAmount}</p>
                        <span className="text-danger">
                          <i className="bi bi-trash"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                )) : ''}
              </tbody>
            </table>
          </div>

          {/* product table end */}

          <div className="d-flex mt-1" style={{ fontSize: "14px" }}>
            <p>Apply discount percentage of all items?</p>&nbsp;
            <span>
              <i className="bi bi-exclamation-octagon"></i>
            </span>
          </div>
          <div>
            <input type="number" className="rounded border" name="allitemsdisocuntamount"onChange={(e)=>{setAllItemsDiscount(e.target.value)}} />
          </div>

          {/* maincontent footer */}
          <div className="main-footer mt-3">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="customer-note d-flex flex-column">
                  <label
                    htmlFor=""
                    style={{ fontSize: "14px" }}
                    className="mb-2"
                  >
                    Customer Notes
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="border "
                  ></textarea>
                </div>
                <div className="terms-condition mt-2 d-flex flex-column position-relative">
                  <label
                    htmlFor=""
                    style={{ fontSize: "14px" }}
                    className="mb-2"
                  >
                    Terms Condition
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="border"
                  ></textarea>
                  <div
                    className="d-flex position-absolute"
                    style={{ top: "25px" }}
                  >
                    <i className="bi bi-type-bold"></i> &nbsp;
                    <i className="bi bi-type-italic"></i>&nbsp;
                    <i className="bi bi-type-underline"></i>&nbsp;
                    <i className="bi bi-type-strikethrough"></i>&nbsp;
                    <i className="bi bi-blockquote-left"></i>&nbsp;
                    <i className="bi bi-blockquote-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-sm-3 border rounded">
                <div className="d-flex justify-content-between mt-3" style={{ fontSize: "14px" }}>
                  <p>SubTotal</p>
                  <p>{allItemsSubtotal()}</p>
                </div>
                <div className="d-flex justify-content-between mt-3" style={{ fontSize: "14px" }}>
                  <div className="d-flex">
                    <p>Discount</p>&nbsp;&nbsp;{" "}
                    <input
                      type="number"
                      className="rounded border"
                      onChange={(e) => { setSubTotalDiscount(e.target.value) }}
                      style={{ height: "30px" }}
                    />
                  </div>
                  <p>{subTotalDiscount}</p>
                </div>
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                    style={{ fontSize: "14px" }}
                  >
                    TDS Applicabale
                  </label>
                </div>
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                    style={{ fontSize: "14px" }}
                  >
                    TCS Applicabale
                  </label>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex">
                    <select name="" id="" className="w-100">
                      <option value="">select</option>
                      <option value="">vijay</option>
                    </select>
                    <input type="number" className="w-50 ms-2" name="totaldiscount" />
                  </div>
                  <p>-400</p>
                </div>

                <div className="total-amount d-flex justify-content-between mt-3" style={{ fontWeight: 'bolder' }}>
                  <p>Total Amount:</p>
                  <p>{totalAmount()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3 ">
            <button type="button" className="btn btn-light border btn-sm" onClick={saveData}>Save</button>
            <button type="button" className="btn btn-primary btn-sm ms-2" onClick={saveData}>Save and Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

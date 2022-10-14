import axios from "axios";
import React,{useState} from "react"

const API_URL = "http://localhost:3000";

function AddProduct() {
  const [name,setName] = useState();
  const [price,setPrice] = useState();
  const [warranty, setWarranty] = useState();
  const [details,setDetails] = useState();

  const addProduct = ()=>{
    axios.post(API_URL+"/products",
    {name,price,warranty,details},{headers:{
      Authorization:'Bearer '+ localStorage.getItem("user")
  }})
    .then(()=>{
      console.log('Added product')
    })
  }

    return (
        <>
      <div className="Auth-form-container">
        <form className="form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Product Update</h3>
            <div className="form-group mt-3">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Price</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Warranty Period</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter warranty period"
                onChange={(e) => setWarranty(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Product Details</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter details"
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={addProduct}>
                Submit
              </button>
            </div>
          </div>
        </form>
        </div>
      </>
    );
  }

  export default AddProduct;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

  const {id} = useParams(); 
  const[product, setProduct] = useState({name : "", price : "", quantity : "", category : ""});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2000/product/userProduct/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
  } ,[id]);

  const editProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:2000/product/edit/${id}`, product)
    .then((res) => navigate("/product/"))
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container con-top mt-4">
        <div className="card shadow">
          <div className="card-body p-3">
            <form>
              <h3 className='text-center mb-2'>Add Product</h3>
              <div class="mb-3">
                <label for="" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value={product.name}
                  onChange={(e) => {setProduct({...product, name : e.target.value})}}
                />
              </div>
              <div class="mb-3">
                <label for="" className="form-label">Price</label>
                <input
                  type="Number"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                  value={product.price}
                  onChange={(e) => {setProduct({...product, price : e.target.value})}}
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">Quantity</label>
                <input
                  type="Number"
                  className="form-control"
                  name=""
                  id=""
                  placeholder=""
                  value={product.quantity}
                  onChange={(e) => {setProduct({...product, quantity : e.target.value})}}
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder=""
                  value={product.category}
                  onChange={(e) => {setProduct({...product, category : e.target.value})}}
                />
              </div>
              <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={editProduct}
                  >
                    Submit
                  </button>
                  
                </div>
                <div className="col">
                  <button
                    type="reset"
                    className="btn btn-primary w-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct

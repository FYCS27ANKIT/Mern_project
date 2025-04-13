import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/product/")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  });

  const delProduct =(id)=>{
    axios.delete(`http://localhost:2000/product/delete/${id}`)
    .then((res)=>navigate('/product/'))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <div className="container mt-3">
        <h2 className="text-center">All Products</h2>
              <table className="table table-responsive table-bordered table-striped mx-5 mt-3">
                <thead className="bg-dark text-light">
                  <tr scope="row">
                    <th scope="col" className="bg-dark text-light">Product Name</th>
                    <th scope="col" className="bg-dark text-light">Price</th>
                    <th scope="col" className="bg-dark text-light">Quantity</th>
                    <th scope="col" className="bg-dark text-light">Category</th>
                    <th scope="col" className="bg-dark text-light">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.map((product) => (
                    <tr className="" key={product._id}>
                      <td scope="row">{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.category}</td>
                      <td>
                      <NavLink
                        name=""
                        id=""
                        className="btn btn-primary mx-2 shadow"
                        to={`/product/edit/${product._id}`}
                        role="button"
                      >Edit</NavLink>
                      <button
                        type="button"
                        className="btn btn-danger mx-2 shadow"
                        onClick={()=>delProduct(product._id)}
                      >Delete</button>
                          
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default Products


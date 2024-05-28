import React from "react";

const NewProducts = () => {
  const data = {
    new_products: [
      {
        name: "Sofa",
        product_code: "#PHD001",
        customer: "abc@gmail.com",
        status: "Out Stock",
        rating: 3,
      },
      {
        name: "Computer",
        product_code: "#PHD002",
        customer: "cdc@gmail.com",
        status: "In Stock",
        rating: 2,
      },
      {
        name: "Mobile",
        product_code: "#PHD003",
        customer: "pqr@gmail.com",
        status: "Out Stock",
        rating: 4,
      },
      {
        name: "Coat",
        product_code: "#PHD004",
        customer: "bcs@gmail.com",
        status: "In Stock",
        rating: 3,
      },
      {
        name: "Watch",
        product_code: "#PHD005",
        customer: "cdc@gmail.com",
        status: "In Stock",
        rating: 2,
      },
      {
        name: "Shoes",
        product_code: "#PHD006",
        customer: "pqr@gmail.com",
        status: "Out Stock",
        rating: 4,
      },
    ],
  };

  return (
    <div className="col-md-12">
      <div className="card table-card">
        <div className="card-header">
          <h5>New Products</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li className="first-opt">
                <i className="feather icon-chevron-left open-card-option"></i>
              </li>
              <li>
                <i className="feather icon-maximize full-card"></i>
              </li>
              <li>
                <i className="feather icon-minus minimize-card"></i>
              </li>
              <li>
                <i className="feather icon-refresh-cw reload-card"></i>
              </li>
              <li>
                <i className="feather icon-trash close-card"></i>
              </li>
              <li>
                <i className="feather icon-chevron-left open-card-option"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-block p-b-0">
          <div className="table-responsive">
            <table className="table table-hover m-b-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product Code</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.new_products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.product_code}</td>
                    <td>{product.customer}</td>
                    <td>
                      <label
                        className={
                          product.status === "In Stock"
                            ? "label label-success"
                            : "label label-danger"
                        }
                      >
                        {product.status}
                      </label>
                    </td>
                    <td>
                      {[...Array(product.rating)].map((_, i) => (
                        <a key={i} href="#!">
                          ⭐️
                        </a>
                      ))}
                      {[...Array(5 - product.rating)].map((_, i) => (
                        <a key={i} href="#!">
                          ☆
                        </a>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

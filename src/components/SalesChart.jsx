import React from "react";

const SalesChart = () => {
  return (
    <div className="col-md-12 col-xl-4">
      <div className="card card-blue text-white" style={{ height: "490px" }}>
        <div className="card-block p-b-0">
          <div className="row m-b-50">
            <div className="col">
              <h6 className="m-b-5">Sales In July</h6>
              <h5 className="m-b-0 f-w-700">$2665.00</h5>
            </div>
            <div className="col-auto text-center">
              <p className="m-b-5">Direct Sale</p>
              <h6 className="m-b-0">$1768</h6>
            </div>
            <div className="col-auto text-center">
              <p className="m-b-5">Referal</p>
              <h6 className="m-b-0">$897</h6>
            </div>
          </div>
          <div
            id="sec-ecommerce-chart-line"
            className=""
            style={{
              height: "60px",
              padding: "0px",
              position: "relative",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;

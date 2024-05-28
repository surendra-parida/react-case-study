import React from "react";
import "../template_files/images/favicon.ico";
import "../template_files/css";
import "../template_files/css(1)";
import "../template_files/bootstrap.min.css";
import "../template_files/waves.min.css";
import "../template_files/chartist.css";
import "../template_files/widget.css";
import "../template_files/feather.css";
import "../template_files/style.css";
import Nav from "./Nav";
import Summary from "./Summary";
import Progress from "./Progress";
import Whatsnew from "./Whatsnew";
import LatestActivity from "./Latestactivity";
import NewProducts from "./Newproducts";
import SalesChart from "./SalesChart";
import DashBoard from "./DashBoard";

const Body = () => {
  return (
    <div class="pcoded-container navbar-wrapper">
      <Nav />
      <div class="pcoded-main-container" style={{ margintop: "73px" }}>
        <div class="pcoded-wrapper">
          <div
            class="pcoded-content"
            style={{
              marginLeft: "0px!important",
            }}
          >
            <DashBoard />

            <div class="pcoded-inner-content">
              <div class="main-body">
                <div class="page-wrapper">
                  <div class="page-body">
                    <div class="row">
                      <div class="col-md-12 col-xl-8">
                        <div class="card sale-card">
                          <div class="card-header">
                            <h5>Deals Analyticssss</h5>
                          </div>
                          <div class="card-block">
                            <div
                              id="sales-analytics"
                              class="chart-shadow"
                              style={{
                                height: "380px",
                                overflow: "hidden",
                                textAlign: "left",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <Summary />
                      <Progress />
                      <SalesChart />
                      <Whatsnew />
                      <LatestActivity />
                      <NewProducts />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="styleSelector"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;

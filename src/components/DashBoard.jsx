import React from 'react'

const DashBoard = () => {
  return (
    <div class="page-header card">
    <div class="row align-items-end">
      <div class="col-lg-8">
        <div class="page-header-title">
          <i class="bg-c-blue">🛖</i>
          <div class="d-inline">
            <h5>Dashboard</h5>
            <span>
              lorem ipsum dolor sit amet, consectetur adipisicing
              elit
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="page-header-breadcrumb">
          <ul class="breadcrumb breadcrumb-title">
            <li class="breadcrumb-item">
              <a href="#">
               🛖
              </a>
            </li>
            <li class="breadcrumb-item">
              <a a href="#!">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DashBoard
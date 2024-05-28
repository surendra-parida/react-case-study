import React from 'react';
import avatar4 from "../template_files/avatar-4.jpg"

const Whatsnew = () => {
  const data = {
    "what_new_items": [
        {
            "message": "Your Manager Posted.",
            "created_by": "Jonny michel"
        },
        {
            "message": "You have 3 pending Task.",
            "created_by": "Hemilton"
        },
        {
            "message": "New Order Received.",
            "created_by": "Hemilton"
        },
        {
            "message": "Your Manager Posted.",
            "created_by": "Jonny michel"
        }
    ]
  };

  return (
    <div className="col-xl-4 col-md-12">
      <div className="card latest-update-card">
        <div className="card-header">
          <h5>What’s New</h5>
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
        <div className="card-block">
          <div className="scroll-widget">
            {data.what_new_items.map((item, index) => (
              <div className="latest-update-box" key={index}>
                <div className="row p-t-20 p-b-30">
                  <div className="col-auto text-right update-meta p-r-0">
                    <img
                      src={avatar4}
                      alt=""
                      className="img-radius img-40 align-top m-r-15 update-icon"
                    />
                  </div>
                  <div className="col p-l-5">
                    <a href="#!">
                      <h6>{item.message}</h6>
                    </a>
                    <p className="text-muted m-b-0">
                      {item.created_by}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatsnew;

import React from "react";
import logo from "../template_files/logo.png";
import avatar4 from "../template_files/avatar-4.jpg";
import avatar3 from "../template_files/avatar-3.jpg";

const Nav = () => {
  return (
    <nav
      className="navbar header-navbar pcoded-header iscollapsed"
      data-header-theme="themelight1"
    >
      <div className="navbar-wrapper">
        <div class="navbar-logo" logo-theme="theme6">
          <a href="#">
            <img class="img-fluid" src={logo} alt="Theme-Logo" />
          </a>
          <a class="mobile-menu" id="mobile-collapse" href="#!">
            <i class="feather icon-menu icon-toggle-left"></i>
          </a>
          <a class="mobile-options waves-effect waves-light">
            <i class="feather icon-more-horizontal"></i>
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <ul className="nav-left">
            <li className="header-search">
              <div className="main-search morphsearch-search">
                <div className="input-group">
                  <span className="input-group-prepend search-close">
                    <i className="feather icon-x input-group-text"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Keyword"
                  />
                  <span className="input-group-append search-btn">
                    <i className="feather icon-search input-group-text"></i>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <a href="#!" className="waves-effect waves-light">
                <i className="full-screen feather icon-maximize"></i>
              </a>
            </li>
          </ul>
          <ul className="nav-right">
            <li className="header-notification">
              <div className="dropdown">
                <div className="dropdown-toggle" data-toggle="dropdown">
                  🔔
                  <span className="badge bg-c-red">5</span>
                </div>
                <ul className="dropdown-menu notification-view">
                  <li>
                    <h6>Notifications</h6>
                    <label className="label label-danger">New</label>
                  </li>
                  {[
                    {
                      name: "John Doe",
                      avatar: avatar4,
                      msg: "Lorem ipsum dolor sit amet, consectetuer elit.",
                    },
                    {
                      name: "Joseph William",
                      avatar: avatar3,
                      msg: "Lorem ipsum dolor sit amet, consectetuer elit.",
                    },
                    {
                      name: "Sara Soudein",
                      avatar: avatar4,
                      msg: "Lorem ipsum dolor sit amet, consectetuer elit.",
                    },
                  ].map((notif, index) => (
                    <li key={index}>
                      <div className="media">
                        <img
                          className="img-radius"
                          src={notif.avatar}
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <h5 className="notification-user">{notif.name}</h5>
                          <p className="notification-msg">{notif.msg}</p>
                          <span className="notification-time">
                            30 minutes ago
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="header-notification">
              <div className="dropdown">
                <div
                  className="displayChatbox dropdown-toggle"
                  data-toggle="dropdown"
                >
                  💬
                  <span className="badge bg-c-green">3</span>
                </div>
              </div>
            </li>
            <li className="user-profile header-notification">
              <div className="dropdown">
                <div className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={avatar4}
                    className="img-radius"
                    alt="User-Profile"
                  />
                  <span>John Doe</span>
                  <i className="feather icon-chevron-down"></i>
                </div>
                <ul className="dropdown-menu profile-notification">
                  {[
                    { icon: "settings", text: "Settings" },
                    { icon: "user", text: "Profile" },
                    { icon: "mail", text: "My Messages" },
                    { icon: "lock", text: "Lock Screen" },
                    { icon: "log-out", text: "Logout" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#!">
                        <i className={`feather icon-${item.icon}`}></i>{" "}
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react';

const LatestActivity = () => {
    const data = {
        "latest_activity": [
            {
                "activity_type": "Development & Update",
                "activity": "Lorem ipsum dolor sit amet, More",
                "readmore_link": "#"
            },
            {
                "activity_type": "Showcases",
                "activity": "Lorem dolor sit amet, More",
                "readmore_link": "#"
            },
            {
                "activity_type": "Miscellaneous",
                "activity": "Lorem ipsum dolor sit ipsum amet, More",
                "readmore_link": "#"
            },
            {
                "activity_type": "Your Manager Posted.",
                "activity": "Lorem ipsum dolor sit amet, More",
                "readmore_link": "#"
            }
        ]
    };

    return (
        <div className="col-xl-4 col-md-6">
            <div className="card latest-update-card">
                <div className="card-header">
                    <h5>Latest Activity</h5>
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
                        {data.latest_activity.map((item, index) => (
                            <div className="latest-update-box" key={index}>
                                <div className="row p-t-20 p-b-30">
                                    <div className="col-auto text-right update-meta p-r-0">
                                        <i className="b-primary update-icon ring"></i>
                                    </div>
                                    <div className="col p-l-5">
                                        <a href="#!">
                                            <h6>{item.activity_type}</h6>
                                        </a>
                                        <p className="text-muted m-b-0">
                                            {item.activity}{" "}
                                            <a href={item.readmore_link} className="text-c-blue">
                                                Read More
                                            </a>
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

export default LatestActivity;

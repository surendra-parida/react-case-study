import React from 'react';

const Progress = () => {
    const data = {
        "project_progress_summary": [
            {
                "title": "Published Project",
                "value": "532",
                "percentage": "+1.69%"
            },
            {
                "title": "Completed Task",
                "value": "4569",
                "percentage": "-0.5%"
            },
            {
                "title": "Successful Task",
                "value": "89%",
                "percentage": "+0.99%"
            },
            {
                "title": "Ongoing Project",
                "value": "365",
                "percentage": "+0.35%"
            }
        ]
    };

    return (
        <div className="col-xl-12">
            <div className="card proj-progress-card">
                <div className="card-block">
                    <div className="row">
                        {data.project_progress_summary.map((item, index) => (
                            <div className="col-xl-3 col-md-6" key={index}>
                                <h6>{item.title}</h6>
                                <h5 className="m-b-30 f-w-700">
                                    {item.value}
                                    <span className={item.percentage.includes("+") ? "text-c-green m-l-10" : "text-c-red m-l-10"}>
                                        {item.percentage}
                                    </span>
                                </h5>
                                <div className="progress">
                                    <div
                                        className={item.percentage.includes("+") ? "progress-bar bg-c-green" : "progress-bar bg-c-red"}
                                        style={{ width: `${parseInt(item.value) > 100 ? "100" : item.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;

import React from 'react';

const Summary = () => {
  const data = [
    {
      "title": "Impressions",
      "value": "1,563",
      "period": "May 23 - June 01 (2017)",
      "icon": "fas fa-eye",
      "color": "blue"
    },
    {
      "title": "Goal",
      "value": "30,564",
      "period": "May 23 - June 01 (2017)",
      "icon": "fas fa-bullseye",
      "color": "green"
    },
    {
      "title": "Impact",
      "value": "42.6%",
      "period": "May 23 - June 01 (2017)",
      "icon": "fas fa-hand-paper",
      "color": "yellow"
    }
  ];

  return (
    <div className="col-md-12 col-xl-4">
    {data.map((item, index) => (
      <div className="card comp-card" key={index}>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="m-b-25">{item.title}</h6>
              <h3 className={`f-w-700 text-c-${item.color}`}>
                <span style={{color: item.color}}>{item.value}</span>
              </h3>
              <p className="m-b-0">{item.period}</p>
            </div>
            <div className="col-auto">
            <div className="col-auto d-flex justify-content-center align-items-center">
                <div style={{backgroundColor: item.color, width: '50px', height: '50px', fontSize: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {item.icon === "fas fa-eye" ? "👀" : (item.icon === "fas fa-bullseye" ? "🧿" : "🤚🏻" )}
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
}

export default Summary;


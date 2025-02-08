import React from 'react'
import { useData } from '../ContextAPI/DataContext';

function Service() {
    const { services } = useData();

    function downloadFileUsingURL(fileId){
        console.log(fileId);
        const url = `https://drive.google.com/uc?export=download&id=${fileId}`
        const fileName=url;
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      }

  return (
        <div id="services" className="text-center">
          <div className="container">
              <div className="section-title">
              <h2>Our Services</h2>
              <p>
              EduBrix ensures a smooth and stress-free journey for students pursuing global opportunities, guiding them through every step of their international adventure.
              </p>
              </div>
              <div className="row">
              {Array.isArray(services) &&
              services.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="col-md-4">
                      {" "}
                      <i className={d.icon}></i>
                      <div className="service-desc">
                          <h3>{d.name}</h3>
                          <p>{d.text}</p>
                          <button
                              onClick={()=>downloadFileUsingURL(d.link)}
                              className="btn btn-custom btn-lg page-scroll"
                              >
                              Read More
                          </button>
                      </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
  )
}

export default Service
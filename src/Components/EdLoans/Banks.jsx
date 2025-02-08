import React from 'react'

function Banks() {
    const items = [
        { title: "High-Quality Education", description: "Providing access to world-class resources and learning opportunities." },
        { title: "Personalized Support", description: "Tailored guidance to help students achieve their academic goals." },
        { title: "Global Connections", description: "Opportunities to network and collaborate with peers worldwide." },
        { title: "Seamless Experience", description: "End-to-end support for a smooth and stress-free journey." },
      ];
    
      return (
        <div id='banks' className="text-center">
            <img src="/img/Banks.png" alt="Image of banks collaborated" />
        </div>
       
      );
}

export default Banks
import React from 'react'

function Mba() {
    const countries=[
        {
            "country":"USA",
            "code":"us",
            "fileId":"1wMRo7Cu9QOgVu9BUsMQ5fgy-UX1lQeVG"
        },
        {
            "country":"UK",
            "code":"gb",
            "fileId":"1Rma-RCYIZQH1qaW6s8HuYS00E7E7dEMo"
        },
        {
            "country":"Australia",
            "code":"au",
            "fileId":"1qPTSkokFJnV9rjCAlWmO2nTQ_LVXMCoY"
        },
        {
            "country":"Germany",
            "code":"de",
            "fileId":"15oSd9wTJTyW-oltCfOOCZzaeS0LdsAIm"
        },
        {
            "country":"Canada",
            "code":"ca",
            "fileId":"1J5IiMRecCaWGuolqifvLyrEXeNfZhBg7"
        },
    ]
  return (
    <div id='education' className="text-center">
        <div className="container">
            <div className="section-title">
                <h2></h2>
                <h2>MBA</h2>
                <p>
                Take your career to the next level with an elite MBA. We'll help you get accepted to the best schools abroad
                </p>
            </div>
            <div className='text-content'>
                <p>Earning a Master of Business Administration degree is almost always a good idea. A full-time MBA program in a traditional classroom setting provides an unparalleled immersion experience and rapid career advancement. Many would-be MBA students have been stumped by the seeming dichotomy between attending a business school in India and studying overseas. <br /><br /><br />

                One positive is that you get to study and live in your home country. However, the appeal of a foreign degree, international experience, and top-notch academic possibilities is just as strong. There are benefits and drawbacks to both options; weighing them side by side will help you make the best choice. Relevant issues here include the price and quality of higher education, the availability of suitable employment, the cost of living, etc.<br /><br /><br />

                After deciding to get their MBA in another nation, prospective students often wonder where they should go. When pursuing an MBA overseas, the reputation of the university you attend might be just as important as the quality of the MBA program you complete. Because of this, choose an appropriate school is crucial before submitting an application. Choosing the ideal country to pursue an MBA is a difficult task due to the many variables at play. Because of this, we have compiled a list of the top 5 nations in which to earn an MBA.</p>
            </div>
        </div>
        <div className='countries'>
        {
            countries.map((country)=>{
                return (
                    <div className='country' key={country.code}>
                        <img src={`https://flagcdn.com/${country.code}.svg`} alt="" />
                        <h2>{country.country}</h2>
                        <a 
                                href={`https://drive.google.com/file/d/${country.fileId}/view`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-custom btn-lg page-scroll">Read More</button>
                            </a>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Mba
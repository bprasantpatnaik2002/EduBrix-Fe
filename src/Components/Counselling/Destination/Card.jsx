import React from 'react'

function Card({name, capital, largeCities, areaSize, language, population, currency, universities, students, flagCode}) {
  return (
    <div id='destination-card' className="card-container">
        <div className="card">
            <div className='flag-img'>
                <img src={`https://flagcdn.com/${flagCode}.svg`} alt="" />
            </div>
            <h2 className="card-title">{name}</h2>
            <div className="card-content">
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Large Cities:</strong> 
            {
                largeCities.map((city,i)=>{
                    if(i===largeCities.length-2){
                        return(` ${city} and`)
                    }
                    else if(i===largeCities.length-1){
                        return(` ${city}.`)
                    }
                    else{
                        return(` ${city} ,`)  
                    }
                })
            }
            </p>
            <p><strong>Area Size:</strong>{areaSize}<sup>2</sup></p>
            <p><strong>Language:</strong>{language}</p>
            <p><strong>Population:</strong> {population} (As of 2024)</p>
            <p><strong>Currency:</strong> {currency}</p>
            <p><strong>Universities:</strong> {universities}</p>
            <p><strong>International Students:</strong> {students} (As of 2024)</p>
            </div>

            
        </div>
    </div>
  )
}

export default Card


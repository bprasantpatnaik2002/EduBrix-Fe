import React from 'react'

function BackDropDesc({name,image,job,desc}) {
    return (
        <div className='sub-part'>
        <div className='Member'>
            <div className='name'>{name}</div>
            <img src={image} alt={`${name} image`} />
            <div className='designation'><span className='firstPart'>Director -</span><span className='secondPart'>- {job}</span></div>
                <p>{desc}</p>
            </div>
            
    </div>
      )
}

export default BackDropDesc
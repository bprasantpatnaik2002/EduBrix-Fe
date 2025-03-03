import React from 'react'

function BackDropDesc({name,image,job,desc,account}) {
    return (
        <div className='sub-part'>
        <div className='Member'>
            <div className='name'>{name}</div>
            <img src={image} alt={`${name} image`} />
            <div className='designation'><span className='firstPart'>Director -</span><span className='secondPart'>- {job}</span></div>
            <div className="designation">
            <p>
                <a href={account} className="linkedin-link">
                Linked
                <i className="fa fa-linkedin linkedin-icon" aria-hidden="true"></i>
                </a>
            </p>
            </div>
                <p>{desc}</p>
        </div>
            
    </div>
      )
}

export default BackDropDesc
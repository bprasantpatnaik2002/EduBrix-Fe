import React from 'react'

function UnderGraduate() {
    const countries=[
        {
            "country":"USA",
            "code":"us",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"UK",
            "code":"gb",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"Australia",
            "code":"au",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"Germany",
            "code":"de",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"Canada",
            "code":"ca",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"Ireland",
            "code":"ie",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        },
        {
            "country":"Europe",
            "code":"eu",
            "fileId":"1wBDqKIfKvJDy9l8HpVKFx9MEkOjxtwNW"
        }
    ]
  return (
    <div id='education' className="text-center">
        <div className="container">
            <div className="section-title">
                <h2></h2>
                <h2>Undergraduate</h2>
                <p>
                Get a world-class undergrad education abroad. Our experts help you gain admission to top international universities.
                </p>
            </div>
            <div className='text-content'>
                <p>There was a time when the confident first-year student spent a semester or two away from home, exploring a new culture and testing the academic waters at a distant university. Tasting today is a cowardly activity. International students have always been drawn to master’s degree programs, but now that the options are so open at the undergraduate level, more and more students are choosing to study abroad for their four years of undergraduate education. Every year brings new opportunities to do so.
                <br /><br /><br />
                In this age of globalization, the advantages of a truly global education are plain to see. However, the most significant factor is that going to school overseas can save parents tens of millions of rupees. College is either free or nearly free in several countries, including Turkey, Thailand, Brazil, Iceland, and certain countries on continental Europe, where tuition prices are less than two thousand dollars per year. The cherry on top is that students can receive grants and scholarships from colleges overseas as well as federal funding from their home countries.
                <br /><br /><br />
                It is not the right choice for everyone to earn their bachelor’s degree in another country. Learners should be ready to adjust to the ways of a whole new culture. This endeavor is best suited to those who are naturally inquisitive and resourceful, and who are willing to learn and adjust to new ways of assessing and teaching. Forget about college teams, fraternities, and organizations. There is less binge drinking and other signs of lessening college life, and even the parties themselves are different. Teachers and alumni agree that the payoff is substantial, and businesses that value initiative agree.</p>
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

export default UnderGraduate
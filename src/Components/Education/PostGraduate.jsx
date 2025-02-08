import React from 'react'

function PostGraduate() {
    const countries=[
        {
            "country":"USA",
            "code":"us",
            "fileId":"1YyUe1zbzYQeMXJ6u3ng0_tGVmZ5DcIOt"
        },
        {
            "country":"UK",
            "code":"gb",
            "fileId":"1vBX3K9v9CGg1plj3UP5NTzSdMWDcdRKL"
        },
        {
            "country":"Australia",
            "code":"au",
            "fileId":"1DEakq-WAJrHvZLXmIyQAGHytVt8WeGhj"
        },
        {
            "country":"Germany",
            "code":"de",
            "fileId":"1KLG7RfPZKW6tqLMCa9HxshW1zUXFpXYf"
        },
        {
            "country":"Canada",
            "code":"ca",
            "fileId":"1Lt7I2-NQqw7JA24SBWv7MKH1lKcEUOZp"
        },
        {
            "country":"Ireland",
            "code":"ie",
            "fileId":"1jnUInYCeE6DseLqXs6IewIe4li-qKZUS"
        },
        {
            "country":"Europe",
            "code":"eu",
            "fileId":"1YhobqwThAgE1-u26IzRPhprtbx4ghKBD"
        }
    ]
  return (
    <div id='education' className="text-center">
        <div className="container">
            <div className="section-title">
                <h2></h2>
                <h2>Post Graduate</h2>
                <p>
                Take your career higher with a postgrad degree abroad. We'll help you get accepted to elite global programs.
                </p>
            </div>
            <div className='text-content'>
                <p>Detailed information follows. Clearly, studying abroad is still a desirable option for many students. There have been major shifts in the most well-liked travel destinations and golf courses as a result of an emphasis on financial viability. Indian students considering studying abroad are finding that it’s no longer true that “one size fits all.” Every student must now evaluate a wide range of issues in light of their individual goals for their study abroad experience. While some students are solely focused on attending the best schools possible, others are also considering the possibility of staying abroad when they graduate.
                    <br /><br /><br />
                Many Indian students have a three-year window of optional practical training after they graduate, and this has long been seen as a method to recoup some of the cost of their education in the United States by acquiring work experience there. Many Indian students in the United States are beginning to go elsewhere for higher education as the future of H1B visa sponsorship becomes a reality. These other options include Canada and European countries like the Netherlands, France, and Germany.
                <br /><br /><br />
                Competition for spots at India’s most prestigious colleges is fierce, and the country’s growing tuition rates are just adding to the pressure. Students in the STEM fields are increasingly looking at Germany as a potential study abroad destination due to the country’s relatively low tuition rates and high return on investment. Not only are Germany’s technical universities well regarded internationally, but the country also offers generous funding options for academics. International students can save money on living costs and find on-campus employment opportunities.
                The STEM (science, technology, engineering, and mathematics) fields are well represented in English language media. The school provides free instruction in German language basics for all students, and being able to speak another language can greatly enhance a person’s employability. Germany’s blue card program, which permits recent foreign university grads to work and live anywhere in the European Union, is another factor contributing to the country’s rising popularity.
                <br /><br /><br />
                The French government has also been actively courting Indian students. The French government and academia were ill-informed about India. But it has begun to shift in recent years. Compared to the United States, the United Kingdom, or Australia, the cost of a management course in France is thirty percent to forty percent lower. Indian students in France have up to two years following graduation to pursue employment.</p>
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

export default PostGraduate
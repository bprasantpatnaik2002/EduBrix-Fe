import React from 'react'
import InfiniteCarousal from './InfiniteCarousal';
import Banks from './Banks';

function Partners() {
    const images = [
        "https://tse1.mm.bing.net/th?id=OIP.paJxzHmXn__2tLm0zxk3xwAAAA&pid=Api&P=0&h=180",
        "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-Baroda-Emblem.png",
        "http://4.bp.blogspot.com/-P5BiFJK-kL0/VKGZKc9UkTI/AAAAAAAAH7Y/jOwrZaTRRU0/w1200-h630-p-k-no-nu/Logo%2BAxis_Bank.png",
        "https://tse4.mm.bing.net/th?id=OIP.ZzYng-js6EOPmiJxnx6w0wHaD4&pid=Api&P=0&h=1800",
        "https://meljol.org/wp-content/uploads/2020/10/Avanse-Logo_financial-services-01-3-1024x724.png",
        "https://images.yourstory.com/cs/images/companies/Incred-1588590828240.png",
        "https://tse2.mm.bing.net/th?id=OIP.QFNr21Z8lfVXhRiIs7cZEgAAAA&pid=Api&P=0&h=180",
        "https://di2vt7hcm6vs0.cloudfront.net/site-static/partner/hdfc-credila.png",
        "https://tse2.mm.bing.net/th?id=OIP.nkVUUN8kK0qjk8gfjbrgGwHaHa&pid=Api&P=0&h=180",
        "https://www.mpowerfinancing.com/wp-content/uploads/2016/01/mpower-logo-stacked-300x300-1.png",
        "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-06/Prodigy%20Finance%20Logo.png?itok=Qe8yx48t",
        "https://tse2.mm.bing.net/th?id=OIP.icyDSA-nhd860egqVcLs5AAAAA&pid=Api&P=0&h=180",
        "https://mms.businesswire.com/media/20220901005060/en/1558263/23/Ascent_logo_black.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.1Oap5Tj-TL0UsUU3PAUkgAAAAA&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.g4tncwRf6OEGNF-Gfv8wBQHaD4&pid=Api&P=0&h=180"

      ];

  return (
    <div id='Partners' className="text-center">
    <div className="container">
      <div className="section-title">
        <h2></h2>
        <h2>Our Financing Partners</h2>
        <p>EduBrix provides the most comprehensive education loan assistance to help you achieve your overseas education dreams. We understand the financial burden of higher education and work with you to secure funding at the best terms. Our expertise and partnerships with major banks ensure you get the maximum loan approval with minimal hassle.</p>
      </div>

        <div className='carousal'>
            <InfiniteCarousal pictures={[...images]}/>
        </div>
       
      
       <Banks/>

       <h3 className='brick'>Embark on your education journey with confidence! Let our experts guide you through every step of the loan process, ensuring a hassle-free and seamless approval experience.</h3>
    </div>
  </div>
  )
}

export default Partners
import React from 'react'
import './App.css'
import { Routes, Route } from "react-router";

import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/Footer/Contact'
import About from './Components/About/About'
import PreDeparture from './Components/PreDeparture/PreDeparture';
import French from './Components/Prerequisites/Languages/French';
import German from './Components/Prerequisites/Languages/German';
import Lang from './Components/Prerequisites/Languages/Lang';
import Toefl from './Components/Prerequisites/CompetitiveExams/Toefl';
import ExamsToGive from './Components/Prerequisites/CompetitiveExams/ExamsToGive';
import Sat from './Components/Prerequisites/CompetitiveExams/Sat';
import Pte from './Components/Prerequisites/CompetitiveExams/Pte';
import Ielts from './Components/Prerequisites/CompetitiveExams/Ielts';
import Gmat from './Components/Prerequisites/CompetitiveExams/Gmat';
import Gre from './Components/Prerequisites/CompetitiveExams/Gre';
import Destination from './Components/counselling/Destination/Destination.jsx';
import Stream from './Components/counselling/Stream/Stream';
import Header from './Components/Common/Header';
import Mba from './Components/education/Mba';
import PostGraduate from './Components/education/PostGraduate';
import UnderGraduate from './Components/education/UnderGraduate';
import UpcomingBatches from './Components/WhatsNew.jsx/UpcomingBatches';
import NewsUpdate from './Components/WhatsNew.jsx/NewsUpdate';
import Blogs from './Components/WhatsNew.jsx/Blogs';
import Discounts from './Components/WhatsNew.jsx/Discounts';
import EdLoan from './Components/EdLoans/EdLoan';
import Login from './Components/Admin/Login';
import Admin from './Components/Admin/Admin';
import { DataProvider } from "./Components/ContextAPI/DataContext";
import Appointment from './Components/Appointment/Appointment';


function App() {
  

  return (
   <DataProvider>
    <Navbar/>
    <Routes>
      <Route index element={
        <>
          <Header link={"/img/intro-bg1.jpg"}/>
          <Home/>
        </>} />

      <Route path="about" element={
        <>
            <Header link={"/img/header/about.jpg"}/>
            <About />
        </>
        } />

      <Route path="predeparture" element={
        <>
            <Header link={"/img/header/predept.jpg"}/>
            <PreDeparture />
        </>
        } />

      <Route path="educational-loan" element={
        <>
            <Header link={"/img/header/edloan.jpg"}/>
            <EdLoan />
        </>
        } />

        
        <Route path="/prereq_category-competitive&exam-gre" element={
        <>
            <Header link={"/img/header/gre.jpg"}/>
            <ExamsToGive />
            <Gre />
        </>
        }/>

        <Route path="/prereq_category-competitive&exam-gmat" element={
        <>
            <Header link={"/img/header/gmat.jpg"}/>
            <ExamsToGive />
            <Gmat />
        </>
        }/>

        <Route path="/prereq_category-competitive&exam-ielts" element={
        <>
            <Header link={"/img/header/ielts.jpg"}/>
            <ExamsToGive />
            <Ielts />
        </>
        }/>

        <Route path="/prereq_category-competitive&exam-pte" element={
        <>
            <Header link={"/img/header/pte.jpg"}/>
            <ExamsToGive />
            <Pte />
        </>
        }/>

        <Route path="/prereq_category-competitive&exam-sat" element={
        <>
            <Header link={"/img/header/sat.jpg"}/>
            <ExamsToGive />
            <Sat />
        </>
        }/>
        
        <Route path="/prereq_category-competitive&exam-toefl" element={
        <>
            <Header link={"/img/header/toefl.jpg"}/>
            <ExamsToGive />
            <Toefl />
        </>
        }/>

                {/* Languages */}
        <Route path="/prereq_category-languages" element={<Lang />} />
                
        <Route path="/prereq_category-languages&exam-german" element={
        <>
            <Header link={"/img/header/german.jpg"}/>
            <Lang />
            <German />
        </>
        }/>

        <Route path="/prereq_category-languages&exam-french" element={
        <>
            <Header link={"/img/header/french.jpg"}/>
            <Lang />
            <French />
        </>
        }/>

        <Route path="/counselling_category-study-destination" element={
        <>
            <Header link={"/img/header/studydest.jpg"}/>
            <Destination/>
        </>
        }/>

        <Route path="/counselling_category-stream-selection" element={
        <>
            <Header link={"/img/header/stream.jpg"}/>
            <Stream/>
        </>
        }/>
                
        <Route path="/education_category-mba" element={
        <>
            <Header link={"/img/header/mba.jpg"}/>
            <Mba/>
        </>
        }/>
                
        <Route path="/education_category-post-graduate" element={
        <>
            <Header link={"/img/header/postgrad.jpg"}/>
            <PostGraduate/>
        </>
        }/>
                
        <Route path="/education_category-undergraduate" element={
        <>
            <Header link={"/img/header/undergrad.jpg"}/>
            <UnderGraduate/>
        </>
        }/>
                
        <Route path="/new_category-upcoming-batches" element={
        <>
            <Header link={"/img/header/batch.jpg"}/>
            <UpcomingBatches/>
        </>
        }/>

        <Route path="/new_category-news&update" element={
        <>
            <Header link={"/img/header/news.jpg"}/>
            <NewsUpdate/>
        </>
        }/>
                
        <Route path="/new_category-blogs" element={
        <>
            <Header link={"/img/header/blog.jpg"}/>
            <Blogs/>
        </>
        }/>

        <Route path="/new_category-discount" element={
        <>
            <Header link={"/img/header/discount.jpg"}/>
            <Discounts/>
        </>
        } />
                
        <Route path="/appointment/schedule/booking" element={
        <>
            <Header link={"/img/header/batch.jpg"}/>
            <Appointment/>
        </>
        }/>

        <Route path="login" element={
        <>
            <Header link={"/img/header/login.jpg"}/>
            <Login/> 
        </>
        }/>

        <Route path="/admin/dashboard/EduBrix$Overseas$Consultancy/SWAPNAJA-ABHISHEK" element={
        <>
            <Header link={"/img/header/admin.jpg"}/>
            <Admin/>
        </>
        }/>

    </Routes>
    <a  id="whatsapp" className='whatsapp' href='https://api.whatsapp.com/send/?phone=919930454686&text&type=phone_number&app_absent=0' target='_blank'><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
    <Contact/>
   </DataProvider>
  )
}

export default App

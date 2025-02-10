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
import Destination from './Components/Counselling/Destination/Destination';
import Stream from './Components/Counselling/Stream/Stream';
import Header from './Components/Common/Header';
import Mba from './Components/Education/Mba';
import PostGraduate from './Components/Education/PostGraduate';
import UnderGraduate from './Components/Education/UnderGraduate';
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
      <Route path="/prereq/competitive/gre" element={
        <>
            <Header link={"/img/header/gre.jpg"}/>
            <ExamsToGive />
            <Gre />
        </>
        }/>
                <Route
                    path="/prereq/competitive/gmat"
                    element={
                        <>
            <Header link={"/img/header/gmat.jpg"}/>
                            <ExamsToGive />
                            <Gmat />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/ielts"
                    element={
                        <>
                            
                <Header link={"/img/header/ielts.jpg"}/>
                            <ExamsToGive />
                            <Ielts />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/pte"
                    element={
                        <>
                        
    <Header link={"/img/header/pte.jpg"}/>
                            <ExamsToGive />
                            <Pte />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/sat"
                    element={
                        <>
                        
    <Header link={"/img/header/sat.jpg"}/>
                            <ExamsToGive />
                            <Sat />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/toefl"
                    element={
                        <>
                        
    <Header link={"/img/header/toefl.jpg"}/>
                            <ExamsToGive />
                            <Toefl />
                        </>
                    }
                />

                {/* Languages */}
                <Route path="/prereq/languages" element={<Lang />} />
                <Route
                    path="/prereq/languages/german"
                    element={
                        <>
                        
    <Header link={"/img/header/german.jpg"}/>
                            <Lang />
                            <German />
                        </>
                    }
                />
                <Route
                    path="/prereq/languages/french"
                    element={
                        <>
                        
    <Header link={"/img/header/french.jpg"}/>
                            <Lang />
                            <French />
                        </>
                    }
                />
                <Route
                    path="/counselling/study-destination"
                    element={
                        <>
                            <Header link={"/img/header/studydest.jpg"}/>
                            <Destination/>
                        </>
                    }
                />
                <Route
                    path="/counselling/stream-selection"
                    element={
                        <>
                        
    <Header link={"/img/header/stream.jpg"}/>
                            <Stream/>
                        </>
                    }
                />
                <Route
                    path="/education/mba"
                    element={
                        <>
                        
    <Header link={"/img/header/mba.jpg"}/>
                            <Mba/>
                        </>
                    }
                />
                <Route
                    path="/education/post-graduate"
                    element={
                        <>
                        
    <Header link={"/img/header/postgrad.jpg"}/>
                            <PostGraduate/>
                        </>
                    }
                />
                <Route
                    path="/education/undergraduate"
                    element={
                        <>
                        
    <Header link={"/img/header/undergrad.jpg"}/>
                            <UnderGraduate/>
                        </>
                    }
                />
                <Route
                    path="/new/upcoming-batches"
                    element={
                        <>
                        
                            <Header link={"/img/header/batch.jpg"}/>
                            <UpcomingBatches/>
                        </>
                    }
                />
                <Route
                    path="/new/news&update"
                    element={
                        <>
                        
                            <Header link={"/img/header/news.jpg"}/>
                            <NewsUpdate/>
                        </>
                    }
                />
                <Route
                    path="/new/blogs"
                    element={
                        <>
                        
    <Header link={"/img/header/blog.jpg"}/>
                            <Blogs/>
                        </>
                    }
                />
                <Route
                    path="/new/discount"
                    element={
                        <>
                        
    <Header link={"/img/header/discount.jpg"}/>
                            <Discounts/>
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                        
    <Header link={"/img/header/batch.jpg"}/>
                            <Login/>
                        </>
                    }
                />
                <Route
                    path="/admin/dashboard/EduBrix$Overseas$Consultancy/SWAPNAJA-ABHISHEK"
                    element={
                        <>
                        
    <Header link={"/img/header/batch.jpg"}/>
                            <Admin/>
                        </>
                    }
                />
                <Route
                    path="/appointment/schedule/booking"
                    element={
                        <>
                        
    <Header link={"/img/header/batch.jpg"}/>
                            <Appointment/>
                        </>
                    }
                />
    </Routes>
    <a  id="whatsapp" className='whatsapp' href='https://api.whatsapp.com/send/?phone=919930454686&text&type=phone_number&app_absent=0' target='_blank'><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
    <Contact/>
   </DataProvider>
  )
}

export default App

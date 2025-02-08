import React from 'react'
import Videos from '../Home/Videos'
import { useData } from "../ContextAPI/DataContext";

function Gallery() {
    
  const { fall, parent } = useData();
    
  return (
    <>
        <Videos Heading={"Gallery"} subhead={"Our Happy Students"} title={"Explore our vibrant EduBrix gallery, showcasing moments of innovation, learning, and collaboration!"} testimonials={[...fall]}/>

        <Videos subhead={"Heartfelt Testimonials: A Parent's Perspective"} title={"Heartfelt stories from parents celebrating their journey with us."} testimonials={Array.isArray(parent) ?[...parent] :[]}/>
    </>
  )
}

export default Gallery